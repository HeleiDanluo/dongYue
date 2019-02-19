var Alert = {}
Alert.bgModal = '<div class="alert-box animated fadeIn"></div>';

Alert.removeDialog = function (alertType) {
  if (alertType == "alertType") {
    $(".alertType").removeClass("fadeIn").addClass("fadeOut");
    $(".alertType").find(".alert-div").removeClass("fadeInDownBig").addClass("fadeOutUpBig");
    var timer = null;
    timer = setTimeout(function () {
      $(".alertType").remove();
      clearTimeout(timer);
      timer=null;
    }, 500);
    timer = null;
  } else if (alertType == "formType") {
    $(".formType").removeClass("fadeIn").addClass("fadeOut");
    $(".formType").find(".alert-div").removeClass("fadeInDownBig").addClass("fadeOutUpBig");
    var timer = null;
    timer = setTimeout(function () {
      $(".formType").remove()
      clearTimeout(timer);
      timer=null;
    }, 500);
    timer = null;
  }else if(alertType == "newType"){
    $(".newType").removeClass("fadeIn").addClass("fadeOut");
    $(".newType").find(".alert-div").removeClass("fadeInDownBig").addClass("fadeOutUpBig");
    var timer = null;
    timer = setTimeout(function () {
      $(".newType").remove()
      clearTimeout(timer);
      timer=null;
    }, 500);
    timer = null;
  }
};

Alert.loading = function (type, contentBox) {
  var loadHtml = $('<div class="loading animated fadeIn">' +
    '<div class="loading-content">' +
    '<div class="spinner">' +
    '<div class="cube1"></div>' +
    '<div class="cube2"></div>' +
    '</div></div></div>');
  if (type == "show") {
    if (contentBox) {
      $(contentBox).append(loadHtml);
      $(contentBox).css("position", "relateve");
      $(".loading").css("position", "absolute")
    } else {
      $("body").append(loadHtml);
    }
  } else {
    $('.loading').removeClass("fadeIn").addClass("fadeOut");
    var timer=setTimeout(function () {
      $(".loading").remove();
      clearTimeout(timer);
      timer=null;
    }, 200);
  }
  return;
}

Alert.globalWarning=function(options){
  var defaults = {
    times:1000,
    type:"success",
    words:"删除成功",
    callBack:null
  };
  var opts = $.extend({}, defaults, options);
  var globalWarn=$('\
    <div class="global-warning-mask animated fadeIn">\
      <div class="bottom">\
        <div class="logo">\
          <i class="'+((opts.type=="success")?("icon-voliPass"):("icon-voliError"))+'"></i>\
        </div>\
        <div class="text">'+opts.words+'</div>\
      </div>\
    </div>')
  $("body").append(globalWarn);
  var removetimer=setTimeout(function(){
    Alert.removeGlobalWarn();
    clearTimeout(removetimer);
    removetimer=null;
    var callBackTimer=setTimeout(function(){
      opts.callBack();
      clearTimeout(callBackTimer);
      callBackTimer=null;
    },300)
  },opts.times+300)
}

Alert.removeGlobalWarn=function(){
  $(".global-warning-mask").removeClass(".fadeIn").addClass("fadeOut");
  $(".warning-icon").removeClass("warningIn").addClass("warningOut");
  var removeWaning=setTimeout(function(){
    $(".global-warning-mask").remove();
    clearTimeout(removeWaning);
    removeWaning=null;
  },300)
}
