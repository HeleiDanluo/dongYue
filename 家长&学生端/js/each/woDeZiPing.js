$(function(){
  // 回调设置分数
  setScore();

  //点击 打分
  $("body").on('click', '.star-content .icon-wujiaoxing', function (){
    var $this = $(this);
    var score = 0;
    $this.addClass('color-orange').removeClass('color-gray');//点击处变为选中
    $this.prevAll().addClass('color-orange').removeClass('color-gray');//点击位置之前变为选中
    $this.nextAll().addClass('color-gray').removeClass('color-orange');//点击位置之后变为灰色
    score = $('.star-content .color-orange').length;
    $this.parent().attr('score', score);
  })


  function setScore(){
    var pageScore = $('.star-content').attr('score');;
    for(var i=0; i<pageScore; i++){
      $('.icon-wujiaoxing').eq(i).addClass('color-orange').removeClass('color-gray');
    }
  }
})