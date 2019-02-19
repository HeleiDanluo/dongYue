/**
 * Created by admin on 2017/6/23.
 */
$(function(){
  $('.myradio').click(function(){
    $(this).addClass("active").siblings().removeClass("active");
  });
})