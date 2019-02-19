//页面初始化
function setHeight() {
  winHeight = window.innerHeight;
  var headNavHeight = $(".page-head").height();
  $(".right-section").height(winHeight - headNavHeight);
  if($(".middle-content")){
    $(".middle-content").height(winHeight - headNavHeight);
    $(".middle-content .middle-content-scroll").height(winHeight - headNavHeight-20)
  };
}
function setScroll(obj) {
  var boxHeight = $(obj).height();
  $(obj).mCustomScrollbar({
    theme:"minimal",
    scrollSpeed:3,
  });
}
$(function(){
  $(".right-section").css("padding","0px");
  setHeight();
  if($(".middle-content")){
    setScroll($(".middle-content .middle-content-scroll"));
  };
  setScroll($(".right-section"));
})
$(window).on("resize", function(){
  setHeight();
  // if($(".middle-content")){
  //   setScroll($(".middle-content .middle-content-scroll"));
  // };
  // setScroll($(".right-section"));
});
