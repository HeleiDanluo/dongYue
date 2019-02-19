$(function () {
  // 一级标题点击切换菜单
  $('.title-first span').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
    var nowIndex = $(this).index();
    $('.title-second .tab-content').eq(nowIndex).addClass('show').siblings().removeClass('show');
		if($(this).hasClass('gwkq')){
			$('.chart-content').css({'display':'none'});
			$('.gw-content').css({'display':'block'});
		}else{
			$('.chart-content').css({'display':'block'});
			$('.gw-content').css({'display':'none'});
		}
  });

  // 二级标题点击
  var ajaxUrl = '/////statistics/attendance/searchAttendanceStatistics.do';
  var dataResource = {
    "data": [
             {
                 "absenceNum": 10,
                 "attendanceNum": 46,
                 "classId": 541,
                 "className": "一年级(1)班",
                 "createdStr": "2017/12/19",
                 "leaveNum": 34,
             },
             {
            	 "absenceNum": 134,
                 "attendanceNum": 123,
                 "classId": 541,
                 "className": "一年级(1)班",
                 "createdStr": "2017/12/20",
                 "leaveNum": 4123,
             },
             {
            	 "absenceNum": 23,
                 "attendanceNum": 645,
                 "classId": 542,
                 "className": "一年级(2)班",
                 "createdStr": "2017/12/19",
                 "leaveNum": 645,
             },
             {
            	 "absenceNum": 543,
                 "attendanceNum": 42,
                 "classId": 542,
                 "className": "一年级(2)班",
                 "createdStr": "2017/12/20",
                 "leaveNum": 634,
             },
             {
            	 "absenceNum": 513,
                 "attendanceNum": 125,
                 "classId": 548,
                 "className": "一年级(3)班",
                 "createdStr": "2017/12/19",
                 "leaveNum": 54,
             }
         ],
         "message": "检索成功",
         "state": true
     };
  $('.title-second span').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
    var parentValue = $('.title-first').find('.active').attr('searchType');
    var nowValue = $(this).attr('queryTime');
    var ajaxData = {searchType:parentValue, queryTime:nowValue};
    if(parentValue == 1){
    	if(nowValue == 1){//最近一次
    		$('.chart-content div').remove();
    		$.ajax({
    			type: 'POST',
    			url: ajaxUrl,
    			data: ajaxData,
    			success: function(data){
    				var json = eval(data.data);
    				for(var i=0; i<json.length; i++){
    					var rdId = Math.random();
    					$('.chart-content').append(
							'<div class="chart-box">'+
							'<div class="chart-box chart-here" id="'+ rdId +'">'+
							'</div>'+
							'</div>'
    					);
    					Chart.pie({
    						element: rdId,
    						title: json[i].className,
    						data: [
						       {value:json[i].attendanceNum, name:json[i].attendanceNum+'人'},//出勤
						       {value:json[i].absenceNum, name:json[i].absenceNum+'人'},//缺勤
						       {value:json[i].leaveNum, name:json[i].leaveNum+'人'}//请假
						       ]
    					});
    				} 
    				
    			},
    			error: function(data){
    				Alert.globalWarning({
    					words: '网络不佳，请稍后再试'
    				});
    			}
    		});
    	}else{//非最近一次
    		$('.chart-content div').remove();
    		$.ajax({
                type: 'POST',
                url: ajaxUrl,
                data: ajaxData,
                success: function(data){
                  var json = eval(data.data);
//                  console.log('id:'+classId+
//                		  '-班级名字:'+classNameArr+
//                		  '-缺勤:'+dataQQinArr+
//                		  '-出勤:'+dataCQArr+
//                		  '-请假:'+dataQJArr+
//                		  '-时间:'+xAxisArr[0]
//                		  );
                	  $('.chart-content').append(
	        			  '<div class="chart-box">'+
	        		        '<div class="chart-box chart-here" id="'+ classId[i] +'">'+
	        		        '</div>'+
	        		      '</div>'
	        		      );
		            	  Chart.line({
		            	      element: classId[i],
		            	      title: classNameArr[i],
		            	      xAxis: xAxisArr[i],
		            	      data: [
		            	        {
		            	          name: '出勤（含迟到）',
		            	          type: 'line',
		            	          data: dataCQArr[i]
		            	        },
		            	        {
		            	          name: '缺勤',
		            	          type: 'line',
		            	          data: dataQQinArr[i]
		            	        },
		            	        {
		            	          name: '请假',
		            	          type: 'line',
		            	          data: dataQJArr[i]
		            	        }
		            	      ]
		            	    });
                  		
                },
                error: function(data){
//                    Alert.globalWarning({
//                  	  words: '网络不佳，请稍后再试'
//                    });
                	var json = eval(dataResource.data);
                	console.log(json);
                  }
              });
    	}
    }else{
    	
    }
  });


  // 加载页面时调用饼状图
//   $('.chart-content div').remove();
//   $.ajax({
//     type: 'POST',
//     url: ajaxUrl,
//     data: "",
//     success: function(data){
//       var json = eval(data.data);
//       for(var i=0; i<json.length; i++){
//     	  var rdId = Math.random();
//     	  $('.chart-content').append(
//     			  '<div class="chart-box">'+
//     		        '<div class="chart-box chart-here" id="'+ rdId +'">'+
//     		        '</div>'+
//     		      '</div>'
//     		      );
//     	  Chart.pie({
//               element: rdId,
//               title: json[i].className,
//               data: [
//                 {value:json[i].attendanceNum, name:json[i].attendanceNum+'人'},//出勤
//                 {value:json[i].absenceNum, name:json[i].absenceNum+'人'},//缺勤
//                 {value:json[i].leaveNum, name:json[i].leaveNum+'人'}//请假
//               ]
//             });
// //       alert(json[i].absenceNum+"--------- " + json[i].absencePercent); 
//       } 

//     },
//     error: function(data){
//         Alert.globalWarning({
//       	  words: '网络不佳，请稍后再试'
//         })
//       }
//   });

	//切换维度
	// 有active显示学期
	var tab = $('#exchange');
	console.log(tab)	
	$('body').on('click', '#exchange', function(){
		if(tab.hasClass('active')){
			//切换到学年
			tab.removeClass('active').text('学期统计');
			$('.xueNian').css({'display':'block'})
			$('.xueQi').css({'display':'none'})
		}else{
			//切换到学期
			tab.addClass('active').text('学年统计');
			$('.xueNian').css({'display':'none'})
			$('.xueQi').css({'display':'block'})
		}
	})
});