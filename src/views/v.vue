<template>
  <div class="gge" style="height:100vh;width:100vw;">
    <img src="../assets/images/zsh.png" alt="">
  </div>
</template>

<script>
export default {

  data () {
    return {
    }
  },

  methods: {
     is_weixn(){  

let ua = navigator.userAgent.toLowerCase();  

if(ua.match(/MicroMessenger/i)!="micromessenger") { //不在微信

 
 this.$router.push('/home')
  


} 

}
  },

  created () {
    
       this.is_weixn()
  },
 
}
</script>

<style lang='less' scoped>
.gge {
 
  position: relative;
  background: #eee;
  
  img {
    width: 100%;
    margin-top: 120px;
    position: absolute;
    top:-124px;
    height: 100vh;
   
  }
}
</style>

