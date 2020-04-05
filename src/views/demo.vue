<template>
  <div class="notice">
      <!-- 测试页面 -->
       <header class="header_xwx">
          <van-icon class="icon_ziti" name="arrow-left" />测试页面

       </header>
         
      
   
  </div>
</template>

<script>


import axios from 'axios'

export default {
   
  data () {
    return {
      
       
       
    }
  },

  methods: {
  
  
  
    
  },
   created(){
  ///    版本一
   //   axios.get('/static/mock/demo.json').then(res=>{
   //      console.log(  res.data.name)
   //   })
   //版本二
//  let res=  axios({
//        url:'/static/mock/demo.json',
//        paramas:{

//        },
//        method:'get'
//     })
//     res.then(res=>{//这里是异步请求还没回来这行已经执行了所以要换成异步的方式
//        console.log(res)
//     })

//版本三   演示模拟后台数据的终极异步解决解决方案
      fn()
      async function fn(){
       let res=  await axios({
            url:'/static/mock/demo.json',
            method:'get',
            paramas:{

            }

         })
         console.log(res)
      }
    
  

  
 },
 mounted(){
   
 }


}
</script>


