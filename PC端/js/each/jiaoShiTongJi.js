// 翻页
// var count = 0;
// $('body').on('click','.icon-toRight',function(){
//   count++;
//   var leftVal = -100 * count;
//   $('.list-content').animate({'left':leftVal + '%'});
// });
// $('body').on('click','.icon-toLeft',function(){
//   if(count){
//     count--;
//     var leftVal = -100 * count;
//     $('.list-content').animate({'left':leftVal + '%'});
//   }
// });
//切换反思、教案修改
// 显示反思
$('body').on('click','.toFansi',function(){
  $(this).removeClass('grayBtn').addClass('yellowBtn')
  .siblings().removeClass('yellowBtn').addClass('grayBtn');
  $('.jiaoAn').css({'display':'none'});
  $('.fanSi').css({'display':'block'});
})
// 显示教案
$('body').on('click','.toJiaoAn',function(){
  $(this).removeClass('grayBtn').addClass('yellowBtn')
  .siblings().removeClass('yellowBtn').addClass('grayBtn');
  $('.jiaoAn').css({'display':'block'});
  $('.fanSi').css({'display':'none'});
});

// 打开反思
$('body').on('click','.look',function(){
  // 点击反思，弹出弹窗
  var mHtml = $('<div style="height: 100%;overflow: auto;"></div>').load("fanSi.html");
  Alert.bigWindow({
    data: mHtml
  });
});

//教案修改记录&反思记录高度
$(function(){
  // var jiaoLen = $('.jiaoAn .list-content div').length;
  // var fanSiLen = $('.fanSi .list-content div').length;
  // var jiaoAnHieght = $('.jiaoAn .list-content').css('height').split('px')[0];
  // var fanSiHieght = $('.jiaoAn .list-content').css('height').split('px')[0];

  // if(jiaoLen  * 18> jiaoAnHieght){
  //   var jiaoAnContentHeight = Math.ceil(jiaoLen/2) * 36 +'px';
  //   $('.jiaoAn .list-content').css({'height':jiaoAnContentHeight});
  // }
  // if(fanSiLen * 18 > fanSiHieght){
  //   var fanSiContentHieght = Math.ceil(fanSiLen/2) * 36 +'px';
  //   $('.fanSi .list-content').css({'height':fanSiContentHieght});
  // };
  // console.log($(document).width())
  // var oldText = $('.jn-name').text();  
  // if (oldText.length > parseInt($(document).width()/300)+2) {  
  //     var newText = oldText.substring(0,parseInt($(document).width()/300))+"...";  
  //     $('.jn-name').text(newText);  
  // }  
});
