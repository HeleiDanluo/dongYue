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
  var eachSchoolHeight = 38;//每个学校的高度
  var addHeight = 190;//初始五行的高度
  var openHeight = 0;//打开的累积的高度
  var allSchoolH = 0;//所有学校的合计高度
  var openedNum = 5;
  $('body').on('click','.studentClass .healthyBox .more',function(){
    var schoolList = $(this).parent().parent().parent().find('.list');//当前点击的学校列表容器
    var schoolNum = schoolList.find('.row').length;//总共有多少学校list
    
    allSchoolH = schoolNum * addHeight;
    
    if((schoolNum - openedNum) > 0){
      addHeight += 190;//点击一次高度叠加五
      schoolList.css('max-height',(addHeight - 10)+'px');
      openedNum += 5;
    }else{
      schoolList.css('max-height',((schoolNum *  eachSchoolHeight % 5) - 10) + addHeight + 'px');//取余计算出高度展开
    }
    if((schoolNum - openedNum) <= 0){
      $(this).remove();
    }
  })
})