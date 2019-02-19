$(function(){
  $('.select-RemarkDate').mobiscroll().date({
    theme: 'mobiscroll',
    display: 'bottom',
    dateFormat: 'yy-mm-dd',
    headerText: '请选择时间',
    lang: 'zh',
  });
  var year = (new Date()).getFullYear();//年
  var month = (new Date()).getMonth() + 1;//月
  var day = (new Date()).getDay();//日
  $('.select-RemarkDate').val(year + '-' + addZero(month) + '-' + addZero(day));

  //1~9前置补0
  function addZero(date){
    if(date <10){
      return '0' + date;
    }
  }
});