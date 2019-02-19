$(function(){
  function callBack(v,k){
    var count = k._tempValue
    var $this=$(this)
    var input=$this.prev('input')
    var icon=$this.prevAll('.icon')
    if(count==0){
      input.css({
        display: 'block',
        textAlign: 'center',
        marginLeft: '0.467rem',
        width: '5.46rem',
        borderRadius:'0.1rem',
        border:'1px solid #82B64C',
        color:'#82B64C'
      })
      icon.css({
        opacity: '0'
      })
    }else {
      input.css({
        display: 'block',
        textAlign: 'center',
        marginLeft: '0.467rem',
        width: '5.46rem',
        border: 0,
        color: '#000'
      })
      icon.css({
        opacity: '1'
      })
    }
  }

  $('.selectClass1').mobiscroll().select({
    theme: "mobiscroll",
    mode: "scroller",
    display: "bottom",
    lang: "zh",
    placeholder:'请选择班级',
    onSelect:callBack
  });
  $('.selectClass2').mobiscroll().select({
    theme: "mobiscroll",
    mode: "scroller",
    display: "bottom",
    lang: "zh",
    placeholder:'请选择班级',
    onSelect:callBack
  });
  $('.selectClass3').mobiscroll().select({
    theme: "mobiscroll",
    mode: "scroller",
    display: "bottom",
    lang: "zh",
    placeholder:'请选择班级',
    onSelect:callBack
  });
  $('.selectClass4').mobiscroll().select({
    theme: "mobiscroll",
    mode: "scroller",
    display: "bottom",
    lang: "zh",
    placeholder:'请选择班级',
    onSelect:callBack
  });
  $('.selectClass5').mobiscroll().select({
    theme: "mobiscroll",
    mode: "scroller",
    display: "bottom",
    lang: "zh",
    placeholder:'请选择班级',
    onSelect:callBack
  });
})