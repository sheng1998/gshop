<template>
  <div class="app">
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
import { async } from 'q'

export default {
  mounted () {
    new Promise((resolve, reject) => {
      this.$store.dispatch('getlongitudeAndLatitude')
      resolve()
    }).then((res) => {
      console.log(res)
      this.$store.dispatch('getAddress')
    })
  },

  components: {
    FooterGuide
  }
}
</script>

<style lang="less" scoped>
.app{
  width: 100%;
  height: 100%;
  background: #f5f5f5;
  position: relative;
}
</style>
