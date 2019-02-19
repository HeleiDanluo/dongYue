$(function(){
  var maleColor="#008BC4";
  var femaleColor="#f00";
  var dataObj=[];
  for(var i=0;i<5;i++){
    console.log(i+"次循环");
    dataObj[i]=[];
    for(var j=0;j<7;j++){
      dataObj[i].push(parseInt(Math.random()*100));
    }
  }
  $(".chart-box .right-chart").each(function(k,v){
    setRadar($(this),dataObj[k],2)
  })
  function setRadar(node,data,general){
    var myChart = echarts.init(node[0]);
    option = {
      tooltip: {},
      radar: {
        indicator: [
          {name: '平衡', max: 100},
          {name: '肌耐力', max: 100},
          {name: '心肺有氧', max: 100},
          {name: '反应', max: 100},
          {name: '柔韧度', max: 100},
          {name: '躯干及下肢', max: 100},
          {name: '躯干及上肢', max: 100}
        ],
        nameGap:2,
        center: ['50%', '55%']
      },
      series: [{
        name: '个人综合素质雷达图',
        type: 'radar',
        data: [
          {
            color: "#000",
            value: data,
            name: '个人得分情况：',
            symbolSize: 6,
            lineStyle: {
              normal: {
                color: general==2?femaleColor:maleColor,
                width: 2,
                type: "dotted",
              }
            },
            label: {
              normal: {
                show: true,
                formatter: function (params) {
                  return params.value;
                },
                textStyle: {
                  color: general==2?femaleColor:maleColor,
                  fontFamily: 'sans-serif',
                  fontSize: 16,
                },
              }
            },
            areaStyle: {
              normal: {
                opacity: 0.5,
                color: new echarts.graphic.RadialGradient(0.1, 0.1, 0.1, [
                  {
                    color:general==2?femaleColor:maleColor,
                    offset: 0
                  },
                  {
                    color: general==2?femaleColor:maleColor,
                    offset: 1
                  }
                ])
              }
            },
            itemStyle: {
              normal: {
                color: general==2?femaleColor:maleColor,
                borderColor: '#000',
                borderWidth: 0,
                borderType: 'solid',
                borderColor: general==2?femaleColor:maleColor,
                borderWidth: 2,
              }
            }
          }
        ]
      }],
    };
    myChart.setOption(option);
  }
})