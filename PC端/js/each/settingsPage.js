$(function () {
  var nowPosition = 1;
  $(".getCode").click(function () {
    getPhoneCode($(this), {
      callBack: function () {
        //这里是点击后的执行代码区域
        console.log("执行回调");
        // return false; //这句代码是中断当前操作的 必须return false
      }
    })
  })
  // $(".advice-input").on("keyup",function () {
  //   var strLength=$(this).val().length;
  //   $(".word-num").html(strLength);
  //   if(strLength>100){
  //     $(this).val($(this).val().slice(0,100))
  //     $(".word-num").html($(this).val().length);
  //   }
  // });
  var currentSetName = $($(".header-menu>span")[nowPosition - 1]).children().attr("href").slice(1);
  $("#" + currentSetName).fadeIn().siblings().fadeOut();
  $($(".header-menu>span")[nowPosition - 1]).children().addClass("confirmCur");

  $(".header-menu").on("mouseover", ">span>a", function () {
    var index = parseInt($(this).attr("data-index"));
    $(".currentPosition").css("left", ((index - 1) * 33.3333) + "%");
    $(this).parent().siblings().children().removeClass();
    $(this).removeClass().addClass("current");
  }).on("mouseout", ">span>a", function () {
    $(".currentPosition").css("left", ((nowPosition - 1) * 33.3333) + "%");
    $(this).removeClass("current");
    $($(".header-menu>span")[nowPosition - 1]).children().addClass("confirmCur");
  }).on("click", ">span>a", function (event) {
    event.preventDefault();
    var index = parseInt($(this).attr("data-index"));
    var settingOption = $(this).attr("href").slice(1);
    nowPosition = index;
    $(".currentPosition").css("left", ((index - 1) * 33.3333) + "%");
    $("#" + settingOption).fadeIn().siblings().fadeOut();
  });


})


//弹出图片裁剪框
$("#school-logo-res").on("click", function () {
  $(".tailoring-container").toggle(200);
});
//图像上传
function selectImg(file) {
  if (!file.files || !file.files[0]) {
    return;
  }
  var reader = new FileReader();
  reader.onload = function (evt) {
    var replaceSrc = evt.target.result;
    //更换cropper的图片
    $('#tailoringImg').cropper('replace', replaceSrc, false); //默认false，适应高度，不失真
  }
  reader.readAsDataURL(file.files[0]);
}
//cropper图片裁剪
$('#tailoringImg').cropper({
  aspectRatio: 160 / 45, //默认比例
  preview: '.previewImg', //预览视图
  guides: false, //裁剪框的虚线(九宫格)
  autoCropArea: 0.8, //0-1之间的数值，定义自动剪裁区域的大小，默认0.8
  movable: false, //是否允许移动图片
  dragCrop: true, //是否允许移除当前的剪裁框，并通过拖动来新建一个剪裁框区域
  movable: true, //是否允许移动剪裁框
  resizable: true, //是否允许改变裁剪框的大小
  zoomable: false, //是否允许缩放图片大小
  rotatable: true, //是否允许旋转图片
  crop: function (e) {
    // 输出结果数据裁剪图像。
  }
});
//旋转
$(".cropper-rotate-btn").on("click", function () {
  $('#tailoringImg').cropper("rotate", 45);
});
//复位
$(".cropper-reset-btn").on("click", function () {
  $('#tailoringImg').cropper("reset");
});
//换向
var flagX = true;
$(".cropper-scaleX-btn").on("click", function () {
  if (flagX) {
    $('#tailoringImg').cropper("scaleX", -1);
    flagX = false;
  } else {
    $('#tailoringImg').cropper("scaleX", 1);
    flagX = true;
  }
  flagX != flagX;
});

//裁剪后的处理
$("#sureCut").on("click", function () {
  if ($("#tailoringImg").attr("src") == null) {
    return false;
  } else {
    var cas = $('#tailoringImg').cropper('getCroppedCanvas'); //获取被裁剪后的canvas
    var base64url = cas.toDataURL('image/png'); //转换为base64地址形式
    alert('图片base64url：\n' + base64url)
    $("#school-logo-res").prop("src", base64url); //显示为图片的形式

    //关闭裁剪框
    closeTailor();
  }
});
//关闭裁剪框
function closeTailor() {
  $(".tailoring-container").toggle(200);
}
