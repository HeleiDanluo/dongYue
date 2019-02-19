$(function(){
  var startTime = null;
  var endTime = null;
  var timer = null;
  $(".children-ul>li").each(function () {
    $(this)[0].addEventListener('touchstart', function () {
      startTime = new Date().getTime();
      timer = setTimeout(function () {
        deleteAxis(5);
        return false;
      }, 1000)
    }, false);
    $(this)[0].addEventListener('touchend', function () {
      endTime = new Date().getTime();
      if (endTime - startTime < 1000) {
        clearTimeout(timer);
        timer = null;
      }
    }, false)
  });
  function deleteAxis(id) {
    $.dialog("confirm", "确定删除当前记录吗", {
      callback: function (result) {
        console.log(result);
        console.log(id);
      }
    })
  }
})