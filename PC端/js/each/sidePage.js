var sidePage = {}
sidePage.use = function (options) {
  // 右下角按钮，滑出页面
  // 滑出页面菜单切换
  // $('#side-menu .title').click(function () {
  //   $(this).addClass('active').siblings().removeClass('active');
  //   var nowIndex = $(this).index();
  //   $('#side-tab>div').eq(nowIndex).addClass('active').siblings().removeClass('active');
  //   if(nowIndex == 1){
  //     $('.bt-bottom').css({'display':'none'});
  //   }else{
  //     $('.bt-bottom').css({'display':'block'});
  //   }
  // });

  // 关闭按钮
  $('#side-close').click(function () {
    siedClose();
  });

  // 教学反思按钮
  $('#float-jxfs').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
    $('#side-tab .jxfs-new').addClass('active').siblings().removeClass('active');
    $('.bt-bottom.fansi').css({'display':'block'});
    $('.bt-bottom.fen-ceng').css({'display':'none'});
    $('.bt-center').css('height','calc(100% - 150px)');
    if($(this).hasClass('open')){
    }else{
      sideOpen();
    }
  });
  //修改记录按钮
  $('#float-xgjl').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    $('#side-tab .xgjl-new').addClass('active').siblings().removeClass('active');
    $('.bt-bottom.fansi').css({'display':'none'});
    $('.bt-bottom.fen-ceng').css({'display':'none'});
    $('.bt-center').css('height','calc(100% - 100px)');
    if($(this).hasClass('open')){
    }else{
      sideOpen();
    }
  })
  //分层目标
  $('#float-fcmb').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    $('#side-tab .fcmb-new').addClass('active').siblings().removeClass('active');
    $('.bt-bottom.fansi').css({'display':'none'});
    $('.bt-bottom.fen-ceng').css({'display':'block'});
    $('.bt-center').css('height','calc(100% - 150px)');
    if($(this).hasClass('open')){
    }else{
      sideOpen();
    }
  })

  // 关闭页面函数
  function siedClose(){
    $('#float-jxfs,#float-xgjl,#float-fcmb').removeClass('open');
    $('body').css('overflow', 'hidden');
    $('.side-jiaoxuefansi').animate({ 'right': '-300px' });
    $('.right-section').animate({ 'width': '100%' });
    $('.float-menu').animate({ 'right': '65px' });
    setTimeout(function(){
      options.resize();
    }, 500);
  }

  // 打开页面函数
  function sideOpen(){
    $('#float-jxfs,#float-xgjl,#float-fcmb').addClass('open');
    var rigthSection = $('.right-section');
    $('body').css('overflow', 'hidden');
    $('.side-jiaoxuefansi').animate({ 'right': '0px' });
    var afterWidth = rigthSection.width() - 300;
    rigthSection.animate({ 'width': afterWidth });
    $('.float-menu').animate({ 'right': '365px' });
    setTimeout(function(){
      options.resize();
    }, 500);
  }
}

//点击鼠标覆盖教学反思显示的删除按钮
$('body').on('click','.mask .delete',function(){
  var jiaoXueThis = $(this);
  Alert.twoBtn({
    'words':'确认删除吗？',
    'btnLeft': '取消',
    'btnRight': '确认',
    'btnLeftGray': true,//是否灰色
    'btnRightGray': 'false',//是否灰色
    'callBack': function(){
      //取消
      $('#btn-left').click(function(){
        Alert.removeDialog("formType");//移除弹窗
      });
      //确认
      $('#btn-right').click(function(){
        Alert.removeDialog("formType");//移除弹窗
        jiaoXueThis.parent().parent().parent().parent().remove();//删除静态内容
      });
    }
  })
})
//点击添加反思 删除图片
$('body').on('click','.img-box .del',function(){
  $(this).parent().remove();
})
//添加图片 实时回显
function changImg(e){  
  for (var i = 0; i < e.target.files.length; i++) {  
      var file = e.target.files.item(i);  
      if (!(/^image\/.*$/i.test(file.type))) {  
          continue; //不是图片 就跳出这一次循环  
      }  
      //实例化FileReader API  
      var freader = new FileReader();  
      freader.readAsDataURL(file);  
      freader.onload = function(e) {  
        
      $('.img-content>div').append('<div class="img">\
      <img width="100%" height="100%" src="'+e.target.result+'" alt="" srcset="">\
        <div class="del">\
          <i class="icon-guanbi"></i>\
        </div>\
      </div>')
          // $("#myImg").attr("src",e.target.result);  
      }  
  }  
}
