<template>
  <div class="search">
    <Header>
      <span slot="center">搜索</span>
    </Header>
    <form class="search_form" @submit.prevent="search">
      <input type="search" placeholder="请输入商家名称" class="search_input" v-model="keyword">
      <input type="submit" class="search_submit">
    </form>

    <section class="list" v-if="!noSearchShops">
      <ul class="list_container">
        <!--:to="'/shop?id='+item.id"-->
        <router-link :to="{path:'/shop', query:{id:item.id}}" tag="li"
                     v-for="item in searchShops" :key="item.id" class="list_li">
          <section class="item_left">
            <img :src="imgBaseUrl + item.image_path" class="restaurant_img">
          </section>
          <section class="item_right">
            <div class="item_right_text">
              <p>
                <span>{{item.name}}</span>
              </p>
              <p>月售 {{item.month_sales||item.recent_order_num}} 单</p>
              <p>{{item.delivery_fee||item.float_minimum_order_amount}} 元起送 / 距离{{item.distance}}</p>
            </div>
          </section>
        </router-link>
      </ul>
    </section>

    <div class="search_none" v-else>很抱歉！无搜索结果</div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import Header from '../../components/Header/Header.vue'

export default {
  data () {
    return {
      keyword: '',
      imgBaseUrl: 'http://cangdu.org:8001/img/',
      noSearchShops: false
    }
  },

  computed: {
    ...mapState(['searchShops'])
  },

  methods: {
    search () {
      // 得到搜索关键字
      const keyword = this.keyword.trim()
      // 进行搜索
      if (keyword) {
        this.$store.dispatch('searchShops', keyword)
      }
    }
  },

  watch: {
    searchShops (value) {
      if (!value.length) { // 没有数据
        this.noSearchShops = true
      } else { // 有数据
        this.noSearchShops = false
      }
    }
  },

  components: {
    Header
  }
}
</script>

<style lang="less" scoped>
.search {
  width: 100%;
  height: 100%;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar{
    width:0;
    height: 0;
    background-color: transparent;
  }
  .search_form {
    position: fixed;
    width: 100%;
    margin-top: 45px;
    background-color: #fff;
    padding: 12px 0;
    min-height: 35px;

    input {
      height: 35px;
      padding: 0 4px;
      border-radius: 2px;
      font-weight: bold;
      outline: none;

      &.search_input {
        float: left;
        width: 70%;
        border: 4px solid #f2f2f2;
        font-size: 14px;
        color: #333;
        background-color: #f2f2f2;
        margin-left: 15px;
      }

      &.search_submit {
        float: right;
        width: 18%;
        border: 4px solid #02a774;
        font-size: 16px;
        color: #fff;
        background-color: #02a774;
        margin-right: 15px;
      }
    }
  }

  .list {
    .list_container {
      padding-top: 110px;
      background-color: #fff;

      .list_li {
        display: flex;
        justify-content: center;
        padding: 10px;
        border-bottom: 1px solid #f6f2f2;

        .item_left {
          margin-right: 10px;

          .restaurant_img {
            width: 50px;
            height: 50px;
            display: block;
          }
        }

        .item_right {
          font-size: 12px;
          flex: 1;

          .item_right_text {
            p {
              line-height: 12px;
              margin-bottom: 6px;

              &:last-child {
                margin-bottom: 0;
                padding-bottom: 50px;
              }
            }
          }
        }
      }
    }
  }

  .search_none {
    padding: 15px 0;
    margin: 0 auto;
    color: #333;
    background-color: #fff;
    text-align: center;
    margin-top: 0.125rem;
  }
}
</style>
