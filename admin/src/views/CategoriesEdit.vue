<template>
  <div>
    <h1>{{id ? '编辑':'新建'}}分类</h1>
    <el-form label-width="100px" @submit.native.prevent="save">
      <el-form-item label="上级分类">
        <el-select v-model="model.parents" placeholder="请选择上级分类">
          <el-option v-for="item in Parents" :key="item._id" :label="item.name" :value="item._id"></el-option><!-- 分类数据下的子数据通过父级分类的ID与子类的数据相关联形成链式结构的数据-->
        </el-select>
      </el-form-item>
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name:'CategoriesEdit',
  props:{
    id:{}
  },
  data() {
    return {
      model:{},
      Parents:[]
    }
  },
  created() {
    this.id && this.fetch()
    this.fetchParents()
  },
  methods: {
    async save(){
      let res 
      if(this.id){
        res =await this.$http.put(`rest/categories/${this.id}`,this.model)   
      }else{
        res =await this.$http.post('rest/categories',this.model)
      }
      this.$router.push('/categories/list')
      this.$message({
        type:'success',
        message:'保存成功!'
      })
    },
    async fetch(){
      const res = await this.$http.get(`rest/categories/${this.id}`)
      this.model = res.data
    },
    async fetchParents(){
      const res = await this.$http.get(`rest/categories`)
      this.Parents = res.data
    }
  },
}
</script>

<style scoped>

</style>