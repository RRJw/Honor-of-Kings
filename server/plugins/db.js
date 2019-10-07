module.exports = app =>{
  const mongoose = require('mongoose')
  mongoose.connect('mongodb://127.0.0.1:27017/honor-of-kings',{
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useFindAndModify:false
  })
 const model =  require('require-all')(__dirname + '/../models')
  //解决当数据库中模型引用其他模型如果没有使用的话可能会发生报错问题
}