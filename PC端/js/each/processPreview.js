$(function () {
  $(".each-week-process").each(function(){
    var height=$(this).height();
    $(this).find(".linkName").css("line-height",height+"px");
  })
})