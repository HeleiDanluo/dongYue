$(function(){
  function voliGrade(grade){
    return grade=grade>=90.0?("优秀/"+grade):
      (grade>=80.0?("良好/"+grade):(grade>=60.0?("及格/"+grade):("不及格/"+grade)))
  }
  $(".student-msg-item").each(function(){
    var self=this;
    var grade=$(self).attr("data-grade");
    $(self).find(".process-line>.now-data").css("width",grade+"%").next().html(voliGrade(grade));
  })
  Dy.dropDownMenu({
    targetBtn:$(".selectWeek"),
    callback:function(v){
      $(".week-option-item").click(function(){
        v.hideDropDM();
        setTimeout(function(){
          window.location.reload()
        },200);
      })
    }
  })
})