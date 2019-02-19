$(function(){
  //点击教学反思按钮,切换查看反思人
  $("#jiaoxuefansi").click(function(){
    var ckfs = $('.chakan');
    if(ckfs.css('display')=="none"){
      ckfs.siblings().find('span').css({'width':'6.3rem'});
      ckfs.css({'display':'block'});
    }else{
      ckfs.css({'display':'none'});
      ckfs.siblings().find('span').css({'width':'8.6rem'});
    }
  })
})