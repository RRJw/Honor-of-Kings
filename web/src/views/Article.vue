<template>
  <div v-if="model">
    <div class="nav-bar d-flex pt-3 pb-2 px-2 fs-xs text-grey">
      <span></span>
      <span class="flex-1" @click="$router.back()">{{ model.title }}</span>
      <span>2019</span>
    </div>
    <div v-html="model.body" class="p-3">
    </div>
  </div>
</template>

<script>
export default {
  name:'Article',
  props:{
    id:{ required :true }
  },
  data() {
    return {
      model:null
    }
  },
  created() {
     this.fetch()
  },
  methods: {
    async fetch() {
      const res = await this.$http.get(`article/${this.id}`)
      this.model = res.data
    }
  },
}
</script>

<style scoped>
.nav-bar {
  border-bottom: 1px solid rgba(206, 202, 202, 0.8);
}
</style>