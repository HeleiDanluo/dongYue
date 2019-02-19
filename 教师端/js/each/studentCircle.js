$(function(){

  var now=new Date()
  var year=now.getFullYear()
  var month=now.getMonth()
  var day=now.getDate()

  var options=''

  for(var i=0;i<7;i++){
    var innerday=day-i
    var innermonth=month
    var inneryear=year

    now.setFullYear(inneryear,innermonth,innerday)

    var nowyear=now.getFullYear()
    var nowmonth=now.getMonth()+1
    var nowday=now.getDate()

    var inner=nowyear+'-'+nowmonth+'-'+nowday

    options+='<option value="'+inner+'">'+inner+'</option>'
  }

  $('#selectDate').append($(options))

  $('#selectClass').mobiscroll().select({
    theme: "mobiscroll",
    mode: "scroller",
    display: "bottom",
    lang: "zh",
    placeholder:'请选择班级',
    onSelect:function(v,k){
      console.log(k._tempValue)
    },
  });
  $('#selectDate').mobiscroll().select({
    theme: "mobiscroll",
    mode: "scroller",
    display: "bottom",
    lang: "zh",
    placeholder:'请选择日期',
    onSelect:function(v,k){
      console.log(k._tempValue)
    },
  });
})