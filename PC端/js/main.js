// 全局可能会使用到的方法
//下拉框重构
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?e70d2da10f164f7616ebe8b8f07f9c8d";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
function selectNew(callback) {
  $('.form-control.select').click(function (event) {
    event.preventDefault();
    event.stopPropagation();
    if ($(this).find(".select-list").is(':hidden')) {
      $('.select-list').hide();
      $(this).find(".select-list").show();
    } else {
      $(this).find(".select-list").hide();
    }
  });
  $(document).click(function () {
    $('.select-list').hide();
  });
  $('.select-list').click(function (event) {
    event.stopPropagation();
  });
  $('.select-list').on('click', 'li>a', function () {
    if($(this).hasClass('special')){
      $(this).parent().parent().parent().parent().parent().find('.cjgl').removeClass('hidden');
    }else{
      $(this).parent().parent().parent().parent().parent().find('.cjgl').addClass('hidden');
      $(this).parent().parent().parent().parent().parent().find('.cjgl').find('input').removeAttr('data-value');
    }
    var inpValue = $(this).text();
    var arr = inpValue.split('-');
    $(this).parent().parent().prevAll()[1].value = inpValue;
    if ($(this).attr("data-val")) {
      var selectVal = $(this).attr("data-val");
      $($(this).parent().parent().prevAll()[1]).attr("data-value", selectVal);
      if($(this).closest(".select").find(".realData").length>0){
        $(this).closest(".select").find(".realData").val(selectVal);
      }
    }
    $(this).parent().parent().hide();
  });
}
//下拉选择框的构造器重构
function ConstructSelect(obj, options) {
  obj.click(function (event) {
    event.preventDefault();
    event.stopPropagation();
    if ($(this).find(".select-list").is(':hidden')) {
      $('.select-list').hide();
      $(this).find(".select-list").show();
    } else {
      $(this).find(".select-list").hide();
    }
  });
  $(document).click(function () {
    obj.find('.select-list').hide();
  });
  obj.find(".select-list").click(function (event) {
    event.stopPropagation();
  })
  obj.find('.select-list').on('click', 'li>a', function () {
    var inpValue = $(this).text();
    var arr = inpValue.split('-');
    $(this).parent().parent().prevAll()[1].value = inpValue;
    if ($(this).attr("data-val")) {
      var selectVal = $(this).attr("data-val");
      $($(this).parent().parent().prevAll()[1]).attr("data-value", selectVal);
    }
    $(this).parent().parent().hide();
    options.callback && options.callback();
  });
}
//下拉多选框的重构
function ConstractMultiSelect(obj,options){
  var defaults = {
    initFn:null,
    placeholder:null,
  };
  var opts = $.extend({}, defaults, options);
  var multiSelect={};
  multiSelect.init=function(){
    opts.placeholder&&obj.find(".placeholder").html(opts.placeholder);
  };
  multiSelect.showList=function(){
    if(obj.find(".multi-list").is(":hidden")){
      obj.find(".multi-list").show();
    }else{
      obj.find(".multi-list").hide();
    }
  };
  multiSelect.selectOption=function(aim){
    var selectBox=obj.find(".selected-list");
    $(aim).parent().remove();
    var nowId=$(aim).attr("data-val");
    var nowTxt=$(aim).html();
    obj.find(".placeholder").hide();
    selectBox.show();
    selectBox.append($('<a href="javascript:;" class="selected-item deleteThis" data-value="'+nowId+'">'+nowTxt+'</a>'))
  }
  multiSelect.deleteSelected=function(aim){
    var deleteId=$(aim).attr("data-value");
    var deleteTxt=$(aim).html();
    obj.find(".multi-list").append($('<li class="multi-option"><a href="javascript:void (0)" data-val="'+deleteId+'">'+deleteTxt+'</a></li>'));
    $(aim).remove();
    this.isEmpty();
  };
  multiSelect.isEmpty=function(){
    var selectedLength=obj.find(".selected-list").children().length;
    // console.log(selectedLength);
    if(selectedLength==0){
      obj.find(".placeholder").show();
    }
  };
  obj.on("click",function(event){
    event.stopPropagation();
    multiSelect.showList();
  });
  obj.on("click",".multi-option>a",function(event){
    event.stopPropagation();
    multiSelect.selectOption(this);
  });
  obj.on("click",".selected-item.deleteThis",function(event){
    event.stopPropagation();
    multiSelect.deleteSelected(this);
  });
  $("body").click(function(){
    $(".multi-list").hide();
  });
  multiSelect.init();
}
//复选框重构
function checkBox() {
  $(".checkBox-label input,.global-checkBox input").click(function (e) {
    if ($(this).prop('checked') == false) {
      $(this).next().removeClass("select");
    } else {
      $(this).next().addClass("select");
    }
  })
}
//定义设置表格宽度的方法
function setTableWidth() {
  var pageContentWidth = $(".right-section").width();
  var tableWidth=$(".table-content").css("width");
  if(tableWidth>pageContentWidth){
    return
  }
  $(".widthTable").width("100%");
}
//重构表单框子的获得焦点和失去焦点的
function addFocus() {
  $("body").on("focus", ".form-control input", function () {
    $(this).parent().hasClass("errorBorder")&&$(this).parent().removeClass("errorBorder");
    $(this).parent().addClass("onfocus");
  })
  $("body").on("blur", ".form-control input", function () {
    $(this).parent().removeClass("onfocus");
  })
  $("body").on("focus", ".formControl input", function () {
    $(this).parent().hasClass("errorBorder")&&$(this).parent().removeClass("errorBorder");
    $(this).parent().addClass("onfocus");
  })
  $("body").on("blur", ".formControl input", function () {
    $(this).parent().removeClass("onfocus");
  })
  $("body").on("focus", ".form-search input", function () {
    $(this).parent().hasClass("errorBorder")&&$(this).parent().removeClass("errorBorder");
    $(this).parent().addClass("onfocus");
  })
  $("body").on("blur", ".form-search input", function () {
    $(this).parent().removeClass("onfocus");
  })
}
//调整弹窗的定位位置
function setAlertPosition() {
  var height = $(".alert-div").innerHeight()
  // console.log(height);
  $(".alert-div").css("margin-top", -(height / 2));
}
//点击获取验证码的倒计时
function getPhoneCode(obj,options) {
  var defaults = {
    callBack: null,
    times:60
  };
  var opts = $.extend({}, defaults, options);
  var count=opts.times;
  var isCallBack;
  if(opts.callBack==null){
    return
  }else{
    var isCallBack=opts.callBack();
  };
  if(isCallBack||isCallBack==undefined){
    if(obj.attr("disabled")==true){
      return;
    }
    obj.attr("disabled",true).addClass("disabled");
    var timer=setInterval(function(){
      if(count>0){count--;}else{
        obj.val("获取验证码");
        obj.attr("disabled",false).removeClass("disabled");
        clearTimeout(timer);
        timer=null;
        return
      };
      obj.val("剩余"+(count+1)+"s");
    },1000)
  }
}
//封装调弹窗的方法
function callAlert(alertName, options) {
  var defaults = {
    prevStr:null,
    isDate: false,
    title: null,
    initFn: null,
    data: null,
    contName: 'formType',
    confirmFn: null
  };
  var opts = $.extend({}, defaults, options);
  var adressStr;
  if(opts.prevStr){
    adressStr = opts.prevStr + alertName;
  }else{
    adressStr = "../formHtml/" + alertName;
  }
  var formBox = $('<div class="alert-box '+opts.contName+' animated fadeIn"></div>')
  formBox.load(adressStr, function () {
    $(".close-btn").click(function () {
      Alert.removeDialog(opts.contName);
      opts.isDate && ($(".pika-single").remove());
    });
    setAlertPosition();
    selectNew();
    opts.title && $(".form-title").html(opts.title);
    opts.initFn && opts.initFn();
    $(".submitBtn .form-confirm").click(function () {
      opts.confirmFn();
    });
    $('.alert-box').append(opts.data);
  });
  $("body").append(formBox);
  
}
$(function () {
  checkBox();
  addFocus();
})
//动作教学播放器
function Player(actionPlayer,urlObj)
{
  this.timer=null;
  this.playCount=1;
  this.videoUrl=urlObj.videoUrl;
  this.audioUrl=urlObj.audioUrl;
  this.canPlayVoice=false;
  this.videoBox=actionPlayer;
  this.videoElem = actionPlayer.find(">video");
  this.audioElem = actionPlayer.find(">audio");
  this.controlElem = actionPlayer.find(".control-box");
  this.loadIcon=actionPlayer.find(".load");
  this.playerIcon=actionPlayer.find(".playIcon");
  this.addListener = function () {
    var self = this;
    self.controlElem.find(".play-btn").on("click", function (event) {
      self.clickPlay(this);
    })
    self.playerIcon.on("click", function (event) {
      self.clickPlay(self.controlElem.find(".play-btn"));
    })
    self.videoElem.on("click", function (event) {
      if(!self.canPlayVoice)return;
      if(self.audioElem[0].played){
        self.clickPlay(self.controlElem.find(".play-btn"));
      }
    })
    self.videoElem[0].addEventListener("ended", function () {
      self.videoEnd()
    })
    self.audioElem[0].addEventListener("ended", function () {
      self.audioEnd()
    })
    self.audioElem[0].addEventListener("loadstart",function(){
      self.loadAudio();
    })
    self.audioElem[0].addEventListener("canplay",function(){
      self.canPlayVoice=true;
      self.loadSuccess();
    });
    self.audioElem[0].addEventListener("loadedmetadata",function(){
      self.loadSuccess();
    });
    self.videoBox.on("mouseover",function(){
      if(self.canPlayVoice){
        self.mouseOver();
      }
    })
    self.videoBox.on("mouseout",function(){
      self.mouseOut();
    })
  };
  this.init = function () {
    var self = this;
    self.videoElem.removeAttr("controls");
    self.videoElem[0].muted=true;
    self.videoElem.find(">source")[0].src=self.videoUrl;
    self.audioElem[0].src=self.audioUrl;
    self.videoElem[0].pause();
    self.audioElem[0].pause();
    self.audioElem.on("timeupdate", function (event) {
      self.getTime(this.currentTime, this.duration);
      self.calcProcess(this.currentTime)
    })
    self.audioElem.on("loadedmetadata", function (event) {
      self.controlElem.find(".total-time").html(self.formateSecond(this.duration));
    })
    self.addListener();
  }
}
Player.prototype = {
  clickPlay: function (playBtn) {
    var self = this;
    if (self.audioElem[0].paused) {
      $(playBtn).children().removeClass().addClass("icon-pause2");
      self.playerIcon.hide();
      self.videoElem[0].play();
      self.audioElem[0].play();
    } else {
      $(playBtn).children().removeClass().addClass("icon-play3");
      self.playerIcon.show();
      self.videoElem[0].pause();
      self.audioElem[0].pause();
    }
  },
  videoEnd: function () {
    var self = this;
    self.videoElem.play();
  },
  audioEnd: function () {
    var self = this;
    self.videoElem[0].pause();
    self.audioElem[0].pause();
    self.playerIcon.show();
    self.controlElem.find(".play-btn").children().removeClass().addClass("icon-play3");
  },
  getTime: function (now) {
    var self = this;
    self.controlElem.find(".now-time").html(self.formateSecond(now));
  },
  formateSecond: function (seconds) {
    var h, m, s, totalTime;
    if (seconds / 3600 > 1) {
      h = (seconds % 3600 == 0 ? seconds / 3600 : parseInt(seconds / 3600)) + "";
      m = ((seconds - (3600 * h)) % 60 == 0 ? ((seconds - (3600 * h)) / 60) : (parseInt((seconds - (3600 * h)) / 60))) + "";
      s = parseInt(seconds - (3600 * h) - (60 * m)) + "";
    }
    if (seconds / 60 > 1) {
      m = (seconds % 60 == 0 ? (seconds / 60) : (parseInt(seconds / 60))) + "";
      s = parseInt(seconds - (60 * m)) + "";
    }
    if (seconds < 60) {
      s = parseInt(seconds) + "";
    }
    return totalTime = (h == undefined ? ("00") : (h.length == 1 ? (0 + h) : h)) + ":" +
      (m == undefined ? ("00") : (m.length == 1 ? (0 + m) : m)) + ":" +
      (s == undefined ? ("00") : (s.length == 1 ? (0 + s) : s));
  },
  calcProcess: function (now) {
    var self = this;
    var totalTime=self.audioElem[0].duration;
    var percent = ((now / totalTime)* 100 ).toFixed(1)+ "%";
    self.controlElem.find(".played-line").width(percent);
    self.controlElem.find(".dragPlay").css("left", percent);
  },
  loadAudio:function(){
    var self=this;
    self.controlElem.slideUp(500);
    self.loadIcon.show();
  },
  loadSuccess:function(){
    if(this.playCount>1)return;
    var self=this;
    self.controlElem.slideDown(500);
    self.loadIcon.hide();
    self.playerIcon.show();
    this.playCount++;
  },
  mouseOver:function(){
    var self=this;
    clearTimeout(self.timer);
    self.timer=null;
    self.controlElem.slideDown(500);
  },
  mouseOut:function () {
    var self=this;
    self.timer=setTimeout(function(){
      self.controlElem.fadeOut(500);
    },1000)
  }
}
//
$(function(){
  $("body").on("click",".global-check-box",function(event){
    var isCheckedBool=$(this).prop("checked");
    if(isCheckedBool==true){
      $(this).next().show();
    }else{
      $(this).next().hide();
    }
  })
})

