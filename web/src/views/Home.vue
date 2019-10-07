<template>
  <div>
    <swiper :options="swiperOption">
    <swiper-slide>
      <img class="w-100" src="../assets/images/swiper/swiper.jpeg" alt="">
    </swiper-slide>
    <swiper-slide>
      <img class="w-100" src="../assets/images/swiper/swiper.jpeg" alt="">
    </swiper-slide>
    <swiper-slide>
      <img class="w-100" src="../assets/images/swiper/swiper.jpeg" alt="">
    </swiper-slide>
    <swiper-slide>
      <img class="w-100" src="../assets/images/swiper/swiper.jpeg" alt="">
    </swiper-slide>
    <div class="swiper-pagination pagination-home" slot="pagination"></div>
  </swiper>
  <div class="nav-icons bg-white mt-3 pt-4 text-dark">
    <div class="d-flex flex-wrap">
      <div class="nav-items mb-4 text-center" :class="{ hidden : Hidden }" v-for="(item,index) in 10" :key="index">
        <i class="sprite sprite-news"></i>
        <div class="my-1">爆料站</div>
      </div>
    </div>
    <div class="border-light text-center bg-light py-2">
      <div @click="spriteHide">
        <span class="sprite sprite-arr mr-1"></span>
        <span>收起</span>
      </div>
    </div>
  </div>
  <card header-c="新闻资讯" header-icon="zixun-">
    <swiper-nav :isswiper="swiper" :isactive="active" :categories="['热门','新闻','公告','活动','赛事']">
      <news-card @swiper="saveswiper" @active="saveactive"></news-card>
    </swiper-nav>
  </card>
  <card header-c="英雄列表" header-icon="superhero-">
    <swiper-nav-hero :categories="heroList">
      <template #items="{category}">
         <div class="d-flex flex-wrap" style="margin:0 -.6rem">
          <div class="p-2 text-center" style="width:20%" v-for="(hero,i) in category.heroList" :key="i">
            <img class="w-100" :src="hero.avatar" alt="">
            <div>{{ hero.name }}</div>
          </div>
        </div>
      </template>
    </swiper-nav-hero>
  </card>
  <card header-c="精彩视频" header-icon="shipin"></card>
  <card header-c="图文攻略" header-icon="tushu"></card>
  </div>
</template>

<script>
import SwiperNav from '../components/SwiperNav'
import SwiperNavHero from '../components/SwiperNavHero'
import newsCard from '../components/newsCard'

export default {
  name:'home',
  components:{
    SwiperNav,
    newsCard,
    SwiperNavHero
  },
  data() {
    return {
      swiperOption: {
          pagination: {
            el: '.pagination-home'
          }
      },
      Hidden:false,
      swiper:{},
      active:0,
      heroList:[]
    }
  },
  methods: {
    spriteHide(){
      return this.Hidden = !this.Hidden
    },
    saveswiper(swiper){
      this.swiper = swiper
    },
    saveactive(active){
      this.active = active
    },
    async fetchHeroList(){
      const res = await this.$http.get('heroes/list')
      this.heroList = res.data
    }
  },
  created() {
    this.fetchHeroList()
  },                             
}
</script>

<style lang="scss">
.pagination-home {
  .swiper-pagination-bullet {
    opacity: 1;
    background: rgb(255, 255, 255);
    &.swiper-pagination-bullet-active {
      background: #4b67af;
    }
  }
}
.nav-icons {
  border-top: 1px solid #d4d9de;
  border-bottom: 1px solid #d4d9de;
  .nav-items {
    width: 25%;
  }
}
.nav-items {
  border-left:1px solid #d4d9de;
  &:nth-child(4n+1){
    border: none;
  }
}
.hidden {
  &:nth-child(n+5) {
    display: none;
  }
}
</style>