$('body').on('click','.select-list li',function(){
  $(this).find('.icon-selected-gougou').addClass('active')
  .parent().siblings().find('.icon-selected-gougou').removeClass('active');
  $('#zhdf-res').text($(this)[0].innerText);
  $('.select-list').css({'display':'none'});
  $('.select-list ul').animate({'bottom':'-100%'});
})
$('body').on('click','.list-item-new',function(){
  $('.select-list').css({'display':'block'});
  $('.select-list ul').animate({'bottom':'0'},300);
})

