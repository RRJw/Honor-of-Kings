module.exports = app =>{
  const express = require('express')
  const jwt = require('jsonwebtoken')
  const assert = require('http-assert')
  const AdminUser = require('../../models/AdminUser')
  const router = express.Router({
    mergeParams:true
    //合并路由参数，使根地址与router的地址合并，使params能够访问到路由中的参数
  })
  //子路由，当需要在接口上写入公共部分时使用
  //创建分类信息
  router.post('/', async(req,res) =>{
    const model = await req.Model.create(req.body)
    res.send(model)
  })
  //更新分类信息
  router.put('/:id', async(req,res) =>{
    const model = await req.Model.findByIdAndUpdate(req.params.id,req.body)
    res.send(model)
  })
  //获取分类列表
  router.get('/', async(req,res) =>{
    //从数据库中读取十条数据
    const queryOptions = {}
    if(req.Model.modelName === 'Category'){
      queryOptions.populate = 'parents'
    }else if(req.Model.modelName === 'Article'){
      queryOptions.populate = 'articleCate'
    }
    const items = await req.Model.find().setOptions(queryOptions).limit(100)
    //数据中存在关联字段的话可以通过populate方法将这个关联的整个信息取出来
    res.send(items)
  })
  //根据id获取需要编辑的分类信息
  router.get('/:id', async(req,res) =>{
    const model = await req.Model.findById(req.params.id)
    res.send(model)
  })
  //
  router.delete('/:id', async(req,res) =>{
    await req.Model.findByIdAndDelete(req.params.id)
    res.send({
      success:true
    })
  })
  // //登录验证中间件
  // const authMiddleware = async(req,res,next) =>{
  //   //获取请求头中的信息，后端取请求头信息全部小写,.pop提取数组最后一个元素
  //   const token = String(req.headers.authorization || '').split(' ').pop()
  //   assert(token,401,'未经授权,请先登录!')
  //   const { id } = jwt.verify(token,app.get('secret'))
  //   assert(id,401,'无效的用户名,请先登录!')
  //   req.user = await AdminUser.findById(id)
  //   assert(req.user,401,'用户不存在，请先登录!')
  //   await next()
  // }
  // //resoure
  // const authResoure = async(req, res, next) => {
  //   const modelName = require('inflection').classify(req.params.resource)
  //   req.Model = require(`../../models/${modelName}`)
  //   next()
  // }
  //使用中间价的方式使用登录验证模块和返回模型
  const authMiddleware = require('../../middleware/auth')
  const authResoure = require('../../middleware/resoure')
  app.use('/admin/api/rest/:resource',authMiddleware(),authResoure(),router)
  //图标上传接口
  const multer = require('multer')
  const upload = multer({ dest: __dirname +'/../../uploads' }) //上传到的本地的文件夹
  app.post('/admin/api/upload',authMiddleware(), upload.single('file'), async( req, res) => {
    const file = req.file
    file.url = `http://localhost:3000/upload/${file.filename}`
    res.send(file)
  })
  //登录接口
  app.post('/admin/api/login', async( req, res ) => {
    const { username, password } =req.body
    //通过用户名找用户信息
    const user = await AdminUser.findOne({ username }).select('+password')
    //由于对password字段设置了不可查询，需要查询用户线 时对密码字段进行查询
    assert(user,422,'用户名不存在')
    // if(!user){
    //   return res.status(422).send({//422状态码统一为客户端提交信息错误的验证码
    //     message:'用户名不存在'
    //   })
    // }
    //校验密码
    const isVaild = require('bcryptjs').compareSync(password,user.password)
    assert(isVaild,422,'密码错误')
    // if(!isVaild) {
    //   return res.status(422).send({
    //     message:'密码错误!'
    //   })
    // }
    //返回token
    const token = jwt.sign({ id: user._id},app.get('secret'))
    res.send({token})
  })

  //错误抛出捕获自定义处理
  app.use( async(err, req, res ,next) => {
    res.status(err.statusCode || 500).send({
      message:err.message
    })
  })
}