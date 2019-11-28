<template>
  <div class="app">
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
import {mapActions} from 'vuex'

export default {
  mounted () {
    this.getUserInfo()
  },

  methods: {
    ...mapActions(['getUserInfo'])
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
  background-color: #f5f5f5;
}
</style>
