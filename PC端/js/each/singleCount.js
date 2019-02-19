$(function () {
  //假数据

  var data1 = [45, 10, 15, 9, 11];
  var data2 = [28, 8, 5, 8, 7];

})

// 一部添加图表方法
function clickMAkeChart(options) {
  var defaults = {};
  var opts = $.extend({}, defaults, options);
  var xAxisData = ['总人数', '优秀', '良好', '及格', '不及格'];
  var chartWrapper = $('<div class="each-chart-box back_white mt20">' +
    '<h3 class="title">' + opts.txt + '图表</h3>' +
    '<div id="single-count-img_' + opts.id + '" style="height:400px">' +
    '</div></div>');
  var bottomData = [];
  for (var i = 0; i < opts.data2.length; i++) {
    bottomData.push(0 - opts.data2[i])
  };
  $(".single-count-chart").append(chartWrapper);
  var myChart = echarts.init(chartWrapper.find(">#single-count-img_" + opts.id)[0]);
  var option = {
    backgroundColor: '#fff',
    legend: {
      data: ['男生', '女生'],
      align: 'left',
      left: 10,
      textStyle: {
        color: '#333',
        fontWeight: 700,
        fontFamily: 'SimHei',
        fontSize: 14,
      },
    },
    tooltip: {
      formatter: function (data) {
        if (data.value < 0) return data.name + '<br />' + data.seriesName + '人数' + '：' + (-data.value);
        return data.name + '<br />' + data.seriesName + '人数' + '：' + data.value;
      },
    },
    xAxis: {
      data: xAxisData,
      name: '图形类别',
      silent: false,
      axisLine: {
        onZero: true
      },
      splitLine: {
        show: false
      },
      splitArea: {
        show: false
      },
      axisLabel: {
        show: true,
        interval: 'auto',
        margin: 15,
        textStyle: {
          fontWeight: 700,
          fontFamily: 'SimHei',
          fontSize: 16,
        }
      },
    },
    yAxis: {
      // show:false,
      inverse: false,
      splitArea: {
        show: false
      },
      axisLabel: {
        formatter: function (value, index) {
          // 格式化成月/日，只在第一个刻度显示年份
          return value > 0 ? value : (-value);
        }
      }
    },
    grid: {
      left: 100
    },
    series: [{
        name: '男生',
        type: 'bar',
        stack: 'one',
        data: opts.data1,
        barMaxWidth: 80,
        label: {
          normal: {
            show: true,
            position: [25, -20],
            textStyle: {
              fontSize: 12,
              color: '#333',
            },
            formatter: function (data) {
              if (data.value == 0) {
                return "";
              }
              return data.seriesName + data.value;
            }
          }
        },
        itemStyle: {
          normal: {
            color: '#45C2FA',
            barBorderRadius: [10, 10, 0, 0],
          },
        }
      },
      {
        name: '女生',
        type: 'bar',
        stack: 'one',
        data: bottomData,
        barMaxWidth: 80,
        label: {
          normal: {
            show: true,
            position: [25, '100%'],
            textStyle: {
              fontSize: 12,
              color: '#333'
            },
            formatter: function (data) {
              if (data.value == 0) {
                return "";
              }
              return data.seriesName + (-data.value);
            }
          }
        },
        itemStyle: {
          normal: {
            color: '#FD7AA4',
            barBorderRadius: [0, 0, 10, 10],
          },
        }
      }
    ]
  };
  myChart.setOption(option);
  options.callBack(myChart);
}


function clickMAkeBmiChart(options) {
  var defaults = {};
  var opts = $.extend({}, defaults, options);
  var xAxisData = ['总人数', '正常', '低体重', '超重', '肥胖'];
  var chartWrapper = $('<div class="each-chart-box back_white mt20">' +
    '<h3 class="title">' + opts.txt + '图表</h3>' +
    '<div id="single-count-img_' + opts.id + '" style="height:400px">' +
    '</div></div>');
  var bottomData = [];
  for (var i = 0; i < opts.data2.length; i++) {
    bottomData.push(0 - opts.data2[i])
  };
  $(".single-count-chart").append(chartWrapper);
  var myChart = echarts.init(chartWrapper.find(">#single-count-img_" + opts.id)[0]);
  var option = {
    backgroundColor: '#fff',
    legend: {
      data: ['男生', '女生'],
      align: 'left',
      left: 10,
      textStyle: {
        color: '#333',
        fontWeight: 700,
        fontFamily: 'SimHei',
        fontSize: 14,
      },
    },
    tooltip: {
      formatter: function (data) {
        if (data.value < 0) return data.name + '<br />' + data.seriesName + '人数' + '：' + (-data.value);
        return data.name + '<br />' + data.seriesName + '人数' + '：' + data.value;
      },
    },
    xAxis: {
      data: xAxisData,
      name: '图形类别',
      silent: false,
      axisLine: {
        onZero: true
      },
      splitLine: {
        show: false
      },
      splitArea: {
        show: false
      },
      axisLabel: {
        show: true,
        interval: 'auto',
        margin: 15,
        textStyle: {
          fontWeight: 700,
          fontFamily: 'SimHei',
          fontSize: 16,
        }
      },
    },
    yAxis: {
      // show:false,
      inverse: false,
      splitArea: {
        show: false
      },
      axisLabel: {
        formatter: function (value, index) {
          // 格式化成月/日，只在第一个刻度显示年份
          return value > 0 ? value : (-value);
        }
      }
    },
    grid: {
      left: 100
    },
    series: [{
        name: '男生',
        type: 'bar',
        stack: 'one',
        data: opts.data1,
        barMaxWidth: 80,
        label: {
          normal: {
            show: true,
            position: [25, -20],
            textStyle: {
              fontSize: 12,
              color: '#333',
            },
            formatter: function (data) {
              if (data.value == 0) {
                return "";
              }
              return data.seriesName + data.value;
            }
          }
        },
        itemStyle: {
          normal: {
            color: '#45C2FA',
            barBorderRadius: [10, 10, 0, 0],
          },
        }
      },
      {
        name: '女生',
        type: 'bar',
        stack: 'one',
        data: bottomData,
        barMaxWidth: 80,
        label: {
          normal: {
            show: true,
            position: [25, '100%'],
            textStyle: {
              fontSize: 12,
              color: '#333'
            },
            formatter: function (data) {
              if (data.value == 0) {
                return "";
              }
              return data.seriesName + (-data.value);
            }
          }
        },
        itemStyle: {
          normal: {
            color: '#FD7AA4',
            barBorderRadius: [0, 0, 10, 10],
          },
        }
      }
    ]
  };
  myChart.setOption(option);
  options.callBack(myChart);
}


Alert.middleWindow({
  data: $('.table-box').prop("outerHTML")
})