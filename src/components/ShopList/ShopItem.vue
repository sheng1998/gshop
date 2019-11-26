<template>
  <div class="shop-item">
    <div class="shop-img">
      <img :src='baseImageUrl + shop.image_path' alt />
    </div>
    <div class="details">
      <div class="shop-business">
        <div class="shop-name ellipsis">
          <span class="explain">品牌</span>
          <span class="name">{{ shop.name }}</span>
        </div>
        <div class="shop-ul">
          <ul class="ul">
            <li class="supports" v-for="(support, index) in shop.supports" :key="index">
              {{ support.icon_name }}
            </li>
          </ul>
        </div>
      </div>
      <div class="shop-order-relevant">
        <div>
          <Star :score="shop.rating" :size="24"></Star>
          <span class="score">{{ shop.rating }}</span>
          <span>月售{{ shop.recent_order_num }}单</span>
        </div>
        <div>
          <span class="delivery">{{ shop.delivery_mode.text }}</span>
        </div>
      </div>
      <div class="shop-delivery-msg">
        <span>¥{{ shop.float_minimum_order_amount }}起送</span>
        <span class="segmentation">/</span>
        <span>配送费约¥{{ shop.float_delivery_fee }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import Star from '../Star/Star.vue'

export default {
  data () {
    return {
      baseImageUrl: 'http://localhost:3000/img/'
    }
  },
  props: ['shop'],
  components: {
    Star
  }
}
</script>

<style lang="less" scoped>
.shop-item {
  display: flex;
  justify-content: flex-start;
  padding : 10px 0;
  border-bottom: 1px solid #dee2e2bd;
  overflow: hidden;
  .shop-img {
    img {
      width: 75px;
      height: 75px;
    }
  }
  .details {
    padding-left: 15px;
    width: 100%;
    .shop-business {
        display: flex;
        justify-content: space-between;
      .shop-name {
        flex: 6;
        .explain {
          background-color: #FFD930;
          border-radius: 2px;
          padding: 1px;
        }
        .name {
          color: #333333;
          font-size: 16px;
          font-weight: bold;
        }
      }

      .shop-ul {
        flex: 1;
        .ul {
          li {
            list-style: none;
            display: inline-block;
            border-radius: 2px;
            font-size: 10px;
            color: #999;
            border: 1px solid #f1f1f1;
          }
        }
      }
    }
    .shop-order-relevant {
      display: flex;
      justify-content: space-between;
      font-size: 10px;
      color: #666;
      padding: 15px 0;
      .score {
        color: #ff6000;
        padding-left: 5px;
      }
      .delivery {
        padding: 1px;
        color: #02a774;
        border: 1px solid #02a774;
      }
    }
    .shop-delivery-msg {
     font-size: 14px;
     color: #666;
    }
  }
}
</style>
