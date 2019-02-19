$(function () {

  $(".star-select").on("click", ">.icon-group-box>span", function () {
    var selectLevel = parseInt($(this).attr("data-num"));
    var starNodes=$(this).parent().children();
    starNodes.removeClass("light");
    $(this).closest(".star-select").attr("data-select",selectLevel);
    for(var i=0;i<selectLevel;i++){
      $(starNodes[i]).addClass("light");
    }
  })

  $(".reply-btn").click(function(){
    $(".reply-select-Mask").addClass("show");
  })

  $(".reply-select-Mask .txt-list>ul>li").click(function(){
    $(".reply-box>textarea").val($(this).html());
    $(".reply-select-Mask").removeClass("show");
  })

  $('.icon-group-box>label').click(function(e){
    $('.icon-group-box label').attr('class','')
    var index=parseInt($(this).index())
    var counter=index+1
    $('.icon-group-box label').eq(index).toggleClass('color-'+counter)
    .find('p').toggleClass('color-'+counter)

    e.preventDefault();


  })

})