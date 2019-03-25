$(function(){
  $('.leftNav>ul>li').removeClass('focus')
  $('.leftNav>ul>li').eq(1).addClass('focus')
  $('.leftNav>ul>li>ul>li').removeClass('focus')
  $('.leftNav>ul>li>ul>li').eq(1).addClass('focus')

  $('body').on('click','.year .box span',change);
  $('body').on('click','.grade .box span',change);
  $('body').on('click','.class .box span',change);
  $('body').on('click','.qujian .box span',change);

  function change(){
    var $this=$(this);
    if($this.hasClass('focus') && $this.parent().hasClass('qiehuan')){
      $this.removeClass('focus');
    }else{
      //多选
      if(!$this.parent().hasClass('multi')){
        $this.siblings().removeClass('focus');
      }
      //选择城市
      if($this.hasClass('findcity')){
        var citycode = $this.attr('areacode').trim();
        var cityRes = '';
        var $CityresEle = $('.cityresult');
        for(var subCode in areaCode[citycode]){
          cityRes += '<span subCode="' +subCode+ '">' +areaCode[citycode][subCode]+ '</span>';
        }
        console.log(cityRes);
        $CityresEle.empty().append(cityRes);
      }
      //中考成绩查看更多
      if($this.parent().hasClass('zkcj-nemu')){
        var thisMenuId = $this.attr('id').trim();
        $('.' + thisMenuId).removeClass('hidden').siblings().addClass('hidden');
        $('.choose').removeClass('hidden');
      }
      $this.addClass('focus')
    }
  }  


  //降序排列
  $('body').on('click','#sort-up', function(){
    var domList = $('#sort-box .once').get();
    domList.sort(function(a,b){
      var elOne = $(a).find('.percent').text().split('%')[0];
      var elTwo = $(b).find('.percent').text().split('%')[0];
      if(elOne > elTwo) return 1;
      if(elOne < elTwo) return -1;
      return 0;
    });
    $('#sort-box').append(domList)
  });
  //升序排列
  $('body').on('click','#sort-down', function(){
    var domList = $('#sort-box .once').get();
    domList.sort(function(a,b){
      var elOne = +$(a).find('.percent').text().split('%')[0];
      var elTwo = +$(b).find('.percent').text().split('%')[0];
      if(elOne > elTwo) return -1;
      if(elOne < elTwo) return 1;
      return 0;
    });
    $('#sort-box').append(domList)
  });

// 点击切换年级/年龄数据
$('body').on('click', '.btn-box .btn-small', function() {
  if($(this).attr('id') == 'nian-ji'){
    $(this).addClass('btn-green').siblings().removeClass('btn-green');
    $('.nian-ji').css('display','table');
    $('.nian-ling').css('display','none');
  }
  if($(this).attr('id') == 'nian-ling'){
    $(this).addClass('btn-green').siblings().removeClass('btn-green');
    $('.nian-ling').css('display','table');
    $('.nian-ji').css('display','none');
  }
})
})