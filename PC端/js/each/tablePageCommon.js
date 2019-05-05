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
$(".btn-drop-list-content").click(function () {
   if ($(".batch-box").is(":hidden")) {
     $(".batch-box").css("display", "inline-block");
     $(".checkBox-label").each(function () {
       $(this).show().addClass("fadeInLeftBig");
     });
     $(this).find('.btn-drop-list-box').show();
    } else {
      $(".batch-box").hide();
      $(".checkBox-label").each(function () {
        $(this).removeClass("fadeInLeftBig").hide();
      })
      $(".batchSelect").each(function () {
        $(this).find(".checkSpan").removeClass("select").prev().prop("checked", false);
      })
      $(".allSelect").attr("data-select", "false");
      $(this).find('.btn-drop-list-box').hide();
   }
 });
  //阻止选项框的冒泡
  $(".selectBox>p, .drop-item").click(function (e) {
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
//点击单选 判断点击单个选项后 全选按钮如何操作
$('body').on('click', '.batchSelect input', function(e){
  e && e.stopPropagation();
  var allSelectItem = $('.batchSelect .checkSpan').length;
  var unSelectedLen = $('.batchSelect .select').length;
  if(unSelectedLen < allSelectItem){
    $(".allSelect").attr("data-select", "false");
  }else{
    $(".allSelect").attr("data-select", "true");
  }
});

  //增加教学计划表单弹窗
  $(".addPlan").click(function () {
    var formBox = $('<div class="alert-box formType animated fadeIn"></div>')
    formBox.load('../formHtml/addTeachPlanForm.html', function () {
      $(".close-btn").click(function () {
        Alert.removeDialog("formType");
        $(".pika-single").remove();
      })
      $(".form-confirm").click(function () {
        alert("点击确定");
      });
      // var classYearStart = new Pikaday({
      //   field: document.getElementById('classYearStart'),
      //   onSelect: function () {
      //     if (this.getDate().getDate() === new Date().getDate() && this.getDate().getMonth() == new Date().getMonth() && this.getDate().getYear() == new Date().getYear()) {
      //       Alert.dialogBox("alert-default", "请选择正确的时间");
      //     }
      //   }
      // });
      // var classYearEnd = new Pikaday({
      //   field: document.getElementById('classYearEnd'),
      //   onSelect: function () {
      //     if (this.getDate().getDate() === new Date().getDate() && this.getDate().getMonth() == new Date().getMonth() && this.getDate().getYear() == new Date().getYear()) {
      //       Alert.dialogBox("alert-default", "请选择正确的时间");
      //     }
      //   }
      // });
      // var classStartTime = new Pikaday({
      //   field: document.getElementById('classStartTime'),
      //   onSelect: function () {
      //     if (this.getDate().getDate() === new Date().getDate() && this.getDate().getMonth() == new Date().getMonth() && this.getDate().getYear() == new Date().getYear()) {
      //       Alert.dialogBox("alert-default", "请选择正确的时间");
      //     }
      //   }
      // });
      // var classEndTime = new Pikaday({
      //   field: document.getElementById('classEndTime'),
      //   onSelect: function () {
      //     if (this.getDate().getDate() === new Date().getDate() && this.getDate().getMonth() == new Date().getMonth() && this.getDate().getYear() == new Date().getYear()) {
      //       Alert.dialogBox("alert-default", "请选择正确的时间");
      //     }
      //   }
      // });
      selectNew();
      checkBox();
      setAlertPosition();
    });
    $("body").append(formBox);
  })
  //增加单元计划表单弹窗
  $(".addUnitPlan").click(function(){
    var formBox = $('<div class="alert-box formType animated fadeIn"></div>')
    formBox.load('../formHtml/addUnitPlanForm.html', function () {
      $(".close-btn").click(function () {
        Alert.removeDialog("formType");
      });
      setAlertPosition();
      selectNew();
      $(".submitBtn .form-confirm").click(function () {
        Alert.dialogBox("alert-talk","该调接口了额",{
          confirmFn:function(){
            alert("请调接口！！！")
          }
        })
      });
    });
    $("body").append(formBox);
  })
  //增加计划进度表单弹窗
  $(".planManage").click(function(){
    var formBox = $('<div class="alert-box formType animated fadeIn"></div>')
    formBox.load('../formHtml/addPlanProcessForm.html', function () {
      $(".close-btn").click(function () {
        Alert.removeDialog("formType");
      });
      setAlertPosition();
      selectNew();
      $(".submitBtn .form-confirm").click(function () {
        Alert.dialogBox("alert-talk","异步请求",{
          confirmFn:function(){
            alert("异步请求");
          }
        })
      });
    });
    $("body").append(formBox);
  })
  //添加成绩管理列表项的弹窗
  $(".addGrade").click(function(){
    var formBox = $('<div class="alert-box formType animated fadeIn"></div>')
    formBox.load('../formHtml/gradeManageForm.html', function () {
      $(".close-btn").click(function () {
        Alert.removeDialog("formType");
      });
      setAlertPosition();
      selectNew();
      $(".submitBtn .form-confirm").click(function () {
        Alert.dialogBox("alert-talk","异步请求",{
          confirmFn:function(){
            alert("异步请求")
          }
        })
      });
    });
    $("body").append(formBox);
  })
  // //评价管理点击评价学生的弹窗
  // $(".commentStudent").click(function(){
  //   console.log("haha");
  //   callAlert("commentStudentForm.html",{
  //     confirmFn: function(){
  //       alert("haha");
  //     }
  //   })
  // })
  

  //新的下拉导出点击事件
  $('.daochu-new').click(function(){
    $('.batchSelect .select').each(function(){
      var selectedId = $(this).siblings().val();
      // console.log(selectedId);
    });
  });
})
