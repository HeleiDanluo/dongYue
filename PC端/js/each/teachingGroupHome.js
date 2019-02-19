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
    var teacherClassName=$(this).find(".teaching-className").html()
    callAlert("addTeacherToClassForm.html",{
      initFn:function(){
        $(".alert-className>b").html(teacherClassName);
      },
      confirmFn:function(){
        alert("添加了老师");
        Alert.removeDialog("alertType");
      }
    })
  })
  //初始化选择学年下拉框
  new ConstructSelect($(".classYear"),{
    callback:function(){
      alert("选择了学年")
    }
  })
})