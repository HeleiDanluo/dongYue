//ppt数量
var pptNum;
//已经是第一张了 提示
var warnFirst = '<div class="ppt-warn">\
<i class="icon-tips"></i>\
<h3 class="warn-txt">已经是第一页了</h3>\
</div>'
//已经是最后一张了 提示
var warnLast = '<div class="ppt-warn">\
<i class="icon-tips"></i>\
<h3 class="warn-txt">已经是最后一页了</h3>\
</div>'
//ppt整体界面，包括所有按钮
var pptBody = '<div id="ppt-box">\
<!-- 关闭按钮 -->\
<i onclick="guanbi()" class="icon-guanbi close-ppt"></i>\
<!-- 向左切换 -->\
<div class="btn-left">\
  <i class="icon-arrow icon-toLeft"></i>\
</div>\
<!-- 向右切换 -->\
<div class="btn-right">\
<i class="icon-arrow icon-toRight"></i>\
</div>\
<!-- ppt内容 -->\
<div class="ppt-content">\
</div>\
</div>'
var allPpt = '';
//下一张
$('body').on('click','.btn-right',function(){
  //调用下一页函数
  nextPage();
});

//上一张
$('body').on('click','.btn-left',function(){
  //调用上一页函数
  beforePage();
});

// 下一页函数
function nextPage(){
  //当前的index
  var currentIndex = $('.ppt-item.current').index();
  if(currentIndex+1 >= pptNum){
    //添加警告
    $('.ppt-content').append(warnLast);
    // 1秒以后移除警告
    setTimeout(function(){
      $('.ppt-content .ppt-warn').remove();
    }, 1000);
  }else{
    //before消失
    $('.ppt-item').eq(currentIndex - 1).removeClass('before');
    //current变为before
    $('.ppt-item').eq(currentIndex).animate({'left':'-100%'})
    .removeClass('current')
    .addClass('before');
    //next变为current
    $('.ppt-item').eq(currentIndex + 1).animate({'left':'0%'})
    .removeClass('next')
    .addClass('current');
    //next下一个变为next
    $('.ppt-item').eq(currentIndex + 2)
    .addClass('next');
    var curPpt = $('.ppt-item .ppt-src-content').eq(currentIndex + 1);
    var pptSrc = curPpt.attr('src').split('_')[0];
    setTimeout(function() {
      curPpt.attr({'src':pptSrc})
    }, 500);
  }
}

// 上一页函数
function beforePage(){
  //当前的index
  var currentIndex = $('.ppt-item.current').index();
  if(currentIndex <= 0){
    //添加警告
    $('.ppt-content').append(warnFirst);
    // 1秒以后移除警告
    setTimeout(function(){
      $('.ppt-content .ppt-warn').remove();
    }, 1000);
  }else{
    //before之前元素变为before
    $('.ppt-item').eq(currentIndex - 2).addClass('before');
    //before变为current
    $('.ppt-item').eq(currentIndex - 1).animate({'left':'0%'})
    .addClass('current')
    .removeClass('before').click();;
    //current变为next
    $('.ppt-item').eq(currentIndex).animate({'left':'100%'})
    .addClass('next')
    .removeClass('current');
    //next消失
    $('.ppt-item').eq(currentIndex + 1)
    .removeClass('next');
  }
}

//打开ppt
function kaishi() {
  $('body').append(pptBody);
  $('.ppt-content').append(allPpt);    
  var docElm = document.getElementById('ppt-box');
  //W3C   
  if (docElm.requestFullscreen) {
    docElm.requestFullscreen();
  }
  //FireFox   
  else if (docElm.mozRequestFullScreen) {
    docElm.mozRequestFullScreen();
  }
  //Chrome等   
  else if (docElm.webkitRequestFullScreen) {
    docElm.webkitRequestFullScreen();
  }
  //IE11   
  else if (docElm.msRequestFullscreen) {
    docElm.msRequestFullscreen();
  }
}

// 关闭ppt
function guanbi() {
  $('#ppt-box').remove();
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitCancelFullScreen) {
    document.webkitCancelFullScreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
}

//监听键盘事件
//keyCode 32空格 37左 39右
$(document).keydown(function(event){
  if(event.keyCode == 32){
    $('.page-body').click();
  }else if(event.keyCode == 37){
    //键盘左 上一张
    beforePage();
  }else if(event.keyCode == 39){
    //键盘左 上一张
    nextPage();
  }
});

// 加载ppt函数
//只要把ppt路径传进来就可以了
$(function(){
  var pptIp = 'http://192.168.1.110:8888/#/'
  var pptList = [
    'home',
    'indexPage',
    'text',
    'textOne',
    'txtAndPic',
    'txtAndPicSecond',
    'video',
    'videoTop',
    'pic',
    'leftText',
    'leftVideo',
    'leftPic',
    'leftTextMultPic',
    'txtAndPicThird',
    'txtAndPicFourth',
    'textTwo',
    'endPage',
  ];
  pptNum = pptList.length;
  for(var i=0; i<pptNum; i++){
    //ppt内容
    var pptBox = $('<div class="ppt-item"><iframe class="ppt-src-content" src="" allowfullscreen="allowfullscreen" frameborder="0"></iframe></div>');

    //第一个添加current
    if(i == 0){
      pptBox.addClass('current').find('.ppt-src-content').attr('src', pptIp + pptList[i]);
    }else if(i == 1){
      pptBox.addClass('next').find('.ppt-src-content').attr('src', pptIp + pptList[i] + '_none');
    }else{
      pptBox.find('.ppt-src-content').attr('src', pptIp + pptList[i] + '_none');
    }
    allPpt += pptBox[0].outerHTML;
    // $('.ppt-content').append(pptBox[0].outerHTML);    
  }
})