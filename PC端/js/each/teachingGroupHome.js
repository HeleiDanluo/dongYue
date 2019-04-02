$(function(){
  //生成行政班级
  $(".addAdmin").click(function(){
    callAlert("addAdminClassForm.html",{
      isDate:true,
      initFn:function(){
        var classYearStart = new Pikaday({
          field: document.getElementById('classYearStart'),
          onSelect: function () {
            if (this.getDate().getDate() === new Date().getDate() && this.getDate().getMonth() == new Date().getMonth() && this.getDate().getYear() == new Date().getYear()) {
              Alert.dialogBox("alert-default", "请选择正确的时间");
            }
          }
        });
        var classYearEnd = new Pikaday({
          field: document.getElementById('classYearEnd'),
          onSelect: function () {
            if (this.getDate().getDate() === new Date().getDate() && this.getDate().getMonth() == new Date().getMonth() && this.getDate().getYear() == new Date().getYear()) {
              Alert.dialogBox("alert-default", "请选择正确的时间");
            }
          }
        });
      },
      confirmFn:function(){
        alert("生成行政班级")
      }
    })
  })
  //生成兴趣班级
  $(".addTaste").click(function(){
    callAlert("addTasteClassForm.html",{
      initFn:function(){
        new ConstractMultiSelect($(".multi-select.classYear"),{
          placeholder:"选择年纪，可多选",
        })
      },
      confirmFn:function(){
        alert("点击了确认")
      }
    })
  })
  //点击每个班级设置班级的负责老师
  $(".teaching-class-item").click(function(){
    // var teacherClassName=$(this).find(".teaching-className").html()
    // callAlert("addTeacherToClassForm.html",{
    //   initFn:function(){
    //     $(".alert-className>b").html(teacherClassName);
    //   },
    //   confirmFn:function(){
    //     alert("添加了老师");
    //     Alert.removeDialog("alertType");
    //   }
    // })
    Alert.middleWindow({
      data:'\
      <div class="my-alert-list">\
                <div class="item-box">\
                    <div class="item active">\
                        <span class="name">谢广坤</span>\
                        <i class="icon-rongyubang active" title="取消负责教师"></i>\
                    </div>\
                    <div class="item active">\
                        <span class="name">谢广坤</span>\
                        <i class="icon-rongyubang" title="设置为负责教师"></i>\
                    </div>\
                    <div class="item">\
                        <span class="name">谢广坤</span>\
                        <i class="icon-rongyubang"></i>\
                    </div>\
                    <div class="item">\
                        <span class="name">谢广坤</span>\
                        <i class="icon-rongyubang"></i>\
                    </div>\
                    <div class="item">\
                        <span class="name">谢广坤</span>\
                        <i class="icon-rongyubang"></i>\
                    </div>\
                    <div class="item">\
                        <span class="name">谢广坤</span>\
                        <i class="icon-rongyubang"></i>\
                    </div>\
                </div>\
                <div class="form-line submitBtn mt10 clearfix">\
                    <a href="javascript:;" class="blockBtn themeBtn form-confirm" year="2018-2019" schooltimebegin="2018-09-01" schooltimeend="2019-07-31">确定</a>\
                </div>\
            </div>',
      callBack:function(){
        //弹窗高度自适应
        $('.mid-form').css('height','auto');
        // 点击教师
        $('body').off('click','.item').on('click', '.item', function() {
          var $this = $(this);
          // 取消
          if($this.hasClass('active')) {
            $this.removeClass('active')
              .find('.icon-rongyubang').removeClass('active');
          } 
          // 激活
          else {
            if($this.index() == 0) {
              $this.find('.icon-rongyubang').addClass('active')
              .parent().siblings().find('.icon-rongyubang').removeClass('active');
            }
            $this.addClass('active');
          }
        })

        // 点击奖牌
        $('body').off('click','.item .icon-rongyubang').on('click', '.item .icon-rongyubang', function(e) {
          e.stopPropagation();
          var $this = $(this);
          // 取消
          if($this.hasClass('active')) {
            $this.removeClass('active')
            .attr('title', '设置为负责教师');
          } 
          // 激活
          else {
            $this.addClass('active')
            .attr('title', '取消负责教师')
            .parent().siblings().find('.icon-rongyubang').removeClass('active')
            .attr('title', '设置为负责教师');
          }
        })

      },
    })
  })
  //初始化选择学年下拉框
  new ConstructSelect($(".classYear"),{
    callback:function(){
      alert("选择了学年")
    }
  })
})