$(function () {
  //点击复选框按钮
  checkBox();
  //点击表格的选项按钮
  $(".selectItemBtn").click(function (e) {
    e && e.stopPropagation();
    $(this).parent().parent().siblings().find(".selectBox").hide();
    $(this).next().toggle();
  })
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
  $(".allSelect").click(function () {
    if ($(this).attr("data-select") == "false") {
      $(this).attr("data-select", "true");
      $("input[name='selectItem']").each(function () {
        $(this).prop("checked", true);
        $(this).next().addClass("select");
      })
    } else {
      $(this).attr("data-select", "false");
      $("input[name='selectItem']").each(function () {
        $(this).prop("checked", false);
        $(this).next().removeClass("select");
      })
    }
  })
  //增加计划进度表单弹窗
  $(".planManage").click(function(){
    var formBox = $('<div class="alert-box formType animated fadeIn"></div>')
    formBox.load('../formHtml/addUnitPlanForm.html', function () {
      $(".close-btn").click(function () {
        Alert.removeDialog("formType");
      });
      $(".form-title").html("计划进度管理");
      $(".planList input").attr("placeholder","选择所属计划")
      // $(".unitPlanList .select-list")
      setAlertPosition();
      selectNew();
      $(".submitBtn .form-confirm").click(function () {
        Alert.dialogBox("alert-talk","该调接口了额",{
          confirmFn:function(){
            console.log("进错了");
            alert("请调接口！！！");
          }
        })
      });
    });
    $("body").append(formBox);
  })
  //添加成绩管理列表项的弹窗
//  $(".addGrade").click(function(){
//    var formBox = $('<div class="alert-box formType animated fadeIn"></div>')
//    formBox.load('../formHtml/gradeManageForm.html', function () {
//      $(".close-btn").click(function () {
//        Alert.removeDialog("formType");
//      });
//      setAlertPosition();
//      selectNew();
////      $(".submitBtn .form-confirm").click(function () {
////        Alert.dialogBox("alert-talk","异步请求",{
////          confirmFn:function(){
////            alert("异步请求")
////          }
////        })
////      });
//    });
//    $("body").append(formBox);
//  })
})
