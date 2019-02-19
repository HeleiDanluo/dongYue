$(function () {
  //点击批量操作按钮
  $(".batchUpdate-btn").click(function () {
    if ($(".batch-box").is(":hidden")) {
      $(".batch-box").css("display", "inline-block");
      $(".checkBox-label").each(function () {
        $(this).show().addClass("fadeInLeftBig");
      })
    } else {
      $(".batch-box").hide();
      $(".checkBox-label").each(function () {
        $(this).removeClass("fadeInLeftBig").hide();
      })
      $(".batchSelect").each(function () {
        $(this).find(".checkSpan").removeClass("select").prev().prop("checked", false);
      })
      $(".allSelect").attr("data-select", "false");
    }
  })
  //阻止选项框的冒泡
  $(".selectBox>p").click(function (e) {
    e && e.stopPropagation();
  })
  $(document).click(function () {
    $('.selectBox').hide();
  })
  //点击全选按钮
  // $(".allSelect").click(function () {
  //   if ($(this).attr("data-select") == "false") {
  //     $(this).attr("data-select", "true");
  //     $("input[name='selectItem']").each(function () {
  //       $(this).prop("checked", true);
  //       $(this).next().addClass("select");
  //     })
  //   } else {
  //     $(this).attr("data-select", "false");
  //     $("input[name='selectItem']").each(function () {
  //       $(this).prop("checked", false);
  //       $(this).next().removeClass("select");
  //     })
  //   }
  // })
})
