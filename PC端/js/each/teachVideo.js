$(function(){
  var $article=$('.articlevideo')
  var innerhtml=''
  var $img
  var arr=[]
  var baseHeight=document.documentElement.clientHeight||document.body.clientHeight
  var baseWidth=document.documentElement.clientWidth||document.body.clientWidth
  $('.limit').height(baseHeight-55+'px').css({'overflow':'auto'})

  $('.smallnav>ul>li').click(function(){
    var $this=$(this)
    $('.smallnav>ul>li').removeClass('slide')
    $('.smallnav>ul>ul>li').hide()
    if($this.hasClass('slide')){
      $this.next('ul').find('li').hide(200)
      $this.removeClass('slide')
      $this.find('.symbol').html('∨')
    }else{
      $this.next('ul').find('li').show(200)
      $this.addClass('slide')
      $this.find('.symbol').html('∧')
    }
  })
  $('.smallnav>ul>ul>li').click(function(){
    Alert.loading('show')
    var $this=$(this)
    $this.siblings().removeClass('focus')
    $this.addClass('focus')
    var val=$this.html()
    switch (val) {
      case '学年设置':
        innerhtml='../statics/helpform/xuenianshezhi.html'
        break;
      case '班级设置':
          innerhtml='../statics/helpform/banjishezhi.html'
          break;
      case '如何生成教师账号':
          innerhtml='../statics/helpform/ruheshengchengjiaoshizhanghao.html'
          break;
      case '生成教师帐号':
        innerhtml='../statics/helpform/ruheshengchengjiaoshizhanghao.html'
        break;
      case '教学管理简介':
        innerhtml='../statics/helpform/jiaoxueguanlijianjie.html'
        break;
      case '教学计划使用说明':
        innerhtml='../statics/helpform/jiaoxuejihuashiyongshuoming.html'
        break;
      case '单元计划使用说明':
        innerhtml='../statics/helpform/danyuanjihuashiyongshuoming.html'
        break;
      case '班级课表使用说明':
        innerhtml='../statics/helpform/banjikebiaoshiyongshuoming.html'
        break;
      case '计划进度使用说明':
        innerhtml='../statics/helpform/jihuajindushiyongshuoming.html'
        break;
      case '教学教案使用说明':
        innerhtml='../statics/helpform/jiaoxuejiaoanshiyongshuoming.html'
        break;
      case '查看和导出教案':
        innerhtml='../statics/helpform/chakandaochu.html'
        break;
      case '上传学生体质数据':
        innerhtml='../statics/helpform/tizhishuju.html'
        break;
      case '查看学生体质分析':
        innerhtml='../statics/helpform/tizhifenxi.html'
        break;
      case '备课管理':
          innerhtml='../statics/helpform/beikeguanli.html'
          break;
      case '授课延期':
          innerhtml='../statics/helpform/shoukeyanqi.html'
          break;
      case '查看教学教案':
        innerhtml='../statics/helpform/chakanjiaoxuejiaoan.html'
        break;
      case '查看动作视频':
        innerhtml="../statics/helpform/chakandongzuoshipin.html"
        break;
      case '使用方法':
        innerhtml='../statics/helpform/xinxueqikaishiruheshiyong.html'
        break;
      case '如何查看教学教案':
        innerhtml='../statics/helpform/ruhechakanjiaoxuejiaoan.html'
        break;
      case '如何查看学生信息':
        innerhtml='../statics/helpform/ruhechakanxueshengxinxi.html'
        break;
      case '如何发布评语':
        innerhtml='../statics/helpform/ruhefabupingyu.html'
        break;
      case 'PC端布置家庭作业方法':
        innerhtml='../statics/helpform/pcbuzhijiatingzuoye.html'
        break;
      case '微信端布置家庭作业方法':
        innerhtml='../statics/helpform/weixinduanbuzhijiatingzuoye.html'
        break;
      case '学生如何完成家庭作业':
        innerhtml='../statics/helpform/xueshengruhewanchengjiatingzuoye.html'
        break;
      case '关注公众号':
          innerhtml='../statics/helpform/weixin.html'
          break;
//      学生体质数据
      case '学生数据录入':
          innerhtml='../statics/helpform/xueshengshujuluru.html'
          break;
      case '班级学生管理':
          innerhtml='../statics/helpform/banjixueshengguanli.html'
          break;
      case '班级数据报表':
          innerhtml='../statics/helpform/banjishujubaobiao.html'
          break;
      case '学校统计报表':
          innerhtml='../statics/helpform/xuexiaotongjibaobiao.html'
          break;
      default:
        break;
    }
    $article.load(innerhtml,function(){
      $img=$('img')
      var len=$img.length
      for(var i=0;i<len;i++){
        var offset=$img[i].offsetTop
        arr.push(offset)
      }
      Alert.loading('')
    })
  })

  var j=0

  var $first=$('.smallnav>ul>li').eq(1)
  var $firstli=$('.smallnav>ul>ul').eq(0).find('li').eq(0)

  $first.click()
  $firstli.click()

  $('.limit').scroll(function(){
    var $inner=$('.limit').get(0)
    var scrollTop=$inner.scrollTop
    $img=$('.limit img')
    var height=$img.eq(0).height()
    for(var i=0;i<$img.length;i++){
      var offset=$img[i].offsetTop
      if(scrollTop+height>offset){
        j=i
      }
    }
    var now=$img.eq(j).attr('data-src')
    $img.eq(j).attr('src',now)
  })

  $('body').delegate('.articlevideo>img','click',function(){
    var $this=$(this)
    var src=$this.attr('src')
    if(src=='../statics/images/helphome/lazy.png'){
      return
    }
    var basehtml='\
      <div class="srcBk">\
      </div>\
      <div class="srcimgBox">\
        <div class="limit">\
          <img src="'+src+'">\
          <div class="cancel">X</div>\
        </div>\
      </div>\
    '
    $('body').append($(basehtml))
    $('.limit').height(baseHeight)
  })
  
  $('body').delegate('.cancel','click',function(){
    $('.srcBk').hide(200)
    $('.srcimgBox').hide(200)

    var timer=setTimeout(function(){
      $('.srcBk').remove()
      $('.srcimgBox').remove()
      timer=null
    },200)
  })

  $('body').delegate('.srcimgBox','click',function(){
    $('.srcBk').hide(200)
    $('.srcimgBox').hide(200)

    var timer=setTimeout(function(){
      $('.srcBk').remove()
      $('.srcimgBox').remove()
      timer=null
    },200)
  });
})