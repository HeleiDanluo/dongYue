$(function(){
  $('.enlarge .enlarge-img').on('click',function(){
      var newMask = document.createElement('div');
      // 点击处图片位置大小
      var offsetX = $(this).offset().left;
      var offsetY = $(this).offset().top;
      var oldWidth = $(this).width();//图片宽度
      var oldHeight = $(this).height();//图片高度
      var wToH = oldWidth/oldHeight;//图片宽高比
      var phoneWidth = document.body.clientWidth;
      var afterImgH = phoneWidth/wToH;// 放大后图片高度
      // 背景样式
      newMask.style.position = 'fixed';
      newMask.style.top = '0';
      newMask.style.zIndex= '99999';
      newMask.style.background = '#000000e0';
      newMask.style.width = '100%';
      newMask.style.height = '100%';
      // 克隆点击的图片
      var maskImg = $(this).clone();
      // 设置克隆图片样式，并添加到遮罩层
      maskImg.css({
          'position':'absolute',
          'left':offsetX,
          'top':offsetY,
          'width':oldWidth,
          'height':oldHeight
          }).appendTo(newMask)
          .addClass('newImg');
      // 遮罩层添加到body
      $('body').append(newMask);
      maskImg.animate({'width':'100%','height':afterImgH,'left':'0','top':'50%','margin-top':-afterImgH/2});
  });
  // 点击消失
  $('html').on('click','.newImg',function(){
      var mask = $(this).parent();
      mask.animate({'opacity':'0'});
      setTimeout(function() {
          mask.remove();
      }, 500);
  });
})