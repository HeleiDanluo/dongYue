$(function(){
  $(".teacher-list>li:nth-of-type(7n+1)").css("margin-left","0");
  $(".hasClass").click(function(){
    callAlert("beiKeGuanLi.html",{
      initFn:function(){

      },
      confirmFn:function(){

      }
    })
  });

//学期备课页面
//添加方框
  var addContent = '<div class="content clearfix ">\
                      <i class="icon-addItem"></i>\
                    </div>';

  //点击修改出现红叉
  $('.xiugai-bkgl').click(function(){
    if($(this).hasClass('active')){
      $(this).removeClass('active');
      $('.close-content').css({'display':'none'});
    }else{
      $(this).addClass('active');
      $('.close-content').css({'display':'block'});
    }
  });

  //点击红叉
  $('body').on('click','.close-content',function(){
    $(this).parent().addClass('add').html(addContent);
  })
  
  //点击添加方框
  $('body').on('click','.content-box.add',function(){
    var formBox = $('<div class="alert-box formType animated fadeIn"></div>')
    formBox.load('../prepareLessonManage/addWindow.html', function () {
      $(".close-btn").click(function () {
        Alert.removeDialog("formType");
        $(".pika-single").remove();
      })
      $(".form-confirm").click(function () {
        alert("添加");
      });
      selectNew();
      checkBox();
      setAlertPosition();
    });
    $(this).addClass('clikThis');
    $("body").append(formBox);
  });

  // 点击弹窗里的添加
  $('body').on('click','.change-content',function(){
      // 正常方框
  var normalCentent = $('<div class="content clearfix">'
                        +'点击添加后现实的文字放到这里'+
                      '</div>\
                      <div class="close-content" style="display:block">×</div>');
    $('.clikThis').removeClass('add').html(normalCentent);
    normalCentent.find('.content').html('sadsd').removeClass('clikThis')
    .find('.close-content').css({'display':'block'});
  });
  
  //点击保存
  $('.save-bkgl').click(function(){
    Alert.globalWarning({
      type:'error',
      times : 1250,
      words : "需要全部添加并保存",
      callBack : function(){
        return;
      }
    });
    $('.xiugai-bkgl').removeClass('active');
    $('.close-content').css({'display':'none'});
  });
})