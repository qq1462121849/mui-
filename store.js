import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('token') || '',
    count:666,
    imgapi:'http://scs.img.6djz.net/',
  apihost:'http://scs.apimember.6djz.net',//生产接口
 // apihost:'http://scs.apimember.dev.6djz.net',//开发接口
    httphost:'http://scs.m.6djz.net',
    transitionName:'slide-right'

  },
  mutations: {
      setToken(state,token){
        state.token=token;
        localStorage.setItem('token',token);//这里可能不正确

      },
      
      delToken(state){
        state.token='',
        localStorage.removeItem('token');//删除token
      },
      slideleft(state){
        state.transitionName='slide-left'
      },
      slideright(state){
        state.transitionName='slide-right'
      },
  },
  actions: {

  }
})
