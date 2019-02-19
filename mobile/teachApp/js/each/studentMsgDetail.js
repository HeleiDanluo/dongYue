$(function(){
  var myChart = echarts.init(document.getElementById('personal-radar-img'));
  option = {
    tooltip: {},
    radar: {
      // shape: 'circle',
      indicator: [
        {name: '平衡', max: 100},
        {name: '肌耐力', max: 100},
        {name: '心肺有氧', max: 100},
        {name: '反应', max: 100},
        {name: '柔韧度', max: 100},
        {name: '躯干及下肢', max: 100},
        {name: '躯干及上肢', max: 100}
      ]
    },
    series: [{
      name: '个人综合素质雷达图',
      type: 'radar',
      data: [
        {
          color: "#008BC4",
          value: [60, 80, 99, 75, 80, 66, 55],
          name: '个人得分情况：',
          symbolSize: 6,
          lineStyle: {
            normal: {
              color: '#008BC4',
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
                color: '#008BC4',
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
                  color: '#64C9F5',
                  offset: 0
                },
                {
                  color: '#64C9F5',
                  offset: 1
                }
              ])
            }
          },
          itemStyle: {
            normal: {
              color: "#008BC4",
              borderColor: '#000',
              borderWidth: 0,
              borderType: 'solid',
              borderColor: '#008BC4',
              borderWidth: 2,
            }
          }
        }
      ]
    }]
  };
  myChart.setOption(option);
})