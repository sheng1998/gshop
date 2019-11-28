<template>
  <div class="header">
    <span class="left">
      <slot name="left"></slot>
    </span>
    <span class="center ellipsis">
      <slot name="center"></slot>
    </span>
    <span class="right">
      <slot name="right"></slot>
    </span>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style lang="less" scoped>
@import "../../common/less/mixins.less";

.header {
  .bottom-border-1px(#e4e4e4);
  position: fixed;
  width: 100%;
  height: 45px;
  z-index: 100;
  left: 0;
  top: 0;
  background-color: #02A774;
  span{
    color: white;
    font-weight: bolder;
    font-size: 16px;
    a{
      color: white;
      font-weight: bolder;
      font-size: 16px;
    }
    &.left {
      position: absolute;
      left: 10px;
      top: 50%;
      transform: translate(0,-50%);
      i {
        color: white;
        font-size: 22px;
      }
    }
    &.center {
      position: absolute;
      left: 50%;
      top: 50%;
      width: 50%;
      text-align: center;
      transform: translate(-50%,-50%);
    }
    &.right {
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translate(0,-50%);
      a {
        color: white;
        text-decoration: none;
      }
    }
  }
}
</style>
