
var Chart = {};
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
        fontWeight:'500',
      },
      left:'25px',
      top: '10px'
    },
    legend: {
      data: ['个人平均','全班平均'],
      top: '0%',
      // selectedMode:'single',
    },
    tooltip : {
        trigger: 'axis',
        textStyle: {
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
    }],
    grid: {
      left: '8%',
      top: '50px',
      right: '4%',
      bottom:'65px'
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
      min:minVal,
      max:maxVal,
    }],
    series: opts.data
  };
  resizeLineChart = myChart;
  myChart.setOption(option);
  // 使用刚指定的配置项和数据显示图表。
};


// 点击详情
$('body').on('click', '.see-detail', function(){
  Alert.bigWindow({
    data:'<div class="kt-alert-chart"><div id="alert-chart">c</div></div>',
    callBack:function(){
      // 心率曲线图
      Chart.line({
        element: 'alert-chart',
        xAxis: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        yAxis: [80, 100, 120, 140, 160],
        data: [
          {
            name: '个人平均',
            type: 'line',
            smooth: true,
            data: [85, 92, 120, 160, 180, 160, 170, 150, 120],
          },
          {
            name: '全班平均',
            type: 'line',
            smooth: true,
            data: [70, 80, 90, 100, 130, 140, 160, 150, 120],
          }
        ],
      });
    }
  })
})
