$(function(){
  // 字数统计
  $('textarea').bind('input',function(e){
    var $this=$(this)
    var len=$this.val().length
    var last=2000-len
    if(last>=0){
      $('.word').html(last)
    }
    var val=$this.val().slice(0,2000)
    $this.val(val)
  });
  // 公开私密切换
  $('.point').click(function(){
    $(this).addClass('focus').siblings().removeClass('focus');
  })
})