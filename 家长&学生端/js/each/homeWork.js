$(function () {
  var secondsObj = [
    {
      time: 1493866444406
    },
    {
      time: 1494866444406
    },
    {
      time: 1495866444406
    },
    {
      time: 1496866444406
    },
  ];
  var data = [];
  for (var i = 0; i < secondsObj.length; i++) {
    var newObj = {};
    newObj.d = new Date(secondsObj[i].time);
    newObj.text = '已完成';
    data.push(newObj);
  }
  // console.log(data);
  $('.honor-calendar').mobiscroll().eventcalendar({
    theme: 'mobiscroll',
    display: 'inline',
    layout: 'liquid',
    firstDay: 1,
    yearChange: true,
    calendarScroll: 'horizontal',
    showOuterDays: true,
    showEventCount: true,
    lang: 'zh',
    data: data
  });
  // var dpr=$('html').attr("data-dpr");
  // var fontSize=dpr=="1"?12:(dpr=="2"?24:36);
  // var xLabel=dpr=="1"?12:(dpr=="2"?12:24);
  // // console.log(fontSize);
  // var getDpr = function getDpr(){
  //   var dpr = $('html').attr('data-dpr');
  
  //   if (dpr == 1) {
  //       return 12;
  //   }else if (dpr == 2) {
  //       return  24;
  //   }else {
  //       return 36;
  //   }
  // };
  // var myChart = echarts.init($('.grade-chart')[0]);
  // option = {
  //   color: ['#3398DB'],
  //   title:{
  //     text: '训练目标占比',
  //     textStyle:{
  //       fontWeight: 'lighter',
  //       fontSize: getDpr()
  //     },
  //     left: '3%',
  //     top: '2%'
  //   },
  //   tooltip : {
  //     show:false,
  //     trigger: 'axis',
  //     axisPointer : {            // 坐标轴指示器，坐标轴触发有效
  //       type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
  //     }
  //   },
  //   grid: {
  //     left: '3%',
  //     right: '4%',
  //     bottom: '3%',
  //     top:'18%',
  //     containLabel: true
  //   },
  //   xAxis : [
  //     {
  //       type : 'category',
  //       data : ['躯干及上肢', '体重指标', '肌耐力', '躯干及上肢', '反应', '心肺有氧', '平衡','柔韧度'],
  //       axisTick: {
  //         alignWithLabel: true
  //       },
  //       axisLine:{
  //         show:false
  //       },
  //       axisLabel:{
  //         textStyle:{
  //           fontSize:xLabel,
  //           color:"#9a9a9a"
  //         }
  //       }
  //     }
  //   ],
  //   yAxis : [
  //     {
  //       type : 'value',
  //       // show:false,
  //       splitArea: {show: false},
  //       axisLine:{
  //         // show:false
  //         lineStyle:{
  //           color:"#ddd"
  //         }
  //       },
  //       axisLabel:{
  //         // show:false
  //         textStyle:{
  //           color:"#9a9a9a",
  //           fontSize:fontSize
  //         }
  //       },
  //       axisTick:{
  //         show:false
  //       },
  //       max:100
  //     }
  //   ],
  //   series : [
  //     {
  //       name:'学生各项体质成绩',
  //       type:'bar',
  //       barWidth: '60%',
  //       data:[80, 75, 70, 68, 62, 43, 21,10],
  //       itemStyle:{
  //         normal:{
  //           color:"#82B64A",
  //           opacity:0.5,
  //           barBorderRadius:[5,5,0,0]
  //         }
  //       },
  //       label: {
  //         normal: {
  //           show: true,
  //           position:"top",
  //           textStyle: {
  //             fontSize: fontSize,
  //             color: '#333',
  //           },
  //           formatter: function (data) {
  //             if (data.value == 0) {
  //               return "";
  //             }
  //             return data.value+"%";
  //           }
  //         }
  //       },
  //     }
  //   ]
  // };
  // myChart.setOption(option);
})
// echart图形
// var Chart = {};
// var getDpr = function getDpr(){
//   var dpr = $('html').attr('data-dpr');

//   if (dpr == 1) {
//       return 12;
//   }else if (dpr == 2) {
//       return  24;
//   }else {
//       return 36;
//   }
// };

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
//     color: ['#fe760e', '#eb5143', '#7ace4c', '#01dae4','#11a0f8','#cb55c2','#f4488d','#f6ac01'],
//     series: [{
//       type: 'pie',
//       radius: ['0%','45%'],
//       center: ['50%', '50%'],
//       startAngle: [90],
//       data: opts.data,
//       label : {
//         normal : {
//             textStyle : {
//                 fontSize : getDpr()
//             },
//             formatter:'{b} :\n( {c} )%'//{a}、{b}、{c}，分别表示系列名，数据名，数据值。
//           }
//       }
//     },
//     {
//       type: 'pie',
//       radius: ['47%','48%'],
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
