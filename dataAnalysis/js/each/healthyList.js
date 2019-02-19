$(function(){
  // 范围点击
  function addClick(){
    var $this=$(this)

    if($this.index()==0){
      $('.sheng>span').html('省')
      $('.shi>span').html('市')
      $('.qu>span').html('区/县')
    }

    $this.siblings().removeClass('focus')
    $this.toggleClass('focus')
  }

  $('.address>li').bind('click',addClick)
})