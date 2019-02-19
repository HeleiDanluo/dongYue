$(function () {
  // 基于准备好的dom，初始化echarts图表
  var myChart = echarts.init(document.getElementById('heartRate-line'));
  option = {
    title: {
      text: '心率曲线图',
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['标准心率', '心率最高峰值']
    },
    toolbox: {
      show: true,
      feature: {
        mark: {show: true},
        dataView: {show: true, readOnly: false},
        magicType: {show: true, type: ['line', 'bar', 'stack', 'tiled']},
        restore: {show: true},
        saveAsImage: {show: true}
      }
    },
    calculable: true,
    xAxis: [
      // {
      //   type: 'value',
      //   boundaryGap: false,
      //   max:45,
      //   splitNumber:9,
      //   name:"min"
      // }
      {
        type: 'category',
        boundaryGap: false,
        data: ["0", "5", "10", "10", "15", "20", "25", "30", "35", "40", "45"],
        name: "min"
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisLabel: {
          formatter: '{value} 次'
        }
      }
    ],
    series: [
      {
        name: '标准心率',
        type: 'line',
        smooth: true,
        animation:false,
        itemStyle: {normal: {areaStyle: {type: 'default'}}},
        markPoint: {
          data: [
            {type: 'max', name: '最大值'},
          ]
        },
        data: [75, 80, 92, 130, 100, 75, 65, 65, 60, 58, 65],
      },
      {
        name: '心率最高峰值',
        type: 'line',
        smooth: true,
        animation:false,
        itemStyle: {normal: {areaStyle: {type: 'default'}}},
        data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
        markPoint: {
          data: [
            {type: 'max', name: '最大值'},
          ]
        },
      }
    ],
  };
  // 为echarts对象加载数据
  myChart.setOption(option);
  // autosize($(".each-model-item>textarea"));
  setHeight();
  function setHeight(element) {
    $(".each-model-item>textarea") .each(function () {
      $(this).css({'height': 'auto', 'overflow-y': 'hidden'}).height(calcHeight($(this)[0]));
    });
  }
  function calcHeight(obj){
    if(obj.scrollHeight){
      return obj.scrollHeight;
    }else if(obj.clientHeight){
      return obj.clientHeight;
    }
  }
  // 引用侧滑模块，此处引用是因为echarts要自适应宽度
  sidePage.use(myChart);
});

