$(function () {
  // 点击事件
  $(".ljbm").click(function(){
    if($(this).hasClass('active')){
      // 取消报名 文字变为立即报名
      $(this).html('立即报名').removeClass('active').parent().parent().siblings().find('button').removeClass('gray').removeAttr('disabled');
      
      // 发送请求位置
      alert('已取消报名');
    }else{
      // 立即报名 文字变为取消报名
      $(this).html('取消报名').addClass('active').parent().parent().siblings().find('button').addClass('gray').attr('disabled','disabled');
      
      // 发送请求位置
      alert('报名成功');
    }
    // 处理人数已满为不可点击
    $(".ljbm").each(function(e){
      var btnVal = $(this).html().trim();
      if(btnVal == "人数已满"){
        $(this).addClass('gray').attr('disabled','disabled');
      }
    })
  });

  // 加载图标
  var naneToIcon = {
    // 图标对象
    '走和跑': 'icon-zouhepao',
    '队形队列': 'icon-dldx',
    '跳绳': 'icon-tiaoshen',
    '攀爬': 'icon-panpa',
    '跑': 'icon-pao',
    '跳跃': 'icon-tiaoyue',
    '投掷': 'icon-touzhi',
    '篮球': 'icon-lanqiu',
    '足球': 'icon-zuqiu',
    '软式排球': 'icon-ruanshipaiqiu',
    '软式排球或排球': 'icon-ruanshipaiqiu',
    '排球': 'icon-ruanshipaiqiu',
    '乒乓球': 'icon-pingpangqiu',
    '羽毛球': 'icon-yumaoqiu',
    '广播体操徒手体操': 'icon-tushouticao',
    '韵律操健美操': 'icon-yunlvjianmeicao',
    '器械体操': 'icon-jixieticao',
    '健身健美操': 'icon-jianshenjianmeicao',
    '网球': 'icon-wangqiu',
    '校园集体舞': 'icon-xiaoyuanjitiwu',
    '初级剑术': 'icon-chujijijian',
    '防身术': 'icon-fangshenshu',
    '跆拳道': 'icon-taiquandao',
    '技巧': 'icon-jiqiao',
    '少年拳': 'icon-shaonianquan',
    '太极拳': 'icon-taijiquan',
    '毽球': 'icon-jianqiu',
    '游泳': 'icon-youyong',
    '游戏': 'icon-youxi',
  };
  // 取name值 移除默认icon并循环赋值icon
  $('.name2icon').each(function(e){
      var cName = $(this).attr('name');
      $(this).removeClass('icon-youxi').addClass(naneToIcon[cName]);
  });
})