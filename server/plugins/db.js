module.exports = app =>{
  const mongoose = require('mongoose')
  mongoose.connect('mongodb://127.0.0.1:27017/honor-of-kings',{
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useFindAndModify:false
  })
}