$(function () {
  var label = [
    {name: '平衡', max: 100},
    {name: '肌耐力', max: 100},
    {name: '心肺有氧', max: 100},
    {name: '反应', max: 100},
    {name: '柔韧度', max: 100},
    {name: '躯干及下肢', max: 100},
    {name: '躯干及上肢', max: 100}
  ];
  var data = [75, 85, 88, 90, 58, 86, 71];
  var colorObj = {
    youxiu: "#82B64A",
    lianghao: "#62C7F5",
    jige: "#FFA346",
    bujige: "#FF6E3C",
  }
  var barWidth = dpr == "1" ? 10 : (dpr == "2" ? 20 : 25);
  var fontSize = dpr == "1" ? 12 : (dpr == "2" ? 24 : 36);
  var barRadius = dpr == "1" ? 3 : (dpr == "2" ? 5 : 7);
  var xAxisData = [
    '一年级',
    '二年级',
    '三年级',
    '四年级',
    '五年级',
    '六年级',
  ];
  var yAxisData = [[9, 24, 96, 61, 33, 23], [9, 24, 100, 61, 33, 23]];
  var chartNames = ["50m跑", "仰卧起坐"];
  var schoolData1 = [77, 88, 59, 85, 54, 64];
  var schoolData2 = [88, 54, 87, 62, 90, 48];
  var levelGrade = [90, 80, 60];
  const TYPE1 = "grade";
  const TYPE2 = "point";
  new Swiper(('.quelity-chart'), {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    onInit: function (swiper) {
      var now = swiper.wrapper;
      $(now).find(".chart-box.body").setRadar({
        labelData: label,
        data: data,
        initCallback: function (option, opts) {
          option.series[0].data.unshift({
            color: "#000",
            value: [30, 99, 55, 85, 70, 55, 60],
            symbolSize: 6,
            lineStyle: {
              normal: {
                color: "#DBDBDB",
                width: 2,
                type: "dotted",
                fontSize: opts.fontSize,
              }
            },
            label: {
              normal: {
                show: true,
                formatter: function (params) {
                  return params.value;
                },
                textStyle: {
                  color: opts.labelColor,
                  fontFamily: 'SimHei',
                  fontSize: opts.fontSize,
                },
              }
            },
            areaStyle: {
              normal: {
                opacity: 0.8,
                color: new echarts.graphic.RadialGradient(0.1, 0.1, 0.1, [
                  {
                    color: "#C2C2C0",
                    offset: 0
                  },
                  {
                    color: "#C2C2C0",
                    offset: 1
                  }
                ])
              }
            },
            itemStyle: {
              normal: {
                color: opts.radarColor,
                borderColor: '#000',
                borderWidth: 0,
                borderType: 'solid',
                borderColor: "#DBDBDB",
                borderWidth: 2,
                fontSize: opts.fontSize
              }
            }
          })
        }
      })
      $(now).find(".chart-box.sport").setRadar({
        labelData: label,
        data: data,
        initCallback: function (option, opts) {
          option.series[0].data.unshift({
            color: "#000",
            value: [30, 99, 55, 85, 70, 55, 60],
            symbolSize: 6,
            lineStyle: {
              normal: {
                color: "#DBDBDB",
                width: 2,
                type: "dotted",
                fontSize: opts.fontSize,
              }
            },
            label: {
              normal: {
                show: true,
                formatter: function (params) {
                  return params.value;
                },
                textStyle: {
                  color: opts.labelColor,
                  fontFamily: 'SimHei',
                  fontSize: opts.fontSize,
                },
              }
            },
            areaStyle: {
              normal: {
                opacity: 0.8,
                color: new echarts.graphic.RadialGradient(0.1, 0.1, 0.1, [
                  {
                    color: "#C2C2C0",
                    offset: 0
                  },
                  {
                    color: "#C2C2C0",
                    offset: 1
                  }
                ])
              }
            },
            itemStyle: {
              normal: {
                color: opts.radarColor,
                borderColor: '#000',
                borderWidth: 0,
                borderType: 'solid',
                borderColor: "#DBDBDB",
                borderWidth: 2,
                fontSize: opts.fontSize
              }
            }
          })
        }
      })
    }
  });
  function returnOption(type, xdata, ydata, quanguoData, font, chartName, levelGrade, callback, pointData) {
    return {
      title: {
        text: chartName,
        left: '20px',
        textStyle: {
          fontFamily: 'MicroSoft Yahei',
          fontSize: font,
          color: "#999"
        }
      },
      legend: {
        data: ['我的', "全国平均值"],
        right: 20,
        textStyle: {
          color: "#333",
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontFamily: 'sans-serif',
          fontSize: font,
        },
      },
      xAxis: [
        {
          type: 'category',
          data: xdata,
          axisLabel: {
            textStyle: {
              fontFamily: 'MicroSoft Yahei',
              fontSize: font,
              color: "#999"
            },
          },
          axisLine: {
            show: true,
            onZero: true,
            lineStyle: {
              color: "#999"
            },
          },
        }
      ],
      yAxis: [
        {
          type: 'value',
          axisLabel: {
            formatter: '{value} '
          },
          axisLabel: {
            textStyle: {
              fontFamily: 'MicroSoft Yahei',
              fontSize: font,
              color: "#999"
            },
          },
          axisLine: {
            show: true,
            onZero: true,
            lineStyle: {
              color: "#999"
            },
          },
          splitArea: {
            show: false,
          },
        },
      ],
      series: [
        {
          name: "我的",
          type: 'bar',
          data: ydata,
          barWidth: barWidth,
          itemStyle: {
            normal: {
              color: function (data) {
                var index = data.seriesIndex;
                if (type == 'grade') {
                  return callback(levelGrade, data.value);
                } else if (type == 'point') {
                  return callback(levelGrade, pointData[index]);
                }
              },
              barBorderRadius: barRadius,
            }
          }
        },
        {
          name: "全国平均值",
          type: 'bar',
          data: quanguoData,
          barWidth: barWidth,
          itemStyle: {
            normal: {
              color: "#999999",
              barBorderRadius: barRadius,
            }
          }
        }
      ]
    };
  }

  $(".school-chart-model").each(function (k) {
    new Swiper('.' + $(this).children(".chart-tab").attr("class"), {
      pagination: '.swiper-pagination',
      paginationClickable: true,
      onInit: function (swiper) {
        var now = swiper.wrapper;
        var k = parseInt(now.parent().attr('data-index')) - 1;
        // now.children(".body").append('<div class="none-data">暂无数据</div>')
        var gradeChart = echarts.init(now.children(".body")[0]);
        var pointChart = echarts.init(now.children(".sport")[0]);
        gradeChart.setOption(returnOption(TYPE1, xAxisData, yAxisData[k], schoolData2, fontSize, chartNames[k] + "成绩", levelGrade, function (levelGrade, v) {
          return v > levelGrade[0] ? colorObj.youxiu : (v > levelGrade[1] ? colorObj.lianghao : (v > levelGrade[2] ? colorObj.jige : colorObj.bujige));
        }));
        pointChart.setOption(returnOption(TYPE2, xAxisData, yAxisData[k], schoolData2, fontSize, chartNames[k] + "得分", levelGrade, function (levelGrade, v) {
          return v > levelGrade[0] ? colorObj.youxiu : (v > levelGrade[1] ? colorObj.lianghao : (v > levelGrade[2] ? colorObj.jige : colorObj.bujige));
        }, yAxisData[k]));
      }
    });
  });
})