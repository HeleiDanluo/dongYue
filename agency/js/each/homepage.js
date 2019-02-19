$(function(){
  var xAxisData = ['2017年3月','2017年4月','2017年5月',
  '2017年6月','2017年7月','2017年8月','2017年9月',
  '2017年10月'];
  var data1 = [5,8,15,13,15,7,7,5];
  
  var itemStyle = {
      normal: {
      },
      emphasis: {
          barBorderWidth: 1,
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          shadowColor: 'rgba(0,0,0,0.5)'
      }
  };
  
  option = {
    xAxis: {
        data:xAxisData
    },
    backgroundColor:'#fff',
    yAxis: {
    },
    series: [{
        type: 'bar',
        name:'boy',
        itemStyle: {
            normal: {
                color: '#82b64a'
            }
        },
        label:{
          normal:{
            show:true,
            color:'#000'
          }
        },
        barWidth: 50,
        data: data1
    }]
  };
  
  var mychart=echarts.init($('.chartBox').get(0))
  mychart.setOption(option);
})