
import axios from 'axios'
import store from '../../store'
import router from '../router'
import { Dialog } from 'vant';

//let api ="http://scs.m.6djz.net"//这个测试支付接口临时试用
let api =store.state.apihost//10.08之前用
//let api="http://scs.apimember.6djz.net"//这个是主域名
// create an axios instance
const service = axios.create({
  baseURL: api, 
  timeout: 7000 
})
//service.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'
//request
service.interceptors.request.use(config => {
    
    /*   if(store.state.token){
       config.headers.common['token']=store.state.token   //要就给你
      } */
      config.headers['Content-Type']='application/x-www-form-urlencoded'//这个也可以写在下面
      config.transformRequest=(data,headers)=>{//其实post请求才需要设置请求体格式,可以post请求在加这个逻辑
        let ret = ''
        for (let it in data) {
          ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
        }
        return ret
      }
     console.log(config)
     
      return config;
    }, error => {
    // 请求错误
      return Promise.reject(error);
    });
  
    //  //respone
    service.interceptors.response.use(
        response => {
       
          const res=response.data;
        
          if(res.code==403){
            Dialog.alert({ message: '请先登录' }).then(()=>{ router.push('/login') })
     
            return
          }else if(res.code==2){
            Dialog.alert({
              title: '温馨提示',
               message: res.msg ,
               className:'addheat_diss'
              })
              return
          }
           else if(res.code !=1 ) {
            Dialog.alert({
              title: '错误提示',
               message: res.msg 
              })
              return
          }
          return response;
         
        
        },
      
        error => {  //默认除了2XX之外都为错误
          // if(error.response){
          //   switch(error.response.status){
          //     case 401:
          //       this.$store.commit('delToken');
          //       router.replace({ //跳转到登录页面
          //         path: '/managerLogin',
          //         query: { redirect: router.currentRoute.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
          //       });
          //   }
          // }
          return Promise.reject(error.response);
        }
      );
 export default service