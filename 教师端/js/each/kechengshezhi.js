//体育课上课时长
$('.range-tyk').jRange({
    from: 0,
    to: 60,
    step: 1,
    scale: [0,15,30,45,60],
    format: '%s',
    showLabels: true,
    width:4000
});

//运动强度设计值
$('.range-ydqd').jRange({
    from: 0,
    to: 100,
    step: 1,
    scale: [0,25,50,75,100],
    format: '%s',
    showLabels: true,
    isRange : true,
    width:4000
});

//训练密度设计值
$('.range-xlmd').jRange({
    from: 0,
    to: 60,
    step: 1,
    scale: [0,25,50,75,100],
    format: '%s',
    showLabels: true,
    isRange : true,
    width:4000
});

//平均心率区间
$('.range-xlqj').jRange({
    from: 50,
    to: 200,
    step: 1,
    scale: [50,100,150,200],
    format: '%s',
    showLabels: true,
    isRange : true,
    width:4000
});

//提交 获取选取的值
$('body').on('click', '#submitkcsz', function(){
    var tykVal = $(".range-tyk").val();//体育课上课时长
    var ydqd = $(".range-ydqd").val();//运动强度设计值
    var xlmd = $(".range-xlmd").val();//训练密度设计值
    var xlqj = $(".range-xlqj").val();//平均心率区间
    alert(tykVal + '\n' + ydqd+ '\n' + xlmd+ '\n' + xlqj);
})