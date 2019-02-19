// 封装的echarts插件
var Chart = {};

// 柱状图
Chart.bar = function (options) {
  var defaults = {
    element: '',
    title: '',
    xAxis: '',
    yAxis: '',
    data: ''
  };
  var opts = $.extend({}, defaults, options);

  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById(opts.element));
  // 指定图表的配置项和数据
  var option = {
    title:{
      text:opts.title,
      left:20
    },
    color: ['#7ace4c'],
    tooltip: {
      trigger: 'axis',
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    xAxis: [{
      data: opts.xAxis,
    }],
    yAxis: [{
      type: 'value',
    }],
    series: opts.data
  };

  myChart.setOption(option);
};

// 堆叠柱状图
Chart.stackBar = function (options) {
  var defaults = {
    element: '',
    title: '',
    xAxis: '',
    yAxis: '',
    data: ''
  };
  var opts = $.extend({}, defaults, options);

  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById(opts.element));
  // 指定图表的配置项和数据
  var option = {
    title:{
      text:opts.title,
      left:20
    },
    tooltip: {
      trigger:'axis',
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    legend: {
      data:['45分以下', '48~45', '50']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: opts.xAxis
    },
    yAxis: {
      type: 'value'
    },
    series: opts.data
  };

  myChart.setOption(option);
};

Chart.bar({
  element: 'tblpj1',
  title: '总分平均分',
  xAxis: ['2016~2017', '2017~2018', '2018~2019'],
  data: [{
    name: '总分平均分',
    type: 'bar',
    barWidth:'40%',
    label: {
      normal: {
        show: true,
      }
    },
    data: [19, 35, 40]
  }]
})

Chart.bar({
  element: 'tblpj2',
  title: '项目1平均分',
  xAxis: ['2016~2017', '2017~2018', '2018~2019'],
  data: [{
    name: '项目1平均分',
    type: 'bar',
    barWidth:'40%',
    label: {
      normal: {
        show: true,
      }
    },
    data: [19, 35, 40]
  }]
})

Chart.bar({
  element: 'tblpj3',
  title: '项目2平均分',
  xAxis: ['2016~2017', '2017~2018', '2018~2019'],
  data: [{
    name: '项目2平均分',
    type: 'bar',
    barWidth:'40%',
    label: {
      normal: {
        show: true,
      }
    },
    data: [10, 70, 20]
  }]
})

//堆叠柱状图1
Chart.stackBar({
  element: 'tblfd1',
  title: '总分各分数段占比',
  xAxis: ['2016~2017', '2017~2018', '2018~2019'],
  data: [{
      name:'45分以下',
      type: 'bar',
      stack: '总分各分数段占比',
      barWidth:'40%',
      label: {
        normal: {
          show: true,
          formatter: '{c}%'
        }
      },
      data: [20, 50, 30]
    },
    {
      name:'48~45',
      type: 'bar',
      stack: '总分各分数段占比',
      barWidth:'40%',
      label: {
        normal: {
          show: true,
          formatter: '{c}%'
        }
      },
      data: [50, 10, 20]
    },
    {
      name:'50',
      type: 'bar',
      stack: '总分各分数段占比',
      barWidth:'40%',
      label: {
        normal: {
          show: true,
          formatter: '{c}%'
        }
      },
      data: [30, 40, 50]
    }
  ]
})
//堆叠柱状图2
Chart.stackBar({
  element: 'tblfd2',
  title: '项目1各分数段占比',
  xAxis: ['2016~2017', '2017~2018', '2018~2019'],
  data: [{
      name:'45分以下',
      type: 'bar',
      stack: '总分各分数段占比',
      barWidth:'40%',
      label: {
        normal: {
          show: true,
          formatter: '{c}%'
        }
      },
      data: [20, 50, 30]
    },
    {
      name:'48~45',
      type: 'bar',
      stack: '总分各分数段占比',
      barWidth:'40%',
      label: {
        normal: {
          show: true,
          formatter: '{c}%'
        }
      },
      data: [50, 10, 20]
    },
    {
      name:'50',
      type: 'bar',
      stack: '总分各分数段占比',
      barWidth:'40%',
      label: {
        normal: {
          show: true,
          formatter: '{c}%'
        }
      },
      data: [30, 40, 50]
    }
  ]
})
//堆叠柱状图3
Chart.stackBar({
  element: 'tblfd3',
  title: '项目2各分数段占比',
  xAxis: ['2016~2017', '2017~2018', '2018~2019'],
  data: [{
      name:'45分以下',
      type: 'bar',
      stack: '总分各分数段占比',
      barWidth:'40%',
      label: {
        normal: {
          show: true,
          formatter: '{c}%'
        }
      },
      data: [20, 50, 30]
    },
    {
      name:'48~45',
      type: 'bar',
      stack: '总分各分数段占比',
      barWidth:'40%',
      label: {
        normal: {
          show: true,
          formatter: '{c}%'
        }
      },
      data: [50, 10, 20]
    },
    {
      name:'50',
      type: 'bar',
      stack: '总分各分数段占比',
      barWidth:'40%',
      label: {
        normal: {
          show: true,
          formatter: '{c}%'
        }
      },
      data: [30, 40, 50]
    }
  ]
})
