$(function(){
  var second=$('.second')
  var first=$('.first')
  var baseFirstHeight=first.height()
  var secondHeight=second.height()
  var heightAll=baseFirstHeight+secondHeight
  first.css({
    height:heightAll
  })
  $('.choose').delegate('.secondli','click',function(){
    var third=$(this).next('.third')
    second=$(this).parents('.second')
    first=$(this).parents('.first')
    var thirdStyle=third.css('display')
    first.css({
      height:heightAll
    })
    if(thirdStyle=='none'){
      third.show()
    }else{
      third.hide()
    }
    firstHeight=first.height()
    secondHeight=second.height()
    var heightAll=baseFirstHeight+secondHeight

    first.css({
      height:heightAll
    })
  })
})