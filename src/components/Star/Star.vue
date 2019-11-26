<template>
  <span class="star" :class="'star-' + size">
    <span class="star-item" v-for="(sc, index) in starClasses" :class="sc" :key="index"></span>
  </span>
</template>

<script>
export default {
  data () {
    return {}
  },

  computed: {
    starClasses () {
      const score = parseFloat(this.score)
      let scs = [] // 保存星星类名
      let sn = 5 // 星星总个数为 5
      for (let i = 1; i <= parseInt(score); i++) {
        sn--
        scs.push('on')
      }
      if (score % 1 >= 0.5) {
        sn--
        scs.push('half')
      }
      for (let j = 0; j < sn; j++) {
        scs.push('off')
      }
      return scs
    }
  },
  props: ['score', 'size']
}
</script>

<style lang="less" scoped>
@import '../../common/less/mixins.less';

.star  {
  float: left;
  font-size: 0;

  .star-item {
    display: inline-block;
    background-repeat: no-repeat;
  }

  &.star-48 {
    .star-item {
      width: 20px;
      height: 20px;
      margin-right: 22px;
      background-size: 20px 20px;&:last-child {
        margin-right: 0;
      }

      &.on {
        .bg-image('./images/star48_on');
      }

      &.half {
        .bg-image('./images/star48_half');
      }

      &.off {
        .bg-image('./images/star48_off');
      }
    }
  }

  &.star-36 {
    .star-item {
      width: 15px;
      height: 15px;
      margin-right: 6px;
      background-size: 15px 15px;&:last-child {
        margin-right: 0;
      }

      &.on {
        .bg-image('./images/star36_on');
      }

      &.half {
        .bg-image('./images/star36_half');
      }

      &.off {
        .bg-image('./images/star36_off');
      }
    }
  }

  &.star-24 {
    .star-item {
      width: 10px;
      height: 10px;
      margin-right: 3px;
      background-size: 10px 10px;&:last-child {
        margin-right: 0;
      }

      &.on {
        .bg-image('./images/star24_on');
      }

      &.half {
        .bg-image('./images/star24_half');
      }

      &.off {
        .bg-image('./images/star24_off');
      }
    }
  }
}
</style>
