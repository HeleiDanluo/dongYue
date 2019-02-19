$(function () {
  //选择项目显示
  // $(".add-this-class.canAdd>a").click(function () {
  //   var timer = null;
  //   var self = this;
  //   var addWeekContentBox = $(self).closest(".week-content-item").find(".add-content-box")
  //   if (addWeekContentBox.is(":hidden")) {
  //     $(self).parent().addClass("rotateClose");
  //     addWeekContentBox.find(".sport-type").show();
  //     addWeekContentBox.slideDown(200);
  //   } else {
  //     $(self).parent().removeClass("rotateClose");
  //     addWeekContentBox.slideUp(200);
  //     timer = setTimeout(function () {
  //       addWeekContentBox.find(".sport-type").hide();
  //       addWeekContentBox.find(".each-sport-detail").hide();
  //       timer = null;
  //     }, 200)
  //   }
  // })
  // //点击大的运动的项目后的事情
  // $(".sport-type>a").click(function () {
  //   var self = this;
  //   $(self).siblings().each(function () {
  //     $(this).removeClass("select");
  //   })
  //   $(self).addClass("select").parent().next().show();
  // })
  // //点击详细运动项目后的监听事件
  // $(".each-sport-detail>a").click(function () {
  //   var self = this;
  //   var parentDiv = $(self).closest(".week-content-item");
  //   //$.ajax()
  //   console.log(parentDiv.prev());
  //   parentDiv.find(".add-this-class.canAdd").removeClass("rotateClose");
  //   parentDiv.find(".add-content-box").slideUp(200);
  //   timer = setTimeout(function () {
  //     parentDiv.find(".sport-type").hide();
  //     parentDiv.find(".each-sport-detail").hide();
  //     timer = null;
  //   }, 200)
  // })
  $(".add").click(function () {
    callAlert("addEachClass.html", {
      initFn: function () {
        // new ConstructSelect($("#sport-option-type"), {
        //   callback: function () {
        //     alert("选择了大类")
        //   }
        // });
        // new ConstructSelect($("#sport-option-item"), {
        //   callback: function () {
        //     alert("选择了小项目")
        //   }
        // })
      }
    })
  })
})