/*
  直接更新state的多个方法对象
*/
import {
  RECEIVE_LONGITUDE_AND_LATITUDE,
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS
} from './mutation-types.js'

export default {
  [RECEIVE_LONGITUDE_AND_LATITUDE] (state, {latitude, longitude}) {
    state.latitude = latitude
    state.longitude = longitude
  },

  [RECEIVE_ADDRESS] (state, {address}) {
    state.address = address
  },

  [RECEIVE_CATEGORYS] (state, {categorys}) {
    state.categorys = categorys
  },

  [RECEIVE_SHOPS] (state, {shops}) {
    state.shops = shops
  }
}
