# project



>git

1,git 在一个开发分支切换到另外一个分支之前必须先把代码提交到当前分支的本地仓库中,否则会出现错误

 >Vue全局变量
 1,Vuex 
 2,本地存储sessionStorage
 3,挂载到window上  window.a='1888'
 4,组件传值
 5,通过后台页面数据交互

>移动端视口概念

1,视口暂时知道能通过meta标签进行设置
2,initial-scale=理想视口/布局视口
3,通过js可以模拟媒体查询,和动态引入css和js文件(配合节流)



ajax 概念
1, 前端向后端传递数据四种方式
   a: url地址栏问号拼接
   b: cookie携带(每次请求都会携带)
   c: 请求头
   d: 请求体
2, 在static目录存放静态数据模拟后台
    a: 演示模拟后台数据的终极异步解决解决方案 /static/mock/demo.json
 >  b: 原来ajax就是请求服务器的的某个地址,服务器返回改地址对应的文件,然后浏览器负责解析出来 (!importnant)
       (1) url地址栏请求到的服务器返回数据直接被浏览器渲染,ajax返回的数据交给异步对象,有js操作dom进行渲染
       (2) url地址栏只支持解析html,jpg...等格式,不支持 js和css
       (3) 如此我可以模拟跨域,用本地ip跑两个端口不一样的项目(协议和域名不一样)演示跨域
       (4) 用webpack-dev-server 代理跨域,访问另一个本地服务器托管的资源(维修师傅80端口请求用户端81端口,成功拿到static/mock/demo.json文件)


> 这是移动web项目

技术不断完善,性能优化
0,可以在控制台直接输入更方便
1, 在开发环境中不适用路由懒加载,生产环境才使用路由懒加载
2,在main.js中添加fastclick解决点击事件的300毫秒延迟问题
3,把不需要webpack打包的文件放在项目根目录中的static文件夹下,打包之后目录不变
4,min-width: 最小宽度  max-width: 最大宽度
5, 视口布局 vh和vw
6, 高频触发事件 ====> 使用节流提高页面性能
7, 使用cdn提高生产环境性能,减小webpack打包提价
8, 部分文件可以使用在线压缩工具对代码进行压缩混淆 
9, 使用伪元素进行页面渲染,提高页面渲染性能
10, 使用flex布局, 优势:移动端兼容性好 2,伸缩布局移动端布局更和谐漂亮
11, 使用 devtool: 'eval-source-map',进行错误调试
12,  添加clean-webpack-plugin插件每次打包自动删除之前打包文件,避免每次手动删除(只配置了生产环境)
13,  通过resolve对象的alias属性给路径起别名
14,  process.env.NODE_ENV根据这个webpack定义的变量来判断生产环境和开发环境进行对应操作
15,使用webpack-bundle-analyzer  插件将打包的内容展示为树状图,发现它大体有哪些模块组成，，然后优化它。
16, 利用happypack进行多线程打包,没用22s配置了js和less打包用时仅仅15s
17, 使用自动按需引入vant应该组件,配置.babelrc
18, 配置.postcssrc,把所有vant的css和rem进行重置,避免vant组件样式普遍小问题
19, 在index.html支持template模板字符串语法(应该是html-webpack-plugin支持)
20, 通过call 改变this的指向,(或者直接挂在到实例方法methods中)///loadmore//下拉加载更多中需要优化的地方
21, 使用async和await进行接口调用的优化,示例home和login页面,call()方法是Fuction.prototype上面的方法
22, 给axios增加一种新的数据提交格式 "application/x-www-form-urlencoded"
23, transition过渡动画  (定义在app根组件里面进入和退场动画)
24, <el-form :inline="true" :model="dataForm" @keyup.enter.native="getDataList()">利用keyup时间提高用户体验
25,<el-input  type="text" v-model.trim="deleNsbp" ></el-input>利用trim去除空格
26, 参照远程医疗大后台,对Vuex中state里面的数据进行重置,比如用户退出
27, Object.key('对象')  返回值是对象属性组成的数组





