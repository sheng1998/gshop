/*
  通过mutations间接更新state的多个方法对象
*/
import {
  RECEIVE_LONGITUDE_AND_LATITUDE,
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS
} from './mutation-types.js'
import {
  reqAddress,
  reqFoodCategorys,
  reqShops
} from '../api'

export default {
  // 异步获取经纬度
  async getlongitudeAndLatitude ({commit}) {
    let BMap = window.BMap
    let geolocation = new BMap.Geolocation()

    geolocation.enableSDKLocation() // 允许SDK辅助
    await geolocation.getCurrentPosition(function (res) {
      if (this.getStatus() === 0) {
        const {latitude, longitude} = res
        commit(RECEIVE_LONGITUDE_AND_LATITUDE, {latitude, longitude})
      }
    })
  },

  // 异步获取地址
  async getAddress ({commit, state}) {
    // 发送异步 ajax 请求
    const geohash = state.latitude + ',' + state.longitude
    console.log(geohash)
    const result = await reqAddress(geohash)
    // 提交一个 mutation
    if (result.code === 0) {
      const address = result.data
      commit(RECEIVE_ADDRESS, {address})
    }
  },

  // 异步获取食物分类列表
  async getCategorys ({commit, state}) {
    // 发送异步 ajax 请求
    const {longitude, latitude} = state
    const result = await reqFoodCategorys(longitude, latitude)
    // 提交一个 mutation
    if (result.code === 0) {
      const categorys = result.data
      commit(RECEIVE_CATEGORYS, {categorys})
    }
  },

  // 异步获取商家列表
  async getShops ({commit}) {
    // 发送异步 ajax 请求
    const result = await reqShops()
    // 提交一个 mutation
    if (result.code === 0) {
      const shops = result.data
      commit(RECEIVE_SHOPS, {shops})
    }
  }
}
