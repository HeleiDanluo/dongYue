$(function(){
  $(".handle").click(function(){
    callAlert("borrowListHandleForm.html",{
      initFn:function(){

      },
      confirmFn:function(){

      }
    })
  })
  $(".costRegist").click(function(){
    callAlert("costRegisterForm.html",{
      initFn:function(){},
      confirmFn:function(){}
    })
  })
})