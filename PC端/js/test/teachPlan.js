$(function () {

	Alert.globalWarning({
        callBack:function(){
            console.log(1)
        }
    })
	
	//分页
	var total = $(".pageCount").val();
	if(total != ""){
		$(".tcd-page-code").createPage({
	        pageCount:$("#pageCount").val(),
	        current: $("#index").val(),
	        
	        backFn: function (p) {
	        	var telPattern = /^\+?[1-9][0-9]*$/;
	      		var telFlag = telPattern.test(p);
	      		if(!telFlag){
	      			p = 1;
	      		}
	            // p为当前页码;
	            // pageCount:页码总数；
	        	toPage(p);
	        }
	    });
	}
	
//增加教学计划表单弹窗
  $(".addTeachPlan").click(function(){
	  $.ajax({ 
		    type: "POST", //类型  
		    url: "newTeachPlanInfo.do", //请求访问的servlet
		    data:{classType:$("#classType").val()},
		    traditional: true,
		    dataType: "html",  
		    success: function(returnedData){
		    	//alert(returnedData)//成功返回的回调函数  
		        $("#tanchu").html(returnedData);
		        $(".close-btn").click(function () {
		            Alert.removeDialog("formType");
		            $(".pika-single").remove();
		          });

		        
		          //调整弹窗的定位位置
		          setAlertPosition();
		          //下拉框重构
		          selectNew();
		    }, 
		});
  	});
  
});

//判断是否选择下拉框
//function change(){
//	var yearVal = $("#yearVal").attr("data-val");
//	var grade = $("#grade").attr('data-value');
//	var term = $("#term").attr('data-value');
//	var classId = $("#classId").attr('data-value');
//	var classType = $("#classType").val();
//	
//	//判断是新增兴趣计划还是行政计划
//	if(classType ==1){//行政计划
//		
//		if(typeof(yearVal) != "undefined" && typeof(grade) != "undefined" && typeof(term) != "undefined"){
//			
//		} else {
//			
//		}
//	}else{//兴趣计划
//		if(typeof(yearVal) != "undefined" && typeof(grade) != "undefined" && typeof(term) != "undefined" && typeof(classId) != "undefined"){
//			
//		} else {
//			
//		}
//		
//	}
//}

//分页
function toPage(p){
	if(!isNum(p)){
		Alert.dialogBox("alert-default","请输入正确的页码!");
	}else{
		classType= $("#classType").val();
		window.location.href="/plan/teachPlanList.do?classType="+classType+"&p="+p;
	}
}
 //判断是否为整数
function isNum(num){
    var reNum =/^[0-9]+$/;
    return (reNum.test(num));
 }

//判断选择的学年中是否存在对应的班级
function checkYearClass(obj){
	var yearVal = $(obj).attr("data-val");
	var beginYearTime = $("#beginYearTime").val();
	var classType = $("#classType").val();
	$.ajax({   
		url : "checkYearClass.do",
		traditional: true,
		data : {
			beginYearTime : beginYearTime,
			yearVal : yearVal,
			classType : classType
			},
		type : 'post',
		success : function(result) {
			var arr = result.split("|");
			
			if(arr[0] ==1){
				
				
				Alert.dialogBox("alert-default",arr[1]);

				$("#addBtn").removeAttr("onclick");
				$("#addBtn").removeClass("themeBtn");
			}else{
				
				$("#timeTable").html('');
				
				var gradeHtml = [];
				$.each($.parseJSON(result), function(){
					gradeHtml.push('<li><a href="javascript:;" data-val='+this.num+' onclick="getClass(this)" >'+this.gradeName+'</a></li>');
					
				});
				
				$("#gradeName>ul").html(gradeHtml.join(''));
				$("#grade").val("");
				
				if(classType == 1){
					
					var itemsHtml = [];
					//拼接
					itemsHtml.push('<li><a href="javascript:;" data-val='+1+' onclick="showTimeTable(this)" >'+"上学期"+'</a></li>');
					itemsHtml.push('<li><a href="javascript:;" data-val='+2+' onclick="showTimeTable(this)" >'+"下学期"+'</a></li>');
					
					$("#termName>ul").html(itemsHtml.join(''));
					$("#term").val("");
					
					$("#addBtn").attr("onclick","addTeachPlan(this);");
					$("#addBtn").addClass("themeBtn");
					return
				}else{

					$("#addBtn").attr("onclick","addTeachPlan(this);");
					$("#addBtn").addClass("themeBtn");
					return
					
				}
				
			}
			
//			change();
		},
		error : function(result) {
			Alert.dialogBox("alert-default","无法根据学年判断班级是否存在");
		}
	});
}

