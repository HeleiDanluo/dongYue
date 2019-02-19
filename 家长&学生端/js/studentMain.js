/**
 * Created by ChenYuechuan on 2017/4/6.
 */

var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?0b29420989c651b39c502f93a3000c8a";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();

$.fn.tabBox = function (config) {
  var defaults = {
    callback: null
  }
  var opts = $.extend({}, config, opts);
  console.log($(this).children("a"));
  $(this).children("a").each(function (k, v) {
    $(this).attr("data-index", k);
  });
  var aimTabDiv = $(this).attr("data-aim");
  $(this).on("click", ">a", function () {
    $(this).addClass("active").siblings().removeClass("active");
    var index = parseInt($(this).attr("data-index"));
    $("[data-tabName='" + aimTabDiv + "']").children("ul").css({
      'webkitTransform': 'translateX(-' + index * 100 + '%)',
      'transform': 'translateX(-' + index * 100 + '%)',
      'mozTransform': 'translateX(-' + index * 100 + '%)',
      'oTransform': 'translateX(-' + index * 100 + '%)'
    });
  });
  opts.callback && opts.callback();
}
$.fn.setRadar = function (cfg) {
  var defaults = {
    fontSize: dpr == "1" ? 12 : (dpr == "2" ? 24 : 36),
    barFontSize: dpr == "1" ? 12 : (dpr == "2" ? 16 : 20),
    radarColor: "#F991B2",
    labeldata: null,
    data: null,
    labelColor: "#999",
    initCallback: null,
    callback: function (dom) {
      dom.append("<div class='tip-wrapper' flex='cross:center main:center'>" +
        "<h1 font='16'>暂无数据</h1></div>");
    },
  }
  var opts = $.extend({}, defaults, cfg);
  var option = {
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
      splitArea: {
        show: false,
      },
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
              opacity: 0.5,
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
  opts.initCallback && opts.initCallback(option, opts);
  if (!opts.labelData || !opts.data) {
    opts.callback($(this));
    return;
  }
  var chart = echarts.init($(this)[0]);
  chart.setOption(option);
}
$.extend({
  alertBox: function (opt) {

  },
  loading: function (opt) {
    var defaults = {
      type: null,
    }
    var opts = $.extend({}, defaults, opt);
    if (opts.type == "show") {
      $('body').append('<div class="loading"><span class="load-circle"></span></div>');
    } else {
      $('.loading').remove();
    }
  },
  warning: function (opt) {
    var defaults = {
      words: "提示信息",
      callback: null,
      times: 1000,
    };
    var timer = null;
    var callbackTimer = null;
    var opts = $.extend({}, defaults, opt);
    if ($(".fade-warning").length > 0)return;
    $('body').append('<span class="fade-warning animated fadeIn" font="12">' + opts.words + '</span>');
    timer = setTimeout(function () {
      $('.fade-warning').removeClass("fadeIn").addClass('fadeOut');
      callbackTimer = setTimeout(function () {
        opts.callback && opts.callback()
        $('.fade-warning').remove();
        clearTimeout(callbackTimer);
        callbackTimer = null;
      }, 200)
      clearTimeout(timer);
      timer = null;
    }, opts.times)
  },
  dialog: function (type, words, opt) {
    var defaults = {
      callback: null,
      keys: ["确认", "取消"]
    }
    var opts = $.extend({}, defaults, opt);
    var $mask = $('<div class="dialog-mask" flex="cross:center main:center">' +
      '<div class="comfirm dialog-box">' +
      '<div class="txt" font="14">' + words +
      '</div>' +
      '<div font="16" class="btn-wrapper" flex="box:mean">' +
      '</div></div>' +
      '</div>')
    console.log(type);
    switch (type) {
      case 'confirm':
        $mask.find(".btn-wrapper").append('<a href="javascript:void (0)" class="confirm" flex="cross:center main:center">' + opts.keys[0] + '</a>' +
          '<a href="javascript:void (0)" class="cancel" flex="cross:center main:center">' + opts.keys[1] + '</a>')
        break;
      case 'warning':
        $mask.find(".btn-wrapper").append('<a href="javascript:void (0)" class="confirm" flex="cross:center main:center">' + opts.keys[0] + '</a>')
        break;
    }
    $("body").append($mask);
    var timer = null;
    timer = setTimeout(function () {
      $(".dialog-mask").addClass("open");
      clearTimeout(timer);
      timer = null;
    }, 10);
    $(".dialog-mask .confirm").click(function () {
      $.removeDialog(400);
      opts.callback && opts.callback(true);
    })
    $(".dialog-mask .cancel").click(function () {
      $.removeDialog(400);
      opts.callback && opts.callback(false);
    })
  },
  removeDialog: function (time) {
    $(".dialog-mask").removeClass("open");
    var timer = null;
    timer = setTimeout(function () {
      $(".dialog-mask").remove();
      clearTimeout(timer);
      timer = null;
    }, time)
  },
  homebox:function(month,opt){
    var defaults = {
      keys:['更新训练计划','沿用上月训练计划'],
      callback: null
    }
    var opts = $.extend({}, defaults, opt);
    var $html=$('\
    <div class="homeboxbk"></div>\
    <div class="homebox" font="14">\
        <div flex="cross:center main:center">\
            <span>'+month+'</span>\
        </div>\
        <div flex="cross:center main:center" font="18">生成训练计划</div>\
        <div flex="cross:center main:center" class="confirm">\
            <span flex="cross:center main:center">'+opts.keys[0]+'</span>\
            <span flex="cross:center main:center">'+opts.keys[1]+'</span>\
        </div>\
    </div>')

    $('body').append($html)

    $('.homebox .confirm span').on('touchstart',function(){
      var index=$(this).index()
      var bool=''
      if(index==0){
        bool=true
      }else{
        bool=false
      }
      opts.callback(bool)
    })
  },
  removeHomebox:function(){
    console.log($('body').find('.homebox'))
    $('.homeboxbk').remove()
    $('.homebox').remove()
  }
})
$.fn.getCode = function (opt) {
  var defaults = {
    time: 60,
    callback: null
  }
  var opts = $.extend({}, defaults, opt);
  var timer = null;
  var htmlTxt=$(this).html();
  $(this).click(function () {
    var second = opts.time;
    var that=$(this);
    if(that.hasClass("disabled")){return};
    that.addClass("disabled");
    var callbackBool=opts.callback!=null?opts.callback():true;
    if(callbackBool==false){
      that.removeClass("disabled");
      return;
    };
    that.html("剩余"+second+"s");
    timer=setInterval(function(){
      second--;
      if(second<=0){
        that.html(htmlTxt);
        clearTimeout(timer);
        timer=null;
        that.removeClass("disabled");
        return false;
      }
      that.html("剩余"+second+"s");
    },1000)
  })
}
