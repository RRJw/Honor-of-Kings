const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name:
  { 
    type:String,
    required:true 
  },
  avatar: { type:String },
  title: { type:String }, //英雄称谓
  categories:[{ type:mongoose.SchemaTypes.ObjectId, ref: 'Category' }],
  scores: { //英雄操作评分
    difficult: { type:Number },
    skills: { type:Number },
    attack: { type:Number },
    survive: { type:Number }
  },
  skills:[{//英雄技能,技能多使用数组
    icon:{ type:String },
    name:{ type:String },
    description:{ type:String },
    tips:{ type:String }
  }],
  items1:[{ type:mongoose.SchemaTypes.ObjectId, ref: 'Item'}], //英雄顺风出装推荐
  items2:[{ type:mongoose.SchemaTypes.ObjectId, ref: 'Item'}],
  usageTips:{ type:String }, //使用技巧 
  battleTips:{ type:String },//对抗技巧
  teamTips: { type:String },//团战思路
  partners:[{ //英雄关系
    hero:{type:mongoose.SchemaTypes.ObjectId,ref:'Hero'},
    description:{ type:String }
  }]
})

module.exports = mongoose.model('Hero',schema,'heroes')