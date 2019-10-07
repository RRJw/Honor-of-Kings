const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  title:{ type:String,
  required:true },
  body:{ type:String },
  articleCate:[{ type:mongoose.SchemaTypes.ObjectId, ref: 'Category' }]
},{
  timestamps: true //时间戳，带创建时间
})

module.exports = mongoose.model('Article',schema)