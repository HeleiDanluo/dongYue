$(function(){
	zanPing();
	// var childCode = $(".white-back").attr("childCode");
	// if(childCode){
	// 	$.dialog("confirm", "是否前往【账号管理】获取班级信息？", {
	// 		keys :["前往","取消"],
	// 		callback: function (result) {
	// 			$.loading({type:'show'});
	// 			if(result){//是否更新训练计划
	// 				window.location.href = "/account/toAccountSettingIndex.do?childCode="+childCode;
	// 			}else{//沿用上月训练计划
	// 				window.location.href = "/child/childIndex.do";
	// 			}
	// 		}
	// 	});
	// }
	
	$(".comment").each(function(i) {
		$(this).click(function() {
			$('footer').css({'height':'0'});
			$(".commentDiv").eq(i).show();
      $('.commentInput').focus();
      var target = $(".commentDiv");
			// setTimeOut(function() {
			// 	target.scrollIntoView(true);
			// }, 100);
		});
	});	
	
	$(".close").each(function(i) {
		$(this).click(function() {
			$('footer').css({height:'1.173rem'});
			$(".commentDiv").eq(i).hide();
			
		});
	});

	$(".publish").each(function(i) {
		$(this).click(function() {
      $(".commentDiv").eq(i).hide();
      $(".commentDiv").eq(i).val(null);
      $('footer').css({height:'1.173rem'});
// 			var comment = $(".commentInput").eq(i).val();
// 			if(comment == '' || comment == null) {
// 				return ;
// 			}
//             var studentCode = $(".studentCodes").eq(i).val();
//             $.ajax({
//                 url : '/circle/studentCircleComment.do',
//                 data : {
//                     studentCode : studentCode,
// 					flag : 'comment',
// 					comment : comment
//                 },
//                 dataType : 'json',
//                 success : function(result) {
//                     var response = result.split("|");
//                     if(response[0] == '2') {
//                         var html = 	'<div>' +
// 										'<span style="color:#85B351;">' + response[1] + '</span>&nbsp; ' +
// 										'<span style="color:#2c2d2f;margin-left:0.1rem;word-wrap: break-word;">' + comment + '</span> ' +
// 									'</div>' ;
//                         $(".comment-panel").eq(i).append(html);
//                         $(".commentDiv").eq(i).hide();
//                         $(".commentDiv").eq(i).val(null);
//             			      $('footer').css({bottom:'0rem'});
// //                    	判断是否显示评论点赞结果
//                         zanPing();
//                     }else if(response[0] == '-1') {
//                         alert("系统错误");
//                     }
//                 },
//                 error : function() {
//                     alert("系统错误");
//                 }
//             });
		});
	});

	$(".like").each(function(i) {
		$(this).click(function() {
			var studentCode = $(".studentCodes").eq(i).val();
			$.ajax({
				url : '/circle/studentCircleComment.do',
				data : {
					studentCode : studentCode,
					flag : 'like'
				},
				dataType : 'json',
				success : function(result) {
					var response = result.split("|");
					if(response[0] == '1') {
                        var html = '<div style="float:left;color:#757575">' +
										'<span>' + response[1] + '</span>&nbsp;' +
									'</div>';
                        $('.zanTitle').css('display','block');
                        $(".like-panel").eq(i).append(html);
                    	//判断是否显示评论点赞结果
                        zanPing();
					}else if(response[0] == '-1') {
						alert("系统错误");
					}
				},
				error : function() {
					alert("系统错误");
				}
			});
		});
	});	
	
//	判断是否显示评论点赞结果
	function zanPing(){
		var likepanel = $('.like-panel').find('div');
		var comment = $('.comment-panel').find('div');
		console.log('点赞:'+ likepanel.length + '评论:' + comment.length);
		if(likepanel.length > 0 && comment.length <= 0){
			$('#pingLunDianZan').css('display','block');
			$('.like-panel').css('display','block');
			$('.zanTitle').css('display','block');
			$('.plHr').css('display','none');
			$('.comment-panel').css('display','none');
			console.log('有点赞,无评论');
		}else if(comment.length > 0 && likepanel.length <= 0){
			$('#pingLunDianZan').css('display','block');
			$('.like-panel').css('display','none');
			$('.plHr').css('display','none');
			$('.comment-panel').css('display','block');
			console.log('有评论,无点赞');
		}else if(comment.length > 0  && likepanel.length > 0 ){
//			$('#pingLunDianZan').css('display','block');
			$('.like-panel').css('display','block');
			$('.like-panel').css('display','block');
			$('.plHr').css('display','block');
			$('.comment-panel').css('display','block');
			console.log('有评论点赞');
		}else{
			$('#pingLunDianZan').css('display','none');
			console.log('无评论点赞');
		}
	}
	
});