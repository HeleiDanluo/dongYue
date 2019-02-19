$(function(){
  $('.select-birthday').mobiscroll().date({
    theme: 'mobiscroll',
    display: 'bottom',
    dateFormat: 'yy-mm-dd',
    headerText: '请选择您的生日',
    lang: 'zh'
  });
})