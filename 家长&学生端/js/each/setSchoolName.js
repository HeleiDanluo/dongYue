$(function(){

  $('#school-select').mobiscroll().select({
    theme: "mobiscroll",
    mode: "scroller",
    display: "bottom",
    lang: "zh",
    placeholder:'请选择您的学校',
    onSelect:function(v,k){
      if(k._tempValue=="0"){
        $("#school-select").prev().val("");
      }
    },
    formatResult:function(array){
      if(array[0]=="0"){
        $("#school-select").prev().val("");
      }
    }
  });
});