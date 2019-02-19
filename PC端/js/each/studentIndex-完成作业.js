$(function () {
  // 封装的echarts插件
  var Chart = {};
  // 折线图
  Chart.bar = function (options) {
    var defaults = {
      element: '',
      title: '',
      legend:'',
      xAxis: {},
      yAxis: '',
      data: ''
    };
    var legnedTxt = [];
    var opts = $.extend({}, defaults, options);
    if (document.getElementById(opts.element)) {
      // 表格数据
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById(opts.element));
      // 指定图表的配置项和数据
      var option = {
        title: {
          text: opts.title,
          textStyle: {
            fontSize: 18,
            fontWeight: 'normal'
          },
          padding: [30, 0],
          left: 32
        },
        legend: {
          data: opts.legend
        },
        color: ['#7ace4c', '#ffbb44', '#11a0f8'],
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        xAxis: [{
          data: opts.xAxis,
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
        }],
        grid: {
          left: 60,
          top: 100,
          right: 30,
        },
        yAxis: [{
          type: 'value',
          data: opts.yAxis,
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            formatter: '{value} %'
          }
        }],
        series: opts.data
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
      resizeChart2 = myChart;
    }
  };


  //填充柱状图数据，每个图的id不一样 
  // =========================出勤===================
  Chart.bar({
    element: 'a',
    title: '学校名称',
    xAxis: ['一年级', '二年级', '三年级', '四年级'],
    legend:['出勤（含迟到）', '缺勤', '请假'],
    data: [{
        name: '出勤（含迟到）',
        type: 'bar',
        data: [80, 80, 70, 62],
        barWidth: '20px',
      },
      {
        name: '缺勤',
        type: 'bar',
        data: [74, 55, 46, 42],
        barWidth: '20px',
      },
      {
        name: '请假',
        type: 'bar',
        data: [56, 21, 35, 84],
        barWidth: '20px',
      }
    ]
  })
  Chart.bar({
    element: 'b',
    title: '学校名称',
    xAxis: ['一年级', '二年级', '三年级', '四年级'],
    legend:['出勤（含迟到）', '缺勤', '请假'],
    data: [{
        name: '出勤（含迟到）',
        type: 'bar',
        data: [80, 80, 70, 62],
        barWidth: '20px',
      },
      {
        name: '缺勤',
        type: 'bar',
        data: [74, 55, 46, 42],
        barWidth: '20px',
      },
      {
        name: '请假',
        type: 'bar',
        data: [56, 21, 35, 84],
        barWidth: '20px',
      }
    ]
  })

  // ===========================完成作业==================
  Chart.bar({
    element: 'wanChengZuoYe',
    title: '',
    xAxis: ['一年级', '二年级', '三年级', '四年级'],
    legend:['学校布置作业', '完成布置作业', '完成推荐作业'],
    data: [{
        name: '学校布置作业',
        type: 'bar',
        data: [80, 80, 70, 62],
        barWidth: '20px',
      },
      {
        name: '完成布置作业',
        type: 'bar',
        data: [74, 55, 46, 42],
        barWidth: '20px',
      },
      {
        name: '完成推荐作业',
        type: 'bar',
        data: [56, 21, 35, 84],
        barWidth: '20px',
      }
    ]
  })
})