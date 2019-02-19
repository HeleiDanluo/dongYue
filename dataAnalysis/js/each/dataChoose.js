$(function(){
  
  function data(len){
    var datasLen=len
    var $ul=$('.mydataChoose .num')
    var liHtml=''
    var temp=[]

    if(datasLen<=5){
      for(var i=1;i<=datasLen;i++){
        if(i==1){
          liHtml+='<li class="focus">1</li>'
        }else{
          liHtml+='<li>'+i+'</li>'
        }
      }
      $ul.append(liHtml)
    }

    if(datasLen>5){
      for(var i=1;i<=5;i++){
        if(i==1){
          liHtml+='<li class="focus">1</li>'
        }else{
          liHtml+='<li>'+i+'</li>'
        }
      }
      liHtml+='<li>...</li><li>'+datasLen+'</li>'
      $ul.append(liHtml)
    }

    $('body').delegate('.mydataChoose .num li','click',uiChange)

    function uiChange(e){
      var $this=$(this)
      var count=parseInt($this.html().trim())
      var inner=''

      if(datasLen>5){    
        if(count>4&&count<datasLen-2){
          temp=[1,'...',count-2,count-1,count,count+1,count+2,'..',datasLen]
        }else if(count<=4){
          temp=[1,2,3,4,5,'...',datasLen]
        }else if(count>=datasLen-2){
          temp=[1,'...',datasLen-4,datasLen-3,datasLen-2,datasLen-1,datasLen]
        }else{
          return
        }
        $ul.find('li').remove()
    
        for(var i=0;i<temp.length;i++){
          if(temp[i]==count){
            inner+='<li class="focus">'+temp[i]+'</li>'
          }else{
            inner+='<li>'+temp[i]+'</li>'
          }
        }
    
        $ul.append(inner)
      }else{
        $this.siblings().removeClass('focus')
        $this.addClass('focus')
      }
      callBack(count)
    }

    function callBack(count){
      console.log(count)
    }
  }

  var len=5 // 页数
  data(5)
})