(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f7ffb06a"],{7773:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("物品列表")]),n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.items}},[n("el-table-column",{attrs:{prop:"_id",label:"ID",width:"280"}}),n("el-table-column",{attrs:{prop:"name",label:"物品名称"}}),n("el-table-column",{attrs:{prop:"icon",label:"图标"},scopedSlots:t._u([{key:"default",fn:function(t){return[n("img",{staticStyle:{height:"3rem"},attrs:{src:t.row.icon}})]}}])}),n("el-table-column",{attrs:{fixed:"right",label:"操作",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){return t.$router.push("/items/edit/"+e.row._id)}}},[t._v("编辑")]),n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){return t.remove(e.row)}}},[t._v("删除")])]}}])})],1)],1)},a=[],c=(n("7f7f"),n("96cf"),n("3b8d")),i={name:"ItemsList",data:function(){return{items:[]}},created:function(){this.fetch()},methods:{fetch:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$http.get("rest/items");case 2:e=t.sent,this.items=e.data;case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),remove:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(e){var n=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.$confirm('此操作将删除"'.concat(e.name,'", 是否继续?'),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,n.$http.delete("rest/items/".concat(e._id));case 2:t.sent,n.fetch(),n.$message({type:"success",message:"删除成功!"});case 5:case"end":return t.stop()}}),t)}))));case 1:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()}},s=i,u=n("2877"),o=Object(u["a"])(s,r,a,!1,null,"0df23d89",null);e["default"]=o.exports},"7f7f":function(t,e,n){var r=n("86cc").f,a=Function.prototype,c=/^\s*function ([^ (]*)/,i="name";i in a||n("9e1e")&&r(a,i,{configurable:!0,get:function(){try{return(""+this).match(c)[1]}catch(t){return""}}})}}]);
//# sourceMappingURL=chunk-f7ffb06a.c5c7b249.js.map