function showTimeTable(obj){
	var term = $(obj).attr("data-val");
	var yearVal = $("#yearVal").attr('data-value');
	var beginYearTime = $("#beginYearTime").val();
	var classId = $("#classId").attr('data-value');
	var classType = $("#classType").val();
	$.ajax({
		
		type : 'post',
		traditional: true,
		url : "showTimeTable.do",
		data : {
			term : term,
			yearVal : yearVal,
			beginYearTime : beginYearTime,
			classId : classId,
			classType : classType
		},
		
		success : function(result) {
			$("#timeTable").html(result);
//			Alert.loading("hide");
		},
		error : function(result) {
			Alert.dialogBox("alert-default","未查询到计划时间!");
//			Alert.loading("hide");
		},
	});
}

//根据所选学年,年级,获取所对应的兴趣班
function getClass(obj){
	var grade = $(obj).attr("data-val");
	var yearVal = $("#yearVal").attr('data-value');
	var beginYearTime = $("#beginYearTime").val();
	var classType = $("#classType").val();
	
	$.ajax({   
		url : "getClass.do",
		data : {
			grade : grade,
			yearVal : yearVal,
			beginYearTime : beginYearTime,
			classType : classType
			},
		type : 'post',
		success : function(result) {
			var arr = result.split("|");
			
			if(arr[0]==1){
				Alert.globalWarning({
					times : 1000,
					type : "error",
					words : arr[1],
					callBack : function(){
						$("#addBtn").removeAttr("onclick");
						$("#addBtn").removeClass("themeBtn");
						return;
						}
				});
			}else if(arr[0]==2){
				
			}else{
				
				var itemsHtml = [];
				
				$.each($.parseJSON(result), function(){
					
					itemsHtml.push('<li><a href="javascript:;" data-val='+this.classId+' onclick="checkYearTime(this)" >'+this.className+'</a></li>');
				});
				
				$("#className>ul").html(itemsHtml.join(''));
				$("#classId").val("");
			}

			
		},
		error : function(result) {
			Alert.dialogBox("alert-default","获取班级失败");
		}
	});
	
}

//判断选择的班级是否存在学年时间
function checkYearTime(obj){
	var classId = $(obj).attr("data-val");
	
	$.ajax({   
		url : "checkYearTime.do",
		data : {
			classId : classId
			},
		type : 'post',
		success : function(result) {
			var arr = result.split("|");
			
			if(arr[0] ==1){
				
				Alert.dialogBox("alert-default",arr[1]);
				$("#addBtn").removeAttr("onclick");
				$("#addBtn").removeClass("themeBtn");
			}else{
				
				var itemsHtml = [];
				//拼接
				itemsHtml.push('<li><a href="javascript:;" data-val='+1+' onclick="showTimeTable(this)" >'+"上学期"+'</a></li>');
				itemsHtml.push('<li><a href="javascript:;" data-val='+2+' onclick="showTimeTable(this)" >'+"下学期"+'</a></li>');
				
				$("#termName>ul").html(itemsHtml.join(''));
				$("#term").val("");
				
				$("#addBtn").attr("onclick","addTeachPlan(this);");
				$("#addBtn").addClass("themeBtn");
				return
			}
		},
		error : function(result) {
			Alert.dialogBox("alert-default","检查班级时间失败!");
		}
	});
	
}



