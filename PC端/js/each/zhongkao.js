$(function(){
  //添加的弹出导出弹窗代码
  //下拉框重构
  selectNew();
   //多选下拉框重构
   new ConstractMultiSelect($(".multi-select.classGrade"),{
  }); 
  //多选操作
  $('body').on('click', '.alertmult .btn', function(){
    if($(this).hasClass('current')){
      $(this).removeClass('current');
    }else{
      $(this).addClass('current');
    }
  });
  $('body').on('click', '.close-btn', function(){

    Alert.removeDialog("formType");
    Alert.removeDialog("alertType");
  })



  //参数：tableId,需要排序的表格id；colIndex:排序根据的序号从0开始
  sortTable('sortTest',6);

  var formBox=$('<div></div>')
  formBox.load('alertWindow.html');
  //点击椭圆菜单 单项多次
  $('.zhongkao .class-select .year-link-group a').click(function(){
    if($(this).parent().hasClass('multi')){//多选
      if($(this).hasClass('current')){//去除选中
        $(this).removeClass('current');
      }else{//添加选中
        $(this).addClass('current');
      }
    }else{//不多选
      $(this).addClass('current').siblings().removeClass('current');
    }
  });
// 年级班级控制是否显示 全校
$('.nianji').click(function(){
  $('.all-school').css({'display':'block'});
});
$('.banji').click(function(){
  $('.all-school').css({'display':'none'});
});
  //点击图-表切换图标
  $('.zk-table .title .menu').click(function(){
    $(this).addClass('current').siblings().removeClass('current');
  });
  //点击导入数据
  $('.inport-tizhi').click(function(){
    $('#tanchu').append(formBox);
    selectNew();
    setAlertPosition();
  });
  // 导入文件路径回显
  $("body").on("change",".toolTemplate",function(){
    var importName=$(this).val();
    $(this).closest("label").parent().prev().children().find(">input").val(importName);
  });
  //移除导入弹窗
  $('body').on('click','.close-btn',function(){
    Alert.removeDialog("formType");
  })
})

// 封装的echarts插件
var Chart = {};
// 饼状图                                                                                                                           
Chart.pie = function (options) {
  var defaults = {
    element: '',
    title: '',
    data: '',
    legendArr:'',
    clickPie:false,
    callBack:null
  };
  var legnedTxt = [];
  var opts = $.extend({}, defaults, options);
  // 表格数据
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById(opts.element));
  // 指定图表的配置项和数据
  var option = {
    title: {
      text: opts.title,
      textStyle: {
        fontSize: 16,
        fontWeight: 'normal'
      },
      padding: [10, 0],
      left: '20'
    },
    color: ['#8BC34A', '#EAED42', '#ED8A42'],
    series: [{
      type: 'pie',
      radius: '65',
      center: ['50%', '150'],
      startAngle: [270],
      data: opts.data,
      label: {
          normal: {
            formatter: '{b}\n{c} ({d}%)',
            textStyle: {
                  fontSize: 12,
                  fontWeight: 'normal'
                }
          }
      }
    }]
  };
 
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  //点击饼状图
  if(opts.callBack){
    myChart.on('click', function (params) {
      var res = {'score':params.data.score,'status':params.data.status}
      opts.callBack(res);
    });
  }
};
//柱状图
Chart.bar = function (options) {
  var defaults = {
    element: '',
    title: '',
    data: '',
    xAxis:''
  };
  var legnedTxt = [];
  var opts = $.extend({}, defaults, options);
  // 表格数据
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById(opts.element));
  // 指定图表的配置项和数据
  var option = {
    title: {
      text: opts.title,
      textStyle: {
        fontSize: 16,
        fontWeight: 'normal'
      },
      padding: [20, 0],
      left: '60'
    },
    grid:{
      containLabel: true,
      top:'75px',
      left:'60px',
      right:'60px',
      bottom:'30px'
    },
    xAxis: {
      type: 'category',
      data: opts.xAxis,
      axisLine:{
        show:false
      },
      axisTick:{
        show:false
      }
    },
    yAxis: {
      type: 'value',
      axisLine:{
        show:false
      },
      axisTick:{
        show:false
      },
      splitLine:{
        show:false
      }
    },
    series: [{
      itemStyle:{
        normal:{
          color:'#35bdfa',
        }
      },
      barWidth:'26px',
      type: 'bar',
      data: opts.data,
    },
    {
      itemStyle:{
        normal:{
          color:'#ffc600',
        }
      },
      type: 'line',
      data: opts.data,
    }]
  };
 
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
};
// 饼状图调用
Chart.pie({
  element: 'chartCjtj',
  data: [
    {value:43, name:'50分'},
    {value:23, name:'48~45分'},
    {value:25, name:'45以下'}
  ]
}); 
            
