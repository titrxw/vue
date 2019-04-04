/**
 * 推荐使用store.js
 */
import Session from './driver/session'
import Local from './driver/local'
class Storage {
  static default = null
  static session = null
  static local = null
  static prefx = ''

  constructor(prefx = '') {
    this.prefx = prefx
  }

  get session () {
    if (!Storage.session) {
      Storage.session = new Session(this.prefx)
    }

    return Storage.session
  }

  get local () {
    if (!Storage.local) {
      Storage.local = new Local(this.prefx)
    }
    
    return Storage.local
  }

  get default () {
    if (!Storage.default) {
      Storage.default = new Session(this.prefx)
    }
    
    return Storage.default
  }

  set (key, value) {
    this.default.set(key, value)
  }
  get (key) {
    return this.default.get(key)
  }
  rm(key) {
    this.default.rm(key)
  }
}

export default {
  install: function (Vue) {
    Vue.storage = new Storage('c')
    Vue.prototype.storage = Vue.storage
  }
}