//新增教学计划
function addTeachPlan(obj){
	var beginYearTime = $("#beginYearTime").val();
	var yearVal = $("#yearVal").attr('data-value');
	
	var grade = $("#grade").attr('data-value');
	var term = $("#term").attr('data-value');
	var classId = $("#classId").attr('data-value');
	//获取的时间为字符串格式,需要后台转换
	var termBeginStr = $("#termBeginDate").val();
	var termEndStr = $("#termEndDate").val();
	var classType = $("#classType").val();
	
	//判断学年是否选择
	if(yearVal == undefined){
		Alert.dialogBox("alert-default","请选择学年");
		return;
	}
	if(classType ==2){
		if(classId==undefined ||classId==""){
			Alert.dialogBox("alert-default","请选择班级");
			return;
		}
	}
	
	//对输入的数据进行判断
	if(grade==undefined||grade==null||grade==""){
		Alert.dialogBox("alert-default","请选择年级");
		return;
	}
	if(term==undefined||term==null||term==""){
		Alert.dialogBox("alert-default","请选择学期");
		return;
	}
	
	if(termBeginStr==undefined ||termEndStr==undefined){
		Alert.dialogBox("alert-default","学期时间未显示,请重新选择");
		return;
	}
	
	Alert.loading("show");
	$.ajax({   
		url : "addTeachPlanInfo.do",
		data : {
			beginYearTime : beginYearTime,
			yearVal : yearVal,
			grade : grade,
			term : term,
			classId : classId,
			classType : classType,
			termBeginStr : termBeginStr,
			termEndStr : termEndStr
			},
		type : 'post',
		success : function(result) {
			var arr = result.split("|");
			if (arr[0]==1) {
				Alert.loading("hide");
				Alert.globalWarning({
					times : 1000,
					type : "error",
					words : arr[1],
					callBack : function(){
						return;
						}
				});
			}else if(arr[0]==0){
				Alert.loading("hide");
				Alert.globalWarning({
					times : 1000,
					type : "error",
					words : arr[1],
					callBack : function(){
						return;
						}
				});
			}else if(arr[0]==3){
				Alert.loading("hide");
				Alert.globalWarning({
					times : 1000,
					type : "error",
					words : arr[1],
					callBack : function(){
						return;
						}
				});
			}else{
				Alert.loading("hide");
				Alert.removeDialog("formType");
				Alert.globalWarning({
					times : 500,
					type : "success",
					words : "教学计划创建成功",
					callBack : function(){
						
						window.location.href = "totalClassTime.do?teachingPlanId="+arr[1]+"&grade="+grade;
						}
				});
			}
		},
		error : function(result) {
			Alert.loading("hide");
			Alert.removeDialog("formType");
			Alert.dialogBox("alert-default","教学计划创建异常");
		}
	});
}

//修改跳转
function modifyTeachPlan(obj){
	var teachingPlanId = $(obj).attr("teachingPlanId");
	var grade = $(obj).attr("grade");
	var stag = $(obj).attr("stag");
	if(stag ==1){
		Alert.dialogBox("alert-talk","修改会清空与该计划有关的后续所有计划,是否确定修改",{
			confirmFn:function(){
				Alert.loading("show");
				$.post("modifyTeachPlan.do", {
					teachingPlanId : teachingPlanId,
					stag : stag
				}, function(result) {
					var arr = result.split("|");
					
					if(arr[0]==1){
						
						Alert.loading("hide");
						window.location.href = "totalClassTime.do?teachingPlanId="+teachingPlanId+"&grade="+grade;
					}else {
						Alert.loading("hide");
						Alert.globalWarning({
							times : 1250,
							type : "error",
							words : arr[1],
							callBack : function(){
								return;
							}
					    });
					}
				});
			}
		});
		
	}else{
		window.location.href = "totalClassTime.do?teachingPlanId="+teachingPlanId+"&grade="+grade;
	}
		
	
}


