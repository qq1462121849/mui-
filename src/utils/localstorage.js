// function storage(a){
//     switch(a){
//         case 1:
//             localStorage.setItem('timer','zhangxiaodongeditor');
//             break;
//         case 2:
//          return   localStorage.getItem('timer');
//             break;
//         case 3:
//             localStorage.removeItem('timer')
//     }
// }
export function storage(a){
    if(a==1){
        localStorage.setItem('timer','zhangxiaodongeditor');
    }else if(a==2){
        return localStorage.getItem('timer');
    }else if(a==3){
        localStorage.removeItem('timer')
    }
}