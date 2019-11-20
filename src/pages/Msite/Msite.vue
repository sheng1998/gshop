<template>
  <div class="msite">
    <Header>
      <span class="left" slot="left">
        <i class="iconfont icon-top-search"></i>
      </span>
      <span class="center ellipsis" slot="center">广东省湛江市麻章区海大路1号广东海洋大学海思B220</span>
      <span class="right" slot="right">
        <a href="javascript:;">登录</a>&nbsp;|&nbsp;
        <a href="javascript:;">注册</a>
      </span>
    </Header>
    <MisteNav class="nav"></MisteNav>
  </div>
</template>

<script>
import Header from '../../components/Header/Header.vue'
import MisteNav from '../../components/MisteNav/MisteNav.vue'

export default {
  data () {
    return {

    }
  },

  components: {
    Header,
    MisteNav
  }
}
</script>

<style lang="less" scoped>
</style>
