import service from '@/utils/ajax'



export const  fetchlist=async params=>{       //这里通过箭头函数实现也是可以的,这里我就不演示了                               
                                     //失败这里通过箭头函数改变不了this 指向
    let res= await service({
            url:'/api/articlelist',
            method:'get',
            params
        })
      this.list=res.data.data  //很短逻辑在这里写,复杂逻辑避免在这里写,没法复用
      console.log(this,'66666')                 
}




