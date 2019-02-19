$(function(){
  
  var xAxisData = ['总人数','正常','低体重','超重','肥胖'];
  var data1 = [];
  var data2 = [];
  
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
    legend: {
      data: ['boy', 'girl'],
      show:true,
      align: 'left',
      left: 10
    },
    series: [{
        type: 'bar',
        name:'boy',
        itemStyle: {
            normal: {
                color: '#00C2FE'
            }
        },
        label:{
          normal:{
            show:true,
            position:[5,-20],
            formatter: '男生{c}',
          }
        },
        barWidth: 50,
        barGap: '0%', 
        data: [37, 28, 5, 2,2]
    }, {
        type: 'bar',
        name:'girl',
        barWidth: 50,
        itemStyle: {
          normal: {
              color: '#FF649E'
          }
        },
        label:{
          normal:{
            show:true,
            top:0,
            position:[5,-20],
            formatter: '女生{c}',
          }
        },
        z: 10,
        data: [20, 16, 3, 1,0]
    }]
  };
  
  var mychart=echarts.init($('.chartBox').get(0))
  mychart.setOption(option);

  $('.year .box span').bind('click',change)
  $('.grade .box span').bind('click',change)
  $('.class .box span').bind('click',change)
  $('.limit .box span').bind('click',change)

  function change(){
    var $this=$(this)
    $this.siblings().removeClass('focus')
    $this.addClass('focus')
  }  
})