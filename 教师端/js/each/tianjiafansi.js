$(function () {
  // 统计输入字数
  var maxLen = 2000;//总长度
  var nowLen = 0;
    $("#txtInput").on('input',function(){
        nowLen = $("#txtInput").val().length;//输入时的长度
        $("#txtCount").html(maxLen-nowLen);          
        
    });



})