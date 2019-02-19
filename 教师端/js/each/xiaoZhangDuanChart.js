var Chart = {}
var getDpr = function getDpr() {
  var dpr = $('html').attr('data-dpr');

  if (dpr == 1) {
    return 12;
  } else if (dpr == 2) {
    return 24;
  } else {
    return 36;
  }
};
//总课时 内饼外环图
Chart.pieCircle = function (options) {
  var defaults = {
    element: '',
    datasmall: '',
    databig: ''
  };

  var opts = $.extend({}, defaults, options);
  // 表格数据
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById(opts.element));
  // 指定图表的配置项和数据
  var option = {
    color: [
      // '#fff1da',
      '#ff9c00',
      '#5181ff',
      '#958bff',
      '#c2e791',
      // '#cfecfe',
      '#ff688d',
      '#fed100',
      '#95d600',
      '#00c8a8',
      '#00d1ff'
    ],
    tooltip: {
      trigger: 'item',
    },
    series: [{
        type: 'pie',
        radius: ['0%', '40%'],
        center: ['50%', '50%'],
        data: opts.datasmall,
        label: {
          normal: {
            textStyle: {
              fontSize: getDpr()
            },
            position: 'inner',
          }
        }
      },
      {
        type: 'pie',
        radius: ['45%', '65%'],
        center: ['50%', '50%'],
        data: opts.databig,
        label: {
          normal: {
            textStyle: {
              fontSize: getDpr()
            },
            formatter: '{b}\n{c}/{d}%  ',
          }
        },
      }
    ]
  };
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
};

//学生体质健康 饼状 折线图
Chart.lineBar = function (options) {
  var defaults = {
    element: '',
    dataLine: '',
    dataBar: ''
  };

  var legnedTxt = [];
  var opts = $.extend({}, defaults, options);
  var dataCenterLine = []; //中间灰色柱状图
  //计算中间灰色数据
  for (var i = 0; i < opts.dataLine.length; i++) {
    dataCenterLine.push(opts.dataLine[i] - opts.dataBar[i]);
  }
  // 表格数据
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById(opts.element));
  var option = {
    legend: {
      data: ['合格率', '优良率'],
      top: '5%',
      left: 'center',
      textStyle: {
        color: '#000',
        fontSize: getDpr(),
      }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      },
      textStyle: {
        fontSize: getDpr(),
      },
      formatter(params) {
        var myTip = '<div">\
            <p>' + params[0].name + '</p>\
            <p><span style="display:inline-block;width:.3rem;height:.3rem;border-radius:50%;background:#7ace4c;"></span>&nbsp;' +
          params[0].seriesName + '：' + params[0].value + '%</p>\
            <p><span style="display:inline-block;width:.3rem;height:.3rem;border-radius:50%;background:#ffac00;"></span>&nbsp;' +
          params[2].seriesName + '：' + params[2].value + '%</p>\
          </div>'
        return myTip
      }
    },
    grid: {
      left: '4%',
      right: '4%',
      top: '20%',
      bottom: '12%',
      show: false,
      containLabel: true,
    },
    xAxis: [{
      axisLine: {
        lineStyle: {
          color: '#eff1f4',
        }
      },
      axisLabel: {
        textStyle: {
          color: "#000",
          fontSize: getDpr(),
        },
        interval: 0,
        rotate: '30',
      },
      type: 'category',
      data: ['BMI指标', '肺活量', '50米', '坐位体前屈', '一分钟跳绳', '一分钟仰卧起坐', '50*8往返跑', '总成绩'],
    }],
    yAxis: [{
      type: 'value',
      axisLine: {
        lineStyle: {
          color: '#eff1f4',
        }
      },
      axisLabel: {
        textStyle: {
          color: "#000",
          fontSize: getDpr(),
        }
      },
      splitLine: {
        show: false,
      }

    }],
    itemStyle: {
      normal: {
        barBorderRadius: 10,
      }
    },
    series: [{
        //绿色柱状图
        name: '优良率',
        color: ['#7ace4c'],
        type: 'bar',
        barWidth: '20%',
        stack: 'one',
        data: opts.dataBar
      },
      {
        //灰色柱状图
        color: ['#f4f4f4'],
        type: 'bar',
        barWidth: '20%',
        stack: 'one',
        data: dataCenterLine
      },
      {
        //橙色折线图
        name: '合格率',
        color: ['#ffac00'],
        type: 'line',
        smooth: true,
        symbolSize: getDpr,
        data: opts.dataLine
      },
    ]
  }
  myChart.setOption(option);
}

