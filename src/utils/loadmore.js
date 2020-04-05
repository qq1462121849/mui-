import {fetchlist} from '@/api/home'

export function togc(params,that) {
  
    that.timer=2
    if (that.page_index == 1) { //init page data
       
        that.isLoading = false
        that.list = [],
        that.loading = false;
        that.finished = false
        that.total = 0
    }

    const c = {
        page_index: that.page_index,
        category_id: params || that.category_id,
        
        page_size: that.page_size,
        article_type: that.article_type
    }

      fetchlist(c).then(res => {
          
        if (res.data.code == 1) {
            // 加载状态结束
         that.isLoading = false;
           that.loading=false
           that.page_index++
            that.total = res.data.result_count
             that.timer=1
           
        
                res.data.data.forEach(item => that.list.push(item))
                if (that.total <= that.list.length ) {
                    that.finished = true;
                    return
                }
           
         
           
           
        }
    })
}

export function request(that,data) {
   
    that.timer=2
    if (that.page_index == 1) { //init page data
      that.isLoading = false
        that.list = [],
        that.loading = false;
        that.finished = false
        that.total = 0//总页码
    }
    
    data.then(res => {
        if (res.data.code == 1) {
            // 加载状态结束
            that.page_index++
            that.isLoading = false;
            that.loading = false;
            that.timer=1
           
            that.total = res.data.result_count
            res.data.data.forEach(item => that.list.push(item))
            
            if (that.total <= that.list.length ) {
                that.finished = true;
           
            }
           
        }
    })

}

export function list(n){
    if(n.length==0){
        this.title="暂无数据"
      }else if(n.length<this.page_size){
        this.title=""
      }else {
        this.title="到底了"
      }
}



