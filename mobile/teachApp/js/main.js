"use strict";
function TeachApp() {
  this.timer = null;
}
TeachApp.prototype.dropDownMenu = function (opts) {
  var that = this;
  var defaults = {
    targetBtn: null,
    callback: null
  };
  var opts = $.extend({}, defaults, opts);
  var dropDMPlugin = {
    menuBox: null,
    isOpen: false,
    menuContent: null,
    caretIcon: null,
    init: function () {
      var self = this;
      self.menuBox = $(".dropDown-menu-mask");
      self.caretIcon = opts.targetBtn.find(".animate");
      self.menuContent = $(".dropDown-menu-mask").find(".menu-content")
      self.bindEvent();
      opts.callback!=null&&opts.callback(self);
    },
    bindEvent: function () {
      var self = this;
      opts.targetBtn.click(function () {
        self.voliOpen();
      })
    },
    voliOpen: function () {
      var self = this;
      self.isOpen == false ? self.showDropDM() : self.hideDropDM()
    },
    showDropDM: function () {
      var self = this;
      self.menuBox.fadeIn(200);
      self.menuContent.slideDown(200);
      self.isOpen = true;
      self.caretIcon.addClass("rotate180")
    },
    hideDropDM: function () {
      var self = this;
      var timer = null;
      self.menuContent.slideUp(200);
      self.caretIcon.removeClass("rotate180")
      self.isOpen = false;
      timer = setTimeout(function () {
        self.menuBox.fadeOut(100);
        clearTimeout(timer);
      }, 200)
    }
  }
  dropDMPlugin.init();
}
TeachApp.prototype.getCode = function (btn, opts) {
  var that = this;
  var defaults = {
    times: 5,
    callback: null,
  };
  var opts = $.extend({}, defaults, opts);
  btn.on('click', function () {
    if (opts.callback != null && !($(this).hasClass('disabled-btn'))) {
      $(this).addClass('disabled-btn');
      that._timeCount(opts.times, btn);
      opts.callback(that._getcodeInit);
    }
  });
}
TeachApp.prototype.alert = function (opts) {
  var defaults = {
    times: 1500,
    type: "success",
    control: "show",
    callback: null,
    text: "操作成功",
  };
  var opts = $.extend({}, defaults, opts);
  var alert = {};
  alert = $.extend({}, opts, alert);
  alert.resolveData = function () {
    var self = this;
    if (this.type == "success") {
      self.makeSuccess();
    } else if (this.type == "error") {
      self.makeError();
    } else if (this.type == "loading") {
      if (self.control == "show") {
        self.makeLoad();
      } else if (self.control == "hide") {
        self.removeLoad();
      }
    }
  };
  alert._staticStr = $('body').attr('data-static')?$('body').attr('data-static'):'.';
  alert.maskbox = $('<div class="alert-mask fadeIn"><div class="tip-out-box" flex="main:center cross:center"></div></div>')
  alert.makeSuccess = function () {
    var self = this;
    var innerContent = $('<div class="tip-inner-box">' +
      '<img class="icon popIn" src="' + self._staticStr + '/img/success_icon.png" alt="">' +
      '<p class="text">' + self.text + '</p></div>');
    self.maskbox.find(".tip-out-box").append(innerContent);
    $("body").append(self.maskbox);
    var timer = null;
    timer = setTimeout(function () {
      self.removeAlert();
      clearTimeout(timer);
      timer = null;
    }, self.times);
  }
  alert.removeAlert = function () {
    var self = this;
    var timer = null;
    $(".alert-mask").removeClass("fadeIn").addClass("fadeOut");
    $(".alert-mask").find(".icon").removeClass("popIn").addClass("popOut");
    timer = setTimeout(function () {
      $(".alert-mask").remove();
      if (self.callback != null) {
        self.callback();
        clearTimeout(timer);
        timer = null;
      }
    }, 300);
  }
  alert.makeError = function () {
    var self = this;
    var innerContent = $('<div class="tip-inner-box fadeIn">' +
      '<img class="icon popIn" src="' + self._staticStr + '/img/fail_icon.png" alt="">' +
      '<p class="text">' + self.text + '</p></div>')
    self.maskbox.find(".tip-out-box").append(innerContent);
    $("body").append(self.maskbox);
    var timer = null;
    timer = setTimeout(function () {
      self.removeAlert();
      clearTimeout(timer);
      timer = null;
    }, self.times);
  }
  alert.makeLoad = function () {
    var self = this;
    var innerContent = $('<div class="loading zhuandong">' +
      '<div class="load-circle"></div></div>')
    self.maskbox.addClass("load").find(".tip-out-box").append(innerContent);
    $("body").append(self.maskbox);
  };
  alert.removeLoad = function () {
    var self = this;
    $(".alert-mask").remove();
  }
  alert.resolveData();
}
TeachApp.prototype._getcodeInit = function (obj, dy) {
  var that = dy;
  clearTimeout(that.timer);
  that.timer = null;
  obj.html("获取验证码");
  obj.removeClass("disabled-btn");
}
TeachApp.prototype._timeCount = function (s, obj) {
  var that = this;
  obj.html(s + "s");
  that.timer = setInterval(function () {
    s--;
    if (s > 0) {
      obj.html(s + "s");
    } else {
      clearTimeout(that.timer);
      that.timer = null;
      obj.html("获取验证码");
      obj.removeClass("disabled-btn");
    }
  }, 1000)
}

var Dy = new TeachApp();