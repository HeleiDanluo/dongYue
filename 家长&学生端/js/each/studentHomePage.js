$(function(){
  var $ul=$('.limit ul')
  var $li=$ul.find('li')
  var height=$li.height()
  var len=$li.length

  function toUp(){
    var top=$ul.css('top')
    top=Number.parseInt(top)
    var max=-(len-1)*Number.parseInt(height)
    if(top<=max){
      $ul.css({
        top:'1.64rem'
      })
    }

    $ul.animate({
      top:'-=1.64rem'
    })
  }

  setInterval(()=>{
    toUp()
  },1000)

  $.homebox('本月',{keys:['更新训练计划','沿用上月训练计划'],callback:function(bool){
    $.removeHomebox()
  }});

  // 等级层次大小
  var linghtIndex = $('.user_health_grade .light').index();
  var smallerWidth = 1.1;
  for(var i = linghtIndex; i > 0; i--){
    $('.user_health_grade span').eq(i-1).height(smallerWidth - 0.1 + 'rem').width(smallerWidth - 0.1 + 'rem');
    smallerWidth -= 0.1;
  }
})