const jwt = require('jsonwebtoken')
const assert = require('http-assert')
const AdminUser = require('../models/AdminUser')

module.exports = option => {
  return async(req,res,next) =>{
    //获取请求头中的信息，后端取请求头信息全部小写,.pop提取数组最后一个元素
    const token = String(req.headers.authorization || '').split(' ').pop()
    assert(token,401,'未经授权,请先登录!')
    const { id } = jwt.verify(token,req.app.get('secret'))
    assert(id,401,'无效的用户名,请先登录!')
    req.user = await AdminUser.findById(id)
    assert(req.user,401,'用户不存在，请先登录!')
    await next()
  }
}
// 主要通过在登录请求成功后，将自定义的token返回前端保存在loclStorage中，
// 并在axios请求配置拦截器中将localStorage中token存入请求头中，
// 在后续进行接口请求时，利用中间件的方式对请求头中是否存在token和token是否正确进行验证。