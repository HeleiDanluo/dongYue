//调整弹窗的定位位置
function setAlertPosition() {
  var height = $(".alert-div").innerHeight()
  // console.log(height);
  $(".alert-div").css("margin-top", -(height / 2));
}
var Alert = {}
Alert.bgModal = '<div class="alert-box animated fadeIn"></div>';
Alert.dialogBox = function (boxType, words, options) {
  var defaults = {
    confirmFn: null,
  };
  var opts = $.extend({}, defaults, options);
  var $modal = $(this.bgModal).addClass("alertType");
  var talkBox = $(
    '<div class="alert-div warning-box back_white animated fadeInDownBig">' +
    '<div class="alert-title back_theme">' +
    '<p class="txt_w title-msg"><i class="icon-tips"></i> 提示信息</p>' +
    '<a class="close-btn f12 txt_w icon-guanbi"  href="javascript:;"></a>' +
    '</div>' +
    '<div class="alert-content">' +
    '<p class="alert-msg t_c">' + words + '</p>' +
    '<div class="alert-btn t_r">' +
    // '<a href="javascript:;" class="btn grayBtn">取消</a>' +
    // '<a href="javascript:;" class="btn themeBtn">确认</a>' +
    '</div>' +
    '</div>' +
    '</div>');
  switch (boxType) {
    case 'alert-talk': {
      $(talkBox).find(".alert-btn")
        .append('<a href="javascript:void(0)" class="btn grayBtn cancel">取消</a>' +
          '<a href="javascript:void(0)" class="btn themeBtn confirm">确认</a>');
      break;
    }
    case 'alert-default': {
      console.log("jingrule");
      $(talkBox).find(".alert-btn")
        .append('<a href="javascript:void(0)" class="btn themeBtn confirm">确认</a>');
      break;
    }
    default: {
      break;
    }
  }
  $modal.html(talkBox);
  $("body").append($modal);
  if (boxType == "alert-default") {
    $(".confirm").click(function () {
      Alert.removeDialog("alertType");
    })
  } else if (boxType == "alert-talk") {
    $(".confirm").click(function () {
      opts.confirmFn();
    })
  }
  $(".close-btn").click(function () {
    Alert.removeDialog("alertType");
  });
  $(".cancel").click(function () {
    opts.cancelFn?opts.cancelFn():Alert.removeDialog("alertType");
  });
};
// 只移除自己
Alert.dialogBox1 = function (boxType, words, options) {
  var defaults = {
    confirmFn: null,
  };
  var opts = $.extend({}, defaults, options);
  var $modal = $(this.bgModal).addClass("alertType1");
  var talkBox = $(
    '<div class="alert-div warning-box back_white animated fadeInDownBig">' +
    '<div class="alert-title back_theme">' +
    '<p class="txt_w title-msg"><i class="icon-tips"></i> 提示信息</p>' +
    '<a href="javascript:;" class="close-btn f12 txt_w icon-guanbi"></a>' +
    '</div>' +
    '<div class="alert-content">' +
    '<p class="alert-msg t_c">' + words + '</p>' +
    '<div class="alert-btn t_r">' +
    // '<a href="javascript:;" class="btn grayBtn">取消</a>' +
    // '<a href="javascript:;" class="btn themeBtn">确认</a>' +
    '</div>' +
    '</div>' +
    '</div>');
  switch (boxType) {
    case 'alert-talk': {
      $(talkBox).find(".alert-btn")
        .append('<a href="javascript:void(0)" class="btn grayBtn cancel">取消</a>' +
          '<a href="javascript:void(0)" class="btn themeBtn confirm">确认</a>');
      break;
    }
    case 'alert-default': {
      console.log("jingrule");
      $(talkBox).find(".alert-btn")
        .append('<a href="javascript:void(0)" class="btn themeBtn confirm">确认</a>');
      break;
    }
    default: {
      break;
    }
  }
  $modal.html(talkBox);
  $("body").append($modal);
  if (boxType == "alert-default") {
    $(".confirm").click(function () {
      Alert.removeDialog("alertType1");
    })
  } else if (boxType == "alert-talk") {
    $(".confirm").click(function () {
      opts.confirmFn();
    })
  }
  $(".close-btn").click(function () {
    Alert.removeDialog("alertType1");
  });
  $(".cancel").click(function () {
    opts.cancelFn?opts.cancelFn():Alert.removeDialog("alertType1");
  });
};

Alert.optionBox=function(options){
    var defaults = {
        confirmFn: null,
    };
    var opts = $.extend({}, defaults, options);
    var $modal = $(this.bgModal).addClass("alertType");
    var firstLib='<ul class="first"><li>test1</li><li>test2</li><li>test3</li><li>test4' +
        '</li></ul>'
    var secondLib='<ul class="second"><li>test1</li><li>test2</li><li>test3</li><li>test4' +
        '</li></ul>'
    var talkBox = $(
        '<div class="alert-div option-box back_white animated fadeInDownBig">' +
        '<div class="option-title">' +
        '<p class="txt_w option-msg"><i class="icon-tips"></i> 提示信息</p>' +
        '<a  href="javascript:;" class="close-btn f12 icon-guanbi"></a>' +
        '</div>' +
        '<div class="option-content">' +firstLib+secondLib+
        '</div>' +
        '</div>');
    talkBox.filter('.option-content').append(firstLib)
    $modal.html(talkBox);
    $("body").append($modal);
    $(".close-btn").click(function () {
        Alert.removeDialog("alertType");
    });
    $(".cancel").click(function () {
        opts.cancelFn?opts.cancelFn():Alert.removeDialog("alertType");
    });
}

