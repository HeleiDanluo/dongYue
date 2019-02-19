$(function(){
  var slideContent = $('.slide-box');
  var class_ = $('#class');
  var year = $('#year');
  var month = $('#month');
  // 点击头部画出选项
  $('.select').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    if($(this).hasClass('class_')){//班级
      if(slideContent.hasClass('active')){
        //隐藏函数
        slideIn();
      }else{
        //划出函数
        slideOut('banji-res');
      }
    }else if($(this).hasClass('year')){//年
      if(slideContent.hasClass('active')){
        slideIn();
      }else{
        slideOut('year-res');
      }
    }else if($(this).hasClass('month')){//月
      if(slideContent.hasClass('active')){
        slideIn();
      }else{
        slideOut('month-res');
      }
    }

  });
  // 点击选项
 $('body').on('click', '.slide-content>div>li', function(){
   var selectedVal = [];
   $(this).find('i').addClass('icon-selected-gougou').parent().siblings().find('i').removeClass('icon-selected-gougou');
   selectedVal[0] = $('#banji-res li .icon-selected-gougou').siblings().html();//班级
   selectedVal[1] = $('#year-res li .icon-selected-gougou').siblings().html();//年
   selectedVal[2] = $('#month-res li .icon-selected-gougou').siblings().html();//月
   $('.class_ .text').html(selectedVal[0]);
   $('.year .text').html(selectedVal[1]);
   $('.month .text').html(selectedVal[2]);
   alert('结果数组： '+selectedVal);
   slideIn();
 })
  

// 划出函数
function slideOut(slideEle){
  $('.slide-box').css({
    'display':'block',
  }).animate({
    'opacity':'1'
  }).addClass('active')
  .find('#'+slideEle).css({
    'display':'block',
    'top':'10%'
  })
}

  // 划入函数
function slideIn(){
  slideContent.css({
    'display':'none',
  }).animate({
    'opacity':'0'
  }).removeClass('active')
  .find('div').css({
    'display':'none',
    'top':'10%'
  })
}

// 选中数字教学
$('.list-item').click(function(){
  // alert('sd')
  $(this).addClass('active').siblings().removeClass('active');
});
  
})