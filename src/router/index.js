import Vue from 'vue'
import Router from 'vue-router'
import store from '../../store'
import { Dialog } from 'vant';

const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)

 let router= new Router({
  routes: [
    {
      path: '',
      redirect:'/home'
    },
    {
      path: '/home',//首页
      name: 'home',
      component:  _import('home')
    },
    {
      path: '/demo',//测试页面
      name: 'demo',
      component:  _import('demo')
    },
 
   
    
  ]
})
 
//   router.beforeEach((to, from, next) => {
    
//   window.scrollTo(0,0);
  
  
  
//   if(to.name=='login'||to.name=='home'||to.name=='about'||to.name=='/detail'||to.name=='person'||to.name=='help'||
//     to.name=='contact' ||to.name=='register'||to.name=='forget'||to.name=='v'
//   ){
//      next();
//   } else {
     
//       if(localStorage.getItem('token')){
//          next()
//       }else {
        
//         Dialog.alert({ message: '请先登录' }).then(()=>{ next('/login') })
//       }
//   } 
// }); 
 
export default router