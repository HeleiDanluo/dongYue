  // document.domain = "114.55.92.187";
  // document.domain = "web.jiankangtiyu.com";
  var pptSum = 0;
  // 添加大类菜单
  var $daLeiMenuBox = $('#dalei-menu');
  var $pptItemBox = $('#ppt-item-box');
  var $pptSum = $('#ppt-sum');
  var $body = $('body', window.parent.document);
  //循环挂在第一类默认ppt
  for (var i = 0; i < daLei.length; i++) {
    if (i == 0) {
      //第一个默认选中
      $daLeiMenuBox.append('<a href="javascript:void(0)" class="current" id="' + daLei[i].id + '">' + daLei[i].name +
        '</a>');
      for (var j = 0; j < pptObj.length; j++) {
        if (daLei[i].id == pptObj[j].belongs) {
          pptSum++;
          $pptItemBox.append('<div class="ppt-list-item" onclick="kaishi(' + j +
            ')">\
            <img class="ppt-fengmian" src="/ppt/static/img/'+ pptObj[j].fengmian +'"\
              alt="" srcset="">\
            <div class="playmask icon-play2"></div>\
            <div class="ppt-titile">' +
            pptObj[j].name + '</div>\
          </div>');
        }
      }
    } else {
      $daLeiMenuBox.append('<a href="javascript:void(0)" id="' + daLei[i].id + '">' + daLei[i].name + '</a>');
    }
    $pptSum.text(pptSum);
  }

  //点击菜单
  $('body').on('click', '#dalei-menu>a', function () {
    var $this = $(this);
    $this.addClass('current').siblings().removeClass('current');
    var thisMenuId = $this.attr('id');
    pptSum = 0;
    $pptItemBox.empty();
    for (var k = 0; k < pptObj.length; k++) {
      if (thisMenuId == pptObj[k].belongs) {
        pptSum++;
        $pptItemBox.append('<div class="ppt-list-item" onclick="kaishi(' + k +
          ')">\
          <img class="ppt-fengmian" src="/ppt/static/img/'+ pptObj[k].fengmian +'"\
            alt="" srcset="">\
          <div class="playmask icon-play2"></div>\
          <div class="ppt-titile">' +
          pptObj[k].name + '</div>\
        </div>');
      }
    }
    $pptSum.text(pptSum);
  });

  //ppt数量
  var pptNum;
  //已经是第一张了 提示
  var warnFirst =
    '<div class="ppt-warn">\
  <img width="25%" src="http://web.jiankangtiyu.com/statics/ppt/static/img/warn.png">\
  <h3 class="warn-txt">已经是第一页了</h3>\
  </div>'
  //已经是最后一张了 提示
  var warnLast =
    '<div class="ppt-warn">\
  <img width="25%" src="http://web.jiankangtiyu.com/statics/ppt/static/img/warn.png">\
  <h3 class="warn-txt">已经是最后一页了</h3>\
  </div>'
  //ppt整体界面，包括所有按钮
  // <img width="50%" style="opacity:0.5" src="http://web.jiankangtiyu.com/statics/ppt/static/img/toL.png">\
  // <img width="50%" style="opacity:0.5" src="http://web.jiankangtiyu.com/statics/ppt/static/img/toR.png">\
  var pptBody =
  '<div id="ppt-box">\
    <!-- 关闭按钮 -->\
    <span class="close-ppt">×</span>\
    <!-- 向左切换 -->\
    <div class="btn-left">\
      <span class="icon-arrow icon-toLeft">\
      </span>\
    </div>\
    <!-- 向右切换 -->\
    <div class="btn-right">\
      <span class="icon-arrow icon-toRight">\
      </span>\
    </div>\
    <!-- ppt内容 -->\
    <div class="ppt-content">\
    </div>\
  </div>'
  var allPpt = '';
  //下一张
  $body.on('click', '.btn-right', function () {
    //调用下一页函数
    nextPage();
  });

  //上一张
  $body.on('click', '.btn-left', function () {
    //调用上一页函数
    beforePage();
  });

  // 下一页函数
  function nextPage() {
    //pptitem 
    var pptItem = $('.ppt-item', parent.document);
    //当前的index
    var currentIndex = $('#ppt-box .ppt-content .current', parent.document).index() ;
    if (currentIndex + 1 >= pptNum) {
      //添加警告
      $('.ppt-content', parent.document).append(warnLast);
      // 1秒以后移除警告
      setTimeout(function () {
        $('.ppt-content .ppt-warn', parent.document).remove();
      }, 1000);
    } else {
      //before消失
      pptItem.eq(currentIndex - 1).removeClass('before');
      //current变为before
      pptItem.eq(currentIndex).animate({
          'left': '-100%'
        })
        .removeClass('current')
        .addClass('before');
      //next变为current
      pptItem.eq(currentIndex + 1).animate({
          'left': '0%'
        })
        .removeClass('next')
        .addClass('current');
      //next下一个变为next
      pptItem.eq(currentIndex + 2)
        .addClass('next');
      var curPpt = $('.ppt-item .ppt-src-content', parent.document).eq(currentIndex + 1);
      var pptSrc = curPpt.attr('src-fake');
      setTimeout(function () {
        curPpt.attr({
          'src': pptSrc
        })
      }, 500);
    }
  }

  // 上一页函数
  function beforePage() {
    //当前的index
    var currentIndex = $('.ppt-item.current', parent.document).index();
    if (currentIndex <= 0) {
      //添加警告
      $('.ppt-content', parent.document).append(warnFirst);
      // 1秒以后移除警告
      setTimeout(function () {
        $('.ppt-content .ppt-warn', parent.document).remove();
      }, 1000);
    } else {
      //before之前元素变为before
      $('.ppt-item', parent.document).eq(currentIndex - 2).addClass('before');
      //before变为current
      $('.ppt-item', parent.document).eq(currentIndex - 1).animate({
          'left': '0%'
        })
        .addClass('current')
        .removeClass('before').click();;
      //current变为next
      $('.ppt-item', parent.document).eq(currentIndex).animate({
          'left': '100%'
        })
        .addClass('next')
        .removeClass('current');
      //next消失
      $('.ppt-item', parent.document).eq(currentIndex + 1)
        .removeClass('next');
    }
  }

  //打开ppt
  function kaishi(pptIndex) {
    $body.append(pptBody);
    $('.ppt-item').remove();
    var docElm = parent.window.document.getElementById("ppt-box")
    //W3C   
    if (docElm.requestFullscreen) {
      docElm.requestFullscreen();
    }
    //FireFox   
    else if (docElm.mozRequestFullScreen) {
      docElm.mozRequestFullScreen();
    }
    //Chrome等   
    else if (docElm.webkitRequestFullScreen) {
      docElm.webkitRequestFullScreen();
    }
    //IE11   
    else if (docElm.msRequestFullscreen) {
      docElm.msRequestFullscreen();
    }

    //挂载ppt信息
    pptNum = pptObj[pptIndex].page.length;
    for (var i = 0; i < pptNum; i++) {
      //ppt内容
      var pptBox = $(
        '<div class="ppt-item"><iframe class="ppt-src-content" src="" allowfullscreen="allowfullscreen" frameborder="0"></iframe></div>'
      );

      //第一个添加current
      if (i == 0) {
        pptBox.addClass('current').find('.ppt-src-content').attr('src', pptIp + pptObj[pptIndex].page[i]);
      } else if (i == 1) {
        pptBox.addClass('next').find('.ppt-src-content').attr('src', pptIp + pptObj[pptIndex].page[i]);
      } else {
        pptBox.find('.ppt-src-content').attr('src-fake', pptIp + pptObj[pptIndex].page[i]);
      }
      var pptContent = $('.ppt-content', parent.document);
      pptContent.append(pptBox[0].outerHTML);
    };
  }

  //关闭ppt
  $body.on('click', '.close-ppt', function(){
    guanbi();
  })

  // 关闭ppt函数
  function guanbi() {
    var pptContent = $('#ppt-box', parent.document);//ppt容器
    pptContent.remove();
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  }

  //监听键盘事件
  //keyCode 32空格 37左 39右
  $(document).keydown(function (event) {
    if (event.keyCode == 32) {
      $('.page-body').click();
    } else if (event.keyCode == 37) {
      //键盘左 上一张
      beforePage();
    } else if (event.keyCode == 39) {
      //键盘左 上一张
      nextPage();
    }
  });