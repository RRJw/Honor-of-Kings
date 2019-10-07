<template>
  <div>
    <h1>广告列表</h1>
   <el-table
      :data="items"
      style="width: 100%">
      <el-table-column
        prop="_id"
        label="ID"
        width="280">
      </el-table-column>
      <el-table-column
        prop="name"
        label="名称"
        >
      </el-table-column>
        <el-table-column
      fixed="right"
      label="操作"
      width="200">
      <template slot-scope="scope">
        <el-button type="text" size="small" @click="$router.push(`/ads/edit/${scope.row._id}`)">编辑</el-button>
        <el-button @click="remove(scope.row)" type="text" size="small">删除</el-button>
      </template>
    </el-table-column>
    </el-table>
  </div> 
</template>

<script>
export default {
  name:'CategoryList',
  data() {
    return {
      items:[]
    }
  },
  created() {
    this.fetch()
  },
  methods: {
    async fetch(){
      const res =await this.$http.get('rest/ads')
      this.items = res.data
    },
    async remove(row){
      this.$confirm(`此操作将删除"${row.name}", 是否继续?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then( async () => {
          const res =await this.$http.delete(`rest/ads/${row._id}`)
          this.fetch()
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        })
    }
  },
}
</script>

<style scoped>

</style>