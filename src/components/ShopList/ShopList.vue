<template>
  <div class="shop-list">
    <div class="list-top">
      <span class="option-icon">
        <i class="iconfont icon-option"></i>
      </span>
      <span class="near-business">附近商家</span>
    </div>
    <div v-for="item in 10" :key="item">
      <ShopItem></ShopItem>
    </div>
  </div>
</template>

<script>
import ShopItem from './ShopItem.vue'
export default {
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
