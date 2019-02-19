$(function(){
  //调用调整下边距的方法
  removeLiMb($(".course-list"));
  //加载设置课程课时的弹窗
  $(".addClassTime").click(function(){
    var title=$(this).text();
    var formBox=$('<div class="alert-box formType animated fadeIn"></div>')
    formBox.load('../formHtml/addClassTimeForm.html',function () {
      $(".close-btn").click(function(){
        Alert.removeDialog("formType");
      })
      //设置弹窗标题
      $(".form-title").text(title+"预览");
      //设置预览展示项目
      var showListHtml=$('<div class="showList clearfix mt20"></div>');
      //模拟数据
      var data=[
        {name:"小足球"},
        {name:"排球或软式排球"},
        {name:"篮球"},
        {name:"羽毛球"},
        {name:"乒乓球"}
      ]
      var itemHtml="";
      $.each(data,function(k,v){
        itemHtml+='<a href="javascript:;" class="showItem  ">'+data[k].name+'</a>';
      })
      showListHtml.append(itemHtml)
      $(".form-content").prepend(showListHtml);
      setAlertPosition();
      $(".submit").click(function(){
        Alert.dialogBox("alert-default","请认真填写课时！！！")
      })
    });
    $("body").append(formBox);
  })
})
//调整页面课程项的下边距
function removeLiMb(obj){
  obj.each(function(){
    var length=$(this).children().length;
    var removeNum=((length%4)==0?4:(length%4));
    // console.log(removeNum);
    // console.log($(this));
    for(var i=length-1;i>=length-removeNum;i--){
      $($(this).children()[i]).css("margin-bottom","0")
    }
  })
}