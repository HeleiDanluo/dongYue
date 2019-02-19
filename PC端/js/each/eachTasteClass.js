$(function(){
  //加载页面后调用设置表格宽度的方法
  setTableWidth();
  //点击自选添加调取弹窗
  $(".addBySelf").click(function(){
      var title=$(this).text();
      var formBox=$('<div class="alert-box formType animated fadeIn"></div>')
      formBox.load('../formHtml/choiceStudentForm.html',function () {
        $(".close-btn").click(function(){
          Alert.removeDialog("formType");
        })
        $(".submit").click(function(){
          Alert.dialogBox("alert-default","请认真填写课时！！！")
        })
        new ConstructSelect($(".classYear"),{
          callback:function(){
            console.log("选了年级");
          }
        })
        new ConstructSelect($(".classNumber"),{
          callback:function(){
            console.log("选了班级");
          }
        })
        $(".submitBtn .form-confirm").click(function () {
          alert("点击确定");
        });
        setAlertPosition();
      });
      $("body").append(formBox);
    })
  //自选添加页面的多选框监听
  $("input[name='selectStudent']").change(function(){
    var studentNum=$("input[name='selectStudent']:checked").length;
    $(".selectedNum").html(studentNum);
  });




  /* 2018-08-27添加  */
  // 点击课程介绍目标
  $('body').on('click', '.jieshao-mubiao', function(){
    Alert.smallWindow(
      {
        data:`
        <div class="small-alert-content">
          <h3>课程介绍</h3>
          <div>
            <textarea class="mt20 sm-content-txtarea txt-jieshao" maxlength="200" placeholder="在这里输入课程介绍（200字）"></textarea>
            <span class="word-limit">
            <span class="res">0</span> / 200
            </span>
          </div>
          <div>
            <h3 class="mt40">课程目标</h3>
            <textarea class="mt20 sm-content-txtarea txt-mubiao" maxlength="200" placeholder="在这里输入课程目标（200字）"></textarea>
            <span class="word-limit">
            <span class="res">0</span> / 200
            </span>
          </div>
          <div class="btn themeBtn t_c mt30 alert-submit">确定</div>
        </div>`,
        callBack:function(){
          $('body').on('click', '.alert-submit', function(){
            var strJieShao = $('.txt-jieshao')[0].value,
                strMuBiao = $('.txt-mubiao')[0].value;
                
            alert('课程介绍：' + strJieShao + '\n课程目标：' + strMuBiao);
          })
        }
      }
    );
  });
  //字数限制
  // 简介字数统计
  $(document).on('input propertychange','.sm-content-txtarea',function(){
    var txtLen = $(this).val().length;
    if(txtLen <= 200){
      $(this).parent().find('.res').html(200-txtLen);
    }
  });
})

new ConstructSelect($(".zonghedefen"),{
  callback:function(){
    console.log("选了班级");
  }
})
//调整浏览器窗口大小的时候调用设置表格宽度的方法
$(window).resize(function() {
  setTableWidth();
});
