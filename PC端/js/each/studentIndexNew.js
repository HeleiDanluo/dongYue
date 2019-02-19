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

  // $(".radar-tab-btn").on("click", ">a", function (event) {
  //   event.preventDefault();
  //   var selectAim = $(this).attr("href").slice(1);
  //   $(this).addClass("yellowBtn").siblings().removeClass("yellowBtn");
  //   $(this).parent().next().find(">." + selectAim).addClass("show").siblings().removeClass("show");
  // })

  var databar1=[10,20,30,10,20,10];  //柱状图 上学期
  var databar2=[10,20,30,10,20,10];  //柱状图 下学期

  var youxiu1=[30,30,30,30,30,30];   //优秀 上学期 
  var youxiu2=[30,30,30,30,30,30];   //优秀 下学期

  var lianghao1=[20,20,20,20,20,20]; //良好 上学期 
  var lianghao2=[20,20,20,20,20,20]; //良好 下学期

  var jige1=[10,10,10,10,10,10];     //及格 上学期 
  var jige2=[10,10,10,10,10,10];     //及格 下学期

  // 汇总后的数据
  var dataBarFinal = mergeData(databar1, databar2); // 柱状图
  var youXiuFinal = mergeData(youxiu1, youxiu2);  // 优秀
  var liangHaoFinal = mergeData(lianghao1, lianghao2);// 良好
  var jiGeFinal = mergeData(jige1, jige2);    // 及格
  
  //汇总数据函数
  function mergeData(arr1, arr2){
     var arrLen = arr1.length;
     var tempArr = new Array();
     for( var i=0; i<arrLen; i++){
      tempArr.push(arr1[i] || 0, arr2[i] || 0);
     }
     return tempArr;
  }
  setLines($('.xueye .num1').find(".point"), dataBarFinal, youXiuFinal, liangHaoFinal, jiGeFinal, "得分");
  setLines($('.xueye .num2').find(".point"), dataBarFinal, youXiuFinal, liangHaoFinal, jiGeFinal, "得分");

  function setLines(wrapper, myData, youxiu, lianghao, jige,linename1) {
    var lineOption = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'line'
        },
      },
      legend: {
        data: ['优秀', "良好", "及格"],
      },
      xAxis: [
        {
          type: 'category',
          axisLabel:{
            // rotate: 20,
            interval: 0
          },
          data: [
            '一年级 上学期', '下学期', 
            '二年级 上学期', '下学期', 
            '三年级 上学期', '下学期', 
            '四年级 上学期', '下学期', 
            '五年级 上学期', '下学期', 
            '六年级 上学期', '下学期'
          ],
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
          name: linename1,
          type: 'bar',
          data: myData,
          barWidth: 40,
          legendHoverLink: true,
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
              color: "#1e80ac",
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
    chart.setOption(lineOption)
  }
})