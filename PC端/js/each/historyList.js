$(function () {
  $(".homeWork-detail-box").on("mouseover", ".homeWork-detail-item", function () {
    showDetail(this);
  }).on("mouseout", ".homeWork-detail-item", function () {
    $(".homeWork-detail-txt").remove();
  })
})
function showDetail(obj) {
  var txt = $(obj).attr("data-hwTxt");
  var itemNum = parseInt($(obj).attr("data-item")) - 1;
  var detailBox = $('<div class="homeWork-detail-txt t_l"><div class="top-caret"><span></span></div><p class="word">' + txt + '</p></div>')
  if(txt!=""){
    $(obj).closest(".homeWork-content").append(detailBox);
    var detailBoxWid = $(obj).parent().width();
    detailBox.fadeIn(200).css("left", "2.5%").width(detailBoxWid);
    detailBox.find(".top-caret>span").css("left", (itemNum * 14.5) + 6 + "%");
  }
}