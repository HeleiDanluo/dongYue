var login = {
  now: "login",
  nowIndex:1,
  init: function () {
    var self = this;
    if (self.now == "login") {
      $(".arrow-now").css("left","25%");
      $(".login").show().next().hide();
    }else{
      $(".arrow-now").css("left","75%");
      $(".login").hide().next().show();
    }
    self.bindEvent();
  },
  bindEvent:function(){
    $(".select-option").on("click",".login-link",function(){
      login.clickOption(this);
    })
    Dy.getCode($(".getVoliCode"),{
      times:10,
      callback:function(init){
         console.log("计时开始");
      }
    })
  },
  clickOption: function (that) {
    var self=this;
    var index=$(that).attr("data-index");
    var linkName=$(that).attr("href").slice(1);
    if(self.nowIndex==index)return;
    self.now=linkName;
    self.nowIndex=index;
    $(".arrow-now").css("left",(index-1)*50+25+"%");
    $("#"+linkName).show().siblings().hide();
  },
}
login.init();