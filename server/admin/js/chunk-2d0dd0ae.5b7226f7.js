(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0dd0ae"],{8066:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v(e._s(e.id?"编辑":"新建")+"分类")]),n("el-form",{attrs:{"label-width":"100px"},nativeOn:{submit:function(t){return t.preventDefault(),e.save(t)}}},[n("el-form-item",{attrs:{label:"上级分类"}},[n("el-select",{attrs:{placeholder:"请选择上级分类"},model:{value:e.model.parents,callback:function(t){e.$set(e.model,"parents",t)},expression:"model.parents"}},e._l(e.Parents,(function(e){return n("el-option",{key:e._id,attrs:{label:e.name,value:e._id}})})),1)],1),n("el-form-item",{attrs:{label:"名称"}},[n("el-input",{model:{value:e.model.name,callback:function(t){e.$set(e.model,"name",t)},expression:"model.name"}})],1),n("el-form-item",[n("el-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("保存")])],1)],1)],1)},s=[],a=(n("96cf"),n("3b8d")),i={name:"CategoriesEdit",props:{id:{}},data:function(){return{model:{},Parents:[]}},created:function(){this.id&&this.fetch(),this.fetchParents()},methods:{save:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.id){e.next=6;break}return e.next=3,this.$http.put("rest/categories/".concat(this.id),this.model);case 3:e.sent,e.next=9;break;case 6:return e.next=8,this.$http.post("rest/categories",this.model);case 8:e.sent;case 9:this.$router.push("/categories/list"),this.$message({type:"success",message:"保存成功!"});case 11:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),fetch:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.get("rest/categories/".concat(this.id));case 2:t=e.sent,this.model=t.data;case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),fetchParents:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$http.get("rest/categories");case 2:t=e.sent,this.Parents=t.data;case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}},c=i,o=n("2877"),u=Object(o["a"])(c,r,s,!1,null,"09cd64c0",null);t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d0dd0ae.5b7226f7.js.map