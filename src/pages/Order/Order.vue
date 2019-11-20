<template>
  <div class="order">
    <Header>
      <span class="center" slot="center">订单列表</span>
    </Header>
    <div class="content">
      <img src="../../../static/img/person.png" alt="">
      <h3>登录后查看外卖订单</h3>
      <button>立即登录</button>
    </div>
  </div>
</template>

<script>
import Header from '../../components/Header/Header.vue'

export default {
  components: {
    Header
  }
}
</script>

<style lang="less" scoped>
.order {
  .content {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    text-align: center;
    img {
      width: 120%;
    }
    h3 {
      padding: 10px 0;
      font-size: 17px;
      color: #6a6a6a;
    }
    button {
      display: inline-block;
      background: #02a774;
      font-size: 14px;
      color: #fff;
      border: 0;
      outline: none;
      border-radius: 5px;
      padding: 10px 20px;
    }
  }
}
</style>
