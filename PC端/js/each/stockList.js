$(function(){
  $(".toolsImport").click(function(){
    callAlert("toolsImportForm.html",{
      initFn:function(){
      },
      confirmFn:function(){

      }
    })
  });
  $('.jiaojuluru').click(function(){
    $('.alert-box').css('display','block');
    setAlertPosition();
  })
  setAlertPosition();
  selectNew(
    $('.no-next').on('click',function(){
      $('.classselect').parent().css({
        'display': 'none'
      })
    }),
    $('.ok-next').on('click',function(){
      $('.classselect').parent().css({
       'display': 'block'
      })
    })
  );
  // 跳转链接
  $('.dl-list li').click(function(){
    var myHref = $(this).attr('to').trim();
    window.location.href=myHref;
  })
  //文件名回显
  $("body").on("change",".toolTemplate",function(){
    var importName=$(this).val();
    $(this).closest("label").parent().prev().children().find(">input").val(importName);
  });
  $(".close-btn").click(function () {
    $('.alert-box').css('display','none');
  });
  // 教具导入弹窗
  // $('.jiaojuluru').click(function(){
  //   Alert.selectBox({
  //     title:"教具录入",
  //     file:true,//是否启用文件上传选项框
  //     selectList:[
  //         {
  //           placeholder:{//选项框
  //             text:'请选择器械种类',//选项框placeholder提示信息
  //             id:'placeholderId1'//选项框id
  //           },
  //           list:[//下拉选项  数组 数组存放每个下拉对象 包括 id 和显示文本
  //             {
  //               id:'listId1',//当前选项id
  //               text:'电子设备'//当前选项文本
  //             },
  //             {
  //               id:'listId2',//当前选项id
  //               text:'固定器材'//当前选项文本
  //             },
  //             {
  //               id:'listId2',//当前选项id
  //               text:'消耗器材'//当前选项文本
  //             }]
  //         }
  //       ],
  //       callBack:function(){
  //         $('body').on('click','.form-confirm',function(){
  //           alert('sd')
  //         })
  //       }
  //     });
  // })
})