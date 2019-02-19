//展示第一个
$('body').on('click','.to-tabone',function(){
  $(this).removeClass('txt-gray').siblings().addClass('txt-gray');
  $('.finish-time').css({'display':'none'});
  $('.qingjia .sickTip').val(1);
  $('.qingjia').css({'display':'flex'});
})
//展示第二个
$('body').on('click','.to-tabtwo',function(){
  $(this).removeClass('txt-gray').siblings().addClass('txt-gray');

  $('.finish-time').css({'display':'flex'});
  $('.qingjia .sickTip').val(2);
  $('.qingjia').css({'display':'none'});
})

//点击提交 判断健康记录和历史记录时间
var click = false;
$('body').on('click', '.form-submit a', function(){
  if(click){
    $.warning({'words':'请勿重复提交'})
  }else{
    click = true;
    var jkjl = $(".to-tabtwo").hasClass('txt-gray');
    var beginNumArr,beginNum,endNumArr,endNum;
    var myDate = new Date();
    //获取当前年
    var year=myDate.getFullYear().toString();
    //获取当前月
    var month=addZero((myDate.getMonth()+1).toString());
    //获取当前日
    var date=addZero(myDate.getDate().toString());
    var nowNum = year+month+date;
    for(var i=0; i<$('.time-select').length; i++){
      if(i == 0){     
        beginNumArr = $('.time-select')[i].value.split('-')
        beginNum = beginNumArr.join("");
      }
      if(i == 1){     
        endNumArr = $('.time-select')[i].value.split('-')
        endNum = endNumArr.join("");
      }
    };
    if(jkjl){
      //当前为健康卡记录
      if(beginNum != nowNum){
        $.warning({'words':'开始时间必须为当前时间'})
      }
    }else{
      if(endNum > nowNum){
        $.warning({'words':'结束时间不能晚于当前时间'})
      }
      if(beginNum > endNum){
        $.warning({'words':'开始时间不能晚于结束时间'})
      }
    }
    // console.log(beginNum,endNum,nowNum,'健康记录'+jkjl);
    function addZero(num){
        return num > 9 ? num : '0'+num;
    }
  }
})