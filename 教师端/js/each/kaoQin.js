$(function(){
  // 点击保存
  $('#save-kq').click(function(){
    alert('保存')
  });
  // 切换选中状态
  $('.operate a').click(function(){
    var nowIndex = $(this).index();
    switch(nowIndex){
      case 0:{
        $(this).addClass('green-all active').siblings().removeClass('yellow-all blue-all active');;
        break;
      }
      case 1:{
        $(this).addClass('blue-all active').siblings().removeClass('green-all yellow-all active');;
        break;
      }
      case 2:{
        $(this).addClass('yellow-all active').siblings().removeClass('blue-all green-all active');;
        break;
      }
    }
  });
})