export  function common(c,that,w=r=>{
    if(r.data.code==1){
        that.list=r.data.data
    }
}){
    c.then((r)=>{
        if(r.data.code==1){
         w(r)
        }
    })
}
export function commonb(c,w=r=>{
     if(r.data.code==1){
        
         this.list=r.data.data.phone
     }
}){
    c.then(r=>{
        if(r.data.code==1){
            w(r)
           }
    })

}


