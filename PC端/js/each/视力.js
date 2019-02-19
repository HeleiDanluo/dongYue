function clickMAkeBmiChart(options) {
  var defaults = {};
  var opts = $.extend({}, defaults, options);
  var xAxisData = ['总人数', '正常人数', '轻度近视', '中度近视', '重度近视'];
  var chartWrapper = $('<div class="each-chart-box back_white mt20">' +
    '<h3 class="title">' + opts.txt + '图表</h3>' +
    '<div id="single-count-img_' + opts.id + '" style="height:400px">' +
    '</div></div>');
  var bottomData = [];
  for (var i = 0; i < opts.data2.length; i++) {
    bottomData.push(0 - opts.data2[i])
  };
  $(".single-count-chart").append(chartWrapper);
  var myChart = echarts.init(chartWrapper.find(">#single-count-img_" + opts.id)[0]);
  var option = {
    backgroundColor: '#fff',
    legend: {
      data: ['男生', '女生'],
      align: 'left',
      left: 10,
      textStyle: {
        color: '#333',
        fontWeight: 700,
        fontFamily: 'SimHei',
        fontSize: 14,
      },
    },
    tooltip: {
      formatter: function (data) {
        if (data.value < 0) return data.name + '<br />' + data.seriesName + '人数' + '：' + (-data.value);
        return data.name + '<br />' + data.seriesName + '人数' + '：' + data.value;
      },
    },
    xAxis: {
      data: xAxisData,
      name: '图形类别',
      silent: false,
      axisLine: {
        onZero: true
      },
      splitLine: {
        show: false
      },
      splitArea: {
        show: false
      },
      axisLabel: {
        show: true,
        interval: 'auto',
        margin: 15,
        textStyle: {
          fontWeight: 700,
          fontFamily: 'SimHei',
          fontSize: 16,
        }
      },
    },
    yAxis: {
      // show:false,
      inverse: false,
      splitArea: {
        show: false
      },
      axisLabel: {
        formatter: function (value, index) {
          // 格式化成月/日，只在第一个刻度显示年份
          return value > 0 ? value : (-value);
        }
      }
    },
    grid: {
      left: 100
    },
    series: [{
        name: '男生',
        type: 'bar',
        stack: 'one',
        data: opts.data1,
        barMaxWidth: 80,
        label: {
          normal: {
            show: true,
            position: [25, -20],
            textStyle: {
              fontSize: 12,
              color: '#333',
            },
            formatter: function (data) {
              if (data.value == 0) {
                return "";
              }
              return data.seriesName + data.value;
            }
          }
        },
        itemStyle: {
          normal: {
            color: '#45C2FA',
            barBorderRadius: [10, 10, 0, 0],
          },
        }
      },
      {
        name: '女生',
        type: 'bar',
        stack: 'one',
        data: bottomData,
        barMaxWidth: 80,
        label: {
          normal: {
            show: true,
            position: [25, '100%'],
            textStyle: {
              fontSize: 12,
              color: '#333'
            },
            formatter: function (data) {
              if (data.value == 0) {
                return "";
              }
              return data.seriesName + (-data.value);
            }
          }
        },
        itemStyle: {
          normal: {
            color: '#FD7AA4',
            barBorderRadius: [0, 0, 10, 10],
          },
        }
      }
    ]
  };
  myChart.setOption(option);
  options.callBack(myChart);
}

