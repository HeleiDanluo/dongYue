//总课时 内饼外环图
Chart.pieCircle({
  element:'circle-chart',
  datasmall: [
    {value:51,name:'基本运动'},
    {value:46,name:'球类'},
    {value:21,name:'体操'},
  ],
  databig: [
    {value:51,name:'篮球'},
    {value:46,name:'太极拳'},
    {value:12,name:'健美操'},
    {value:45,name:'广播操'},
    {value:12,name:'软式排球'},
    {value:21,name:'基本运动'},
    {value:10,name:'足球'},
    {value:21,name:'其他'},
  ],
});

//学生体质健康 饼状 折线图
Chart.lineBar({
  element:'xstzjk',
  dataLine: [90, 95, 89, 87, 86, 96, 78, 94],//折线图 合格率
  dataBar: [10, 52, 10, 54, 78, 23, 52, 65],//柱状图 优良率
});

//体育成绩统计 环形图
Chart.circle({
  element:'tycj',
  data:[
    {value:335, name:'优秀率'},
    {value:310, name:'良好率'},
    {value:234, name:'及格率'},
    {value:135, name:'不及格'},
  ]
});

//最近一次中考测评统计 饼状图
Chart.pie({
  element:'zktj',
  data:[
    {value:335, name:'29~27分'},
    {value:310, name:'27分以下'},
    {value:234, name:'30分'},
  ]
});

//学期考勤统计
Chart.bar({
  element:'kqtj',
  xAxisData: ['3月月底考勤',
              '4月月底考勤',
              '5月月底考勤',
              '6月月底考勤',
            ],
  data: [{
          name: '出勤（含迟到）',
          type: 'bar',
          data: [20, 50, 80, 58],
          barWidth: '8%', //柱子宽度
        }, {
          name: '缺勤',
          type: 'bar',
          data: [50, 70, 60, 61],
          barWidth: '8%', //柱子宽度
        }, {
          name: '请假',
          type: 'bar',
          data: [70, 48, 73, 68],
          barWidth: '8%', //柱子宽度
        }],
});