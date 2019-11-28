<template>
  <div class="shop_header">
    <!-- 顶部区域 -->
    <nav class="shop_nav" :style="{backgroundImage: `url(${info.bgImg})`}">
      <a href="javascript:;" class="back" @click="$router.back()">
        <i class="iconfont icon-left"></i>
      </a>
    </nav>

    <!-- 商家信息 -->
    <div class="shop_content" @click="shopShow=!shopShow">
      <img class="content_image" :src="info.avatar" />
      <div class="header_content">
        <div class="content_title">
          <span class="content_tag">
            <span class="mini_tag">品牌</span>
          </span>
          <span class="content_name">{{ info.name }}</span>
          <i class="iconfont icon-more"></i>
        </div>
        <div class="shop_message">
          <span class="shop_message_detail">{{ info.score }}</span>
          <span class="shop_message_detail">月售{{ info.sellCount }}单</span>
          <span class="shop_message_detail">
            {{ info.description }}
            <span>约{{ info.deliveryTime }}分钟</span>
          </span>
          <span class="shop_message_detail">距离{{ info.distance }}</span>
        </div>
      </div>
    </div>

    <!-- 优惠活动 -->
    <div class="shop-header-discounts" @click="supportShow=!supportShow" v-if="info.supports">
      <div class="discounts-left">
        <div class="activity" :class="supportClasses[info.supports[0].type]">
          <div class="content-tag">
            <span class="mini-tag">{{ info.supports[0].name }}</span>
          </div>
          <div class="activity-content ellipsis">{{ info.supports[0].content }}</div>
        </div>
      </div>
      <div class="discounts-right">{{ info.supports.length }}个优惠</div>
    </div>

    <!-- 商家详细信息 -->
    <transition name="fade">
      <div class="shop-brief-modal" v-show="shopShow">
        <div class="brief-modal-content">
          <h2 class="content-title">
            <span class="content-tag">
              <span class="mini-tag">品牌</span>
            </span>
            <div class="content-name ellipsis">{{ info.name }}</div>
          </h2>
          <ul class="brief-modal-msg">
            <li>
              <h3>{{info.score}}</h3>
              <p>评分</p>
            </li>
            <li>
              <h3>{{info.sellCount}}单</h3>
              <p>月售</p>
            </li>
            <li>
              <h3>{{info.description}}</h3>
              <p>约{{info.deliveryTime}}分钟</p>
            </li>
            <li>
              <h3>{{info.deliveryPrice}}元</h3>
              <p>配送费用</p>
            </li>
            <li>
              <h3>{{info.distance}}</h3>
              <p>距离</p>
            </li>
          </ul>
          <h3 class="brief-modal-title">
            <span>公告</span>
          </h3>
          <div class="brief-modal-notice">{{ info.bulletin }}</div>
          <div class="mask-footer" @click="shopShow=!shopShow">
            <span>
              <i class="iconfont icon-close"></i>
            </span>
          </div>
        </div>
        <div class="brief-modal-cover"></div>
      </div>
    </transition>

    <!-- 优惠活动详情 -->
    <transition name="fade">
      <div class="activity-sheet" v-show="supportShow">
        <div class="activity-sheet-content">
          <h2 class="activity-sheet-title">优惠活动</h2>
          <ul class="list">
            <li class="activity-item" v-for="(support, index) in info.supports"
                :key="index" :class="supportClasses[support.type]">
            <span class="content-tag">
                <span class="mini-tag">{{support.name}}</span>
              </span>
              <span class="activity-content">{{support.content}}</span>
            </li>
          </ul>
          <div class="activity-sheet-close" @click="supportShow=!supportShow">
            <span class="iconfont icon-close"></span>
          </div>
        </div>
        <div class="activity-sheet-cover"></div>
      </div>
    </transition>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  data () {
    return {
      supportClasses: ['activity-green', 'activity-red', 'activity-orange'],
      shopShow: false,
      supportShow: false
    }
  },

  computed: {
    ...mapState(['info'])
  }
}
</script>

