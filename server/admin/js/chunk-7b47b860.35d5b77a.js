(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7b47b860"],{"3db4":function(e,t,s){},"9de8":function(e,t,s){"use strict";var a=s("3db4"),l=s.n(a);l.a},f367:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h1",[e._v(e._s(e.id?"编辑":"新建")+"英雄")]),s("el-form",{attrs:{"label-width":"100px"},nativeOn:{submit:function(t){return t.preventDefault(),e.save(t)}}},[s("el-tabs",{attrs:{type:"border-card",value:"skills"}},[s("el-tab-pane",{attrs:{label:"基础信息",name:"base"}},[s("el-form-item",{attrs:{label:"名称"}},[s("el-input",{model:{value:e.model.name,callback:function(t){e.$set(e.model,"name",t)},expression:"model.name"}})],1),s("el-form-item",{attrs:{label:"头像"}},[s("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.$http.defaults.baseURL+"/upload","show-file-list":!1,headers:e.getAuthorization(),"on-success":e.afterUpload}},[e.model.avatar?s("img",{staticClass:"avatar",attrs:{src:e.model.avatar}}):s("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),s("el-form-item",{attrs:{label:"称号"}},[s("el-input",{model:{value:e.model.title,callback:function(t){e.$set(e.model,"title",t)},expression:"model.title"}})],1),s("el-form-item",{attrs:{label:"类型"}},[s("el-select",{attrs:{multiple:""},model:{value:e.model.categories,callback:function(t){e.$set(e.model,"categories",t)},expression:"model.categories"}},e._l(e.categories,(function(e){return s("el-option",{key:e._id,attrs:{label:e.name,value:e._id}})})),1)],1),s("el-form-item",{attrs:{label:"难度"}},[s("el-rate",{staticStyle:{"margin-top":"0.6rem"},attrs:{max:9,"show-score":""},model:{value:e.model.scores.difficult,callback:function(t){e.$set(e.model.scores,"difficult",t)},expression:"model.scores.difficult"}})],1),s("el-form-item",{attrs:{label:"技能"}},[s("el-rate",{staticStyle:{"margin-top":"0.6rem"},attrs:{max:9,"show-score":""},model:{value:e.model.scores.skills,callback:function(t){e.$set(e.model.scores,"skills",t)},expression:"model.scores.skills"}})],1),s("el-form-item",{attrs:{label:"攻击"}},[s("el-rate",{staticStyle:{"margin-top":"0.6rem"},attrs:{max:9,"show-score":""},model:{value:e.model.scores.attack,callback:function(t){e.$set(e.model.scores,"attack",t)},expression:"model.scores.attack"}})],1),s("el-form-item",{attrs:{label:"生存"}},[s("el-rate",{staticStyle:{"margin-top":"0.6rem"},attrs:{max:9,"show-score":""},model:{value:e.model.scores.survive,callback:function(t){e.$set(e.model.scores,"survive",t)},expression:"model.scores.survive"}})],1),s("el-form-item",{attrs:{label:"顺风出装"}},[s("el-select",{attrs:{multiple:""},model:{value:e.model.items1,callback:function(t){e.$set(e.model,"items1",t)},expression:"model.items1"}},e._l(e.items,(function(e){return s("el-option",{key:e._id,attrs:{label:e.name,value:e._id}})})),1)],1),s("el-form-item",{attrs:{label:"逆风出装"}},[s("el-select",{attrs:{multiple:""},model:{value:e.model.items2,callback:function(t){e.$set(e.model,"items2",t)},expression:"model.items2"}},e._l(e.items,(function(e){return s("el-option",{key:e._id,attrs:{label:e.name,value:e._id}})})),1)],1),s("el-form-item",{attrs:{label:"使用技巧"}},[s("el-input",{attrs:{type:"textarea"},model:{value:e.model.usageTips,callback:function(t){e.$set(e.model,"usageTips",t)},expression:"model.usageTips"}})],1),s("el-form-item",{attrs:{label:"对抗技巧"}},[s("el-input",{attrs:{type:"textarea"},model:{value:e.model.battleTips,callback:function(t){e.$set(e.model,"battleTips",t)},expression:"model.battleTips"}})],1),s("el-form-item",{attrs:{label:"团战思路"}},[s("el-input",{attrs:{type:"textarea"},model:{value:e.model.usageTips,callback:function(t){e.$set(e.model,"usageTips",t)},expression:"model.usageTips"}})],1)],1),s("el-tab-pane",{attrs:{label:"技能信息",name:"skills"}},[s("el-button",{attrs:{type:"text"},on:{click:function(t){return e.model.skills.push({})}}},[s("i",{staticClass:"el-icon-plus"}),e._v("添加技能\n      ")]),s("el-row",{staticStyle:{"flex-wrap":"wrap"},attrs:{type:"flex"}},e._l(e.model.skills,(function(t,a){return s("el-col",{key:a,attrs:{md:12}},[s("el-form-item",{attrs:{label:"名称"}},[s("el-input",{model:{value:t.name,callback:function(s){e.$set(t,"name",s)},expression:"item.name"}})],1),s("el-form-item",{attrs:{label:"图标"}},[s("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.$http.defaults.baseURL+"/upload","show-file-list":!1,headers:e.getAuthorization(),"on-success":function(s){return e.$set(t,"icon",s.url)}}},[t.icon?s("img",{staticClass:"avatar",attrs:{src:t.icon}}):s("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),s("el-form-item",{attrs:{label:"描述"}},[s("el-input",{attrs:{type:"textarea"},model:{value:t.description,callback:function(s){e.$set(t,"description",s)},expression:"item.description"}})],1),s("el-form-item",{attrs:{label:"小提示"}},[s("el-input",{attrs:{type:"textarea"},model:{value:t.tips,callback:function(s){e.$set(t,"tips",s)},expression:"item.tips"}})],1),s("el-form-item",[s("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(t){return e.model.skills.splice(a,1)}}},[e._v("删除")])],1)],1)})),1)],1)],1),s("el-form-item",{staticStyle:{"margin-top":"2rem"}},[s("el-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("保存")])],1)],1)],1)},l=[],r=(s("96cf"),s("3b8d")),i={name:"HeroEdit",props:{id:{}},data:function(){return{items:[],categories:[],model:{scores:{difficult:0,skills:0,attack:0,survive:0},skills:[]}}},created:function(){this.id&&this.fetch(),this.fetchCategory(),this.fetchItems()},methods:{save:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.id){e.next=6;break}return e.next=3,this.$http.put("rest/heros/".concat(this.id),this.model);case 3:e.sent,e.next=9;break;case 6:return e.next=8,this.$http.post("rest/heros",this.model);case 8:e.sent;case 9:this.$router.push("/heros/list"),this.$message({type:"success",message:"保存成功!"});case 11:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),fetch:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.get("rest/heros/".concat(this.id));case 2:t=e.sent,this.model=Object.assign({},this.model,t.data);case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),afterUpload:function(e){this.$set(this.model,"avatar",e.url)},fetchCategory:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.get("rest/categories");case 2:t=e.sent,this.categories=t.data;case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),fetchItems:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.get("rest/items");case 2:t=e.sent,this.items=t.data;case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}},o=i,n=(s("9de8"),s("2877")),c=Object(n["a"])(o,a,l,!1,null,null,null);t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-7b47b860.35d5b77a.js.map