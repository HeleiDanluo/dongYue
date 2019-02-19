
$(function(){
    var chat = $('\
    <a id="chat">\
      <img src="../images/icon_Online.png">\
    <div>QQ客服</div></a>')
    $('body').append(chat);
    chat.click(function(){
      window.open('http://wpa.qq.com/msgrd?v=3&uin=2070744318&site=qq&menu=yes', '_blank', 'height=544, width=644,toolbar=no,scrollbars=no,menubar=no,status=no');
    });
})