Alert.removeDialog = function (alertType) {
  if (alertType == "alertType") {
    $(".alertType").removeClass("fadeIn").addClass("fadeOut");
    $(".alertType").find(".alert-div").removeClass("fadeInDownBig").addClass("fadeOutUpBig");
    var timer = null;
    timer = setTimeout(function () {
      $(".alertType").remove();
      clearTimeout(timer);
      timer=null;
    }, 500);
    timer = null;
  } else if (alertType == "formType") {
    $(".formType").removeClass("fadeIn").addClass("fadeOut");
    $(".formType").find(".alert-div").removeClass("fadeInDownBig").addClass("fadeOutUpBig");
    var timer = null;
    timer = setTimeout(function () {
      $(".formType").remove()
      clearTimeout(timer);
      timer=null;
    }, 500);
    timer = null;
  }else if(alertType == "newType"){
    $(".newType").removeClass("fadeIn").addClass("fadeOut");
    $(".newType").find(".alert-div").removeClass("fadeInDownBig").addClass("fadeOutUpBig");
    var timer = null;
    timer = setTimeout(function () {
      $(".newType").remove()
      clearTimeout(timer);
      timer=null;
    }, 500);
    timer = null;
  }
};
Alert.loading = function (type, contentBox) {
  var loadHtml = $('<div class="loading animated fadeIn">' +
    '<div class="loading-content">' +
    '<div class="spinner">' +
    '<div class="cube1"></div>' +
    '<div class="cube2"></div>' +
    '</div></div></div>');
  if (type == "show") {
    if (contentBox) {
      $(contentBox).append(loadHtml);
      $(contentBox).css("position", "relateve");
      $(".loading").css("position", "absolute")
    } else {
      $("body").append(loadHtml);
    }
  } else {
    $('.loading').removeClass("fadeIn").addClass("fadeOut");
    var timer=setTimeout(function () {
      $(".loading").remove();
      clearTimeout(timer);
      timer=null;
    }, 200);
  }
  return;
}
Alert.videoIdbox=function(options){
  var defaults = {
    words: '文字内容',
    btnRight: '立即创建',
    placeHolder:'输入视频ID',
    callBack: null
  }
  var opts = $.extend({}, defaults, options);
  var inputContent=$(
    '<div class="alert-box twoBtn formType animated fadeIn">' +
    '<div class="changePass form-box back_white animated fadeInDownBig" style="margin-top: -128px !important;">' +
    '<div class="form-head t_r"><a class="close-btn icon-guanbi f12" href="javascript:;"></a></div>' +
    '<div class="form-content">' +
    '<div class="input-list f18" style="min-height:84px;padding: 0 0 15px 0;line-height:32px;text-align:center;">' +
    '<b>' + opts.words + '</b>' +
    '<input type="text" id="alert-input-value" class="mt20 formControl" placeholder="' + opts.placeHolder + '" style="width:100%;height:40px;padding:0 5px"></input>' +
    '</div>' +
    '<div class="mt20">' +
    '<input type="input" readonly style="border:none;width:100%;float:left;cursor:pointer;" id="btn-right" class="blockBtn themeBtn" value="'+ opts.btnRight +'"/>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>');
    $("body").append(inputContent);

    opts.callBack && opts.callBack();
    $(".close-btn").click(function () {
      Alert.removeDialog("formType");
    });
}

// 设置 登录密码
Alert.inputbox=function(word){
  word=word||'请输入登陆密码'
  var basehtml='\
    <div class="srcBk"></div>\
    <div class="alertInput">\
      <span class="word">'+word+'</span>\
      <input placeholder="'+word+'" type="password">\
      <span class="confirm">确认</span>\
      <a href="javascript:history.go(-1)" class="cancel">X</a>\
    </div>\
  '
  $('body').append($(basehtml))
}

