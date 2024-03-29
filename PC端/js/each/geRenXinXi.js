// 上传图片回显
// function changImg(e) {
//   for (var i = 0; i < e.target.files.length; i++) {
//     var file = e.target.files.item(i);
//     if (!(/^image\/.*$/i.test(file.type))) {
//       continue; //不是图片 就跳出这一次循环    
//     }
//     //实例化FileReader API    
//     var freader = new FileReader();
//     freader.readAsDataURL(file);
//     freader.onload = function (e) {
//       $('#u-head').attr("src", e.target.result);
//     }
//   }
// }
// 简介字数统计
$(document).on('input propertychange','#txt-area',function(){
  var txtLen = $(this).val().length;
  if(txtLen <= 300){
    $('#res-num').html(300-txtLen);
  }
});


//弹出图片上传框水平垂直居中
// (window.onresize = function () {
//   var win_height = $(window).height();
//   var win_width = $(window).width();
//   if (win_width <= 768){
//       $(".tailoring-content").css({
//           "top": (win_height - $(".tailoring-content").outerHeight())/2,
//           "left": 0
//       });
//   }else{
//       $(".tailoring-content").css({
//           "top": (win_height - $(".tailoring-content").outerHeight())/2,
//           "left": (win_width - $(".tailoring-content").outerWidth())/2
//       });
//   }
// })();

//弹出图片裁剪框
$("#u-head").on("click",function () {
    $(".tailoring-container").toggle(200);
});
//图像上传
function selectImg(file) {
    if (!file.files || !file.files[0]){
        return;
    }
    var reader = new FileReader();
    reader.onload = function (evt) {
        var replaceSrc = evt.target.result;
        //更换cropper的图片
        $('#tailoringImg').cropper('replace', replaceSrc,false);//默认false，适应高度，不失真
    }
    reader.readAsDataURL(file.files[0]);
}
//cropper图片裁剪
$('#tailoringImg').cropper({
    aspectRatio: 180/66,//默认比例
    preview: '.previewImg',//预览视图
    guides: false,  //裁剪框的虚线(九宫格)
    autoCropArea: 0.8,  //0-1之间的数值，定义自动剪裁区域的大小，默认0.8
    movable: false, //是否允许移动图片
    dragCrop: true,  //是否允许移除当前的剪裁框，并通过拖动来新建一个剪裁框区域
    movable: true,  //是否允许移动剪裁框
    resizable: true,  //是否允许改变裁剪框的大小
    zoomable: false,  //是否允许缩放图片大小
    mouseWheelZoom: false,  //是否允许通过鼠标滚轮来缩放图片
    touchDragZoom: true,  //是否允许通过触摸移动来缩放图片
    rotatable: true,  //是否允许旋转图片
    crop: function(e) {
        // 输出结果数据裁剪图像。
    }
});
//旋转
$(".cropper-rotate-btn").on("click",function () {
    $('#tailoringImg').cropper("rotate", 45);
});
//复位
$(".cropper-reset-btn").on("click",function () {
    $('#tailoringImg').cropper("reset");
});
//换向
var flagX = true;
$(".cropper-scaleX-btn").on("click",function () {
    if(flagX){
        $('#tailoringImg').cropper("scaleX", -1);
        flagX = false;
    }else{
        $('#tailoringImg').cropper("scaleX", 1);
        flagX = true;
    }
    flagX != flagX;
});

//裁剪后的处理
$("#sureCut").on("click",function () {
    if ($("#tailoringImg").attr("src") == null ){
        return false;
    }else{
        var cas = $('#tailoringImg').cropper('getCroppedCanvas');//获取被裁剪后的canvas
        var base64url = cas.toDataURL('image/png'); //转换为base64地址形式
        console.log(base64url)
        $("#u-head").prop("src",base64url);//显示为图片的形式
        cas.toBlob(function (e) {
            console.log(e);  //生成Blob的图片格式
            var timestamp = Date.parse(new Date());
            e.name = timestamp + ".jpeg";
        },'image/jpeg')
        //关闭裁剪框
        closeTailor();
    }
});
//关闭裁剪框
function closeTailor() {
    $(".tailoring-container").toggle(200);
}