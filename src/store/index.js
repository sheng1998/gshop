/*
  vuex最核心的管理对象
*/
import Vue from 'vue' // 引入 vue
import Vuex from 'vuex' // 引入 vuex

import state from './state.js'
import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