//新学习技术
1, Hbuilder可以进行更加方便的真机调试,还可以打断点
2, 服务器上的项目是基于端口号用来分区和管理的
3, 在任意文件夹都可以直接yarn add 或者cnpm i 进行下包(没有package.json也可以,但是不会记录包的版本)
4, v-once 绑定一次,数据在变化不会导致视图层更新
5, 回调函数中的this指向window,(window调用的回调函数)
6, 回调函数可以解决异步的问题,并且回调函数是window(系统)调用的,所以回调函数中this指向window
7, 为什么使用Promise,因为回调函数解决异步是传统解决方案,有回调地狱的缺点, 所以用Promise更好升级方案来替代
8, 表单中用chagne事件(不用click事件)值变化后出发函数
9, Object.defineProperty()是Vue双向数据绑定原理
10, 事件函数中不传递参数(函数后面不加小括号)第一个参数就是就是$event
  如果写了()需要手动传入$event
11, @click.once="fn"这个事件只会触发一次
12, template和transition是Vue提供给我们的两个自带标签,不会渲染在dom结构上(slot也不会)
13, v-if和v-else必须连用,否则会报错
14, 打断点debugger
15, history和hash模式
16, Vue实例渲染完之后,触发this.$nextTick(()=>{cosnole.log(vm)})//异步方法,实例渲染完成之后执行
17, 一个组件可以看做一个对象,组件理论上可以无限嵌套
18, 子父组件传值,Vue底层利用的发布订阅模式,
    父亲定义事件,儿子触发事件this.$emit,并将参数传递过去,
19, 默认插槽和具名插槽
20, ref如果放在最件上获取的不是dom 而是组件实例this.$ref.load来操作组件(父组件调用子组件中的方法)
21, 使用scss样式预处理器,下载node-sass和sass-loader即可,无需引入,vue-cli2以在/build/utils.js中自动引入
22, 计划生产环境采用cdn引入的项目,(开发环境不用cdn,需要依赖网络),可以先将cdn文件放在static目录下面,减小vendor体积
23, text-align:justify;让文字在盒子内等距分布
24, this.$nextTick(),里面需使用箭头函数,保证this指向,该函数在dom渲染完成后执行,是异步函数
25, 原生js中数组可以直接通过map(),filter()函数来进行一次操作，他们分别是做一次统一映射，和一次过滤。说的更通俗一点，就是map函数之后，数组元素个数不变，但是按照一定的条件转换，数组元素发生了变化。filter函数之后，数组元素个数可能发生了改变，但是数组元素不会发生改变
26,




//优化
1, 计算问题使用computed如果使用methods会有性能问题,computed可以进行缓存,节省性能,值不变是不会触发,
 watch可也以缓存,但是只能监听一个变化的值,当有多个互相依赖变化值时,用computed节省代码,watch可以监听异步
  页面中data复杂的计算逻辑使用computed的缓存作用避免被频繁渲染计算,浪费性能




 //es6 数组新方法
 filter  不操作原数组, 返回结果过滤后的新数组, 如果返回true表示这一项放到新数组中(删除某一项)
 map 映射 返回一个新的数组
 some 找true 找到后停止,返回true  ,找不到返回false
 every 找false 找到false后停止,返回false, 找不到返回true
 forEach 仅仅遍历 不能通过return结束循环
 reduce 常用于求和返回一个就和的结果

  // //
            let arr1=[
             {price:3,count:3},
             {price:2,count:2},
             {price:2,count:3},

            ]
            //pre 第一次换换就是第一项, 第二次pre 就是上次return 的结果...
            let sum=arr1.reduce((pre,next)=>{
              // console.log(pre)
                console.log(next)
                console.log(1)
                 return 1
            })
    //console.log(sum)

//新语法
1,reduce数组方法
2,...es7扩展运算符,可以结构赋值,可以合并数组和对象