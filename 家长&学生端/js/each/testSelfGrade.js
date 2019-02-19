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
  new Swiper(('.quelity-chart'), {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    onInit: function (swiper) {
      var now = swiper.wrapper;
      $(now).find(".chart-box.body").setRadar({
        labelData: label,
        data: data,
        initCallback: function (option,opts) {
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
                    color:"#C2C2C0",
                    offset: 0
                  },
                  {
                    color:"#C2C2C0",
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
        initCallback: function (option,opts) {
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
                    color:"#C2C2C0",
                    offset: 0
                  },
                  {
                    color:"#C2C2C0",
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
})