import service from '@/utils/ajax'

export async function test(){
    /* 测试用的 */
    return await service({
        url:'/api/ArticleInfo',
        method:'get',
        params:1
    })
}



export async function fetchlist(params){                                        //    console.log(this.active,'_____________')//竟然是undfined
    let res= await service({
            url:'/api/articlelist',
            method:'get',
            params
        })
    this.list=res.data.data      //这里通过箭头函数实现也是可以的,//失败这里通过箭头函数改变不了this 指向
  
  
}



// export async function fetchlist(params){
//     console.log(this.active,'_____________')//竟然是undfined
//     return await service({
//         url:'/api/articlelist',
//         method:'get',
//         params
//     })
// }

