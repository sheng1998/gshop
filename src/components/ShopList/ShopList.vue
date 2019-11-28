<template>
  <div class="shop-list">
    <div class="list-top">
      <span class="option-icon">
        <i class="iconfont icon-option"></i>
      </span>
      <span class="near-business">附近商家</span>
    </div>
    <div v-if="shops.length">
      <router-link to="/shop" v-for="(shop, index) in shops" :key="index">
        <ShopItem :shop='shop'></ShopItem>
      </router-link>
    </div>
    <div v-else>
      <ul>
        <li v-for="(item, index) in 10" :key="index">
          <img style="width: 100%;" src="./images/shop_back.svg" alt="">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import ShopItem from './ShopItem.vue'
import {mapActions, mapState} from 'vuex'

export default {
  mounted () {
    this.getShops()
  },

  computed: {
    ...mapState(['shops'])
  },

  methods: {
    ...mapActions(['getShops'])
  },

  components: {
    ShopItem
  }
}
</script>

<style lang="less" scoped>
.shop-list {
  padding-bottom: 50px;
  .list-top {
    color: #999;
    font-size: 14px;
    padding-bottom: 10px;
    .option-icon {
      i {
        font-size: 14px;
        padding-right: 5px;
      }
    }
  }
}
</style>
