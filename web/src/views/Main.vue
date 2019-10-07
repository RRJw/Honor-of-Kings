<template>
  <div>
    <div class="topBar bg-black py-2 px-3 d-flex ai-center">
      <img src="../assets/logo.png" height="30px" alt="">
        <div class="topBar-center flex-1 ml-3">
          <div class="text-white">王者荣耀</div>
          <div class="text-grey-1 fs-xs mt-1">团队成就更多</div>
        </div>
        <button type="button" class="bg-primary btn">立即下载</button>
    </div>
    <div class="bg-primary py-2">
      <div class="nav d-flex jc-around text-white py-1 pt-2">
        <div class="nav-item active">
          <router-link tag="div" class="nav-link" to="/">首页</router-link>
        </div>
        <div class="nav-item">
          <router-link tag="div" class="nav-link" to="/">攻略中心</router-link>
        </div>
        <div class="nav-item">
          <router-link tag="div" class="nav-link" to="/">赛事中心</router-link>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name:'Main'
}
</script>

<style scoped>

</style>