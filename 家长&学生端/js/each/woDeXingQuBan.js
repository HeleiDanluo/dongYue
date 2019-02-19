$(function () {
  var videoLen = $('.study-content .shipin-item').length;
  if(videoLen <= 6){
    $('.study-content').css({
      'flex-direction':'row',
      'justify-content':'space-between',
      'height':'auto'
    });
    $('.shipin-item').css('margin','0');
  }
})