// 切换
$('body').on('click','.tab-two',function(){
  $(this).removeClass('txt-gray');
  $('.tab-one').addClass('txt-gray');
  $('.page-one').css({'display':'none'})
  $('.page-two').css({'display':'block'})
})
$('body').on('click','.tab-one',function(){
  $(this).removeClass('txt-gray');
  $('.tab-two').addClass('txt-gray');
  $('.page-one').css({'display':'block'})
  $('.page-two').css({'display':'none '})
})
//显示弹窗
var jiaoJuNum;//该项教具数量
$('body').on('click','.hjj',function(){
  jiaoJuNum = parseInt($(this).parent().parent().find('.num').text());
  $('.return-alert').css({'display':'block'});
  $('.return-alert').animate({'opacity':'1'});
});
//点击弹窗 确定 
$('body').on('click','.queding',function(){
  var valOne = +$('.one').val().trim();
  var valTwo = +$('.two').val().trim();
  var valThree = +$('.three').val().trim();
  var sum = valOne + valTwo + valThree;
  if (sum <= 0) {
    $.warning({words: '不能同时为空'});
    return;
  }
  if (sum > jiaoJuNum) {
      $.warning({words: '退还数量不应大于' + jiaoJuNum})
      return;
  }
  $('.return-alert').animate({'opacity':'0'});
  setTimeout(function(){
    $('.return-alert').css({'display':'none'});
  },500);
});
//列表插件
$('#treelist').mobiscroll().treelist({
  display: 'bottom',
  lang: 'zh',
  onSelect: function (valueText,inst) {//选择时事件（点击确定后），valueText 为选择的时间，
    $('.result').text($('#treelist .item')[valueText].innerHTML)
  }
});
var listLen = $('.jy-content .item').length;
if(listLen <= 2){
  $('.more').css({'display':'none'});
}
// 展开更多
$('body').on('click','.more',function(){
  var mrBtn = $(this);
  if(mrBtn.hasClass('active')){
    //列表高度还原
    $('.list-content').animate({'height':'1.0666667rem'},200);
    //移除active，表示展开状态
    mrBtn.removeClass('active');
    //旋转下拉按钮
    mrBtn.find('.icon-xiala').css({'transform':'rotate(0deg)'});
    //展开更多文本修改
    $('.more-txt').html('展开');
  }else{
    var listHeight = listLen * 40/75 + 'rem';
    if(listLen > 2){
      //添加active，表示展开状态
      mrBtn.addClass('active');
      //列表高度还原
      $('.list-content').animate({'height':listHeight},200);
      //旋转下拉按钮
      mrBtn.find('.icon-xiala').css({'transform':'rotate(180deg)'});
      //展开更多文本修改
      $('.more-txt').html('收起');
    }
  }
});
//点击添加
$('body').on('click','.add-btn',function(){
  //可借用数量
  var kjqNum = parseInt($('.kjy')[0].innerHTML);
  //借取数量
  var jqNum = parseInt($('.jqsl')[0].value);
  if(jqNum > 0){
    if(jqNum > kjqNum){
      $.warning({'words':'借用数量大于当前库存'})
    }else{
      // 项目名字
      var xmName = $('.result')[0].innerHTML;
      var addContent = '<div class="box">'
      +'<div class="relative" flex="box:mean cross:center">'
        +'<div flex="dir:top">'
          +'<span>'+xmName
          +'<span class="num"> '+jqNum+' </span>'
          +'个'
          +'</span>'
        +'</div>'
        +'<span class="delete txt-gray">删除</span>'
      +'</div>'
    +'</div>'
      $('.addPlace').after(addContent);
      $('.kjy').html(kjqNum-jqNum);
    }
  }else{
    $.warning({'words':'请输入正确的借取数量'})
  }
});
//删除项目
$('body').on('click','.delete',function(){
  //可借用数量
  var kjqNum = parseInt($('.kjy')[0].innerHTML);
  var delNum = parseInt($(this).parent().find('.num')[0].innerHTML);
  $('.kjy').html(kjqNum+delNum)
  // alert(delNum);
  $(this).parent().parent().remove();
})
//关闭弹窗
$('body').on('click','.return-alert .icon-close', function(){
  $('.return-alert').animate({'opacity':'0'});
  setTimeout(function(){
    $('.return-alert').css({'display':'none'});
  },500);
})