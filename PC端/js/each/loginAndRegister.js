$(function(){
  $(".code-time-btn").click(function(){
    getPhoneCode($(this),{
      callBack:function(){
        //这里是点击后的执行代码区域
        console.log("执行回调");
        // return false; 这句代码是中断当前操作的 必须return false
      }
    })
  })
  //省
  new ConstructSelect($(".province"),{
    callback:function(){
      $(".city .select-list").html("<li><a href='javascript:;'>成都</a></li><li><a href='javascript:;'>绵阳</a></li><li><a href='javascript:;'>巴中</a></li>")
    }
  })
  //市
  new ConstructSelect($(".city"),{
    callback:function(){
      alert("选了城市");
    }
  })
  //区
  new ConstructSelect($(".area"),{
    callback:function(){
      alert("选了区县");
    }
  })

  $(".nextStep").click(function(){
    Alert.appeal({
      teacherName:"李老师",
      teacherPhoneNum:"123456789",
      confirm:function(){
        alert("点击了确定")
      },
      exit:function () {
        alert("点击了取消")
      }
    })
  })
})

