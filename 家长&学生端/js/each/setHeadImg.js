/**
 * Created by Cake on 2017/4/10.
 */


$(function () {
  var width = $(window).width(),
    height = $(window).height() - $('header').height() * 2,
    dom = $('html'),
    attrDom = dom.attr('data-dpr'),
    domInner = $('section').height(),
    square;

  if (attrDom == 1) {
    square = 50
  } else if (attrDom == 2) {
    square = 100
  } else if (attrDom == 3) {
    square = 150
  }

  $('.cut').crop({
    w: width > height ? height : width,
    h: height,
    r: (width - square) * 0.5,
    rh: domInner,
    callback:function(base64Data){
      /*上传事件放这里*/
      $.warning()
    }
  });

});