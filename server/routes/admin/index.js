module.exports = app =>{
  const express = require('express')
  const Category = require('../../models/Category')
  const router = express.Router()
  //子路由，当需要在接口上写入公共部分时使用
  //创建分类信息
  router.post('/categories', async(req,res) =>{
    const model = await Category.create(req.body)
    res.send(model)
  })
  //更新分类信息
  router.put('/categories/:id', async(req,res) =>{
    const model = await Category.findByIdAndUpdate(req.params.id,req.body)
    res.send(model)
  })
  //获取分类列表
  router.get('/categories', async(req,res) =>{
    //从数据库中读取十条数据
    const items = await Category.find().limit(10)
    res.send(items)
  })
  //根据id获取需要编辑的分类信息
  router.get('/categories/:id', async(req,res) =>{
    const model = await Category.findById(req.params.id)
    res.send(model)
  })
  //
  router.delete('/categories/:id', async(req,res) =>{
    await Category.findByIdAndDelete(req.params.id)
    res.send({
      success:true
    })
  })
  app.use('/admin/api',router)
}