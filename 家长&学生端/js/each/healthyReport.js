$(function(){
  $(".report-item").on("click",">.report-title>span",function(){
    if(!$(this).hasClass("rotate")){
      $(this).addClass("rotate");
      $(this).closest(".report-item").children(".report-content").show();
    }else{
      $(this).removeClass("rotate").closest(".report-item").children(".report-content").hide();
    }
  })
})