<template>
  <div>
    <div class="nav d-flex jc-between pt-3">
      <div class="nav-item" :class="{ active : curIndex === index }" v-for="(category,index) in categories" @click="$refs.mySwiper.swiper.slideTo(index)" :key="index">
        <span>{{ category.name }}</span>
      </div>
    </div>
    <div class="swiper-main py-2">
      <swiper :options="swiperOption" ref="mySwiper" @slide-change=" () => curIndex = $refs.mySwiper.swiper.realIndex ">
        <swiper-slide v-for="(category,i) in categories" :key="i">
          <slot name="items" :category="category"></slot>
        </swiper-slide>
      </swiper>
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
    }
  },
  data() {
    return {
      curIndex:0,
      swiperOption: {
        autoHeight:true,
        watchSlidesProgress : true,
        pagination: {
          el: '.pagination-card',
        }
      }
    }
  },
  methods: {
  }
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