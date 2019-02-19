$(function(){
  $(".class-common-list .class-item:nth-of-type(7n+1)").css("margin-left","0");
  //点击班级的项目
  $(".class-common-list").on("click",".class-item",function(){
    Alert.loading("show");
    $(this).addClass("current").siblings().removeClass("current");
    var timer=setTimeout(function(){
      Alert.loading("hide");
      timer=null;
    },500)
  })
  //点击新增测试项目出现弹窗
  $(".add-item>a").click(function(){
    var that=$(this).parent();
    callAlert("addTestItemForm.html",{
      initFn:null,
      confirmFn:function(){
        var id=$(".testItem").attr("data-value");
        var newItemName=$("#newItemName").val();
        var percentNum=$("#percentNum").val();
        if(newItemName==""){
          Alert.dialogBox("alert-default","请填写项目")
        }else if(percentNum==""){
          Alert.dialogBox("alert-default","请填写项目占比")
        }else{
          that.before($('<div class="new-item">' +
            '<a href="javascript:;" class="f16">' +
            '<p class="new-item-name">'+newItemName+'</p>' +
            '<p class="new-item-percent">'+percentNum+'%</p>' +
            '</a><span class="delete">×</span></div>'));
          Alert.removeDialog("formType");
        }
      }
    })
  })
})