Alert.removeInputbox=function(){
  $('.srcBk').remove()
  $('.alertInput').remove()
}
Alert.appeal = function (options) {
  var defaults = {
    words:"当前学校已存在管理员，请联系学校管理员申请账号",
    confirm: null,
    exit: null,
    teacherName: "老师",
    teacherPhoneNum: "13000000000",
  };
  var opts = $.extend({}, defaults, options);
  var $modal = $(this.bgModal).addClass("alertType");
  var appealBox = $(
    '<div class="alert-div appeal-box back_white animated fadeInDownBig">' +
    '<div class="alert-title back_theme">' +
    '<p class="txt_w title-msg"><i class="icon-tips"></i> 提示信息</p>' +
    '<a  href="javascript:;" class="close-btn f12 txt_w icon-guanbi"></a>' +
    '</div>' +
    '<div class="alert-content">' +
    '<p class="alert-msg">' + opts.words + '</p>' +
    '<div class="managerTable mt10 l_h36 clearfix t_c"><div class="col-4-16 back_gray">' + opts.teacherName + '</div><div class="col-12-16 back_grayer">' + opts.teacherPhoneNum + '</div></div>' +
    '<div class="alert-btn t_r">' +
    '<a href="javascript:;" class="btn themeBtn confirm">申诉</a>' +
    '<a href="javascript:;" class="btn grayBtn exit">退出</a>' +
    '</div>' +
    '</div>' +
    '</div>');
  $modal.html(appealBox);
  $("body").append($modal);
  $(".close-btn").click(function () {
    Alert.removeDialog("alertType");
  });
  $(".exit").click(function () {
    opts.exit()
  });
  $(".confirm").click(function () {
    opts.confirm();
  })
}
Alert.seeSchedule = function (options) {
  var defaults = {
    words:"当前课程内容",
    data:'<div class="data-line f16"><div class="col-8-16 t_c">上课时间：</div><div class="col-8-16">上午/第三届</div></div><div class="data-line f16"><div class="col-8-16 t_c">授课班级：</div><div class="col-8-16">高中3（1）班</div></div><div class="data-line f16"><div class="col-8-16 t_c">授课学生：</div><div class="col-8-16">126人<a href="javascript:;" class="form-link"> 更多</a></div></div><div class="data-line f16"><div class="col-8-16 t_c">授课教案：</div><div class="col-8-16">篮球使用规范<a href="javascript:;" class="form-link"> 查看</a></div></div><div class="data-line f16"><div class="col-8-16 t_c">场地要求：</div><div class="col-8-16">田径场一块</div></div><div class="data-line f16"><div class="col-8-16 t_c">教具要求：</div><div class="col-8-16">口哨一只</div></div><div class="data-line f16"><div class="col-8-16 t_c">帧数据：</div><div class="col-8-16">口哨一只</div></div>',
  };
  var opts = $.extend({}, defaults, options);
  var $modal = $(this.bgModal).addClass("alertType");
  var seeScheduleBox = $(
    '<div class="alert-div see-schedule back_white animated fadeInDownBig">' +
    '<div class="alert-title back_theme">' +
    '<p class="txt_w title-msg"><i class="icon-tips"></i> '+opts.words+'</p>' +
    '<a href="javascript:;" class="close-btn f12 txt_w icon-guanbi"></a>' +
    '</div>' +
    '<div class="alert-content clearfix">' +
    '</div>' +
    '<div class="alert-btn t_r mt10">' +
    '<a href="javascript:void(0)" class="btn themeBtn confirm">确定</a>' +
    '</div>'+
    '</div>');

  seeScheduleBox.find(".alert-content").append(opts.data);
  $modal.html(seeScheduleBox);
  $("body").append($modal);
  $(".close-btn").click(function () {
    Alert.removeDialog("alertType");
  });
  $(".confirm").click(function () {
    Alert.removeDialog("alertType")
  })
};

//修改密码
Alert.changeClass = function (options) {
  var defaults = {
    data:'<div class="alert-box formType animated fadeIn">\
    <div class="alert-div form-box teacher_preview back_white animated fadeInDownBig" style="margin-top: -287.5px !important;">\
        <div class="form-head t_r">\
            <div style="margin-top:18px" class="col-16-16 no-padding t_l f24 teacher_preview_title">\
                <span>上午 / 第一节</span>\
            </div>\
            <a class="close-btn f12 icon-guanbi" href="javascript:;"></a>\
        </div>\
        <div>\
            <div id="my-result" class="plan-list-wrapper back_white mt30" style="padding: 0px 40px">\
                <h3>选择授课教案</h3>\
                <!-- 下拉列表 -->\
                <label class="form-control chooseselect classYear select" style="margin-top: 15px;">\
                    <input style="text-indent: 20px" type="text" id="content" placeholder="课程类别" readonly="">\
                    <span class="caret icon-hehe"></span>\
                    <ul class="select-list" style="display: none;">\
                        <li>\
                            <a style="text-indent: 16px" href="javascript:;" data-val="1" onclick="" contentid="1">走和跑</a>\
                        </li>\
                        <li>\
                            <a style="text-indent: 16px" href="javascript:;" data-val="1" onclick="" contentid="1">走和跑</a>\
                        </li>\
                    </ul>\
                </label>\
                <!-- 数据列表 -->\
                <div class="chooseClass" style="margin-top: 15px; height: 352px;overflow: auto;">\
                    <!-- 一条数据 -->\
                    <div class="each-week-item clearfix" style="padding: 0 20px">\
                        <div class="col-1-16">\
                            <span class="class-num">1</span>\
                        </div>\
                        <div class="col-12-16 tip-word">\
                            <p class="t_c" style="overflow: hidden;text-overflow:ellipsis;white-space: nowrap;">\
                                队列队形&nbsp;:&nbsp;原地踏步走原地踏步走原地踏步走原地踏步走原地踏步走原地踏步走原地踏步走原地踏步走原地踏步走原地踏步走原地踏步走原地踏步走原地踏步走原地踏步走原地踏步走原地踏步走</p>\
                        </div>\
                        <div class="col-3-16 t_c control-box add-this-class t_r">\
                            <a href="javascript:void(0)" class="form-link choosenow">选取为教案</a>\
                        </div>\
                    </div>\
                </div>\
            </div>\
        </div>\
    </div>\
</div>\
<script src="../js/main.js"></script>\
'};
  var opts = $.extend({}, defaults, options);
  var formBox = $('<div class="alert-box newType animated fadeIn"></div>');
  $('body').append(formBox);
  $('.newType').append(opts.data);
  $(".close-btn").click(function () {
    Alert.removeDialog("newType");
  });
  //实例化选择教学计划的下拉选择框
  // new ConstructSelect($(".chooseselect"),{
  // })
  // $('.choosenow').click(function(){
  //   //移除顶层
  //   Alert.removeDialog('newType');
  //   // 移除下一层
  //   // Alert.removeDialog('formType');
  // })
};

