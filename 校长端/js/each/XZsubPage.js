// 校长段子页面
//学期课时详情
$('body').on('click', '.xqxq-list-content .title-item', function(){
  var $this = $(this);
  var downBox =$this.find('.down-box');
  if(downBox.hasClass('close')){
    downBox.removeClass('close').siblings().addClass('close');
  }else{
    downBox.addClass('close').siblings().removeClass('close');
  }
});
$('body').on('click', '.xqxq-list-content .title-item .down-item', function(){
  var $this = $(this);
  var baseName = $this.parent().parent().find('.title-txt').text($this.text())
});

// 体育成绩统计
// 点击查看班级
$('body').on('click', '.cha-kan-ban-ji', function(){
  $this = $(this);
  if($this.hasClass('active')){
    $this.removeClass('active').parent().parent().find('.sub-bar-box').hide();
  }else{
    $this.addClass('active').parent().parent().find('.sub-bar-box').show();
  }
});