$(function () {
  //各阶段区域统一变量
  var Area = {
    silent: true,
    label: {
      normal: {
        fontSize: 40
      }
    },
    data: [
      // 第一个区域
      [{
          // name: '开始阶段',
          xAxis: 0, //区域开始值
          itemStyle: {
            normal: {
              color: '#D1EEFC',
              opacity: 1
            }
          },
        },
        {
          xAxis: 2, //区域结束值
        }
      ],
      // 第二个区域
      [{
          // name: '准备阶段',
          xAxis: 0, //区域开始值
          itemStyle: {
            normal: {
              color: '#81F3FD',
              opacity: 1
            }
          },
        },
        {
          xAxis: 4, //区域结束值
        }
      ],
      // 第三个区域
      [{
          // name: '基本阶段',
          xAxis: 4, //区域开始值
          itemStyle: {
            normal: {
              color: '#5BCAFF',
              opacity: 1
            }
          },
        },
        {
          xAxis: 6, //区域结束值
        }
      ],
      // 第四个区域
      [{
          // name: '结束阶段',
          xAxis: 6, //区域开始值
          itemStyle: {
            normal: {
              color: '#81F3FD',
              opacity: 1,
            }
          },
        },
        {
          xAxis: 9, //区域结束值
        }
      ]
    ]
  }
  //各阶段区域分割线统一变量
  var Line = {
    silent: true,
    data: [{
        xAxis: 2
      }, //第一根线
      {
        xAxis: 4
      }, //第二根线
      {
        xAxis: 6
      } //第三根线
    ],
    itemStyle: {
      normal: {
        color: '#4A4A4A'
      }
    }
  }
  // 心率曲线图
  Chart.line({
    element: 'xinlv-chart',
    xAxis: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    yAxis: [80, 100, 120, 140, 160],
    data: [{
        name: '男生平均',
        type: 'line',
        smooth: true,
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0],
        markArea: Area,
        markLine: Line
      },
      {
        name: '女生平均',
        type: 'line',
        smooth: true,
        data: [85, 92, 120, 160, 180, 160, 170, 150, 120],
        markArea: Area,
        markLine: Line
      },
      {
        name: '全班平均',
        type: 'line',
        smooth: true,
        data: [70, 80, 90, 100, 130, 140, 160, 150, 120],
        markArea: Area,
        markLine: Line
      }
    ],
  });

  Chart.pie({
    element: 'banji-chart',
    title: '',
    data: [{
        value: 25,
        name: ' ≤ 79'
      }, //≤80
      {
        value: 5,
        name: '80~99'
      }, //80~100 
      {
        value: 15,
        name: '100~119'
      }, //100~120 
      {
        value: 20,
        name: '120~150'
      }, //120~150 
      {
        value: 35,
        name: ' ≥ 150'
      } //≥150 
    ]
  });
  // 点击展开折线图
  $('.my-line').click(function () {
    if ($(this).find('.adline-chart').hasClass('active')) {
      $(this).find('.adline-chart').removeClass('active');
      $(this).find('.icon-down1').removeClass('active');
    } else {
      $(this).find('.adline-chart').addClass('active').attr('id', 'adline-chart')
        .parent().siblings().find('.adline-chart').removeClass('active').removeAttr('id');
      $(this).find('.icon-down1').addClass('active')
        .parent().parent().siblings().find('.icon-down1').removeClass('active');
      // 心率曲线图
      setTimeout(function () {
        Chart.line({
          element: 'adline-chart',
          xAxis: [1, 2, 3, 4, 5, 6, 7, 8, 9],
          yAxis: [80, 100, 120, 140, 160],
          data: [{
              name: '男生平均',
              type: 'line',
              smooth: true,
              data: [80, 85, 90, 100, 150, 183, 160, 130, 125],
              markArea: Area,
              markLine: Line
            },
            {
              name: '女生平均',
              type: 'line',
              smooth: true,
              data: [85, 92, 120, 160, 180, 160, 170, 150, 120],
            },
            {
              name: '全班平均',
              type: 'line',
              smooth: true,
              data: [70, 80, 90, 100, 130, 140, 160, 150, 120],
            }
          ],
        });
      }, 300);
    }
  });


  //点击课程视频
  $('body').on('click', '.kcsp-btn', function () {
    Alert.videoIdbox({
      words: '编辑课程视频',
      btnRight: '立即创建',
      callBack: function () {
        $('#alert-input-value').addClass('just-int');
        $('#btn-right').off("click").on('click', function () {
          var alertInputVal = $('#alert-input-value').val();
          console.log('输入的是: ' + alertInputVal);
          $(".close-btn").click(); //关闭弹窗
          $('.res-play-btn').show(); //添加播放按钮
        })
      }
    });
  });

  //点击播放视频
  $('body').on('click', '.res-play-btn', function () {
    $('#tanchu').append(`
    <div class="alert-box formType animated fadeIn">
    <div class="alert-div form-box back_white animated fadeInDownBig videoBox">
    <div class="form-head t_r">
    <div class="col-16-16 no-padding t_l l_h30 f16">
    【跳绳】后屈腿跳绳
    </div>
    <a class="close-btn f18" href="javascript:;">×</a>
    </div>
    <div class="form-content no-padding">
    <div class="video-play clearfix">
    <div class="youkutest" id="youkuplayer" style="height: 300px;"></div>
    </div>
    
    </div>
    </div>
    </div>`);
    var $youkuplayer = document.getElementById("youkuplayer");
    $youkuplayer.style.height = 300 + "px";
    var player = new YKU.Player('youkuplayer', {
      styleid: '0',
      client_id: '123123',
      vid: 'XMjkyNDUxMTU4OA',
      newPlayer: true,
      events: {
        onPlayEnd: function () {
          var timer = setTimeout(function () {
            playVideo()
          })
          timer = null
        }
      }
    })

    function playVideo() {
      player.playVideo();
    }
    //关闭
    $(".close-btn").click(function () {
      Alert.removeDialog("formType");
    });
  })

  //添加打印页学生展开详情
  if ($('#1').length > 0) {
    Chart.line({
      element: '1',
      xAxis: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      yAxis: [80, 100, 120, 140, 160],
      data: [{
          name: '男生平均',
          type: 'line',
          smooth: true,
          data: [80, 85, 90, 100, 150, 183, 160, 130, 125],
          markArea: Area,
          markLine: Line
        },
        {
          name: '女生平均',
          type: 'line',
          smooth: true,
          data: [85, 92, 120, 160, 180, 160, 170, 150, 120],
        },
        {
          name: '全班平均',
          type: 'line',
          smooth: true,
          data: [70, 80, 90, 100, 130, 140, 160, 150, 120],
        }
      ],
    });
  }
  if ($('#4').length > 0) {
    Chart.line({
      element: '2',
      xAxis: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      yAxis: [80, 100, 120, 140, 160],
      data: [{
          name: '男生平均',
          type: 'line',
          smooth: true,
          data: [80, 85, 90, 100, 150, 183, 160, 130, 125],
          markArea: Area,
          markLine: Line
        },
        {
          name: '女生平均',
          type: 'line',
          smooth: true,
          data: [85, 92, 120, 160, 180, 160, 170, 150, 120],
        },
        {
          name: '全班平均',
          type: 'line',
          smooth: true,
          data: [70, 80, 90, 100, 130, 140, 160, 150, 120],
        }
      ],
    });
  }
  if ($('#3').length > 0) {
    Chart.line({
      element: '3',
      xAxis: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      yAxis: [80, 100, 120, 140, 160],
      data: [{
          name: '男生平均',
          type: 'line',
          smooth: true,
          data: [80, 85, 90, 100, 150, 183, 160, 130, 125],
          markArea: Area,
          markLine: Line
        },
        {
          name: '女生平均',
          type: 'line',
          smooth: true,
          data: [85, 92, 120, 160, 180, 160, 170, 150, 120],
        },
        {
          name: '全班平均',
          type: 'line',
          smooth: true,
          data: [70, 80, 90, 100, 130, 140, 160, 150, 120],
        }
      ],
    });
  }
  if ($('#4').length > 0) {
    Chart.line({
      element: '4',
      xAxis: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      yAxis: [80, 100, 120, 140, 160],
      data: [{
          name: '男生平均',
          type: 'line',
          smooth: true,
          data: [80, 85, 90, 100, 150, 183, 160, 130, 125],
          markArea: Area,
          markLine: Line
        },
        {
          name: '女生平均',
          type: 'line',
          smooth: true,
          data: [85, 92, 120, 160, 180, 160, 170, 150, 120],
        },
        {
          name: '全班平均',
          type: 'line',
          smooth: true,
          data: [70, 80, 90, 100, 130, 140, 160, 150, 120],
        }
      ],
    });
  }



});
