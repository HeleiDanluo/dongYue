$(function(){
  //点击出现二维码
  $('body').on('click', '.erweima-box .ewm-item', function(){
    var linkSrc = $(this).find('span').attr('linkSrc').trim();
    var ewmImg = '<div id="qrcode" class="alert-erweima-box"></div>';
    Alert.smallWindow({
      data:ewmImg,
      callBack:function(){
        $('#qrcode').qrcode(linkSrc)
          .find('canvas').css('width','99%');
      }
    })
  })
})