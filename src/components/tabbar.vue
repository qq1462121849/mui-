<template>
   <div class="foottabbar" style="height:1.333rem">
        <van-tabbar route  v-model="active"  active-color="#3399ff" inactive-color="#919191" style="height:1.333rem" >
          <van-tabbar-item replace name="home" icon="home-o" to="/home">首页</van-tabbar-item>
            <van-tabbar-item replace name="help" icon="question-o" to="/help">帮助中心</van-tabbar-item>
          <van-tabbar-item replace name="contact" icon="chat-o" to="/contact">联系客服</van-tabbar-item>
          <van-tabbar-item replace name="person" icon="manager-o" to="/person">我的</van-tabbar-item>
      
        </van-tabbar>
     </div>
</template>
<script>

export default {
 
  data () {
    return {
      active: 'name'
    }
  },


}
</script>

<style lang="less" >

.foottabbar {
   background: #fff;
   .van-tabbar-item{
      font-size: 18px;
   }
   .van-icon {
      font-size: 42px;
   }
}

</style>