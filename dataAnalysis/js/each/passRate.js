$(function(){
  $('.leftNav>ul>li').removeClass('focus')
  $('.leftNav>ul>li').eq(1).addClass('focus')
  $('.leftNav>ul>li>ul>li').removeClass('focus')
  $('.leftNav>ul>li>ul>li').eq(1).addClass('focus')

  $('.year .box span').bind('click',change)
  $('.grade .box span').bind('click',change)
  $('.class .box span').bind('click',change)

  function change(){
    var $this=$(this)
    $this.siblings().removeClass('focus')
    $this.addClass('focus')
  }  
})