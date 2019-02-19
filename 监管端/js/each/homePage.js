$(function(){
  var Chart = {};
  // 饼状图配置，不要动
  Chart.pie = function (options) {
    var defaults = {
      element: '',
      title: '',
      data: ''
    };
    var legnedTxt = [];
    var opts = $.extend({}, defaults, options);
    // 表格数据
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById(opts.element));
    // 指定图表的配置项和数据
    var option = {
      tooltip : {
          trigger: 'item'
      },
      label:{
        normal:{
          formatter:'{b}\n{d}%',
        }
      },
      color: ['#8bc44a', '#ed8b43', '#cad034', '#b2dd5d'],
      series: [{
        type: 'pie',
        radius: '105',
        center: ['40%', '50%'],
        data: opts.data
      }]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  };

  //饼状图传参
  Chart.pie({
    element: 'bar-one',
    title: '',
    data: [
      { value: 0, name: '优秀' },
      { value: 0, name: '良好' },
      { value: 0, name: '及格' },
      { value: 0, name: '不及格' },
    ]
  });
  //饼状图传参
  Chart.pie({
    element: 'bar-two',
    title: '',
    data: [
      { value: 0, name: '优秀' },
      { value: 0, name: '良好' },
      { value: 0, name: '及格' },
      { value: 0, name: '不及格' },
    ]
  });
  //饼状图传参
  Chart.pie({
    element: 'bar-three',
    title: '',
    data: [
      { value: 0, name: '优秀' },
      { value: 0, name: '良好' },
      { value: 0, name: '及格' },
      { value: 0, name: '不及格' },
    ]
  });
})
