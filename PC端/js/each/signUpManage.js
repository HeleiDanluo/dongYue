$(function(){
  $(".item-name").each(function(){
    var height=$(this).parent().height();
    $(this).css({
      'height':height,
      'padding-top':height/2 -54
    })
  })
})