$(function () {
  //假数据

  var data1 = [45, 10, 15, 9, 11];
  var data2 = [28, 8, 5, 8, 7];
  //  表格
  var html = `
  <div class="table-box" style="padding:20px">
    <a href="javascript:;" class="btn themeBtn exportExcel">导出到文件</a>
    <br>
    <br>
    <table class="data-table">
      <thead>
      <tr>
          <td>学籍号</td>
          <td>班级</td>
          <td>姓名</td>
          <td>性别</td>
          <td>视力</td>
          <td>等级</td>
      </tr>
      </thead>
      <tbody>
          <tr>
              <td>L111**********0216</td>
              <td>一年级(1)班</td>
              <td><a href="javascript:void(0);" onclick="window.open('/teachingComment/studentIndex.do?studentEvalId=47132')" class="color-blue">薛广德</a></td>
              <td>男</td>
              <td>15.4</td>
              <td>正常</td>
          </tr>
          <tr>
              <td>L111**********02B2</td>
              <td>一年级(1)班</td>
              <td><a href="javascript:void(0);" onclick="window.open('/teachingComment/studentIndex.do?studentEvalId=47127')" class="color-blue">王泽涛</a></td>
              <td>男</td>
              <td>14.5</td>
              <td>正常</td>
          </tr>
        </tbody>
    </table>
  </div>`

  // 弹窗
  var tanChuang = `
  <div class="alert-box formType animated fadeIn">
    <div class="alert-div form-box back_white animated fadeInDownBig">
        <div class="form-head t_r"><a class="close-btn f18" href="javascript:;">×</a></div>
        <h3 class="form-title t_c">学生视力数据导出</h3>
        <div class="form-content">
            <div class="form-inline clearfix">
                <label class="form-control classYear select">
                    <input id="year" type="text" data-value="" placeholder="选择学年" readonly="">
                    <span class="caret icon-hehe"></span>
                    <ul class="select-list" style="display: none;">
                        <li><a href="javascript:;" data-val="2017-2018">2017-2018学年</a></li>
                        <li><a href="javascript:;" data-val="2018-2019">2018-2019学年</a></li>
                    </ul>
                </label>
            </div>
            <div class="form-inline clearfix mt20">
                <label class="form-control gradeNum select">
                    <input id="grade" type="text" data-value="" placeholder="选择年级" readonly="">
                    <span class="caret icon-hehe"></span>
                    <ul class="select-list" style="display: none;">
                        <li><a href="javascript:;" data-val="1">一年级</a></li>
                        <li><a href="javascript:;" data-val="2">二年级</a></li>
                        <li><a href="javascript:;" data-val="3">三年级</a></li>
                        <li><a href="javascript:;" data-val="4">四年级</a></li>
                        <li><a href="javascript:;" data-val="5">五年级</a></li>
                        <li><a href="javascript:;" data-val="6">六年级</a></li>
                    </ul>
                </label>
            </div>
            <div class="form-line submitBtn clearfix">
                <a href="javascript:;" class="blockBtn themeBtn form-confirm">确定</a>
            </div>
        </div>
    </div>
  </div>`
  var dataAll = {
    "txt": '视力',
    "id":9999,
    "data1":data1,
    "data2":data2,
    "callBack": function(myChart){
      myChart.on('click', function (params) {
        alert(params.name + "-" + params.seriesName)
        // Alert.loading("show");
        var sex = 0;
        if (params.seriesName == "男生") {
            sex = 1;
        }
        if (params.seriesName == "女生") {
            sex = 2;
        }
        Alert.middleWindow({
            data: html,
            callBack: function () {}
        })
      })
    }
  }
  clickMAkeBmiChart(dataAll);


  // 弹窗导出excel
  $('body').on('click', '.exportExcel', function () {
    // 使用outerHTML属性获取整个table元素的HTML代码（包括<table>标签），然后包装成一个完整的HTML文档，设置charset为urf-8以防止中文乱码
    //获取表格
    var tableHtml = $('.data-table');
    //不能显示class的样式，所以自己重新添加样式 主要为设置边框 格子大小
    $(tableHtml).css({
        'border': '1px solid #d5d5d2',
        'text-align': 'center',
        'border-collapse': 'collapse',
    });
    $(tableHtml).find('tr td').css({
        'text-align': 'center',
        'border': '1px solid #d5d5d2',
        'line-height': '30px',
        'padding': '0px 10px',
        'min-width': '100px'
    });

    var html = "<html><head><meta charset='utf-8' /></head><body>" + tableHtml[0].outerHTML + "</body></html>";
    // 实例化一个Blob对象，其构造函数的第一个参数是包含文件内容的数组，第二个参数是包含文件类型属性的对象
    var blob = new Blob([html], {type: "application/vnd.ms-excel"});
    var urlA = document.createElement('a');
    // 利用URL.createObjectURL()方法为a元素生成blob URL
    $('.table-btn-group').append(urlA);
    urlA.href = URL.createObjectURL(blob);
    // 设置文件名，目前只有Chrome和FireFox支持此属性
    urlA.download = "班级视力数据导出表.xls";
    urlA.click();
  });

  // 下拉框
  $(".dataExport").click(function () {
    $("#tanchu").html(tanChuang);
    //联动
    new ConstructSelect($(".classYear"), {});
    new ConstructSelect($(".gradeNum"), {});

    $(".close-btn").click(function () {
        Alert.removeDialog("formType");
    });
    //调整弹窗的定位位置
    setAlertPosition();
    $(".form-confirm").click(function () {
      alert('提交')
    });
  });
})