<template>
  <div class="card bg-white mt-3 p-3">
    <div class="header-c d-flex">
      <span class="iconfont fs-xl" :class="`icon-${headerIcon}`"></span>
      <span class="fs-xl flex-1 ml-2 mb-4">{{ headerC }}</span>
      <span class="iconfont icon-menu"></span>
    </div>
    <div class="body-c">
      <slot></slot>
    </div> 
  </div>
</template>

<script>
export default {
  name:'Card',
  data() {
    return {
    }
  },
  props:{
    headerC:{ type:String },
    headerIcon:{ type:String }
  }
}
</script>

<style scoped>
.header-c {
  border-bottom: 1px solid #d4d9de;
}
</style>