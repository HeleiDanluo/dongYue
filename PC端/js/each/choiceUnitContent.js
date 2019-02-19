$(function(){
  //点击每个大项刷新大项中的每个小项目
  $(".content_item>a").click(function(){
    $(this).addClass("current").parent().siblings("li").children().removeClass("current");
    Alert.loading("show",".each-content-div");
    setTimeout(function(){
      Alert.loading("hide");
    },500)
  })
  $(".each-content-ul").on("click",".change-content",function(){
    callAlert("changeContentForm.html",{
      confirmFn: function(){
        alert("点击了确定");
      }
    })
  })
})