$(function () {
  // 基于准备好的dom，初始化echarts图表
  var myChart = echarts.init(document.getElementById('axis-data-img'));
  // 使用刚指定的配置项和数据显示图表。
  option = {
    tooltip: {
      trigger: 'axis'
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
      backgroundColor: '#ccc'
    },
    xAxis: [
      {
        type: 'category',
        data: ['指标一', '指标二', '指标三', '指标四', '指标五', '指标六'],
        splitLine: {
          show: true
        },
        axisTick: {
          alignWithLabel: false
        }
      }
    ],
    yAxis: [
      {
        max: '100',
        type: 'value',
        splitLine: {
          show: true
        },
        splitArea: {
          show: true,
        },
        name: '百分比%',
        nameLocation: 'end',
        nameTextStyle: {
          color: '#999',
          fontFamily: 'sans-serif',
          // fontSize:18
          fontWeight: 'bold',
        },
        nameGap:40,
        // nameRotate: null,
      }
    ],
    series: [
      {
        name: '占比',
        type: 'bar',
        barWidth: "50",
        label: {
          normal: {
            show: true,
            position: 'top',
            textStyle: {
              color: '#82B64A',
              fontWeight: "bold",
              fontSize: 14,
              fontStyle: 'normal'
            },
          },
        },
        itemStyle: {
          normal: {
            color: "#FFB444"
          }
        },
        data: [32.6, 25.9, 39.0, 26.4, 28.7, 70.7],
      }
    ]
  };
  // 为echarts对象加载数据
  myChart.setOption(option);
  $(".seeMore").click(function () {
    var moreDiv = $(this).closest(".options-title").next();
    var siblingsItem = moreDiv.parent().siblings();
    siblingsItem.each(function () {
      $(this).find(".seeMore").html("查看更多");
      $(this).find(".options-title").removeClass("current");
      $(this).find(".options-detail").slideUp(200);
      $(this).find(".percent-num").css("width", "0");
    });
    if (moreDiv.is(":hidden")) {
      $(this).closest(".options-title").addClass("current");
      $(this).html("收起");
      moreDiv.slideDown(200);
      moreDiv.find(".percent-process").each(function () {
        $(this).find(".percent-num").css("width", "0");
      })
      var timer = null;
      var self = this;
      timer = setTimeout(function () {
        moreDiv.find(".percent-process").each(function () {
          var percentNum = $(this).attr("data-percentNum");
          var totalNum=$(this).attr("data-totalNum");
          $(this).find(".percent-num").css("width", parseInt(percentNum/totalNum*100)+ "%");
          $(this).parent().prev().find(".grade-num").html(percentNum+"分");
        })
        clearTimeout(timer);
        timer = null;
      }, 200)
    } else {
      $(this).closest(".options-title").removeClass("current");
      $(this).html("查看更多");
      moreDiv.slideUp(200);
      var timer = null;
      timer = setTimeout(function () {
        moreDiv.find(".percent-process").each(function () {
          $(this).find(".percent-num").css("width", "0");
          clearTimeout(timer);
          timer = null;
        }, 200)
      })
    }
  })
});