//参数：tableId,需要排序的表格id；colIndex:排序根据的序号从0开始
function sortTable(tableId,colIndex){
    /*
     * 思路：
     * 1，排序就需要数组。获取需要参与排序的行对象数组。
     * 2，对行数组中的每一个行的年龄单元格的数据进行比较，并完成行对象在数组中的位置置换。
     * 3，将排好序的数组重新添加回表格。
     */
    //获取表格对象
    var oTabNode = document.getElementById(tableId);
    var collTrNodes = oTabNode.rows;
    //定义一个临时容器，存储需要排序行对象。
    var trArr = [];
    
    //遍历原行集合，并将需要排序的行对象存储到临时容器中。
    //从第三行开始，排除表头
    for(var x=2; x<collTrNodes.length; x++){
        trArr[x-2] = collTrNodes[x];
    }
    
    //对临时容器排个序。
    mySort(trArr,colIndex);
    //将排完序的行对象添加回表格。
    for (var x = 0; x < trArr.length; x++) {
      if(x < trArr.length-2){
        //重新排序，除了最后两项合计
        trArr[x].cells[0].innerHTML = x + 1;
      }
      trArr[x].parentNode.appendChild(trArr[x]);
    }
}
//排序函数
function mySort(arr,colIndex){
    for(var x=0; x<arr.length-1; x++){
        for(var y=x+1; y<arr.length; y++){
          if(y >= arr.length-2){
            // 排除最后两行合计
          }else{
            if(parseInt(arr[x].cells[colIndex].innerHTML)<parseInt(arr[y].cells[colIndex].innerHTML)){
                var temp = arr[x];
                arr[x] = arr[y];
                arr[y] = temp;
            }
          }
        }
    }
}


//点击模板下载 弹出选择年级弹窗
$('body').on('click', '.zk-download', function() {
  var tanChaung = '<div class="alert-box formType animated fadeIn">\
  <div class="alert-div form-box back_white animated fadeInDownBig" style="margin-top: -91.5px;">\
      <div class="form-head t_r">\
          <a class="close-btn f18" href="javascript:;">×</a>\
      </div>\
      <h3 class="form-title t_c">中考成绩名单导出</h3>\
      <div class="form-content">\
          <div class="form-inline clearfix mt20">\
              <label class="form-control classNum select" id="classList">\
                  <input type="text" placeholder="选择班级" readonly="">\
                  <span class="caret icon-hehe"></span>\
                  <ul class="select-list" style="display: none;">\
                      <li>\
                          <a href="javascript:;" data-val="3116">初三(1)班</a>\
                      </li>\
                      <li>\
                          <a href="javascript:;" data-val="3117">初三(2)班</a>\
                      </li>\
                      <li>\
                          <a href="javascript:;" data-val="3117">初三(2)班</a>\
                      </li>\
                      <li>\
                          <a href="javascript:;" data-val="3117">初三(2)班</a>\
                      </li>\
                      <li>\
                          <a href="javascript:;" data-val="3117">初三(2)班</a>\
                      </li>\
                  </ul>\
              </label>\
          </div>\
      </div>\
      <div class="form-content">\
            <div class="form-line submitBtn mt10 clearfix">\
                <a href="javascript:;" class="blockBtn themeBtn form-confirm" year="2017-2018">确定</a>\
            </div>\
        </div>\
  </div>'
   $('body').append(tanChaung);
  //下拉框重构
  new selectNew();
})




