<template>
  <div class="profile">
    <Header>
      <span class="center" slot="center">我的</span>
    </Header>
    <div class="body">
      <div class="sign">
        <div class="portrait">
          <i class="iconfont icon-person"></i>
        </div>
        <div class="text">
          <p>登录/注册</p>
          <p class="user">
            <span class="user-icon">
              <i class="iconfont icon-phone"></i>
            </span>
            <span class="phone-number">暂无绑定手机号</span>
          </p>
        </div>
        <div class="right">
          <span>
            <i class="iconfont icon-right"></i>
          </span>
        </div>
      </div>
      <div class="information">
        <div class="balance">
          <a href="javascript:;">
            <span><strong>0.00</strong>元</span><br>
            <span>我的余额</span>
          </a>
        </div>
        <div class="discount">
          <a href="javascript:;">
            <span><strong>0</strong>个</span><br>
            <span>我的优惠</span>
          </a>
        </div>
        <div class="points">
          <a href="javascript:;">
            <span><strong>0</strong>分</span><br>
            <span>我的积分</span>
          </a>
        </div>
      </div>
      <div class="list">
        <ul>
          <li class="order-list-top">
            <a href="javascript:;">
              <div>
                <span>
                  <i style="color: #02a774;" class="iconfont icon-dingdan"></i>
                </span>
              </div>
              <div class="my_order_div  div_border">
                <span>
                  我的订单
                </span>
                <span>
                  <i class="iconfont icon-right"></i>
                </span>
              </div>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <div>
                <span>
                  <i style="color: #ff5f3e;" class="iconfont icon-jifen"></i>
                </span>
              </div>
              <div class="my_order_div  div_border">
                <span>
                  积分商城
                </span>
                <span>
                  <i class="iconfont icon-right"></i>
                </span>
              </div>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <div>
                <span>
                  <i style="color: #f90;" class="iconfont icon-vip"></i>
                </span>
              </div>
              <div class="my_order_div">
                <span>
                  我的会员
                </span>
                <span>
                  <i class="iconfont icon-right"></i>
                </span>
              </div>
            </a>
          </li>
          <li class="order-list-top">
            <a href="javascript:;">
              <div class="">
                <span>
                  <i style="color: #02a774;" class="iconfont icon-service"></i>
                </span>
              </div>
              <div class="my_order_div">
                <span>
                  服务中心
                </span>
                <span>
                  <i class="iconfont icon-right"></i>
                </span>
              </div>
            </a>
          </li>
        </ul>
      </div>
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
.profile {
  padding-top: 46px;
  .body {
    .sign {
      display: flex;
      justify-content: left;
      align-items: center;
      padding: 0 20px;
      width: 100%;
      height: 100px;
      background-color: #02a774;
      color: white;
      .portrait {
        width: 62px;
        height: 62px;
        margin-right: 20px;
        border-radius: 50% 50%;
        background-color: #837d7d;;
        overflow: hidden;
        i {
          font-size: 62px;
        }
      }
      .text {
        flex: 4;
        p {
          &:nth-child(1) {
            font-weight: 700;
            font-size: 18px;
          }
          &:nth-child(2) {
            padding-top: 10px;
            font-size: 14px;
            background-color: transparent;
          }
        }
      }
      .right {
        flex: 1;
        font-size: 14px;
      }
    }
    .information {
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 14px;
      color: #333;
      border-bottom: 1px solid #f5f5f5;
      div:nth-child(n) {
        padding: 10px;
        flex: 1;
        a{
          span {
            display: flex;
            justify-content: center;
            align-items: center;
            strong {
              font-size: 30px;
              font-weight: 700;
              line-height: 30px;
            }
            &:nth-of-type(2) {
            font-size: 14px;
            color: #666;
            font-weight: 400;
          }
          }
        }
      }
      .balance {
        border-right: 1px solid #f5f5f5;
        a {
          span {
            strong {
              color: #f90;
            }
          }
        }
      }
      .discount {
        border-right: 1px solid #f5f5f5;
        a {
          span {
            strong {
              color: #ff5f3e;
            }
          }
        }
      }
      .points {
        a {
          span {
            strong {
              color: #6ac20b;
            }
          }
        }
      }
    }
    .list {
      ul {
        li {
          background-color: #fff;
          a {
            display: flex;
            div {
              display: flex;
              align-items: center;
              i{
                font-size: 20px;
                margin: 0 10px;
              }
            }
            .my_order_div {
              width: 100%;
              justify-content: space-between;
              height: 53px;
              font-size: 16px;
              color: #333;
              i {
                color: #bbb;
                font-size: 15px;
              }
            }
            .div_border {
              border-bottom: 1px solid #f1f1f1;
            }
          }
        }
        .order-list-top {
          margin-top: 15px;
        }
      }
    }
  }
}
</style>
