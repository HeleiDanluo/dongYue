$(function(){
  $("body").on("change",".toolTemplate",function(){
    var importName=$(this).val();
    $(this).closest("label").parent().prev().children().find(">input").val(importName);
  })
  $(".dataImport").click(function(){
    callAlert("studentDataImportForm.html",{
      initFn:function(){},
      confirmFn:function(){

      }
    })
  })
})