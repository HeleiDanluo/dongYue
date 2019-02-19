$(function(){
  $('.equipmentDetails .title span').click(function(){
    $(this).siblings().removeClass('btn-green')
    $(this).addClass('btn-green')
  })
})