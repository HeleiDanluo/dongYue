$(function(){
  // $('#timeSelect').date({
    // title:"请选择班级的时间"
  // });
  var currYear = (new Date()).getFullYear();

  $('#timeSelect').mobiscroll({
    preset : 'date',
    theme: 'mobiscroll', //皮肤样式
    display: 'bottom', //显示方式
    mode: 'scroller', //日期选择模式
    dateFormat: 'yyyy-mm-dd',
    lang: 'zh',
    showNow: true,
    nowText: "今天",
    rows:5,//滚动区域内的行数
    startYear: currYear - 50, //开始年份
    endYear: currYear + 10, //结束年份
    headerText:function(valueText){return "选择日期"}
  });
})