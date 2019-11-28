/*
入口JS
*/
import Vue from 'vue'
import {Button} from 'mint-ui'
import VueLazyload from 'vue-lazyload'
import App from './App.vue'
import router from './router/index.js'
import store from './store'

import './mock/mockServer.js' // 加载 mockServer 即可
import loading from './common/imgs/loading.gif'

// 注册全局组件便签
Vue.component(Button.name, Button) // mt-button
Vue.use(VueLazyload, { // 内部自定义一个指令lazy
  loading
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
