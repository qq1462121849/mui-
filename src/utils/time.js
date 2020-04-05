
export function timeformat(data='0'){
   let index = data.lastIndexOf('-')
   if(index>10){
  return  data.substr(0,index,)+':'+data.substr(++index)
  }
 }