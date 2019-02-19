// echart图形
var Chart = {};
var getDpr = function getDpr(){
  var dpr = $('html').attr('data-dpr');

  if (dpr == 1) {
      return 12;
  }else if (dpr == 2) {
      return  24;
  }else {
      return 36;
  }
};

// 折线图
Chart.line = function (options) {
  var defaults = {
    element: '',
    title: '',
    xAxis: {},
    yAxis: '',
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
      textStyle:{
        fontWeight:'lighter',
        fontSize:getDpr()
      }
    },
    legend: {
      data: ['男生平均','女生平均','全班平均'],
      top: '85%',
      textStyle:{
        fontWeight:'lighter',
        fontSize:getDpr()
      }
    },
    tooltip : {
        trigger: 'axis',
        textStyle: {
          fontSize: getDpr()
        }
    },
    color: ['#208ec2', '#f3669c', '#ead412'],
    itemStyle: {
      normal: {
        opacity: 0
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
      boundaryGap: false,
      axisLabel: {
        textStyle:{
          fontSize: getDpr()
        }
      },
    }],
    grid: {
      x: '8%',
      y: '20%',
      x2: 10,
      y2:'30%'
    },
    yAxis: [{
      type: 'value',
      data: opts.yAxis,
      min: 'dataMin',
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        textStyle:{
          fontSize: getDpr()
        }
      },
      min:minVal,
      max:maxVal,
    }],
    series: opts.data
  };
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
};

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
    color: ['#7ace4c', '#ffbb44', '#11a0f8', '#FF2D55','#C644FC'],
    series: [{
      type: 'pie',
      radius: ['0%','55%'],
      center: ['50%', '50%'],
      startAngle: [90],
      data: opts.data,
      label : {
        normal : {
            textStyle : {
                fontSize : getDpr()
            },
            formatter:'{b} : {d} %'//{a}、{b}、{c}，分别表示系列名，数据名，数据值。
          }
      }
    },
    {
      type: 'pie',
      radius: ['60%','61%'],
      center: ['50%', '50%'],
      data: [{
        value: 100,
        itemStyle:{
          normal:{
            color:'#d4d4d4'
          }
        }
      }],
      label : {
        normal : {
            show:false,
          }
      },
    }]
  };
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
};