<template>
  <div class="login-container">
    <el-card class="login-card" header="请先登录">
      <el-form :model="model" @submit.native.prevent="login" :rules="rules" status-icon hide-required-asterisk>
        <el-form-item label="账户" prop="username">
        <el-input v-model="model.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="model.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">登录</el-button>
      </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name:'Login',
  data() {
    return {
      model:{
      },
      rules:{
        username:[
          { required: true, message: '请输入用户名!', trigger: 'blur' },
        ],
        password:[
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    async login(){
      const res = await this.$http.post('login',this.model)
      localStorage.token = res.data.token
      this.$router.push('/')
      this.$message({
        type:'success',
        message:'登录成功!'
      })
    }
  },
}
</script>

<style scoped>
.login-card{
  width: 30rem;
  margin: 18rem auto;
}
</style>