$(function(){
  var isNext=false;
  $(".progress-list").on("click",">li>a>.todo",function(){
    if($(this).parent().attr("class")=="now"){
      var index=$(this).parent().attr("data-index");
      $(this).html("答题中");
      $(this).parent().removeClass().addClass("testing");
      var title=$(this).prev().prev().html();
      $(".right-training-show").load("testQuestion.html",function(){
        $(".title-name").html(title);
        $(".test-question").attr("data-index",index);
      })
    }
  })
  $("body").on("click",".next-question",function(){
    if($(this).hasClass("submit")){
      var progressIndex=parseInt($(this).closest(".test-question").attr("data-index"));
      var testNum=$("input[type='radio']:checked").length;
      if(testNum<3){
        Alert.dialogBox("alert-default","请答完所有题目再进行提交！");
        return false;
      }
      if(parseInt(progressIndex)==4){
        Alert.globalWarning({
          times:1000,
          type:"success",
          words:"您已培训完所有教程，点击确定会天跳转到我的主页",
          callBack:function(){
            alert("马上跳转");
            return false;
          }
        })
        return;
      }
      $($(".progress-list").children()[progressIndex-1]).children().removeClass().addClass("success").find(".todo").html("完成");
      $($(".progress-list").children()[progressIndex-1]).next().children().addClass("now").append('<span class="todo">去答题</span>');
      $(".right-training-show").load("playerSport.html",function(){
        $(".action-name").html($($(".progress-list").children()[progressIndex-1]).next().children().find(".text-word").html());
      })
      return;
    }
    if(isNext==false){
      Alert.dialogBox("alert-default","请答完此题，自动会跳转下一题！");
      return false;
    }
    var nowPosition=$(".question-ul").css("left");
    var index=parseInt($(".question-ul").attr("data-index"));
    if(index<2){
      index++;
      $(".question-ul").css("left",-(index*100)+"%");
      $(".question-ul").attr("data-index",index);
    }
    if(index==2){
      $(this).addClass("submit").html("提交");
    }
    isNext=false;
  })
  $("body").on("change",".question-item input",function(){
    var nowAnswer=$(this).closest("label").attr("data-index");
    var rightAnswer=$(this).closest(".question-item").attr("data-answer");
    if(nowAnswer==rightAnswer){
      var nowPosition=$(".question-ul").css("left");
      var index=parseInt($(".question-ul").attr("data-index"));
      if(index<2){
        index++;
        $(".question-ul").css("left",-(index*100)+"%");
        $(".question-ul").attr("data-index",index);
      }
      if(index==2){
        $(".next-question").addClass("submit").html("提交");
      }
      isNext=false;
    }else{
      isNext=true;
      $(this).closest(".question-item").append('<p class="error-tips">正确答案：'+rightAnswer+'、<span class="right-answer">'+
        $($(this).closest(".answer-list").children()[parseInt(rightAnswer)-1]).find(".answer-word").html()
        +'</span></p>');
    }
  })
})