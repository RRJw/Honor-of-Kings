<template>
  <div>
    <h1>{{id ? '编辑':'新建'}}广告位</h1>
    <el-form label-width="100px" @submit.native.prevent="save">
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="广告管理">
         <el-button type="text" @click="model.items.push({})">
          <i class="el-icon-plus"></i>添加广告
        </el-button>
        <el-row type="flex" style="flex-wrap: wrap">
          <el-col :md="12" v-for="(item,index) in model.items" :key="index">
            <el-form-item label="跳转链接">
              <el-input v-model="item.url"></el-input>
            </el-form-item>
            <el-form-item label="图片" style="margin-top:1.5rem">
              <!-- 由于element ui中的上传方法ajax请求是自带的无法在请求中添加token需要在这个方法中添加 -->
              <el-upload
                class="avatar-uploader"
                :action="$http.defaults.baseURL + '/upload'"
                :show-file-list="false"
                :headers="getAuthorization()"
                :on-success=" res => $set(item,'image',res.url)">
                <img v-if="item.image" :src="item.image" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
          </el-form-item>
            <el-form-item>
              <el-button type="danger" size="small" @click="model.items.splice(index,1)">删除</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name:'AdEdit',
  props:{
    id:{}
  },
  data() {
    return {
      model:{
        items:[]
      },
    }
  },
  created() {
    this.id && this.fetch()
  },
  methods: {
    async save(){
      let res 
      if(this.id){
        res =await this.$http.put(`rest/ads/${this.id}`,this.model)   
      }else{
        res =await this.$http.post('rest/ads',this.model)
      }
      this.$router.push('/ads/list')
      this.$message({
        type:'success',
        message:'保存成功!'
      })
    },
    async fetch(){
      const res = await this.$http.get(`rest/ads/${this.id}`)
      this.model = Object.assign({},this.model,res.data)
      //当重服务器获取数据的时候未获取到需要的数据时，会覆盖原有数据中存在的数据导致undefined
    },
  },
}
</script>

<style scoped>
   .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>