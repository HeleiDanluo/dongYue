// 点击切换 图形和表格
$('body').on('click', '.exchange-table', function () {
  if($(this).text().trim() == '图表'){
    $(this).text('表格');
    $('.table').addClass('hide');
    $('.chart').removeClass('hide');
  }else{
    $(this).text('图表');
    $('.table').removeClass('hide');
    $('.chart').addClass('hide');
  }
})
var getDpr = function getDpr() {
  var dpr = $('html').attr('data-dpr');
  if (dpr == 1) {
    return 12;
  } else if (dpr == 2) {
    return 24;
  } else {
    return 36;
  }
};
var Chart = {};
// 柱状图封装                                                                                                                       
Chart.line = function (options) {
  var defaults = {
    element: '',
    data: '',
  };
  var opts = $.extend({}, defaults, options);
  // 表格数据
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById(opts.element));
  // 指定图表的配置项和数据
  var option = {
    xAxis: {
      axisLabel:{
        rotate:45,
        interval: 0,
        textStyle: {
          color: "#000",
          fontSize: getDpr(),
        },
      },
      type: 'category',
      data: ['初1第1次', '初2第1次', '初2第2次', '初3第1次', '初3第2次', '初3第3次', '最终成绩']
    },
    yAxis: {
        type: 'value',
        axisLabel: {
          textStyle: {
            color: "#000",
            // fontSize: getDpr(),
          }
        },
    },
    grid:{
      top: '15%',
      bottom: '33%',
    },
    series: [{
        data: opts.data,
        type: 'bar',
        barWidth:'40%',
        label: {
          normal: {
              show: true,
              position: 'top',
              textStyle: {
                color: "#000",
                fontSize: getDpr(),
              },
          },
          
        },
        itemStyle: { 
            normal: { 
                color: function(params) {
                    var colorList = [ 
                    '#64BD3D','#EE9201','#29AAE3', 
                    '#B74AE5','#0AAF9F','#E89589' 
                    ]; 
                    return colorList[params.dataIndex] 
                }, 
            } 
        }
    }],
  };
  myChart.setOption(option);
}

// 柱状图调用
Chart.line({
  element: 'chart-one',
  data: [65,34,30,34,42,34,30]
})
Chart.line({
  element: 'chart-two',
  data: [65,34,30,34,42,34,30]
})
Chart.line({
  element: 'chart-three',
  data: [65,34,30,34,42,34,30]
})
Chart.line({
  element: 'chart-four',
  data: [65,34,30,34,42,34,30]
})