/**
 * Created by Administrator on 2017/7/10.
 */
$(function () {
  var data = [75, 65, 68, 80, 58, 86, 71];
  var fontSize = dpr == "1" ? 12 : (dpr == "2" ? 24 : 36);
  var barFontSize = dpr == "1" ? 12 : (dpr == "2" ? 16 : 20);
  var maleColor="#008BC4";
	var femaleColor="#fd7aa4";
  var colorObj = {
      youxiu: "#82B64A",
      lianghao: "#45C2FB",
      jige: "#FEB444",
      bujige: "#FE7DA6",
  }

  var name=[
    {name: '平衡', max: 100},
    {name: '肌耐力', max: 100},
    {name: '心肺有氧', max: 100},
    {name: '反应', max: 100},
    {name: '柔韧度', max: 100},
    {name: '躯干及下肢', max: 100},
    {name: '躯干及上肢', max: 100}
  ]
  
  function buildOption(name,data,general){
    return option = {
      radar: {
        indicator: name,
        axisLabel: {
          textStyle: {
            fontSize: fontSize,
          }
        },
        name: {
          textStyle: {
            fontSize: fontSize
          }
        },
        nameGap: 2,
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
                color: "#F991B2",
                width: 2,
                type: "solid",
                fontSize: fontSize
              }
            },
            label: {
                normal: {
                  show: true,
                  formatter: function (params) {
                    return params.value;
                  },
                  textStyle: {
                    color: "#000",
                    fontFamily: 'sans-serif',
                    fontSize: fontSize
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
                color: "#F991B2",
                borderColor: '#000',
                borderWidth: 0,
                borderType: 'solid',
                borderColor: "#F991B2",
                borderWidth: 2,
                fontSize: fontSize
              }
            }
          }
        ]
      }],
      color: "#fff"
    };

  }

  $(".bodyQuality").tabBox({
      callback: function () {
          var shentisuzhi = echarts.init($(".shentisuzhi")[0]);
          var yundongsuzhi = echarts.init($(".yundongsuzhi")[0]);

          shentisuzhi.setOption(buildOption(name,data,1));
          yundongsuzhi.setOption(buildOption(name,data,2));
      }
  });

})