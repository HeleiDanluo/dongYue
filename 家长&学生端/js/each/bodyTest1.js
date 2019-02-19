$(function () {
  $(".question-bar").on("click", function () {
    var answerContent = $(this).closest(".question-item").children(".answer-content")
    if (!$(this).children(".drop-down-icon").hasClass("rotate")) {
      $(this).children(".drop-down-icon").addClass("rotate");
      answerContent.slideDown(200);
    }else{
      $(this).children(".drop-down-icon").removeClass("rotate");
      answerContent.slideUp(200);
    }
  })
})