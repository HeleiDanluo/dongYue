$(function () {
  // 字体大小自适应函数
  var getDpr = function getDpr(){
    var dpr = $('html').attr('data-dpr');
    if (dpr == 1) {
        return 12;
    }else if (dpr == 2) {
        return  24;
    }else {
        return 36;
    }
  };

  // 打开页面加载班级心率曲线图
  Chart.line({
    element:'chart-line',
    title: '心率',
    xAxis: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    yAxis: [80, 100, 120, 140, 160],
    data:[
      {
        name: '',
        type: 'line',
        smooth:true,
        data: [70,80, 90, 100, 130, 140, 160, 150, 120],
        textStyle:{
          fontSize: getDpr()
        },
      }
    ],
  });
  $('.allClass-title .text').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
  });
  // 点击 分类（全部、高水平。。。） 加载班级心率曲线图
  $('.xinlv-title .text').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    Chart.line({
      element:'chart-line',
      title: '分数',
      xAxis: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      yAxis: ['0', '20%', '40%', '60%', '80%'],
      data:[
        {
          name: '男生平均',
          type: 'line',
          smooth:true,
          data: [70,80, 90, 100, 130, 140, 160, 150, 120],
          textStyle:{
            fontSize: getDpr()
          },
          markArea: Area,
          markLine : Line
        },
        {
          name: '女生平均',
          type: 'line',
          smooth:true,
          data: [70,80, 90, 100, 130, 140, 160, 150, 120],
          textStyle:{
            fontSize: getDpr()
          }
        },
        {
          name: '全班平均',
          type: 'line',
          smooth:true,
          data: [70,80, 90, 100, 130, 140, 160, 150, 120],
          textStyle:{
            fontSize: getDpr()
          }
        }
      ]
    });
  })

  Chart.pie({
    element:'chart-pie',
    title: '',
    data: [
      {value:25, name:' ≤ 79'},//≤80
      {value:5, name:'80~99'},//80~100 
      {value:15, name:'100~119'},//100~120 
      {value:20, name:'120~150'},//120~150 
      {value:35, name:' ≥ 150'}//≥150 
    ]
  });


  //点击添加
  $('body').on('click', '.side-video-menu .add', function(){
    $('.add-panel').css('display','flex');
  });
  //点击关闭
  $('body').on('click', '.add-panel .icon-close', function(){
    $('.add-panel').css('display','none');
  });
  //点击确认
  $('body').on('click', '#id-submit', function(){
    var videoId = $('#id-input').val();
    console.log(videoId)
    // $('.side-video-menu .play').css('visibility','visible'); 
    $('.add-panel').css('display','none');
  });
  
})