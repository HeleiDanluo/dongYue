$(function(){
  //删除目标
  $('body').on('click', '.mubiao-guanbi', function (){
    $(this).parent().remove();
  });
  
  //查看目标
  $('body').on('click', '.cha-kan-mubiao', function (){
    $('.tanchuang').removeClass('hide');
  });
  
  //关闭查看目标
  $('body').on('click', '.jieshao-guanbi', function (){
    $('.tanchuang').addClass('hide');
  });
})