$.fn.setRadar = function (cfg) {
  var defaults = {
    fontSize: 12,
    barFontSize: 12,
    radarColor:"#F991B2",
    labeldata:null,
    data:null,
    labelColor:"#999",
    callback:function(dom){
      dom.append("<div class='tip-wrapper' flex='cross:center main:center'>" +
        "<h1 font='16'>暂无数据</h1></div>");
    },
  }
  var opts=$.extend({},defaults,cfg);
  var option={
    radar: {
      indicator: opts.labelData,
      axisLabel: {
        textStyle: {
          fontSize: opts.fontSize,
        }
      },
      name: {
        textStyle: {
          fontSize: opts.fontSize,
        }
      },
      nameGap: 2,
    },
    series: [{
      // name: '个人综合素质雷达图',
      type: 'radar',
      data: [
        {
          color: "#000",
          value: opts.data,
          symbolSize: 6,
          lineStyle: {
            normal: {
              color: "#F991B2",
              width: 2,
              type: "dotted",
              fontSize: opts.fontSize,
            }
          },
          label: {
            normal: {
              show: true,
              formatter: function (params) {
                return params.value;
              },
              textStyle: {
                color: opts.labelColor,
                fontFamily: 'SimHei',
                fontSize: opts.fontSize,
              },
            }
          },
          areaStyle: {
            normal: {
              opacity: 0.8,
              color: new echarts.graphic.RadialGradient(0.1, 0.1, 0.1, [
                {
                  color: opts.radarColor,
                  offset: 0
                },
                {
                  color: opts.radarColor,
                  offset: 1
                }
              ])
            }
          },
          itemStyle: {
            normal: {
              color: opts.radarColor,
              borderColor: '#000',
              borderWidth: 0,
              borderType: 'solid',
              borderColor: opts.radarColor,
              borderWidth: 2,
              fontSize: opts.fontSize
            }
          }
        }
      ]
    }],
  };
  if(!opts.labelData||!opts.data){
    opts.callback($(this));
    return;
  }
  var chart=echarts.init($(this)[0]);
  chart.setOption(option);
};