//删除指定的教学计划
function deleteTeachPlan(obj){
	var teachingPlanId = $(obj).attr("teachingPlanId");
	var str = $("#publish"+teachingPlanId).html();
	var text = "";
	var flag = 0;
	if("已发布"== str){
		flag = 1;
		text = "删除后会清空此教学计划对应的所有数据，是否继续?";
	}else{
		text = "确认要删除此教学计划？";
	}
	Alert.dialogBox("alert-talk",text,{
		confirmFn:function(){
			Alert.loading("show");
			$.post("deleteTeachPlan.do", {
				teachingPlanId : teachingPlanId,
				flag : flag 
			}, function(result) {
				Alert.loading("hide");
				Alert.removeDialog("alertType");
				if (result == "ok") {
					Alert.globalWarning({
						times : 1300,
						type : "success",
						words : "删除成功！",
						callBack : function(){
							window.location.reload();
						}
					});
				} else {
					Alert.loading("hide");
					Alert.globalWarning({
						times : 1250,
						type : "error",
						words : "删除出错了!",
						callBack : function(){
							return;
						}
				    });
				}
			});
		}
	});
}


//发布状态
function publishNews(obj){
	var teachingPlanId = $(obj).attr("teachingPlanId");

	var str = $("#publish"+teachingPlanId).html();
	if(str == "已发布"){
		Alert.globalWarning({
			times : 1250,
			type : "error",
			words : "教学计划已发布，不能再次发布!",
			callBack : function(){
				return;
			}
	   });
	}else{
		$.ajax({
			type : 'post',
			traditional: true,
			url : "checkTeachPlan.do",
			data : {
				teachingPlanId : teachingPlanId
			},
			success : function(result) {
				if(result == "ok"){
					Alert.dialogBox("alert-talk","是否发布该教学计划?",{
						confirmFn:function(){
							Alert.loading("show");
							$.post("publishTeachPlan.do", {
								teachingPlanId : teachingPlanId
							}, function(result) {
								Alert.loading("hide");
								Alert.removeDialog("alertType");
								if (result = "ok") {
									Alert.globalWarning({
										times : 1300,
										type : "success",
										words : "恭喜你，发布成功！",
										callBack : function(){
											window.location.reload();
										}
									});
								}
							});
						}
					});
				}else if(result == "no"){
					
					Alert.globalWarning({
						times : 1300,
						type : "error",
						words : "课时未分配完，请选择分配完后再发布!",
						callBack : function(){
							return;
						}
				    });
				}
			},
			error : function() {
				Alert.loading("hide");
				Alert.globalWarning({
					times : 1250,
					type : "error",
					words : "发布教学计划失败,error!",
					callBack : function(){
						return;
					}
			    });
			}
		});
	}
}


//导出指定的教学计划
function execlNews(obj){
	
	var teachingPlanId = $(obj).attr("teachingPlanId");
	var str = $("#publish"+teachingPlanId).html();
	if(str == "未发布"){
		Alert.globalWarning({
			times : 1250,
			type : "error",
			words : "教学计划已未发布，请先发布!",
			callBack : function(){
				return;
			}
	   });
	}else{
		Alert.dialogBox("alert-talk","确认导出此教学计划吗？",{
			confirmFn:function(){
				Alert.removeDialog("alertType");
				window.location.href = "createExcel.do?teachingPlanId="+teachingPlanId;
			}
		});
	}
	
}
//导出所有教学计划信息
function execlAllNews($this){
	
	var s = $("input[name='selectItem']:checked");
	var arr = new Array();
	s.each(function(i,o){
		arr[i] = o.value;
	});
	if(arr.length>0){
		console.debug(arr);
		Alert.dialogBox("alert-talk","确认导出此单元计划吗？",{
			confirmFn:function(){
				Alert.removeDialog("alertType");
				window.location.href = "createExcel.do?arr="+arr;
			}
		});
	}else{
		Alert.globalWarning({
			times : 1250,
			type : "error",
			words : "请选择需要导出的教学计划!",
			callBack : function(){
				return;
			}
	   });
	}
	
}

