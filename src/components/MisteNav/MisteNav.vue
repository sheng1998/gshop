<template>
  <div class="miste">
    <div class="miste-nav" v-if="categorys.length">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(category, index) in categoryArr" :key="index">
            <a href="javascript:;" class="link_to_food" v-for="(item, index) in category" :key="index">
              <div class="food_container">
                <img :src="baseImageUrl + item.image_url" alt />
              </div>
              <span>{{ item.title }}</span>
            </a>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <div v-else>
      <img src="./images/msite_back.svg" alt="">
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import {mapActions, mapState} from 'vuex'

export default {
  data () {
    return {
      baseImageUrl: 'https://fuss10.elemecdn.com'
    }
  },

  mounted () {
    this.getCategorys()
  },

  computed: {
    ...mapState(['categorys']),
    categoryArr () {
      let arr = [] // 二维数组
      let minArr = [] // 小数组，长度最大为 8

      this.categorys.forEach(el => {
        if (minArr.length === 8) {
          minArr = []
        }
        if (minArr.length === 0) {
          arr.push(minArr)
        }
        minArr.push(el)
      })
      return arr
    }
  },

  watch: {
    categorys (value) {
      this.$nextTick(() => {
        /* eslint-disable no-new */
        new Swiper('.swiper-container', {
          loop: true,
          pagination: {
            el: '.swiper-pagination'
          }
        })
      })
    }
  },

  methods: {
    ...mapActions(['getCategorys'])
  }
}
</script>

<style lang="less" scoped>
.miste {
  padding-top: 46px;
  .miste-nav {
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
}
</style>
