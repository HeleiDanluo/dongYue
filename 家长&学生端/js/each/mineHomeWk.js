$(function () {
  var secondsObj = [
    {
      time: 1493866444406
    },
    {
      time: 1494866444406
    },
    {
      time: 1495866444406
    },
    {
      time: 1496866444406
    },
  ]
  var data = [];
  for (var i = 0; i < secondsObj.length; i++) {
    var newObj = {};
    newObj.d = new Date(secondsObj[i].time);
    newObj.text = '已完成';
    data.push(newObj);
  }
  console.log(data);
  $('.honor-calendar').mobiscroll().eventcalendar({
    theme: 'mobiscroll',
    display: 'inline',
    layout: 'liquid',
    firstDay: 1,
    yearChange: true,
    calendarScroll: 'horizontal',
    showOuterDays: true,
    showEventCount: true,
    lang: 'zh',
    data: data
  });

})
