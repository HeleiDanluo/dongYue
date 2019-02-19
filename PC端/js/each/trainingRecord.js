$(function () {
  $(".tab-time").on("click", ">a", function () {
    var selectAim = $(this).attr("data-href");
    console.log(this);
    $(this).addClass("current").siblings().removeClass("current");
    $(this).parent().next().find(">." + selectAim).addClass("show").siblings().removeClass("show")
  });
  var ydata = [75, 85, 88, 90, 58, 86, 71];
  var xData = ["2017/12/01", "2017/12/02", "2017/12/03", "2017/12/04", "2017/12/05", "2017/12/06", "2017/12/07"]
  var xAxisData = [
    '08/01',
    '08/02',
    '08/03',
    '08/04',
    '08/05',
    '08/06',
    '08/07',
    '08/08',
    '08/09',
    '08/10',
    '08/11',
    '08/12',
    '08/13',
    '08/14',
    '08/15',
    '08/16',
    '08/17',
    '08/18',
    '08/19',
    '08/20',
    '08/21',
    '08/22',
    '08/23',
    '08/24',
    '08/25',
    '08/26',
    '08/27',
    '08/28',
    '08/29',
    '08/30',
    '08/31',
    '09/01',
    '09/02',
    '09/03',
    '09/04',
    '09/05',
    '09/06',
    '09/07',
    '09/08',
    '09/09',
    '09/10',
    '09/11',
    '09/12',
    '09/13',
    '09/14',
    '09/15',
    '09/16',
    '09/17',
    '09/18',
    '09/19'
  ];
  var colorObj = {
    henqingsong: "#82B64A",
    gangganghao: "#5BCCBC",
    youxielei: "#5BC5CB",
    shoubuliao: "#E8D16B",
    feichanglei: "#F99A67",
  }
  var levelGrade = [90, 80, 70, 60];
  var yAxisData = [9, 24, 96, 61, 33, 23, 51, 13, 58, 17, 96, 99, 9, 5, 6, 88, 29, 100, 40, 67, 28, 86, 66, 60, 42, 29, 3, 89, 92, 8, 7, 14, 91, 64, 27, 29, 27, 20, 44, 3, 74, 52, 43, 13, 55, 27, 62, 30, 34, 24];
  var label = [
    {name: '平衡', max: 100},
    {name: '肌耐力', max: 100},
    {name: '心肺有氧', max: 100},
    {name: '反应', max: 100},
    {name: '柔韧度', max: 100},
    {name: '躯干及下肢', max: 100},
    {name: '躯干及上肢', max: 100}
  ];
  function setWeek(wrapper, xdata, ydata,levelGrade,tooltipCallback) {
    var chart = echarts.init(wrapper[0])
    var option = {
      tooltip : {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        },
        formatter:function(v){
          return tooltipCallback(v,levelGrade);
        }
      },
      xAxis: [
        {
          type: 'category',
          data: xdata,
          axisLabel: {
            textStyle: {
              fontFamily: 'MicroSoft Yahei',
              color: "#999"
            },
          },
          axisLabel: {
            textStyle: {
              fontFamily: 'MicroSoft Yahei',
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
          splitArea: {
            interval: 'auto',
            show: true,
          },
          axisLabel: {
            textStyle: {
              fontFamily: 'MicroSoft Yahei',
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
        },
      ],
      series: [
        {
          type: 'line',
          data: ydata,
          lineStyle: {
            normal: {
              color: '#82B64A',
              width: 2,
              shadowOffsetX: 0,
              shadowOffsetY: 0,
            },
          },
        },
      ]
    }
    chart.setOption(option)
  }

  function setYear(wrapper, xdata, ydata, levelGrade, callback,tooltipCallback) {
    var option = {
      tooltip : {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        },
        formatter:function(v){
          return tooltipCallback(v,levelGrade);
        }
      },
      xAxis: [
        {
          type: 'category',
          data: xdata,
          axisLabel: {
            textStyle: {
              fontFamily: 'MicroSoft Yahei',
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
            interval: 'auto',
            show: true,
          },
        },
      ],
      series: [
        {
          type: 'bar',
          data: ydata,
          itemStyle: {
            normal: {
              color: function (data) {
                return callback(levelGrade, data.value);
              }
            }
          }
        },
      ]
    };
    var chart = echarts.init(wrapper[0]);
    chart.setOption(option);
  }

  setWeek($(".record-chart-content .week-chart"), xData, ydata,levelGrade,function (v,levelGrade) {
    var type=v.value > levelGrade[0] ? '很轻松' : (v.value > levelGrade[1] ? '刚刚好' : (v.value > levelGrade[2] ? '有些累' : (v.value > levelGrade[3] ? '受不了': '非常累')))
    return v.name+'：'+v.value+'%'+'<br />'+type;
  });
  setYear($(".record-chart-content .year-chart"), xAxisData, yAxisData, levelGrade, function (levelGrade, v) {
    return v > levelGrade[0] ? colorObj.henqingsong : (v > levelGrade[1] ? colorObj.gangganghao : (v > levelGrade[2] ? colorObj.youxielei : (v > levelGrade[3] ? colorObj.shoubuliao : colorObj.feichanglei)));
  },function (v,levelGrade) {
    var type=v.value > levelGrade[0] ? '很轻松' : (v.value > levelGrade[1] ? '刚刚好' : (v.value > levelGrade[2] ? '有些累' : (v.value > levelGrade[3] ? '受不了': '非常累')))
    return v.name+'：'+v.value+'%'+'<br />'+type;
  })
  $(".record-item").each(function(){
    $(this).find(".chart-box").setRadar({
      labelData:label,
      data:ydata,
    })
  })

})