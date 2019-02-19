$(function () {
  // 处理数据
  var data = [75, 80, 92, 130, 100, 75, 65, 65, 60, 58, 65];
  var max = 100;
  var maxData = [];
  for (var i = 0; i < data.length; i++) {
    maxData.push(max);
  }
  //  基于准备好的dom，初始化echarts图表
  var myChart = echarts.init(document.getElementById('echart-box'));
  option = {
    textStyle: {
      fontStyle: 'normal',
      fontSize: 12,
    },
    tooltip: {
      trigger: 'axis',
      formatter: function (data) {
        console.log(data);
        if (data.length) {
          return '第' + data[0].name + "分钟<br/>" +
            data[0].seriesName + "：" + data[0].value + "次<br/>" +
            data[1].seriesName + "：" + data[1].value + "次<br/>";
        }
        ;
      }
    },
    legend: {
      data: ['标准心率', '心率最高峰值']
    },
    toolbox: {
      show: true,
    },
    calculable: true,
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ["0", "5", "10", "10", "15", "20", "25", "30", "35", "40", "45"],
      name: "min",
      nameGap: 0,
      axisLabel: {
        show: true,
        margin: 0,
      },
      splitLine: {
        show: true,
      },
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: '{value}次'
      },
      axisLabel: {},
    },
    series: [
      {
        name: '标准心率',
        type: 'line',
        smooth: true,
        itemStyle: {normal: {areaStyle: {type: 'default'}}},
        markPoint: {
          symbolSize: 30,
          label: {
            normal: {
              textStyle: {
                color: '#fff',
                fontStyle: 'normal',
                fontFamily: 'sans-serif',
                fontSize: 8,
              },
            },
          },
          data: [
            {type: 'max', name: '最大值'},
          ]
        },
        data:[[0,80],[45,80]],
      },
      {
        name: '心率最高峰值',
        type: 'line',
        smooth: true,
        itemStyle: {normal: {areaStyle: {type: 'default'}}},
        data: data,
        markPoint: {
          symbolSize: 30,
          label: {
            normal: {
              textStyle: {
                color: '#fff',
                fontStyle: 'normal',
                fontFamily: 'sans-serif',
                fontSize: 8,
              },
            },
          },
          data: [
            {type: 'max', name: '最大值'},
          ]
        },
      }
    ],
  };
  myChart.setOption(option);
})