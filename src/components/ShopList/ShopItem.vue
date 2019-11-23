<template>
  <div class="shop-item">
    <div class="shop-img">
      <img src='./img/1.jpg' alt />
    </div>
    <div class="details">
      <div class="shop-business">
        <div>
          <span class="explain">品牌</span>
          <span class="name ellipsis">壹家饭</span>
        </div>
        <div>
          <ul class="ul">
            <li class="supports">保</li>
            <li class="supports">准</li>
            <li class="supports">票</li>
          </ul>
        </div>
      </div>
      <div class="shop-order-relevant">
        <div>
          <span class="star">
            <i class="iconfont icon-star"></i>
            <i class="iconfont icon-star"></i>
            <i class="iconfont icon-star"></i>
            <i class="iconfont icon-star"></i>
            <i class="iconfont icon-star"></i>
          </span>
          <span class="score">4.2</span>
          <span>月售102单</span>
        </div>
        <div>
          <span class="delivery">硅谷专送</span>
        </div>
      </div>
      <div class="shop-delivery-msg">
        <span>¥20起送</span>
        <span class="segmentation">/</span>
        <span>配送费约¥5</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
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
    .shop-order-relevant {
      display: flex;
      justify-content: space-between;
      font-size: 10px;
      color: #666;
      padding: 15px 0;
      .star {
        i {
          font-size: 14px;
          color: #7e8c8d;
          &:nth-child(1) {
            color: rgb(255, 154, 13);
          }
          &:nth-child(2) {
            color: rgb(255, 154, 13);
          }
          &:nth-child(3) {
            color: rgb(255, 154, 13);
          }
          &:nth-child(4) {
            color: rgb(255, 154, 13);
          }
        }
      }
      .score {
        color: #ff6000;
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
