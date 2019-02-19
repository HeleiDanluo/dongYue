$(function(){

  var $article=$('.article')
  var innerhtml=''
  var $img
  var arr=[]
  var baseHeight=document.documentElement.clientHeight
  $('.limit').height(baseHeight-55+'px').css({'overflow':'auto'})

  $('.four>ul>li>ul>li span').click(function(){
    Alert.loading('show')
    innerhtml=''
    $article.children().remove()
    var $this=$(this)
    var val=$this.html()
    switch (val) {
      case '学年设置':
        innerhtml='../helpform/xuenianshezhi.html'
        break;
      case '班级建立':
        innerhtml='../helpform/banjishezhi.html'
        break;
      case '教学管理':
        innerhtml='../helpform/jiaoxueguanli.html'
        break;
      case '查看和导出教案':
        innerhtml='../helpform/chakandaochu.html'
        break;
      case '上传体质数据':
        innerhtml='../helpform/tizhishuju.html'
        break;
      case '查看体质分析':
        innerhtml='../helpform/tizhifenxi.html'
        break;
      case '关注公众号':
        innerhtml='../helpform/weixin.html'
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
  

  $('.limit').scroll(function(){
    var $inner=$('.limit').get(0)
    var scrollTop=$inner.scrollTop
    var $img=$('img')
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
})