$(function(){
  $('.slide').click(function(){
    var $limit=$(this).find('.slideLimit')
    var dn=$limit.css('display')
    console.log(dn)
    if(dn=='none'){
      $limit.show(200)
    }else{
      $limit.hide(200)
    }
  })
})