// 封装的echarts插件
var Chart = {};
// 折线图
Chart.bar = function (options) {
  var defaults = {
    element: '',
    title: '',
    xAxis: {},
    yAxis:'',
    data: ''
  };
  var legnedTxt = [];
  var opts = $.extend({}, defaults, options);
  if(document.getElementById(opts.element)){
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
      tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
          type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      xAxis: [{
        data: opts.xAxis,
        axisLine:{
          show:false
        },
        axisTick: {
          show:false
        },
      }],
      grid: {
        left: 60,
        top: 100,
        right: 30,
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
        axisLabel: {
          formatter: '{value} %'
        }
      }],
      series:opts.data
    };
  
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  }
};
$('body').on('click','.kaoqin-new .gw-content .class-item',function(){
  if($(this).parent().hasClass('multi')){
    //多选
    if($(this).hasClass('active')){
      $(this).removeClass('active');
    }else{
      $(this).addClass('active');
    }
  }else{
    //单选
    $(this).addClass('active').siblings().removeClass('active');
  }
})