// 警告
Alert.globalWarning=function(options){
  var defaults = {
    times:1000,
    type:"success",
    words:"删除成功",
    callBack:null
  };
  var opts = $.extend({}, defaults, options);
  var globalWarn=$('\
    <div class="global-warning-mask animated fadeIn">\
      <div class="bottom">\
        <div class="logo">\
          <i class="'+((opts.type=="success")?("icon-voliPass"):("icon-voliError"))+'"></i>\
        </div>\
        <div class="text">'+opts.words+'</div>\
      </div>\
    </div>')
  $("body").append(globalWarn);
  var removetimer=setTimeout(function(){
    Alert.removeGlobalWarn();
    clearTimeout(removetimer);
    removetimer=null;
    var callBackTimer=setTimeout(function(){
      opts.callBack();
      clearTimeout(callBackTimer);
      callBackTimer=null;
    },300)
  },opts.times+300)
}


Alert.versionUpdate=function(options){
  var defaults = {
    upDateMsg:[
      {
        title:"第一个标题",
        word:"班级分为两种状态：在读/毕业，【在读】状态为可进行操作的班级，【毕业】状态为在系统中不可进行再次更改仅可查看历史纪录<br>班级分为两种状态：在读/毕业，【在读】状态为可进行操作的班级，【毕业】状态为在系统中不可进行再次更改仅可查看历史纪录"
      },
      {
        title:"第二个标题",
        word:"毕业】状态为在系统中不可进行再次更改仅可查看历史纪录"
      },
      {
        title:"第三个标题",
        word:"班级分为两种状态：在读/毕业，【在读】状态为可进行操作的班级，【毕业】状态为在系统中不可进行再次更改仅可查看历史纪录<br>班级分为两种状态：在读/毕业，【在读】状态为可进行操作的班级，【毕业】状态为在系统中不可进行再次更改仅可查看历史纪录"
      },
      {
        title:"第五个标题",
        word:"班级分为两种状态：在读/毕业，【在读】状态为可进行操作的班级，【毕业】状态为在系统中不可进行再次更改仅可查看历史纪录<br>班级分为两种状态：在读/毕业，【在读】状态为可进行操作的班级，【毕业】状态为在系统中不可进行再次更改仅可查看历史纪录"
      },
      {
        title:"第六个标题",
        word:"毕业】状态为在系统中不可进行再次更改仅可查看历史纪录"
      },
      {
        title:"第七个标题",
        word:"班级分为两种状态：在读/毕业，【在读】状态为可进行操作的班级，【毕业】状态为在系统中不可进行再次更改仅可查看历史纪录<br>班级分为两种状态：在读/毕业，【在读】状态为可进行操作的班级，【毕业】状态为在系统中不可进行再次更改仅可查看历史纪录"
      },
      {
        title:"第八个标题",
        word:"班级分为两种状态：在读/毕业，【在读】状态为可进行操作的班级，【毕业】状态为在系统中不可进行再次更改仅可查看历史纪录<br>班级分为两种状态：在读/毕业，【在读】状态为可进行操作的班级，【毕业】状态为在系统中不可进行再次更改仅可查看历史纪录"
      },
      {
        title:"第九个标题",
        word:"毕业】状态为在系统中不可进行再次更改仅可查看历史纪录"
      },
      {
        title:"第十个标题",
        word:"班级分为两种状态：在读/毕业，【在读】状态为可进行操作的班级，【毕业】状态为在系统中不可进行再次更改仅可查看历史纪录<br>班级分为两种状态：在读/毕业，【在读】状态为可进行操作的班级，【毕业】状态为在系统中不可进行再次更改仅可查看历史纪录"
      },
    ],
    callBack:null
  };
  var opts = $.extend({}, defaults, options);
  var $modal = $(this.bgModal).addClass("alertType");
  var updateHtml=$('<div class="alert-div updateBox animated fadeInDownBig">' +
    '<div class="update-title">' +
    '<p></p>' +
    '<a href="javascript:void(0)" class="close"><span>×</span></a>' +
    '</div>' +
    '<div class="update-content">' +
    '<ul class="content-ul clearfix">' +
    '</ul></div>' +
    '<div class="progress-line-bar">' +
    '<span></span>' +
    '</div>' +
    '<div class="see-control">' +
    '<div class="bullet-wrapper">' +
    '<ul></ul>' +
    '</div>' +
    '<div class="next-btn">' +
    '<a href="javascript:void(0)">下一步 >' +
    '</a></div></div></div>');
  updateHtml.find(".update-title p").html(opts.upDateMsg[0].title);
  var bullets="";
  var updateList="";
  var now=1;
  var simpleWidth=430/opts.upDateMsg.length;
  opts.upDateMsg.forEach(function(k,v){
    bullets+='<li class="'+((v+1==1?"current":""))+'" data-index="'+(v+1)+'">'+(v+1)+'</li>';
    updateList+='<li class="t_j">'+k.word+'</li>'
  })
  updateHtml.find(".content-ul").append(updateList).width(430*opts.upDateMsg.length+"px");
  updateHtml.find(".bullet-wrapper>ul").append(bullets);
  console.log();
  updateHtml.find(".progress-line-bar>span").width(now*simpleWidth+"px");
  $modal.append(updateHtml);
  $("body").append($modal);
  $(".next-btn").click(function(){
    if(now<opts.upDateMsg.length){
      now++;
      $(".content-ul").css("-webkit-transform","translateX("+-(now-1)*430+"px)")
        .css("-moz-transform","translateX("+-(now-1)*430+"px)")
        .css("-o-transform","translateX("+-(now-1)*430+"px)")
        .css("transform","translateX("+-(now-1)*430+"px)");
      $(".progress-line-bar>span").width(now*simpleWidth+"px");
      $(".update-title>p").html(opts.upDateMsg[now-1].title);
      $($(".bullet-wrapper>ul>li")[now-1]).addClass("current").siblings().removeClass("current");
    }else{
      Alert.removeDialog("alertType");
    }
  })
  $(".bullet-wrapper>ul").on("click","li",function(){
    var oldNow=now;
    var newNow=parseInt($(this).attr("data-index"));
    if(oldNow==newNow){
      return;
    }
    now=newNow;
    $(this).addClass("current").siblings().removeClass("current");
    $(".content-ul").css("-webkit-transform","translateX("+-(now-1)*430+"px)")
      .css("-moz-transform","translateX("+-(now-1)*430+"px)")
      .css("-o-transform","translateX("+-(now-1)*430+"px)")
      .css("transform","translateX("+-(now-1)*430+"px)");
    $(".progress-line-bar>span").width(now*simpleWidth+"px");
    $(".update-title>p").html(opts.upDateMsg[now-1].title);
  });
  $(".close").click(function(){
    console.log("guanle");
    Alert.removeDialog("alertType");
  })
}

