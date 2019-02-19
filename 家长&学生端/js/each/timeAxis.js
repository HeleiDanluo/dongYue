$(function () {
  var startTime = null;
  var endTime = null;
  var timer = null;
  var timerSwitch=false;
  $(".msg-confirm>a").click(function(event){
    event.preventDefault();
    $.dialog("confirm", "确定删除当前记录吗", {
      callback: function (result) {
        // console.log(result);
      }
    })
  })
  $("body").on('touchstart','.time-model',function(){
    startTime = new Date().getTime();
    timer = setTimeout(function () {
      // if(!timerSwitch)return;
      deleteAxis(5);
      return false;
    }, 1000)
  })
  $("body").on('touchend','.time-model',function(){
    endTime = new Date().getTime();
    if (endTime - startTime < 1000) {
      // timerSwitch=false;
      clearTimeout(timer);
      timer = null;
    }
  })
  // $(".time-model").each(function () {
  //   $(this)[0].addEventListener('touchstart', function () {
  //     // timerSwitch=true
  //     startTime = new Date().getTime();
  //     timer = setTimeout(function () {
  //       // if(!timerSwitch)return;
  //       deleteAxis(5);
  //       return false;
  //     }, 1000)
  //   }, false);
  //   $(this)[0].addEventListener('touchend', function () {
  //     endTime = new Date().getTime();
  //     if (endTime - startTime < 1000) {
  //       // timerSwitch=false;
  //       clearTimeout(timer);
  //       timer = null;
  //     }
  //   }, false)
  // });
  function deleteAxis(id) {
    $.dialog("confirm", "确定删除当前记录吗", {
      callback: function (result) {
        console.log(result);
      }
    })
  };
})
//病 病中 痊愈 切换
$('.sick-switch .ipt').click(function(){
  var aaa = $(this).parent();
  if(aaa.hasClass('active')){
    aaa.removeClass('active')
  }else{
    aaa.addClass('active');
  }
})