$(function(){
  selectNew();
  /* 日期控件 */
  
  // 选择课程时间
  laydate.render({
    elem: '#keChengShiJian'
  });

  // 网评时间 开始
  laydate.render({
    elem: '#wangPingKaiShi'
  });
  
  // 网评时间 jie'shu
  laydate.render({
    elem: '#wangPingJieShu'
  });

  //警告提示 样例
  Alert.globalWarning({
    type:'err',
    words:'三年级（2）班 这天没有课',
    callBack:function(){}
  })
})