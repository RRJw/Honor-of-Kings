<template>
    <swiper :options="swiperOption" ref="mySwiper" @slide-change=" () => active = swiper.realIndex ">
        <swiper-slide v-for="(newsList,i) in newslist" :key="i">
          <router-link tag="div" :to="`/article/${item._id}`" class="pt-3 pb-1 d-flex" v-for="(item,index) in newsList.newsList" :key="index">
            <span>[{{item.categoryName}}]</span>
            <span class="ml-1">|</span>
            <span class="flex-1 text-ellipsis">{{item.title}}</span>
            <span class="text-grey fs-sm">{{ item.createAt | date }}</span>
          </router-link>
        </swiper-slide>
      </swiper>
</template>

<script>
import dayjs from 'dayjs' //日期格式化插件

export default {
  name:'newsCard',
  created() {
    this.fetchNewsCats()
  },
  data() {
    return {
      active:0,
      newslist:[],
      swiperOption: {
        watchSlidesProgress : true,
        pagination: {
          el: '.pagination-card',
        }
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted() {
    this.$emit('swiper',this.swiper)
  },
  methods: {
    async fetchNewsCats(){
      const res =await this.$http.get('news/list')
      this.newslist = Object.assign({}, this.newslist, res.data)
    }
  },
  filters: {
    date(val) {
      return dayjs(val).format('MM/DD')
    }
  },
  watch: {
    active: function() {
      this.$emit('active',this.active)
    }
  },
}
</script>

<style>

</style>