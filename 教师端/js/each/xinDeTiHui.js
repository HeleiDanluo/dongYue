/**
 * Created by admin on 2017/6/23.
 */
$(function(){
  // 星星点击效果
  $('#stars div').click(function(){ 
    $(this).addClass('active').prevAll().addClass('active');//当前和之前添加active
    $(this).nextAll().removeClass('active');//之后删除active
  });
  // 笑脸点击效果
  $("#face div").click(function(){
    $(this).addClass('active').siblings().removeClass('active');
  });
})