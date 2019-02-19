// 封装的echarts插件
var Chart = {};
// 饼状图
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
    title: {
      text: opts.title,
      textStyle: {
        fontSize: 18,
        fontWeight: 'normal'
      },
      padding: [30, 0],
      left: '32'
    },
    tooltip : {
        trigger: 'axis'
    },
    color: ['#7ace4c', '#ffbb44', '#11a0f8'],
    legend: {
      orient: 'vertical',
      left: '60%',
      top: 130,
      itemWidth: 14,
      itemHeight: 14,
      data: opts.data,
      icon: 'circle',
      textStyle: {
        fontSize: 16
      },
      formatter: function (name) {
        if(name == opts.data[0].name){
          return name + '出勤（含迟到）';
        }else if(name == opts.data[1].name){
          return name + '缺勤';
        }else if(name == opts.data[2].name){
          return name + '请假';
        }
      }
    },
    series: [{
      type: 'pie',
      radius: '105',
      center: ['148', '190'],
      startAngle: [270],
      label: {
        normal: {
          position: 'inner'
        }
      },
      labelLine: {
        normal: {
          show: false
        }
      },
      data: opts.data
    }]
  };
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
};
// 折线图
Chart.line = function (options) {
  var defaults = {
    element: '',
    title: '',
    xAxis: {},
    yAxis:'',
    data: ''
  };
  var legnedTxt = [];
  var opts = $.extend({}, defaults, options);
  var allData = [];
  var arrNew=[];
  for(i = 0; i<opts.data.length; i++){
    allData = allData.concat(opts.data[i].data);
  }
  for(var  i in allData){
	  if(allData[i]!==0){
	  arrNew.push(allData[i]);
	  }
  }
  var maxVal = Math.max.apply(null, arrNew) + 10;
  var minVal = Math.min.apply(null, arrNew) - 10;
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
    color: ['#7ace4c', '#ffbb44', '#11a0f8'],
    itemStyle: {
      normal: {
        opacity: 0
      }
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c}'
    },
    legend: {
      itemWidth: 14,
      itemHeight: 14,
      left: 34,
      top: 72,
      data: opts.data,
      icon: 'circle',
    },
    xAxis: [{
      data: opts.xAxis,
      axisLine:{
        show:false
      },
      axisTick: {
        show:false
      },
      boundaryGap: false
    }],
    grid: {
      x: 60,
      y: 128,
    },
    yAxis: [{
      type:'value',
      data: opts.yAxis,
      axisLine:{
        show:false
      },
      axisTick: {
        show:false
      },
      min:minVal,
      max:maxVal,
    }],
    series:opts.data
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
};