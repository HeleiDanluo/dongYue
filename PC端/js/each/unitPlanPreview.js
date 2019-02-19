$(function(){
  $(".sport-item-model .each-unit-list:not(:last-child)").css( {"padding-bottom":"20px","border-bottom":"1px dotted #b4b4b4"})
  $(".preview-unit-detail .sport-item-model:not(:first-child)").css("margin-top","40px")
  setItemHeight();
})
//设定每个项目前面标签的高度
function setItemHeight(){
  var itemHeight=$(".each-unit-item").height();
  $(".each-unit-item").each(function(){
    var itemHeight=$(this).height();
    console.log(itemHeight);
    $(this).find(".linkName").css("line-height",itemHeight+"px")
  })
}