$(function(){
  $('.leftNav .show').click(function(e){
    var $this=$(this)
    if($this.hasClass('change')){
      $this.removeClass('change')
      $this.find('i').eq(1).attr('class','icon-xia')
      $this.find('li').animate({
        height:'40px',
        opacity:1
      },200)
    }else{
      $this.addClass('change')
      $this.find('i').eq(1).attr('class','icon-shang')
      $this.find('li').animate({
        height:0,
        opacity:0
      },200)
    }

    e.preventDefault()
    e.stopPropagation()
  })

  $('.leftNav .show>*').click(function(e){
    e.stopPropagation()
  })

  var open = false;
  $('.studentClass .healthyBox .more').click(function(){
    if(!open){
      $(this).parent().parent().parent().find('.list').css('max-height','10000px');
      console.log('开')
      open = true;
    }else{
      $(this).parent().parent().parent().find('.list').css('max-height','65px');
      console.log('关')
      open = false;
    }
  })
})