/**
 * Created by Administrator on 2017/7/10.
 */
$(function () {
    var data = [75, 65, 68, 80, 58, 86, 71];
    var fontSize = dpr == "1" ? 12 : (dpr == "2" ? 24 : 36);
    var barFontSize = dpr == "1" ? 12 : (dpr == "2" ? 16 : 20);
    var colorObj = {
        youxiu: "#82B64A",
        lianghao: "#45C2FB",
        jige: "#FEB444",
        bujige: "#FE7DA6",
    }
    var option = {
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
                    symbol:'none',
                    symbolSize: 6,
                    lineStyle: {
                        normal: {
                            color: "#F991B2",
                            width: 2,
                            type: "solid",
                            fontSize: fontSize
                        }
                    },

                    areaStyle: {
                        normal: {
                            opacity: 0.8,
                            color: new echarts.graphic.RadialGradient(0.1, 0.1, 0.1, [
                                {
                                    color: "#F991B2",
                                    offset: 0
                                },
                                {
                                    color: "#F991B2",
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
        color: "#fff",
    };
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
    var yAxisData = [9, 24, 96, 61, 33, 23, 51, 13, 58, 17, 96, 99, 9, 5, 6, 88, 29, 100, 40, 67, 28, 86, 66, 60, 42, 29, 3, 89, 92, 8, 7, 14, 91, 64, 27, 29, 27, 20, 44, 3, 74, 52, 43, 13, 55, 27, 62, 30, 34, 24];
    var chartNames = ["50m跑", "仰卧起坐"];
    var levelGrade = [90, 80, 60];

    function returnOption(xdata, ydata, font, chartName, levelGrade, callback) {
        return {
            title:{
                text:chartName,
                left: '20px',
                textStyle:{
                    fontFamily: 'MicroSoft Yahei',
                    fontSize: font,
                    color: "#999"
                }
            },
            legend: {
                data: ['Time']
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
                            color:"#999"
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
                            color:"#999"
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
    }
    $(".bodyQuality").tabBox({
        callback: function () {
            var shentisuzhi = echarts.init($(".shentisuzhi")[0]);
            var yundongsuzhi = echarts.init($(".yundongsuzhi")[0]);
            shentisuzhi.setOption(option);
        }
    });
    $(".bar-chart-model").each(function (k) {
        var chartName=chartNames[k];
        new Swiper('.' + $(this).children(".chart-tab").attr("class"), {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            onInit: function (swiper) {
                var now = swiper.wrapper;
                var gradeChart = echarts.init(now.children(".grade")[0]);
                var pointChart = echarts.init(now.children(".point")[0]);
                gradeChart.setOption(returnOption(xAxisData, yAxisData, barFontSize, chartName+"成绩", levelGrade, function (levelGrade, v) {
                    return v > levelGrade[0] ? colorObj.youxiu : (v > levelGrade[1] ? colorObj.lianghao : (v > levelGrade[2] ? colorObj.jige : colorObj.bujige));
                }));
                pointChart.setOption(returnOption(xAxisData, yAxisData, barFontSize, chartName+"得分", levelGrade, function (levelGrade, v) {
                    return v > levelGrade[0] ? colorObj.youxiu : (v > levelGrade[1] ? colorObj.lianghao : (v > levelGrade[2] ? colorObj.jige : colorObj.bujige));
                }));
            }
        });
    });

})