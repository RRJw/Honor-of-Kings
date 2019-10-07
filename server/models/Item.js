const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name:
  { 
    type:String,
    required:true 
  },
  icon: { type:String }
})

module.exports = mongoose.model('Item',schema)