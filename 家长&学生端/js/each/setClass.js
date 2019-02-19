$(function(){

  $('#class-select').mobiscroll().select({
    theme: "mobiscroll",
    mode: "scroller",
    display: "bottom",
    lang: "zh",
    placeholder:'请选择您的年级',
    onSelect:function(v,k){
      if(k._tempValue=="0"){
        $("#class-select").prev().val("");
      }
    },
    formatResult:function(array){
      if(array[0]=="0"){
        $("#class-select").prev().val("");
      }
    }
  });
});