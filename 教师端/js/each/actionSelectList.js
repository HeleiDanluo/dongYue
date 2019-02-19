/**
 * Created by admin on 2017/6/23.
 */
$(function(){
  $(".middle-list-ul").on("click",">li",function(){
    if($(this).hasClass("open")){
      $(this).removeClass("open").children(".sport-list").slideUp();
    }else{
      $(this).siblings().removeClass("open").children(".sport-list").slideUp();
      $(this).addClass("open").children(".sport-list").slideDown();
    }
  })
})