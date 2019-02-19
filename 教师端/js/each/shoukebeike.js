$(function(){
  //点击展开下拉列表
  $('body').on('click', '.beike-list', function(){
    var $this = $(this);
    if($this.hasClass('open')){
      $this.removeClass('open');
    }else{
      $this.addClass('open').siblings().removeClass('open');
    }
  })

  // 获取当前时间 自动展开今日
  var myDate = new Date();
  var myYear = myDate.getFullYear();
  var myMonth = myDate.getMonth() + 1;
  var myDay = myDate.getDate();
  var today = myYear + '/' + myMonth + '/' + myDay

  today = '2018/09/17';//手动设置为第一个值默认展开

  var skDateArr = $('.sk-date');
  for(var i=0; i<skDateArr.length; i++){
    if($(skDateArr[i]).text() == today){
      $(skDateArr[i]).parent().parent().parent().addClass('open').siblings().removeClass('open');
    }
  }
})