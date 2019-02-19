$(function(){
  //加载时计算设置表格高度
  tableHeight();
  //改变窗口大小时计算设置表格高度
  $(window).resize(function(){
    tableHeight();
  });
  function tableHeight(){
    // 浏览器高度
    var browserHeight = $(document).height() - 300 ;
    $('#xssj-tbl').css({height : browserHeight});
  }

  // 点击“我已审阅过所有的数据，确认数据的准确性！”
  $('#right-sure-agree').click(function(){
    if($(this).hasClass('agree')){
      //去除选中
      $(this).find('i').addClass('icon-gou-nocked').removeClass('icon-gou-cked').css({color:'#969696'});;
      $(this).removeClass('agree').siblings().css({background:'#969696'}).attr('disabled','disabled');
    }else{
      //添加选中
      $(this).find('i').addClass('icon-gou-cked').removeClass('icon-gou-nocked').css({color:'#83b74a'});
      $(this).addClass('agree').siblings().css({background:'#83b74a'}).removeAttr('disabled');
    }
  });
})