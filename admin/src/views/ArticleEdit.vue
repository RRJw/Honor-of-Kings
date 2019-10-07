<template>
  <div>
    <h1>{{id ? '编辑':'新建'}}文章</h1>
    <el-form label-width="100px" @submit.native.prevent="save">
      <el-form-item label="所属文章">
        <el-select v-model="model.articleCate" placeholder="请选择所属文章" multiple>
          <el-option v-for="item in Categories" :key="item._id" :label="item.name" :value="item._id"></el-option><!-- 分类数据下的子数据通过父级分类的ID与子类的数据相关联形成链式结构的数据-->
        </el-select>
      </el-form-item>
      <el-form-item label="标题">
        <el-input v-model="model.title"></el-input>
      </el-form-item>
      <el-form-item label="内容">
        <vue-editor useCustomImageHandler @image-added="handleImageAdded"  v-model="model.body"></vue-editor>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor"

export default {
  name:'ArticleEdit',
  props:{
    id:{}
  },
  components:{
    VueEditor
  },
  data() {
    return {
      model:{},
      Categories:[]
    }
  },
  created() {
    this.id && this.fetch()
    this.fetchCategory()
  },
  methods: {
    async handleImageAdded(file, Editor, cursorLocation, resetUploader) {
 
      const formData = new FormData();
      formData.append("file", file);

      const res = await this.$http.post('upload',formData)
      Editor.insertEmbed(cursorLocation, "image", res.data.url);
      resetUploader();
    },
    async save(){
      let res 
      if(this.id){
        res =await this.$http.put(`rest/articles/${this.id}`,this.model)   
      }else{
        res =await this.$http.post('rest/articles',this.model)
      }
      this.$router.push('/articles/list')
      this.$message({
        type:'success',
        message:'保存成功!'
      })
    },
    async fetch(){
      const res = await this.$http.get(`rest/articles/${this.id}`)
      this.model = res.data
    },
    async fetchCategory(){
      const res = await this.$http.get(`rest/categories`)
      this.Categories = res.data
    }
  },
}
</script>

<style scoped>

</style>