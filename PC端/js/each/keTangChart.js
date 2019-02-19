// echart图形
var Chart = {};
var resizeLineChart;
var resizePieChart;
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
      data: ['男生平均','女生平均','全班平均'],
      top: '85%',
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
      top: '30px',
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

// 饼状图
// Chart.pie = function (options) {
//   var defaults = {
//     element: '',
//     title: '',
//     data: ''
//   };

//   var legnedTxt = [];
//   var opts = $.extend({}, defaults, options);
//   // 表格数据
//   // 基于准备好的dom，初始化echarts实例
//   var myChart = echarts.init(document.getElementById(opts.element));
//   // 指定图表的配置项和数据
//   var option = {
//     color: ['#7ace4c', '#ffbb44', '#11a0f8', '#FF2D55','#C644FC'],
//     series: [{
//       type: 'pie',
//       radius: ['0%','75%'],
//       center: ['50%', '50%'],
//       startAngle: [90],
//       data: opts.data,
//       label : {
//         normal : {
//             formatter:'{b} : {c} %'//{a}、{b}、{c}，分别表示系列名，数据名，数据值。
//           }
//       }
//     },
//     {
//       type: 'pie',
//       radius: ['80%','81%'],
//       center: ['50%', '50%'],
//       data: [{
//         value: 100,
//         itemStyle:{
//           normal:{
//             color:'#d4d4d4'
//           }
//         }
//       }],
//       label : {
//         normal : {
//             show:false,
//           }
//       },
//     }]
//   };
//   // 使用刚指定的配置项和数据显示图表。
//   myChart.setOption(option);
// };



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
      radius: ['0%','50%'],
      center: ['50%', '50%'],
      startAngle: [90],
      data: opts.data,
      label : {
        normal : {
            formatter:'{b}\n({c}%)'//{a}、{b}、{c}，分别表示系列名，数据名，数据值。
          }
      }
    },
    {
      type: 'pie',
      radius: ['55%','56%'],
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
  resizePieChart = myChart;
  myChart.setOption(option);
};
//班级列表向左
var num = 0;
var leftVal = 0; 
$('body').on('click','.tab-dkj .to-left',function(){
  if(leftVal < 0){
    //小于零 不在向右移动
    leftVal += $('.tab-dkj .center').width();//向右移动滚动条宽度
    $('.tab-dkj .content').animate({'left':leftVal},300)
  }
})
//班级列表向右
$('body').on('click','.tab-dkj .to-right',function(){
  var nextLeftVal = parseInt(leftVal-$('.tab-dkj .center').width());//下一个左移距离
  var barWidth =  parseInt(-$('.tab-dkj .content').width());//滑动块的外部距离
  if(nextLeftVal > barWidth){
    leftVal -= $('.tab-dkj .center').width();//向左移动滚动条宽度
    $('.tab-dkj .content').animate({'left':leftVal},300)
  }
})
$('body').on('click','.tab-dkj .item',function(){
  if($(this).hasClass('active')){
    $(this).removeClass('active');
  }else{
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
  }
})

//点击打印
$('body').on('click', '#print', function(){
  pageToPrint();
})

//调整页面到打印排版
function pageToPrint(){
  $('.pageContent').addClass('pageContent-print').removeClass('pageContent');//修改滚动class
  $('.left-menu').remove(); //去除左边菜单
  $('#chat').remove();//去除人工客服
  $('.top-option').remove();//去除顶部按钮
  $('body').addClass('print'); //添加调整后的样式
  var bjxlsj = $('.banjipingjun').clone();//班级心率数据表格
  var baPie = $('<div class="banji-chart" id="banji-chart"></div>');//心率数据饼状图
  var xlyc = $('.xlyc').clone();//心率异常学生
  var wsy = $('.wsysb').clone();//未使用设备
  resizeLineChart.resize();
  resizePieChart.resize();
  $('.right').remove();

  $('#printEleMount').append(bjxlsj);
  $('#printEleMount').append(baPie);
  $('body').append('<div id="printBtn" class="btn themeBtn ">确认打印</div>');
  $('#wsymd').append(xlyc)
  $('#wsymd').append(wsy)
}

//打印按钮
$('body').on('click', '#printBtn', function () {
  window.print();
  history.go(0);//刷新
})