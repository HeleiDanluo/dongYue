$(function () {

  var zuoYan =[10,10,20,30,10,20];     // 左眼
  var youYan=[10,20,30,10,20,10];      // 右眼
  var zhengChang=[30,30,30,30,30,30];  // 正常
  var qingDu=[20,20,20,20,20,20];      // 轻度
  var zhongDu=[10,10,10,10,10,10];     // 中度
  
  setLines($('#chart-shili'), zuoYan, youYan, zhengChang, qingDu, zhongDu);

  function setLines(wrapper,myDataL, myData, youxiu, lianghao, jige) {
    var lineOption = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'line '
        },
      },
      legend: {
        data: ['左眼', '右眼', '正常', "轻度", "中度"]
      },
      xAxis: [
        {
          type: 'category',
          data: ['一年级', '二年级', '三年级', '四年级', '五年级', '六年级'],
        }
      ],
      yAxis: [
        {
          type: 'value',
          min: 0,
          axisLabel: {
            formatter: '{value}'
          },
          splitArea: {
            interval: 'auto',
            show: true,
          },
        }
      ],
      series: [
        {
          name: '左眼',
          type: 'bar',
          data: myDataL,
          legendHoverLink: true,
          barWidth: 40,
          label: {
            normal: {
              show: true,
              position: 'inside',
              textStyle: {
                color: '#fff',
                fontFamily: 'sans-serif',
                fontSize: 16,
              },
            },
          },
          markline: {
            silent: true
          },
          itemStyle: {
            normal: {
              color: "#45C2FA",
              borderColor: '#000',
              borderWidth: 0,
              borderType: 'solid',
              barBorderRadius: 0,
              shadowOffsetX: 0,
              shadowOffsetY: 0,
            },
          }
        },
        {
          name: '右眼',
          type: 'bar',
          data: myData,
          legendHoverLink: true,
          barWidth: 40,
          label: {
            normal: {
              show: true,
              position: 'inside',
              textStyle: {
                color: '#fff',
                fontFamily: 'sans-serif',
                fontSize: 16,
              },
            },
          },
          markline: {
            silent: true
          },
          itemStyle: {
            normal: {
              color: "#fd7aa4 ",
              borderColor: '#000',
              borderWidth: 0,
              borderType: 'solid',
              barBorderRadius: 0,
              shadowOffsetX: 0,
              shadowOffsetY: 0,
            },
          }
        },
        {
          name: '正常',
          type: 'line',
          /*yAxisIndex: 1,*/
          data: youxiu,
          lineStyle: {
            normal: {
              color: '#86B850',
              width: 2,
            },
          },
          itemStyle: {
            normal: {
              color: '#86B850',
              borderColor: '#86B850',
              borderWidth: 2,
              borderType: 'solid',
            },
          }
        },
        {
          name: '轻度',
          type: 'line',
          /*yAxisIndex: 1,*/
          data: lianghao,
          lineStyle: {
            normal: {
              color: '#FFB546',
              width: 2,
            },
          },
          itemStyle: {
            normal: {
              color: '#FFB546',
              borderColor: '#FFB546',
              borderWidth: 2,
              borderType: 'solid',
            },
          }
        },
        {
          name: '中度',
          type: 'line',
          /*yAxisIndex: 1,*/
          data: jige,
          lineStyle: {
            normal: {
              color: '#FE5050',
              width: 2,
            },
          },
          itemStyle: {
            normal: {
              color: '#FE5050',
              borderColor: '#FE5050',
              borderWidth: 2,
              borderType: 'solid',
            },
          }
        }
      ]
    };
    var chart = echarts.init(wrapper[0]);
    resizeChart1 = chart;
    chart.setOption(lineOption)
  }
})