$(function () {
  // 导航菜单位置自适应
  var curPosition = $('.current').offset().left;
  $('.header-link-menu').scrollLeft(curPosition);

  // 播放事件
  // 优酷播放
  // $('body').on('click', '.side-play-btn', function(){
  //   var player = new YKU.Player('youkuplayer',{
  //     styleid: '0',
  //     client_id: '78b2cfcefe58c217',
  //     vid: 'XMzEyMTYwODYwNA',
  //     newPlayer: true,
  //     events:{
  //       onPlayEnd: function(){
  //         playVideo()
  //       }
  //     }
  //   });
  //   function playVideo(){
  //     player.playVideo();
  //   }
  //   function pauseVideo(){
  //     player.pauseVideo();
  //   }
  //   $('.paly-ctr-btn').css('transform','rotate(360deg)').toggle();
  //   if($('section').hasClass('hide-video')){
  //     $('section').removeClass('hide-video');
  //   }else{
  //     $('section').addClass('hide-video');
  //     pauseVideo();
  //   }
  // })


// 打开视频
  $('body').on('click', '.side-play-btn', function(){
    var videoSrc = $(this).attr('video-src').trim();
    $('#video-iframe').css('display', 'block').animate({'left':'0%'})
    .find('#my-iframe').attr(videoSrc);
  })
// 关闭视频
  $('body').on('click', '#video-iframe .close-btn', function(){
    $('#video-iframe').animate({'left':'100%'}, function (){
      $(this).css('display', 'none');
    })
  })

  // 点击收起，展开更多评论
  $('body').on('click', '.see-all', function () {
    var hideBox = $(this).parent().find('.list-hide');
    if(!$(this).hasClass('open')){
        hideBox.css('max-height', hideBox.find('h4').length * 0.43 + 'rem');
        $(this).html('<span class="p-name txt-green">收起评论</span>').addClass('open')
    } else {
        hideBox.css('max-height', '.86rem');
        $(this).html('<span class="p-name txt-green">查看全部评论</span><span class="p-name txt-green">' +hideBox.find('h4').length+ '</span>').removeClass('open')
    }
  })
})