$(function () {
  var label1= [
    {name: '躯干及上肢', max: 100},
    {name: '反应', max: 100},
    {name: '心肺有氧', max: 100},
    {name: '肌耐力', max: 100},
    {name: '躯干及下肢', max: 100},
    {name: '柔韧度', max: 100},
    {name: '体重指数', max: 100},
    {name: '平衡', max: 100}
  ];
  var label2= [
    {name: '力量', max: 100},
    {name: '速度', max: 100},
    {name: '灵敏', max: 100},
    {name: '柔韧', max: 100},
    {name: '耐你', max: 100},
  ];

  var dataRador1 = [75, 85, 88, 90, 58, 86, 71,52];
  var dataRador2 = [75, 85, 88, 90, 58];
  var male=1 // 1男生 2女生

  function setMyRadar(male){
    var color=male==1?'#64C9F5':'pink'
    $(".radar-centent.body").setRadar({
      labelData:label1,
      data:dataRador1,
      radarColor:color,
      labelColor:'#000'
    });
  
    $(".radar-centent.sport").setRadar({
      labelData:label2,
      data:dataRador2,
      radarColor:color,
      labelColor:'#000'
    });
  }

  setMyRadar(male)

  $(".radar-tab-btn").on("click", ">a", function (event) {
    event.preventDefault();
    var selectAim = $(this).attr("href").slice(1);
    $(this).addClass("yellowBtn").siblings().removeClass("yellowBtn");
    $(this).parent().next().find("." + selectAim).addClass("show").siblings().removeClass("show");
  })

  var databar1=[10,20,30,10,20,10]
  var youxiu1=[30,30,30,30,30,30]
  var lianghao1=[20,20,20,20,20,20]
  var jige1=[10,10,10,10,10,10]

  setLines($('.tizhi .num1').find(".point"),databar1,youxiu1,lianghao1,jige1,"我的得分");
  setLines($('.tizhi .num1').find(".grade"),databar1,youxiu1,lianghao1,jige1,"我的成绩");
  setLines($('.tizhi .num2').find(".point"),databar1,youxiu1,lianghao1,jige1,"我的得分");
  setLines($('.tizhi .num2').find(".grade"),databar1,youxiu1,lianghao1,jige1,"我的成绩");

  $(".health-line-item").each(function () {
    $(this).find(">.chart-tab-btn").on("click", ">a", function () {
      var selectAim = $(this).attr('data-href');
      $(this).addClass("yellowBtn").siblings().removeClass("yellowBtn");
      $(this).parent().next().find(">." + selectAim).addClass("show").siblings().removeClass("show");
    })
  })

  function setLines(wrapper, myData, youxiu, lianghao, jige,linename) {
    var lineOption = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'line '
        },
      },
      legend: {
        data: [linename, '优秀', "良好", "及格"]
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
          name: linename,
          type: 'bar',
          data: myData,
          legendHoverLink: true,
          barWidth: 60,
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
          name: '优秀',
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
          name: '良好',
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
          name: '及格',
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