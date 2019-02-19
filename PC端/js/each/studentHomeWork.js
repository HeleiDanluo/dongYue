$(function(){
  $(".teach-back-input").on("keyup",function () {
    var strLength=$(this).val().length;
    $(".word-num").html(strLength);
    if(strLength>100){
      $(this).val($(this).val().slice(0,100))
      $(".word-num").html($(this).val().length);
    }
  });
})