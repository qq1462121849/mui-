import Vue from 'vue'
Vue.config.productionTip = false
import 'babel-polyfill';
import 'lib-flexible'

/* 引入iconfont */
import './assets/font_1375371_bopfvd0uilc/iconfont.css'
/* 引入css */
 import './lib/css/style.css'
import './lib/css/mui.css'
 import './lib/js/mui.js'
import App from './App'
import router from './router'
import store from '../store'


window.a=888;


import FastClick from 'fastclick';
if ('addEventListener' in document) {
  document.addEventListener(
    'DOMContentLoaded',
    () => FastClick.attach(document.body),
    false,
  );
}

import './utils'
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
