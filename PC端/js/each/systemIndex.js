$(function(){
  var backImgBili=0.55;
  var minHeight=660;
  setDivSize($(".back-img"),backImgBili,minHeight,true);
  $(window).on("resize", function(){
    setDivSize($(".back-img"),backImgBili,minHeight,false);
  });
})
function setDivSize(obj,bili,minHeight,isOnsize){
  var windowWidth=window.innerWidth;
  console.log(windowWidth);
  var timer=null;
  if(windowWidth>1200){
    obj.width(windowWidth);
    obj.height(windowWidth*bili);
    if(isOnsize){
        setScroll($(".startPageScroll"));
    }
  }else{
    console.log("2");
    obj.width(1200);
    obj.height(minHeight);
    if(isOnsize){
        setScroll($(".startPageScroll"));
    }
  }
}
function setScroll(obj) {
  console.log("重新刷滚动条");
  obj.mCustomScrollbar({
    theme:"minimal",
    axis:"yx",
  });
}