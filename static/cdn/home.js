import $ from 'jquery'
$(function () {
    //获取左侧的列表中的li注册鼠标进入的事件
    $("#left>li").mouseover(function () {
            //获取当前的li的索引值.index()方法
        var index=$(this).index();
   $("#center>li:eq("+index+")").siblings("li").hide();
      //   $("#center>li:eq(' '+ index).siblings("li").hide();
    //  $("#center>li:eq(String(index)).siblings("li").hide();
   // $("#center>li:eq( ' '+index)").siblings("li").hide();
        $("#center>li:eq("+index+")").show();
    });
    //获取右侧的列表中的li注册鼠标进入的事件
    $("#right>li").mouseover(function () {
        var index=$(this).index()+9;
        $("#center>li:eq("+index+")").siblings("li").hide();
        $("#center>li:eq("+index+")").show();
    });
});
