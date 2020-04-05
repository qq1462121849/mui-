<template>
 <!-- 插槽练习 -->
   <div class="test">
      <ul>
          <li v-for="item in msg.qq" :key="item.id">
              {{item.name+''+item.id}}

          </li>
          <!-- 作用域插槽 -->
          <li> 
              <slot :item="msg.ww"></slot>
          </li>
          <!-- 插槽 -->
          <slot  name="header"></slot>
          
      </ul>
   </div>
</template>

<script>
export default {
  data() {
    return {
      
    
       
    }
  },
  props:['msg'],
 
  created(){
      
  },

  methods: {
    
  }
}
</script>

<style lang='less' scoped>
.test{
    ul>li{
        font-size: 36px;
    }
}

</style>