$(function(){
  //关闭引导
  $(".guide-close").click(function(){
    $(this).parent().animate({"top":"100%"}).parent().animate({'opacity':'0'});
    setTimeout(function() {
      $('.guide-page').css({"display":"none"});
    }, 500);
  });
  // 顶部右侧下拉菜单
  $('#cg-pass').click(function(){
    Alert.changePass({
      ajaxUrl:"/teachManage/changeOldPassword.do"
    });
  });
  
  $('#dropDown-menu-head').mouseenter(function(){
    $('.dropdown-content').fadeIn(200);
  });
  $('#dropDown-menu-head').mouseleave(function(){
      $('.dropdown-content').fadeOut(200);
  });

  //添加客服
  if($('.pageContent-print').length <= 0){
    var chat = $('\
      <a id="chat">\
        <img src="../../../../statics/images/icon_Online.png">\
      <div>QQ客服</div></a>')
        $('body').append(chat);
        chat.click(function(){
          window.open('http://wpa.qq.com/msgrd?v=3&uin=2070744318&site=qq&menu=yes', '_blank', 'height=544, width=644,toolbar=no,scrollbars=no,menubar=no,status=no');
        })
    }
});
//验证是否输入数字， 为需要验证的地方添加 just-int class
$(function(){
  $('body').on('input propertychange', '.just-int', function(){
    var $this = $(this);
    var max = +$this.attr('max') || 100000000000000000000000;
    var min = +$this.attr('min') || 0;
    var numValue = +$this.val();  
    if((/^\d+$/.test( numValue )) && numValue >= 0 && numValue != ''){
      if(numValue > max ){
        Alert.globalWarning({
          'words':'请输入小于' + max + '的整数',
          'callBack':function(){},
        })
        $this.val('');
      }
      if(numValue < min){
        Alert.globalWarning({
          'words':'请输入大于' + min+ '的整数',
          'callBack':function(){},
        })
        $this.val('');
      }
    }else{
      Alert.globalWarning({
        'words':'请输入整数',
        'callBack':function(){},
      })
      $this.val('');
    }  
  })

  // 最小值验证
  $('body').on('input propertychange', '.set_min', function(){
    var $this = $(this);
    var min = +$this.attr('min') || 0;
    var numValue = +$this.val();  
    if(numValue < min){
      Alert.globalWarning({
        'words':'请输入大于' + min+ '的整数',
        'callBack':function(){},
      })
      $this.val('');
    }
  })
  //阻止点击事件
  $('.ban-click,.ban-click *').attr('onclick','return false');//去除绑定事件
  $('.ban-click,.ban-click *').attr('href','javascript:;');//去href

  // 成绩统计图 横条图和饼图位置关系修复
  $(document).ready(function(){
    var $chartCJTJT = $('.chartCjtj');
    if($chartCJTJT.length > 0){
      $chartCJTJT.parent().find('.center').width('65%');
    }
  })
})
