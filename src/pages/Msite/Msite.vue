<template>
  <div class="msite">
    <Header>
      <router-link slot="left" to='/search'>
        <i class="iconfont icon-top-search"></i>
      </router-link>
      <span slot="center">{{ address.city + address.name }}</span>
      <router-link :to="userInfo._id ? '/userinfo' : '/login'" slot="right">
        <span v-if="!userInfo._id">
          登录&nbsp;|&nbsp;注册
        </span>
        <span v-else>
          <i class="iconfont icon-person"></i>
        </span>
      </router-link>
    </Header>
    <MisteNav class="nav"></MisteNav>
    <div class="shoplist">
      <ShopList></ShopList>
    </div>
  </div>
</template>

<script>
import Header from '../../components/Header/Header.vue'
import MisteNav from '../../components/MisteNav/MisteNav.vue'
import ShopList from '../../components/ShopList/ShopList.vue'
import {mapActions, mapState} from 'vuex'

export default {
  computed: {
    ...mapState(['address', 'userInfo'])
  },

  mounted () {
    this.getAddress()
  },

  methods: {
    ...mapActions(['getAddress'])
  },

  components: {
    Header,
    MisteNav,
    ShopList
  }
}
</script>

<style lang="less" scoped>
.msite {
  .shoplist {
    margin-top: 10px;
    padding: 10px;
    background-color: #fff;
  }
}
</style>
