$(function(){
  // 字数限制
  $(document).on('input propertychange','.mubiao-area',function(){
    var txtLen = $(this).val().length;
    if(txtLen <= 200){
      $('.mubiao-zishu').html(200-txtLen);
    }
  });
})