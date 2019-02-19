$(function(){
  selectNew();
  $(".everyDay-homeWork").on("click",".seeMore",function(){
    var title=$(this).closest(".homeWork-title");
    var whichBoxName=$(this).closest(".everyDay-homeWork").attr("data-txt");
    var detail=$(this).closest(".homeWork-title").next();
    var otherSibling=$(this).closest(".each-day").siblings();
    if(detail.is(":hidden")){
      seeMoreName=$(this).html();
    }
    console.log(seeMoreName);
    otherSibling.each(function(){
      $(this).find(".homeWork-title").removeClass("current");
      $(this).find(".seeMore").html(whichBoxName);
      $(this).find(".homeWork-detail").slideUp(200);
    });
    if(detail.is(":hidden")){
      title.addClass("current");
      $(this).html("收起");
      detail.slideDown(200);
    }else{
      title.removeClass("current");
      $(this).html(whichBoxName);
      detail.slideUp(200);
    }
  })
  $(".btn-group-option").on("click",">a",function(event){
    event.preventDefault();
    $(this).addClass("current").siblings().removeClass("current");
    var linkName=$(this).attr("href").slice(1);
    $("."+linkName).show().siblings().hide();
  });
  //底部班级多选
  $('body').on('click', '.special .class-link-group a', function(){
    if($(this).hasClass('current')){
      $(this).removeClass('current');
    }else{
      $(this).addClass('current');
    }
  });
  //选择多班发布作业，出现班级列表
  $('body').on('click', '.control-check', function(){
    var gou = $(this).find('.icon-selected-gougou');
    if(gou.hasClass('active')){
      gou.css({'color':'#fff'}).removeClass('active');
      $('.class-select.special').css({'display':'none'});
    }else{
      gou.css({'color':'#82b64a'}).addClass('active');
      $('.class-select.special').css({'display':'block'});
    }
  })
})