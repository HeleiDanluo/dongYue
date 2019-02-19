$(function(){
  $('.select-birthday').mobiscroll().date({
    theme: 'mobiscroll',
    display: 'bottom',
    dateFormat: 'yy-mm-dd',
    headerText: '请选择您的生日',
    lang: 'zh'
  });
  // 血型出现
  $('.select-blood').click(function(){
    $('.blood').css({'display':'block'})
  })
  // 脊柱出现
  $('.select-jizhu').click(function(){
    $('.jiZhu').css({'display':'block'})
  })
  $('.black').click(function(){
    $('.listWapper').css({'display':'none'})
  })
  $('.jiZhu .wapper-list').click(function(){
    var thisVal = $(this).text().trim();
    $(this).addClass('txt-green')
    .find('i').addClass('icon-uniE930')
    .parent().siblings().removeClass('txt-green')
    .find('i').removeClass('icon-uniE930');
    $('.select-jizhu').val(thisVal);
    $('.listWapper').css({'display':'none'})
  })
  $('.blood .wapper-list').click(function(){
    var thisVal = $(this).text().trim();
    $(this).addClass('txt-green')
    .find('i').addClass('icon-uniE930')
    .parent().siblings().removeClass('txt-green')
    .find('i').removeClass('icon-uniE930');
    $('.select-blood').val(thisVal);
    $('.listWapper').css({'display':'none'})
  })
})