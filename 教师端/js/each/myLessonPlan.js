$(function(){
  $("#dateSelect").mobiscroll().calendar({
    theme: 'mobiscroll',
    display: 'top',
    layout: 'liquid',
    firstDay: 1,
    yearChange: true,
    calendarScroll: 'horizontal',
    showOuterDays: true,
    lang: 'zh',
  })
})