<template>
  <div class="miste-nav">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <a href="javascript:;" class="link_to_food">
            <div class="food_container">
              <img src="../../../static/img/nav/1.jpg" alt />
            </div>
            <span>甜品饮品</span>
          </a>
          <a href="javascript:;" class="link_to_food">
            <div class="food_container">
              <img src="../../../static/img/nav/2.jpg" alt />
            </div>
            <span>甜品饮品</span>
          </a>
          <a href="javascript:;" class="link_to_food">
            <div class="food_container">
              <img src="../../../static/img/nav/3.jpg" alt />
            </div>
            <span>甜品饮品</span>
          </a>
          <a href="javascript:;" class="link_to_food">
            <div class="food_container">
              <img src="../../../static/img/nav/4.jpg" alt />
            </div>
            <span>甜品饮品</span>
          </a>
          <a href="javascript:;" class="link_to_food">
            <div class="food_container">
              <img src="../../../static/img/nav/5.jpg" alt />
            </div>
            <span>甜品饮品</span>
          </a>
          <a href="javascript:;" class="link_to_food">
            <div class="food_container">
              <img src="../../../static/img/nav/6.jpg" alt />
            </div>
            <span>甜品饮品</span>
          </a>
          <a href="javascript:;" class="link_to_food">
            <div class="food_container">
              <img src="../../../static/img/nav/7.jpg" alt />
            </div>
            <span>甜品饮品</span>
          </a>
          <a href="javascript:;" class="link_to_food">
            <div class="food_container">
              <img src="../../../static/img/nav/8.jpg" alt />
            </div>
            <span>甜品饮品</span>
          </a>
        </div>

        <div class="swiper-slide">
          <a href="javascript:;" class="link_to_food">
            <div class="food_container">
              <img src="../../../static/img/nav/9.jpg" alt />
            </div>
            <span>甜品饮品</span>
          </a>
          <a href="javascript:;" class="link_to_food">
            <div class="food_container">
              <img src="../../../static/img/nav/10.jpg" alt />
            </div>
            <span>甜品饮品</span>
          </a>
          <a href="javascript:;" class="link_to_food">
            <div class="food_container">
              <img src="../../../static/img/nav/11.jpg" alt />
            </div>
            <span>甜品饮品</span>
          </a>
          <a href="javascript:;" class="link_to_food">
            <div class="food_container">
              <img src="../../../static/img/nav/12.jpg" alt />
            </div>
            <span>甜品饮品</span>
          </a>
          <a href="javascript:;" class="link_to_food">
            <div class="food_container">
              <img src="../../../static/img/nav/13.jpg" alt />
            </div>
            <span>甜品饮品</span>
          </a>
          <a href="javascript:;" class="link_to_food">
            <div class="food_container">
              <img src="../../../static/img/nav/14.jpg" alt />
            </div>
            <span>甜品饮品</span>
          </a>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'

export default {
  mounted () {
    /* eslint-disable no-new */
    new Swiper('.swiper-container', {
      loop: true,

      pagination: {
        el: '.swiper-pagination'
      }
    })
  }
}
</script>

<style lang="less" scoped>
.miste-nav {
  padding-top: 46px;
  background-color: #fff;
  padding-bottom: 10px;
  .swiper-slide {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    text-align: center;
    a {
      text-decoration: none;
    }
    .link_to_food {
      width: 25%;
      .food_container {
        padding-top: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 50px;
          height: 50px;
          padding-bottom: 10px;
        }
      }
      span {
        font-size: 12px;
      }
    }
  }
  .swiper-pagination {
    position: static;
    margin-top: 10px;
  }
}
</style>
