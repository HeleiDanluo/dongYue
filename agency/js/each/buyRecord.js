$(function(){
  var start=''
  var end=''
  var index=''

  var mySchedule = new Schedule({
    el: '#buyschedule-box',
    clickCb: function(y, m, d) {
      if(index==3){
        var inner=$('.choose>input').eq(0)
        start=y+'-'+m+'-'+d
        inner.val(start)
        $('#buyschedule-box').hide()
      }else{
        var inner=$('.choose>input').eq(1)
        end=y+'-'+m+'-'+d
        inner.val(end)
        $('#buyschedule-box').hide()
      }
      
    }
  });

  $('.choose>input').click(function(){
    var $this=$(this)
    index=$this.index()
    $('#buyschedule-box').show()
  })
})