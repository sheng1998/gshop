<template>
  <div class="search">
    <Header>
      <span class="center" slot="center">搜索</span>
    </Header>
    <div class="search-form">
      <input name="search" type="text" placeholder="请输入商家或美食名称">
      <button>提交</button>
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
.search {
  .search-form {
    padding-top: 46px;
    background-color: white;
    input {
      width: 70%;
      height: 35px;
      margin: 20px 5px 20px 20px;
      background-color: #f5f5f5;
      font-size: 14px;
      color: #333;
      outline: none;
      border-radius: 2px;
      &:hover {
        box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, .6);
      }
    }
    button {
      width: 18%;
      border: 4px solid #02a774;
      font-size: 16px;
      color: #fff;
      background-color: #02a774;
      border-radius: 5px;
    }
  }
}
</style>