<style lang="less" scoped>
.shop_header {
  height: 100%;
  overflow: hidden;
  position: relative;
  background-color: #fff;
  .shop_nav {
    width: 100%;
    height: 50px;
    position: relative;
    background-size: cover;
    background-repeat: no-repeat;

    &::before {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      content: "";
      background-color: rgba(119, 103, 137, 0.43);
    }

    .back {
      position: absolute;
      line-height: 50px;
      left: 10px;
      i {
        color: white;
      }
    }
  }

  .shop_content {
    position: relative;
    display: flex;
    justify-content: center;
    text-align: center;
    padding: 30px 20px 5px 20px;

    .content_image {
      box-shadow: 0 0 0.4vw 0 rgba(0, 0, 0, 0.2);
      position: absolute;
      top: 0;
      left: 50%;
      width: 66px;
      height: 66px;
      border-radius: 2px;
      margin-left: -33px;
      margin-top: -40px;
    }

    .header_content {
      flex: 1;
      width: 72%;
      margin-top: 8px;

      .content_title {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        white-space: nowrap;

        .content_tag {
          background-color: #ffe339;
          border-radius: 2px;
          padding: 0 5px;

          .mini_tag {
            font-size: 14px;
            font-weight: 600;
            transform: scale(0.5);
            color: #6a3709;
          }
        }

        .content_name {
          font-weight: 700;
          font-size: 20px;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        i {
          margin-left: 8px;
        }
      }

      .shop_message {
        white-space: nowrap;
        height: 12px;
        margin-top: 8px;
        font-size: 11px;
        color: #333;
        .shop_message_detail:not(:last-child)::after {
          content: " \B7 ";
          opacity: 0.2;
        }
      }
    }
  }

  .shop-header-discounts {
    display: flex;
    align-items: center;
    border: 1px solid #eee;
    background: #fff;
    border-radius: 1px;
    margin: 0 30px;
    padding: 5px 7px;
    font-size: 11px;
    color: #666;

    .discounts-left {
      flex: 1;
      overflow: hidden;

      .activity {
        display: flex;
        align-items: flex-start;

        &.activity-green {
          .content-tag {
            background-color: rgb(112, 188, 70);
          }
        }

        &.activity-red {
          .content-tag {
            background-color: rgb(240, 115, 115);
          }
        }

        &.activity-orange {
          .content-tag {
            background-color: rgb(241, 136, 79);
          }
        }

        .content-tag {
          border-radius: 1px;
          margin-right: 5px;
          height: 13px;
          width: 35px;
          color: #fff;
          background-color: rgb(112, 188, 70);
          line-height: 13px;
          display: flex;
          justify-content: center;

          .mini-tag {
            text-align: center;
            font-size: 8px;
            padding: 0 2px;
          }
        }

        .activity-content {
          line-height: 13px;
        }
      }
    }

    .discounts-right {
      width: 50px;
      flex-shrink: 0;
      position: relative;
      padding-right: 10px;
      text-align: right;

      &::after {
        content: "";
        display: block;
        border-style: solid;
        border-width: 4px 4px 0;
        border-color: rgba(0, 0, 0, 0.57) transparent transparent;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 0;
      }
    }
  }

  .shop-brief-modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 101;
    flex-direction: column;
    color: #333;

    &.fade-enter-active,
    &.fade-leave-active {
      transition: opacity 0.5s;
    }

    &.fade-enter,
    &.fade-leave-to {
      opacity: 0;
    }

    .brief-modal-cover {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 1;
    }

    .brief-modal-content {
      position: relative;
      width: 80%;
      padding: 25px 20px;
      border-radius: 5px;
      background: #fff;
      z-index: 99;
      display: flex;
      flex-direction: column;

      .content-title {
        font-size: 20px;
        line-height: 24px;
        font-weight: 700;
        white-space: nowrap;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;

        .content-name {
          font-weight: 600;
        }

        .content-tag {
          border-radius: 2px;
          background-image: linear-gradient(90deg, #fff100, #ffe339);
          width: 36px;
          height: 18px;
          margin-right: 10px;
          color: #6a3709;
          font-style: normal;
          position: relative;

          .mini-tag {
            position: absolute;
            left: 0;
            top: 0;
            right: -100%;
            bottom: -100%;
            font-size: 24px;
            transform: scale(0.5);
            transform-origin: 0 0;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      }

      .brief-modal-msg {
        display: flex;
        margin: 20px -10px 0;

        > li {
          flex: 1;
          text-align: center;

          > h3 {
            font-size: 15px;
            font-weight: 600;
            color: #333;
            margin-bottom: 8px;
          }

          > p {
            font-size: 12px;
            color: #999;
          }
        }
      }

      .brief-modal-title {
        position: relative;
        text-align: center;
        margin: 15px auto 15px;
        width: 85px;
        background-image: linear-gradient(90deg, #fff, #333 50%, #fff);
        background-size: 100% 1px;
        background-position: 50%;
        background-repeat: no-repeat;

        > span {
          font-size: 12px;
          padding: 0 6px;
          color: #999;
          background-color: #fff;
        }
      }

      .brief-modal-notice {
        font-size: 13px;
        line-height: 1.54;
        color: #333;
        overflow-y: auto;
      }

      .mask-footer {
        position: absolute;
        bottom: -50px;
        left: 50%;
        padding: 6px;
        border: 1px solid rgba(255, 255, 255, 0.7);
        border-radius: 50%;
        transform: translateX(-50%);

        i {
          font-size: 20px;
          color: rgba(255, 255, 255, 0.7);
        }
      }
    }
  }

  .activity-sheet {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 102;

    .activity-sheet-content {
      position: absolute;
      background-color: #f5f5f5;
      box-shadow: 0 -1px 5px 0 rgba(0, 0, 0, 0.4);
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 100;
      padding: 20px 30px;
      box-sizing: border-box;
      transition: transform 0.2s;
      will-change: transform;
      color: #333;

      .activity-sheet-title {
        text-align: center;
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 20px;
      }

      .list {
        font-size: 16px;
        height: 160px;
        overflow-y: auto;

        .activity-item {
          margin-bottom: 12px;
          display: flex;
          font-size: 13px;
          align-items: center;

          &.activity-green {
            .content-tag {
              background-color: rgb(112, 188, 70);
            }
          }

          &.activity-red {
            .content-tag {
              background-color: rgb(240, 115, 115);
            }
          }

          &.activity-orange {
            .content-tag {
              background-color: rgb(241, 136, 79);
            }
          }

          .content-tag {
            display: inline-block;
            border-radius: 2px;
            width: 36px;
            height: 18px;
            margin-right: 10px;
            color: #fff;
            font-style: normal;
            position: relative;

            .mini-tag {
              position: absolute;
              left: 0;
              top: 0;
              right: -100%;
              bottom: -100%;
              font-size: 24px;
              transform: scale(0.5);
              transform-origin: 0 0;
              display: flex;
              align-items: center;
              justify-content: center;
            }
          }
        }
      }

      .activity-sheet-close {
        position: absolute;
        right: 6px;
        top: 10px;
        width: 25px;
        height: 25px;

        > span {
          font-size: 20px;
        }
      }
    }

    .activity-sheet-cover {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
}
</style>
