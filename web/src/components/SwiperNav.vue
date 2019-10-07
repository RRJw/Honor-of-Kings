<template>
  <div>
    <div class="nav d-flex jc-between pt-3">
      <div class="nav-item" :class="{ active : curIndex === index }" v-for="(item,index) in categories" @click="saveIndex(index)" :key="index">
        <span>{{ item }}</span>
      </div>
    </div>
    <div class="swiper-main py-2">
        <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name:'SwiperNav',
  props:{
    categories:{ 
      type:Array,
      default(){
        return []
      }
    },
     isswiper:{ 
      type:Object,
      default(){
        return {}
      }  
    },
     isactive:{ 
      type:Number,
    }
  },
  data() {
    return {
      curIndex:0,
    }
  },
  methods: {
    saveIndex(index){
      this.curIndex = index
      this.isswiper.slideTo(index)
    },
  },
  watch: {
    isactive: function() {
      return this.curIndex = this.isactive
    }
  },
}
</script>

<style lang="scss" scoped>
.nav {
  .nav-item {
    border-bottom:3px solid transparent;
    padding-bottom: 2px;
    &.active {
      color: #db9e3f;
      border-bottom-color: #db9e3f;
    }
  }
}
.swiper-main {
  // display: none;
}
</style>