//体育成绩统计 环形图
Chart.circle = function (options) {
  var defaults = {
    elsement: '',
    data: '',
  }
  var opts = $.extend({}, defaults, options);
  var myChart = echarts.init(document.getElementById(opts.element));
  var option = {
    color: ['#11a0f8', '#ffbb44', '#7ace4c', '#958bff'],
    tooltip: {
      trigger: 'item',
    },
    series: {
      type: 'pie',
      radius: ['55%', '75%'],
      label: {
        normal: {
          textStyle: {
            fontSize: getDpr()
          },
        }
      },
      data: opts.data
    }
  }
  myChart.setOption(option);
}

//最近一次中考测评统计
Chart.pie = function (options) {
  var defaults = {
    elsement: '',
    data: '',
  }
  var opts = $.extend({}, defaults, options);
  var myChart = echarts.init(document.getElementById(opts.element));
  var option = {
    color: ['#ffbb44', '#11a0f8', '#7ace4c'],
    tooltip: {
      trigger: 'item',
    },
    series: {
      type: 'pie',
      radius: '75%',
      label: {
        normal: {
          textStyle: {
            fontSize: getDpr()
          },
          formatter: '{b}\n{c}/{d}%',
        }
      },
      data: opts.data
    }
  }
  myChart.setOption(option);
}

//学期考勤统计
Chart.bar = function (options) {
  var defaults = {
    element: '',
    xAxisData: '',
    data: ''
  };

  var legnedTxt = [];
  var opts = $.extend({}, defaults, options);
  var dataCenterLine = []; //中间灰色柱状图

  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById('kqtj'));
  var option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      },
      formatter(params) {
        var myTip = '<div">\
            <p>' + params[0].name + '</p>\
            <p><span style="display:inline-block;width:.3rem;height:.3rem;border-radius:50%;background:#7ace4c;"></span>&nbsp;' +
          params[0].seriesName + '：' + params[0].value + '%</p>\
            <p><span style="display:inline-block;width:.3rem;height:.3rem;border-radius:50%;background:#ffac00;"></span>&nbsp;' +
          params[1].seriesName + '：' + params[1].value + '%</p>\
            <p><span style="display:inline-block;width:.3rem;height:.3rem;border-radius:50%;background:#ffac00;"></span>&nbsp;' +
          params[2].seriesName + '：' + params[2].value + '%</p>\
          </div>'
        return myTip
      }
    },
    legend: {
      data: ['出勤（含迟到）', '缺勤', '请假'],
      textStyle: {
        color: "#000",
        fontSize:getDpr(),
      },
      itemWidth: getDpr(),
      itemHeight: getDpr(),
      icon:'circle',
    },
    grid: {
      left: '4%',
      right: '4%',
      top: '15%',
      bottom: '12%',
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      data: opts.xAxisData,
      axisLine: {
        show: true,
        lineStyle: {
          color: "#f5f5f5",
          width: 1,
          type: "solid"
        },
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: true,
        textStyle: {
          color: "#000",
          fontSize:getDpr(),
        },
        interval: 0,
        rotate: '30',
      },
    }],
    yAxis: [{
      type: 'value',
      axisLabel: {
        formatter: '{value} %'
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: true,
        textStyle: {
          color: "#000",
          fontSize:getDpr(),
        },
      },
      axisLine: {
        show: false,
        lineStyle: {
          color: "#000",
          width: 1,
          type: "solid"
        },
      },
      splitLine: {
        lineStyle: {
          color: "#f5f5f5",
        }
      }
    }],
    color:['#7ace4c','#ffbb44','#11a0f8'],
    itemStyle: {
      normal: {
        barBorderRadius: 10,
      }
    },
    series: opts.data,
  }
  myChart.setOption(option);
}