Alert.removeGlobalWarn=function(){
  $(".global-warning-mask").removeClass(".fadeIn").addClass("fadeOut");
  $(".warning-icon").removeClass("warningIn").addClass("warningOut");
  var removeWaning=setTimeout(function(){
    $(".global-warning-mask").remove();
    clearTimeout(removeWaning);
    removeWaning=null;
  },300)
}

// 下拉弹窗
Alert.selectBox = function(options){
  var defaults = {
    title:"默认标题",
    file:true,
    callBack:null,
    selectList:[
      {
        placeholder:{
          text:'提示信息0',
          id:'placeholderId1'
        },
        list:[
          {
            id:'listId1',
            text:['选项一']
          },
          {
            id:'listId2',
            text:['选项二']
          }]
      },
      {
        placeholder:{
          text:'提示信息1',
          id:'placeholderId1'
        },
        list:[
          {
            id:'listId1',
            text:['选项一']
          },
          {
            id:'listId2',
            text:['选项二']
          }]
      }
    ]
  };
  var opts = $.extend({}, defaults, options);
  var $modal = $(this.bgModal).addClass("alertType");
  var selectContainer = $(
    '<div class="alert-box formType animated fadeIn">\
      <div class="alert-div form-box back_white animated fadeInDownBig">\
        <form id="loadRealia" action="loadRealiaExcel.do" method="post" enctype="multipart/form-realia">\
          <div class="form-head t_r"><a class="close-btn f18" href="javascript:;">×</a></div>\
          <h3 class="form-title t_c">'+opts.title+'</h3>\
          <div class="form-content">\
              <div class="form-inline mt10 list-root">\
              </div>\
              <div class="form-inline clearfix mt20 file-root">\
              </div>\
              <div class="form-line submitBtn mt10 clearfix">\
                  <a href="javascript:;" class="blockBtn themeBtn form-confirm">确定</a>\
              </div>\
          </div>\
          </form>\
      </div>\
    </div>')
    // 循环选项，并添加到弹窗
    for(var i = 0; i < opts.selectList.length; i++){
      var innerListContent = $('<label class="form-control select chooseselect mt20"></label>');
      innerListContent.append('<input type="text" placeholder="'+opts.selectList[i].placeholder.text+'" id="'+opts.selectList[i].placeholder.id+'" readonly /><span class="caret"><i class="icon-hehe"></i></span><ul class="select-list"></ul></ul>');
      for(var j = 0; j < opts.selectList[i].list.length; j++){
        innerListContent.find('.select-list').append('<li><a href="javascript:;" data-val="'+opts.selectList[i].list[j].id+'">'+ opts.selectList[i].list[j].text +'</a></li>')
      }
      selectContainer.find('.list-root').append(innerListContent)
    }
    // 判断添加是否文件上传选项框
    if(opts.file == true){
      var fileBox = '<div class="col-26-32 no-padding">\
                          <label class="form-control">\
                              <input type="text" id="fileTemplate" readonly placeholder="选择教具模板"/>\
                          </label>\
                      </div>\
                      <div class="col-5-32 col-offset-1-32 no-padding">\
                          <label class="blockBtn yellowBtn"><i class="icon-toolImport">&nbsp;</i>导入\
                              <input type="file" class="toolTemplate" id="multipartFile" name="multipartFile" style="display: none"/>\
                          </label>\
                      </div>';
      selectContainer.find('.file-root').append(fileBox);
      // 回掉函数
      opts.callBack();
      //文件名回显
      $("body").on("change",".toolTemplate",function(){
        var importName=$(this).val();
        $(this).closest("label").parent().prev().children().find(">input").val(importName);
      });
    }
  $modal.html(selectContainer);
  $("body").append($modal);
  setAlertPosition();
  selectNew();
  $(".close-btn").click(function () {
    Alert.removeDialog("alertType");
  });
}
// 修改密码
Alert.changePass = function(options){
  var defaults = {
    ajaxUrl:" "
  };
  var opts = $.extend({}, defaults, options);
  var $modal = $(this.bgModal).addClass("alertType");
  var changePassBox = $(
    '<div class="changePass form-box back_white animated fadeInDownBig" style="margin-top: -128px !important;">'+
      '<div class="form-head t_r"><h3 style="margin-top:18px;" class="form-title t_c">修 改 密 码</h3><a class="close-btn icon-guanbi f12" href="javascript:;"></a></div>'+
        // '<h3 class="form-title t_c">修改密码</h3>'+
        '<div class="form-content">'+
            '<div class="input-list">'+
                '<label class="form-control">'+
                    '<input id="usrPass" type="password" required="required" maxlength="12" placeholder="请输入原密码">'+
                '</label>'+
                '<label class="form-control">'+
                    '<input id="oldPass" required="required" maxlength="12"  type="password" placeholder="请输入新密码（8~12位）">'+
                    '<i class="pass-icon "></i>'+
                '</label>'+
                '<label class="form-control">'+
                    '<input id="newPass" required="required" maxlength="12"  type="password" placeholder="请确认新密码">'+
                    '<i class="pass-icon"></i>'+
                '</label>'+
            '</div>'+
            '<div class="mt20">'+
                '<input type="submit" style="border:none" id="btn-submit" class="blockBtn themeBtn" value="确认修改"/>'+
            '</div>'+
        '</div>'+
    '</div>');
    var submitCondition = {
      flagNewOldPass: flagNewOldPass = false,//新旧密码是否相同 false 不相同
      flagNewRepPass: flagNewRepPass = false,//新和重复密码是否一致 false 不相同
      flagNull: flagNull = false,//为空判断 false 不空
      flagLength: flagLength = false//判断密码位数 false 不对
    }
    // 聚焦输入 密码框 判断之前码框为空添加红色边框
    $('body').on('focus keyup onproperchange input','.input-list input',function(){
      var nowIndex = $(this).parent().index();//当前聚焦处的序号
      var inputBox = $('.form-control');
      var usrPass_  = $('#usrPass').val().trim();//用户旧密码
      var newPass_  = $('#oldPass').val().trim();//用户新密码
      var repPass_  = $('#newPass').val().trim();//用户重复密码
      inputBox.removeClass('red-border');//重置累加红色边框
      // 判断新密码长度
      var nowLen = newPass_.length;
      if(newPass_ !== ''){
        if(nowLen>=8 && nowLen <= 12){
          submitCondition.flagLength = true;
          $(inputBox[1]).find('input:focus').parent().addClass('onfocus');
          $(inputBox[1]).find('.pass-icon').removeClass('icon-voliError').addClass('icon-voliPass');
        }else{
          $(inputBox[1]).addClass('red-border').removeClass('onfocus').find('.pass-icon').removeClass('icon-voliPass').addClass('icon-voliError');
          submitCondition.flagLength = false;
        }
      }
      // 判断新密码用户密码是否重复
      if(usrPass_ === newPass_ && newPass_ !== ''){
        //新旧密码重复
        // $(inputBox[1]).addClass('red-border').removeClass('onfocus').find('.pass-icon').addClass('icon-voliError');
        submitCondition.flagNewOldPass = true;
      }else if(usrPass_ !== newPass_ &&  newPass_ !== ''){
        //新旧密码不重复
        submitCondition.flagNewOldPass = false;
      }

      //判断新密码和重复密码是否重复
      if(newPass_ === repPass_ && repPass_ !== ''){
        //新和重复密码重复
        submitCondition.flagNewRepPass = true;
        $(inputBox[1]).find('input:focus').parent().addClass('onfocus');
        $(inputBox[2]).find('.pass-icon').removeClass('icon-voliError').addClass('icon-voliPass');
      }else if(newPass_ !== repPass_ && repPass_ !== ''){
        //新旧密码不重复
        $(inputBox[2]).addClass('red-border').removeClass('onfocus').find('.pass-icon').removeClass('icon-voliPass').addClass('icon-voliError');
        submitCondition.flagNewRepPass = false;
      }

      //当前 前面输入框是否为空
      inputBox.each(function(e){//循环输入框的father
        // 当前 前面输入框是否为空
        if(e < nowIndex){
          var preVal = $(this).find('input').val().trim();
          if(preVal === ''){//为空添加红褐色边框
            $(this).addClass('red-border');
          }
        }
      });

    });
  //判断密码否有为空
  function inputull(){
    var usrPass_1  = $('#usrPass').val().trim();//用户旧密码
    var newPass_1  = $('#oldPass').val().trim();//用户新密码
    var repPass_1  = $('#newPass').val().trim();//用户重复密码
    if(usrPass_1 === '' || newPass_1 === '' || repPass_1 === ''){
      return submitCondition.flagNull = true;
    }else{
      return submitCondition.flagNull = false;
    }
  }
  //提交请求信息
  $('body').on('click','#btn-submit',function(){
    inputull();
    console.log(submitCondition)
    if(submitCondition.flagNull === true){
      Alert.globalWarning({type:'error',words:"密码不能为空"});
      return;
    }else if(submitCondition.flagNewOldPass === true){
      Alert.globalWarning({type:'error',words:"新密码不能和旧密码重复"});
      return;
    }else if(submitCondition.flagLength === false){
      Alert.globalWarning({type:'error',words:"密码长度为8~12位"});
      return;
    }else if(submitCondition.flagNewRepPass === false){
      Alert.globalWarning({type:'error',words:"两次新密码不一致"});
      return;
    }else{
      var usrData = {
        oldPass:$('#usrPass').val().trim(),
        newPass:$('#newPass').val().trim()
      }
      $.ajax({
        type: 'post',
        url: opts.ajaxUrl,
        data: usrData,
        success: function(data){
          if(data == 'ok'){
            Alert.removeDialog("alertType");
            Alert.globalWarning({words:"修改成功,请重新登陆"});
            setTimeout(function(){
              window.location.href = "/login/logout.do";
            }, 1000);
          }else{
            Alert.globalWarning({type:'error',words:"原密码错误，请重新输入"});
          }
        },
        error: function(){
          Alert.globalWarning({type:'error',words:"当前网络不佳，请稍后再试"});
        }
      });
    }
    

  });
  $modal.html(changePassBox);
  $("body").append($modal);
  $(".close-btn").click(function () {
    Alert.removeDialog("alertType");
  });
}
//有两个选项的弹窗
Alert.twoBtn = function(options){
  var defaults = {
    words: '文字内容',
    btnLeft: '暂不创建',
    btnRight: '立即创建',
    btnLeftGray: false,//是否灰色
    btnRightGray:  false,//是否灰色
    time: 5,    
    timer: false,
    timer2: false,
    callBack: null
  }
  var opts = $.extend({}, defaults, options);
  var twoBtnContent=$(
    '<div class="alert-box twoBtn formType animated fadeIn">' +
    '<div class="changePass form-box back_white animated fadeInDownBig" style="margin-top: -128px !important;">' +
    '<div class="form-head t_r"><a class="close-btn icon-guanbi f12" href="javascript:;"></a></div>' +
    '<div class="form-content">' +
    '<div class="input-list f18" style="min-height:84px;padding: 35px 0px;line-height:32px;text-align:center;">' +
    '<p>' + opts.words + '</p>' +
    '</div>' +
    '<div class="mt20">' +
    '<input type="input" readonly disabled="disabled" style="border:none;width:49%;float:left;cursor:pointer;" id="btn-left" class="blockBtn grayBtn" value="'+ opts.time + ' 秒' +'"/>' +
    '<input type="input" readonly disabled="disabled" style="border:none;width:49%;float:left;margin-left:2%;cursor:pointer;" id="btn-right" class="blockBtn grayBtn" value="'+ opts.time + ' 秒' +'"/>' +
    // '<input type="input" readonly style="border:none;width:49%;float:left;margin-left:2%;cursor:pointer;" id="btn-right" class="blockBtn themeBtn" value="'+ opts.btnRight +'"/>' +
    '</div>' +
    '</div>' +
    '</div>' +
    '</div>');
    $('.twoBtn').remove();
    $("body").append(twoBtnContent);
    //是否调用倒计时
    //两个同时倒计时
    if(opts.timer == true && opts.timer2 == true){
      var time = opts.time;
      $('#btn-left').val(time + ' 秒');
      $('#btn-right').val(time + ' 秒');
      var interval = setInterval(function(){
        time--;
        $('#btn-left').val(time + ' 秒');
        $('#btn-right').val(time + ' 秒');
        if(time < 1){
          $('#btn-left').val(opts.btnLeft).removeClass('grayBtn').addClass('themeBtn').removeAttr('disabled');
          $('#btn-right').val(opts.btnRight).removeClass('grayBtn').addClass('themeBtn').removeAttr('disabled');
          clearInterval(interval);
        }
      },1000);
    }else
    //左边按钮倒计时
    if(opts.timer == true && opts.timer2 != true){
      var time = opts.time;
      $('#btn-left').val(time + ' 秒');
      var interval = setInterval(function(){
        time--;
        $('#btn-left').val(time + ' 秒');
        if(time < 1){
          $('#btn-left').val(opts.btnLeft).removeClass('grayBtn').addClass('themeBtn').removeAttr('disabled');
          clearInterval(interval);
        }
      },1000);
      $('#btn-right').val(opts.btnRight).removeClass('grayBtn').addClass('themeBtn').removeAttr('disabled');
    }else 
    //右边按钮倒计时
    if(opts.timer != true && opts.timer2 == true){
      var time = opts.time;
      $('#btn-right').val(time + ' 秒');
      var interval = setInterval(function(){
        time--;
        $('#btn-right').val(time + ' 秒');
        if(time < 1){
          $('#btn-right').val(opts.btnRight).removeClass('grayBtn').addClass('themeBtn').removeAttr('disabled');
          clearInterval(interval);
        }
      },1000);
      $('#btn-left').val(opts.btnLeft).removeClass('grayBtn').addClass('themeBtn').removeAttr('disabled');
    }else{
      // 没有倒计时
      $('#btn-left').val(opts.btnLeft).removeClass('grayBtn').addClass('themeBtn').removeAttr('disabled');
      $('#btn-right').val(opts.btnRight).removeClass('grayBtn').addClass('themeBtn').removeAttr('disabled');
    }
    // 判断按钮颜色
    if(opts.btnRightGray == true){
      $('#btn-right').addClass('grayBtn').removeClass('themeBtn');
    }
    if(opts.btnLeftGray == true){
      $('#btn-left').addClass('grayBtn').removeClass('themeBtn');
    }

    opts.callBack();
    $(".close-btn").click(function () {
      if(interval){
        clearInterval(interval)
      };
      Alert.removeDialog("formType");
    });
}
// 80%x90%弹窗
Alert.bigWindow = function(options){
  var defaults = {
    data:'<div class="f18" style="text-align: center;margin-top: 210px">当前无教学计划，请点击&nbsp;&nbsp;&nbsp;<a href="javascript:;" class="icon-addItem btn pinkBtn">&nbsp;新增</a>&nbsp;&nbsp;&nbsp;后查看</div>',
    callBack:null,
  }
  var opts = $.extend({}, defaults, options);
  var $modal = $(this.bgModal).addClass("alertType");
  var box = $(
    '<div class="alert-box formType animated fadeIn">' +
      '<div class="big-form form-box back_white animated fadeInDownBig">' +
        '<div class="form-head t_r"><a class="close-btn icon-guanbi f12" href="javascript:;"></a></div>' +
        '<div id="data" style="height:90%;overflow: auto;"></div>'+
      '</div>' +
    '</div>');
    
  box.find('#data ').append(opts.data);
  $modal.append(box);
  $('body').append($modal);
  // 大窗口水平位置重新计算
  var bigForm = box.find('.big-form');
  bigForm.css({
    'margin-left': -bigForm.width() / 2,
    'margin-top': '-17.5%',
    'padding-bottom': '30px'
  })

  $(".close-btn").click(function () {
    Alert.removeDialog("alertType");
  });

  
  //回调
  opts.callBack();
}
//中等大小
Alert.middleWindow = function(options){
  var defaults = {
    data:'内容',
    callBack:null,
    ifClose:true,
  }
  var opts = $.extend({}, defaults, options);
  var $modal = $(this.bgModal).addClass("alertType");
  var box = $(
    '<div class="alert-box formType animated fadeIn">' +
      '<div class="mid-form form-box back_white animated fadeInDownBig">' +
        '<div class="form-head t_r"><a class="close-btn icon-guanbi f12" href="javascript:;"></a></div>' +
        '<div id="data" style="height:90%;overflow: auto;"></div>'+
      '</div>' +
    '</div>');
    
  box.find('#data ').append(opts.data);
  $modal.append(box);
  $('body').append($modal);
  // 大窗口水平位置重新计算
  var bigForm = box.find('.mid-form');
  bigForm.css({
    'margin-left': -bigForm.width() / 2,
    'margin-top': '-11%',
    // 'padding-bottom': '30px'
  })

  $(".close-btn").click(function () {
    if(opts.ifClose){
      Alert.removeDialog("alertType");
    }
  });

  //回调
  opts.callBack();
}

//小
Alert.smallWindow = function(options){
  var defaults = {
    data:'内容',
    callBack:function(){},
    ifClose:true,
  }
  var opts = $.extend({}, defaults, options);
  var $modal = $(this.bgModal).addClass("alertType");
  var box = $(
    '<div class="alert-box formType animated fadeIn">' +
      '<div class="small-form form-box back_white animated fadeInDownBig">' +
        '<div class="form-head t_r"><a class="close-btn icon-guanbi f12" href="javascript:;"></a></div>' +
        '<div id="data" style="height:90%;overflow: auto;"></div>'+
      '</div>' +
    '</div>');
    
  box.find('#data ').append(opts.data);
  $modal.append(box);
  $('body').append($modal);
  // 大窗口水平位置重新计算
  var smallForm = box.find('.small-form');
  smallForm.css({
    'margin-left': -smallForm.width() / 2,
    'margin-top': '-14%',
    // 'padding-bottom': '30px'
  })

  $(".close-btn").click(function () {
    if(opts.ifClose){
      Alert.removeDialog("alertType");
    }
  });
  $('body').off('click', '.alert-submit')
  //回调
  opts.callBack && opts.callBack();
}