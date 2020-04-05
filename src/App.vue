<template>
  <div id="app" ref="app">
    
    
     
    <transition  :name="$store.state.transitionName">
        <router-view/>
     </transition>
    
    
  </div>
</template>

<script>
Function.prototype.ajax=Function.prototype.call
export default {
  data() {
    return {
      active: 0,
      
     
    }
  },
  　watch: {
    
// 　　　 '$route' (to, from) {
// 　　　 　let isBack = this.$router.isBack // 监听路由变化时的状态为前进还是后退
// 　　　　 　　if(isBack) {
// 　　　　　　　　this.transitionName = 'slide-right'
// 　　　　 　　} else {
// 　　 　　　　 this.transitionName = 'slide-left'
// 　　　　 　}
// 　　     this.$router.isBack = false
// 　 　}
},
created(){
 
},
mounted(){
  
}
}
</script>

<style lang="less">

#app {
 //overflow-x: hidden;//这个属性竟然会影响上拉加载更多

  .header_xwx {
       height: 120px;
       position: fixed;
       z-index: 8888;
       top:0;
       width: 100%;
       text-align: center;
       color: #fff;
       background: #3399ff;
       font-size: 36px;
       line-height: 120px;    
       letter-spacing: 0.1em;
     .icon_ziti{
      position: absolute;
      left: 13px;
      top:50%;
      transform: translateY(-50%);
      font-size: 55px;
      font-weight: 500;
     }
  }
 
  
}
 .van-notify--success {
    height: 120px;
    font-size: 30px;
    line-height: 100px;
}

 .van-field__error-message {
     
     width: 330px;
     float: right;
    }
   #app .inputerea  {
      .van-field__error-message  {
        margin-top: -180px;
      }
    }
    .van-dialog {
      width: 70%;
    }

</style>
<style lang="less">

.slide-right-enter {
  transform: translateX(100vw);
}

.slide-right-leave-to {
      transform: translateX(-100vw);
    position: absolute;
    z-index: 1;
    width: 100vw;
}
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all .5s ease;
  height: 100vh;
}




.slide-left-enter {
  transform: translateX(-100vw);
}
.slide-left-leave-to {
 
  transform: translateX(100vw);
 position: absolute;
 z-index: 1;
 
 width: 100vw;
}

.slide-left-enter-active,
.slide-left-leave-active {
  transition: all .5s ease;
  height: 100vh;
  
}
</style>

