$('body').on('click','.kaoqin-new .gw-content .title-r-btn',function(){
	if($(this).hasClass('active')){
		$(this).removeClass('active').text('查看年级统计')
	}else{
		$(this).addClass('active').text('查看班级统计')
	}
})
$('body').on('click','.daochu', function(){
	alert('导出')
})
//填充柱状图数据，每个图的id不一样
Chart.bar({
	element:'a',
	title:'一年级（1）班',
	xAxis:['三月考勤','四月考勤','五月考勤','六月考勤'],
	data: [
					{
							name:'出勤（含迟到）',
							type:'bar',
							data:[80, 80, 70, 62],
							barWidth:'20px',
					},
					{
							name:'缺勤',
							type:'bar',
							data:[74, 55, 46, 42],
							barWidth:'20px',
					},
					{
							name:'请假',
							type:'bar',
							data:[56, 21, 35, 84],
							barWidth:'20px',
					}
			]
})
Chart.bar({
	element:'b',
	title:'一年级（1）班',
	xAxis:['三月考勤','四月考勤','五月考勤','六月考勤'],
	data: [
					{
							name:'出勤（含迟到）',
							type:'bar',
							data:[80, 80, 70, 62],
							barWidth:'20px',
					},
					{
							name:'缺勤',
							type:'bar',
							data:[74, 55, 46, 42],
							barWidth:'20px',
					},
					{
							name:'请假',
							type:'bar',
							data:[56, 21, 35, 84],
							barWidth:'20px',
					}
			]
})