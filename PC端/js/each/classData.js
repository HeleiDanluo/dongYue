// 
$(function(){
  $(".sportItem").on('click','>a',function(){
    var showId=$(this).attr("value");
    if(showId!=0){
      $(".table-excel").css("width","100%");
      if($(this).hasClass("current")){
        $('.addtd').hide();
      }else{
        $('.addtd').hide();
        $('.td_'+showId).show();
      }
      return;
    }
    if(!$(this).hasClass("current")){
      $(".table-excel").css("width","4500px");
      $(".addtd").show();
    }else{
      $(".table-excel").css("width","100%");
      $('.addtd').hide();
    }
  })
  setAlertPosition();
  selectNew();
  $(".close-btn").click(function () {
    Alert.removeDialog("formType");
  });
});
// 点击切换按钮
$('.bjxx .change-btn').click(function(){
  var btnVal = $(this).html();
  // 按钮移动效果
  $(this).parent()
    .animate({//整体位移，渐变消失
      'right':'100px',
      'opacity':'0'
    },
    function(){//动画完成回掉
      $(this).addClass('display-no').css({'opacity':'1'});
    })
    .siblings().removeClass('display-no')
    .css({'right':'-100%'})
    .animate({
      'right':'0',
  });
  if(btnVal == '取消'){
    $('.inside-wrapper .table-excel .control i').remove();
  }else{
    $('.inside-wrapper .table-excel tbody .control').append('<i class="banji-check icon-gou-nocked"></i>');
  }
});

// 点击退休转班方框
$(document).on('click','.inside-wrapper .table-excel .control .icon-gou-nocked',function(){
  $(this).removeClass('icon-gou-nocked').addClass('icon-gou-cked');
});
$(document).on('click','.inside-wrapper .table-excel .control .icon-gou-cked',function(){
  $(this).removeClass('icon-gou-cked').addClass('icon-gou-nocked');
});

// 点击退学
function dropOut(id,obj){
	Alert.dialogBox("alert-talk","确认进行退学操作？",{
		confirmFn:function(){
			$.ajax({
		        type: "POST",
		        url: "/classData/dropOut.do",
		        traditional: true,
		        dataType: "html",
		        data: {
		            "evaluationId" : id
		        },
		        success: function(data) {
//		        	alert(data);
		        	if(data==1){
		        		Alert.removeDialog("alertType");
		        		Alert.globalWarning({
		        			times : 1250,
							type : "success",
							words : "退学成功！",
							callBack : function(){
								$(obj).parent().parent().remove();
							}
		        		});
		        	}else{
		        		Alert.globalWarning({
		        			times : 1250,
							type : "error",
							words : "退学失败！",
							callBack : function(){
								return;
							}
		        		});
		        	}
		        	Alert.removeDialog("formType");
		        }
			 });
		}
	});

}