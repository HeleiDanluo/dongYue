$(function(){
  //样式的兼容调整，不用管
  $(".class-num-box>a:nth-of-type(6n+1)").css("margin-left","0");
  // $(".class-num-item").click(function(){
  //   $(".teachingPlanSelect .select-list").html("<li><a href='javascript:;' data-val='3'>hahaha</a></li>")
  // })
  var setSchedule={
    isEdit:null,
    init:function(){
      var self=this;
      self.isEdit=true;
      //实例化选择教学计划的下拉选择框
      new ConstructSelect($(".teachingPlanSelect"),{
        callback:function(){
          Alert.dialogBox("alert-default","你好，你选择了教学计划");
        }
      })
      $(".class-year-box").on("click",".class-year-item",function(){
        $(this).addClass("selected").siblings().removeClass("selected")
        var classYearName=$(this).html();
        self.choiceClass(classYearName);
      })
      $(".class-num-box").on("click",".class-num-item",function(){
        $(this).addClass("selected").siblings().removeClass("selected")
      })
    },
    choiceClass:function(classYearNum){
      Alert.loading("show");
      var classStr="";
      var planStr="";
      for(var i=0;i<5;i++){
        classStr+='<a href="javascript:;" class="class-num-item">'+classYearNum+'（'+(i+1)+'班）</a>'
      }
      for(var i=0;i<5;i++){
        planStr+='<li><a href="javascript:;" data-val="'+(i+1)+'">'+classYearNum+'教学计划'+(i+1)+'</a></li>';
      }
      var timer=setTimeout(function(){
        $(".class-num-box").html(classStr);
        $(".teachingPlanSelect .select-list").html(planStr);
        Alert.loading("hide");
        timer=null;
      },500)
    }
  }
  setSchedule.init();
})