$(function () {
  // 心率曲线图
  var xAxisLen = 9;
  var xAxisArr = new Array();
  for(var i=0; i<xAxisLen; i++){
    xAxisArr.push(i + 1);
  }
  Chart.line({
    element: 'xinlv-chart-simple',
    xAxis: xAxisArr,
    yAxis: [80, 100, 120, 140, 160],
    data: [
      {
        name: '学生心率',
        type: 'line',
        smooth: true,
        data: [80, 85, 90, 100, 150, 183, 160, 130, 125],
      },
    ],
  });

  Chart.pie({
    element: 'banji-chart',
    title: '',
    data: [
      { value: 25, name: ' ≤ 79' },//≤80
      { value: 5, name: '80~99' },//80~100 
      { value: 15, name: '100~119' },//100~120 
      { value: 20, name: '120~150' },//120~150 
      { value: 35, name: ' ≥ 150' }//≥150 
    ]
  });
  // 环形图配置
  option = {
    title: {
      text: '参与人数：1321',
      x: 'center',
      y: 'center',
      textStyle: {
        fontWeight: 'normal',
        fontSize: 14
      }
    },
    series: [
      {
        name: '',
        type: 'pie',
        hoverAnimation:false,
        radius: ['70%', '95%'],
        label: {
          normal: {
            show: false,
            position: 'center'
          },
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        data: [
          { value: 90, name: '名字1' },
          { value: 10, name: '名字2' },
        ]
      }
    ]
  };
});