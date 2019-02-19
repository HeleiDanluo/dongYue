$(function(){
    var start=''
    var end=''
    var index=''

    var mySchedule = new Schedule({
      el: '#schedule-box',
      clickCb: function(y, m, d) {
        if(index==4){
          var inner=$('.choose>input').eq(0)
          start=y+'-'+m+'-'+d
          inner.val(start)
          $('#schedule-box').hide()
        }else{
          var inner=$('.choose>input').eq(1)
          end=y+'-'+m+'-'+d
          inner.val(end)
          $('#schedule-box').hide()
        }
      }
    });

    $('.choose>input').click(function(){
      var $this=$(this)
      index=$this.index()

      $('#schedule-box').show()
      
    })
})