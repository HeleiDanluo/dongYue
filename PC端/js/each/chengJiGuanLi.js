$(function () {
  //查看成绩管理 加载表格数据
  if (typeof ($('#studentDataJSON').val()) != 'undefined') {
    var studentDataJSON = JSON.parse($('#studentDataJSON').val());
    for (var i = 0; i < studentDataJSON.length; i++) {
      var resTrArr = $('<tr></tr>');//一行数据 表格元素
      var sutGrade = studentDataJSON[i].grade;//学生年级
      var wuShiMi = ' ';//50米 分数
      var wuShiMiCJ = ' ';//50米 成绩
      var zuoWeiTiQianQu = ' ';//坐位体前屈 分数
      var zuoWeiTiQianQuCJ = ' ';//坐位体前屈 成绩
      var yiFenZHongTiaoSheng = ' ';//1分钟跳绳 分数
      var yiFenZHongTiaoShengCJ = ' ';//1分钟跳绳 成绩
      var YangWoQiZuo = ' ';//仰卧起坐 分数
      var YangWoQiZuoCJ = ' ';//仰卧起坐 成绩
      var wangFanPao = ' ';//50*80往返跑 分数
      var wangFanPaoCJ = ' ';//50*80往返跑 成绩
      var pingJunDeFenOneBZ = $('#specialProjectProportion').val() == 0 ? '' : $('#specialProjectProportion').val();//第一个平均分 标准
      var pingJunDeFenOne = '';//第一个平均分
      var pingJunDeFenTwo = '';//第二个平均分
      var pingJunDeFenTwoBZ = 0;//第二个平均分 标准
      var zongFen = '';//总分
      var specialName = '';//特色项目汇总
      var specialTitle = '';//特色项目汇总
      var specialScoreArr = '';//特色项目分数汇总
      var normalName = '';//非特色汇总
      var normalScoreArr = '';//非特色分数汇总
      resTrArr.append('<td class="stu-name">' + studentDataJSON[i].studentName + '</td>')//添加姓名	
      if (sutGrade == 1 || sutGrade == 2) {//一二年级没有 仰卧起坐 往返跑
        wuShiMi = typeof (studentDataJSON[i].evaluation) == 'undefined' ? '' : studentDataJSON[i].evaluation.mp50Score;//50米 分数
        wuShiMiCJ = typeof (studentDataJSON[i].evaluation) == 'undefined' ? '' : studentDataJSON[i].evaluation.mp50;//50米 成绩
        zuoWeiTiQianQu = typeof (studentDataJSON[i].evaluation) == 'undefined' ? '' : studentDataJSON[i].evaluation.zwtquScore;//坐位体前屈 分数
        zuoWeiTiQianQuCJ = typeof (studentDataJSON[i].evaluation) == 'undefined' ? '' : studentDataJSON[i].evaluation.zwtqu;//坐位体前屈 成绩
        yiFenZHongTiaoSheng = typeof (studentDataJSON[i].evaluation) == 'undefined' ? '' : studentDataJSON[i].evaluation.yfztsScore;//1分钟跳绳 分数
        yiFenZHongTiaoShengCJ = typeof (studentDataJSON[i].evaluation) == 'undefined' ? '' : studentDataJSON[i].evaluation.yfzts;//1分钟跳绳 成绩
        $(".ywqz").remove();
        $(".wscbs").remove();
        stuScoresTwo(wuShiMiCJ, wuShiMi);//50米
        stuScoresTwo(zuoWeiTiQianQuCJ, zuoWeiTiQianQu);//坐位体前屈
        stuScoresTwo(yiFenZHongTiaoShengCJ, yiFenZHongTiaoSheng);//一分钟跳绳
      } else if (sutGrade == 3 || sutGrade == 4) {//三四年级没有 往返跑
        wuShiMi = typeof (studentDataJSON[i].evaluation) == 'undefined' ? '' : studentDataJSON[i].evaluation.mp50Score;//50米 分数
        wuShiMiCJ = typeof (studentDataJSON[i].evaluation) == 'undefined' ? '' : studentDataJSON[i].evaluation.mp50;//50米 成绩
        zuoWeiTiQianQu = typeof (studentDataJSON[i].evaluation) == 'undefined' ? '' : studentDataJSON[i].evaluation.zwtquScore;//坐位体前屈 分数
        zuoWeiTiQianQuCJ = typeof (studentDataJSON[i].evaluation) == 'undefined' ? '' : studentDataJSON[i].evaluation.zwtqu;//坐位体前屈 成绩
        yiFenZHongTiaoSheng = typeof (studentDataJSON[i].evaluation) == 'undefined' ? '' : studentDataJSON[i].evaluation.yfztsScore;//1分钟跳绳 分数
        yiFenZHongTiaoShengCJ = typeof (studentDataJSON[i].evaluation) == 'undefined' ? '' : studentDataJSON[i].evaluation.yfzts;//1分钟跳绳 成绩
        YangWoQiZuo = typeof (studentDataJSON[i].evaluation) == 'undefined' ? '' : studentDataJSON[i].evaluation.yfzywqzScore;//仰卧起坐 分数
        YangWoQiZuoCJ = typeof (studentDataJSON[i].evaluation) == 'undefined' ? '' : studentDataJSON[i].evaluation.yfzywqz;//仰卧起坐 成绩
        $(".wscbs").remove();
        stuScoresTwo(wuShiMiCJ, wuShiMi);//50米
        stuScoresTwo(zuoWeiTiQianQuCJ, zuoWeiTiQianQu);//坐位体前屈
        stuScoresTwo(yiFenZHongTiaoShengCJ, yiFenZHongTiaoSheng);//一分钟跳绳
        stuScoresTwo(YangWoQiZuoCJ, YangWoQiZuo);//仰卧起坐
      } else {
        wuShiMi = typeof (studentDataJSON[i].evaluation) == 'undefined' ? '' : studentDataJSON[i].evaluation.mp50Score;//50米 分数
        wuShiMiCJ = typeof (studentDataJSON[i].evaluation) == 'undefined' ? '' : studentDataJSON[i].evaluation.mp50;//50米 成绩
        zuoWeiTiQianQu = typeof (studentDataJSON[i].evaluation) == 'undefined' ? '' : studentDataJSON[i].evaluation.zwtquScore;//坐位体前屈 分数
        zuoWeiTiQianQuCJ = typeof (studentDataJSON[i].evaluation) == 'undefined' ? '' : studentDataJSON[i].evaluation.zwtqu;//坐位体前屈 成绩
        yiFenZHongTiaoSheng = typeof (studentDataJSON[i].evaluation) == 'undefined' ? '' : studentDataJSON[i].evaluation.yfztsScore;//1分钟跳绳 分数
        yiFenZHongTiaoShengCJ = typeof (studentDataJSON[i].evaluation) == 'undefined' ? '' : studentDataJSON[i].evaluation.yfzts;//1分钟跳绳 成绩
        YangWoQiZuo = typeof (studentDataJSON[i].evaluation) == 'undefined' ? '' : studentDataJSON[i].evaluation.yfzywqzScore;//仰卧起坐 分数
        YangWoQiZuoCJ = typeof (studentDataJSON[i].evaluation) == 'undefined' ? '' : studentDataJSON[i].evaluation.yfzywqz;//仰卧起坐 成绩
        wangFanPao = typeof (studentDataJSON[i].evaluation) == 'undefined' ? '' : studentDataJSON[i].evaluation.wfpScore;//50*80往返跑 分数
        wangFanPaoCJ = typeof (studentDataJSON[i].evaluation) == 'undefined' ? '' : studentDataJSON[i].evaluation.wfp;//50*80往返跑 成绩
        stuScoresTwo(wuShiMiCJ, wuShiMi);//50米
        stuScoresTwo(zuoWeiTiQianQuCJ, zuoWeiTiQianQu);//坐位体前屈
        stuScoresTwo(yiFenZHongTiaoShengCJ, yiFenZHongTiaoSheng);//一分钟跳绳
        stuScoresTwo(YangWoQiZuoCJ, YangWoQiZuo);//仰卧起坐
        stuScoresTwo(wangFanPaoCJ, wangFanPao);//50*80往返跑	
      }

      //挂载分数函数  srcChengJi srcDeFen为后台传回数据
      function stuScoresTwo(srcChengJi, srcDeFen) {
        resTrArr.append('<td>' + srcChengJi + '</td>')//添加成绩
        resTrArr.append('<td>' + srcDeFen + '</td>')//添加得分
      }
      function stuScoresOne(srcChengJi) {
        resTrArr.append('<td>' + srcChengJi + '</td>')//添加成绩
      }
      $('.data-put').append(resTrArr);


      // console.log(studentDataJSON);
      var stuScores = studentDataJSON[i].studentScores;//分数
      for (var k = 0; k < stuScores.length; k++) {
        var detaiID = stuScores[k].scoreConfigurationDetailId
        // 普通分数
        if (detaiID > 0) {
          var thisScoreType = stuScores[k].scoreConfigurationDetail.scoreType;
          if (thisScoreType == 2) {//特色项目
            //项目名字
            specialName += '<td colspan="2">' + stuScores[k].projectName + '</td>';
            specialTitle += '<td>成绩</td><td>得分</td>';
            // 得分&成绩
            specialScoreArr += '<td>' + StringToSymbol(stuScores[k].achievement) + '</td>';
            if (typeof (stuScores[k].achievement.score) == 'undefined') {
              specialScoreArr += '<td></td>';
            } else {
              specialScoreArr += '<td>' + stuScores[k].achievement.score + '</td>';
            }
            //平均分标准
            pingJunDeFenTwoBZ += stuScores[k].scoreConfigurationDetail.distributionScore;
          } else {//非特色项目
            normalName += '<td rowspan="2">' + stuScores[k].scoreConfigurationDetail.scoreTypeName + '</td>';
            normalScoreArr += '<td>' + stuScores[k].score + '</td>';
          }
          // 汇总分数
        } else if (detaiID == -1) {
          //scoreConfigurationDetailId -1 第一个平均分
          pingJunDeFenOne = '<td>' + (stuScores[k].score == 0 ? ' ' : stuScores[k].score) + '</td>';
          // console.log(pingJunDeFenOne);
        } else if (detaiID == -2) {
          //scoreConfigurationDetailId -2 第二个平均分
          pingJunDeFenTwo = '<td>' + (stuScores[k].score == 0 ? ' ' : stuScores[k].score) + '</td>';
        } else if (detaiID == -3) {
          //scoreConfigurationDetailId -3 总分
          zongFen = '<td>' + stuScores[k].score + '</td>';
        }
      }

      //顺序不能换
      //i==1表示标题只挂载一次
      i == 0 ? $('.chengji-title').append('<td rowspan="2">平均得分(' + pingJunDeFenOneBZ + ')</td>') : "";//平均分标题
      resTrArr.append(pingJunDeFenOne);

      i == 0 ? $('.chengji-title').append(specialName) : "";//特色项目名字
      i == 0 ? $('.csAndDf').append(specialTitle) : "";//特色项目得分成绩标题
      resTrArr.append(specialScoreArr);
      resTrArr.append(pingJunDeFenTwo);
      i == 0 ? $('.chengji-title').append('<td rowspan="2">平均得分(' + pingJunDeFenTwoBZ + ')</td>') : "";

      i == 0 ? $('.chengji-title').append(normalName) : "";//普通项目
      i == 0 ? $('.chengji-title').append('<td rowspan="2">期末成绩</td>') : "";
      resTrArr.append(normalScoreArr);
      //总分
      resTrArr.append(zongFen);

    }
  }
})


function slectSpecial(obj) {
  $("#childProject").html("");
  $('#childProjectId').val("");
  var projectId = obj;
  $.ajax({
    type: "POST", //类型  
    url: "/scoreConfiguration/getChildProject.do", //请求访问的servlet
    traditional: true,
    dataType: "html",
    data: {
      parentProjectId: projectId,
    },
    success: function (result) {
      $('#childProject').append(result);
    },
    error: function () {
      Alert.loading("hide");
      Alert.globalWarning({
        times: 1250,
        type: "error",
        words: "网络连接异常!",
        callBack: function () {
          return;
        }
      });
    }
  });
}
//发布成绩
function publishConfiguration(obj) {
  Alert.dialogBox("alert-talk", "确认要发布本条成绩配置吗？", {
    confirmFn: function () {
      Alert.removeDialog("alertType");
      var scoreConfigurationId = obj;
      $.ajax({
        type: "POST", //类型  
        url: "/scoreConfiguration/publishConfiguration.do", //请求访问的servlet
        traditional: true,
        data: {
          scoreConfigurationId: scoreConfigurationId,
        },
        success: function (result) {
          if (result.state) {
            Alert.globalWarning({
              times: 1250,
              type: "success",
              words: result.message,
              callBack: function () {
                window.location.reload();
                return;
              }
            });
          } else {
            Alert.globalWarning({
              times: 1250,
              type: "error",
              words: result.message,
              callBack: function () {
                return;
              }
            });
          }
        },
      });
    }
  })
}

//删除分数配置
function delConfiguration(obj) {
  Alert.dialogBox("alert-talk", "确认要删除本条成绩配置吗？", {
    confirmFn: function () {
      Alert.removeDialog("alertType");
      var scoreConfigurationId = obj;
      $.ajax({
        type: "POST", //类型  
        url: "/scoreConfiguration/delConfiguration.do", //请求访问的servlet
        traditional: true,
        data: {
          scoreConfigurationId: scoreConfigurationId,
        },
        dataType: "json",
        success: function (result) {
          if (result.state) {
            Alert.globalWarning({
              times: 1250,
              type: "success",
              words: result.message,
              callBack: function () {
                window.location.reload();
                return;
              }
            });
          } else {
            Alert.globalWarning({
              times: 1250,
              type: "error",
              words: result.message,
              callBack: function () {
                return;
              }
            });
          }
        },
      });
    }
  });
}

//成绩管理表格数据
//scoreType=5678过程性评价
//scoreType=2特色项目
if (typeof ($('#resData').attr('detaillist')) != 'undefined') {
  //过程性评价合并单元格数量
  var processEvaluationNum = $.parseJSON($('#resData').attr('processEvaluationNum'));
  //特色项目合并单元格数量
  var specialProjectNum = $.parseJSON($('#resData').attr('specialProjectNum'));
  //学生信息
  var studentJSON = $.parseJSON($('#resData').attr('studentjson'));
  //表头数据
  var detaillist = $.parseJSON($('#resData').attr('detaillist'));
  //过程性评价数组
  var guoChengTitle = [];
  //特色项目数组
  var teSe = [];
  //其他项目个数
  var other = 0;
  //分数格子
  var scoreNum = '';
  // 最大分数限制
  var maxScoreArrTeSe = [];
  var maxScoreArrGuoCheng = [];
  var maxScoreArrOther = [];
  // detailId统计
  var detailId_teSe = [];
  var detailId_guoCheng = [];
  var detailId_other = [];
  //是否有值
  var scoreNull = true;
  //==============返回给后台值========
  var detailId_totle = [];
  var stuId = '';
  var resArray = [];
  var scoreConfigurationDetailId = 0;
  //表头信息统计
  if (detaillist.length == 0) {
    //没有数据
  } else {
    for (var i = 0; i < detaillist.length; i++) {
      //特色项目
      if (detaillist[i].scoreType == 2) {
        teSe.push(detaillist[i].parentProjectName + '(' + detaillist[i].distributionScore + '分)');
        //detailId
        detailId_teSe.push(detaillist[i].scoreConfigurationDetailId);
        //最大分数
        maxScoreArrTeSe.push(detaillist[i].distributionScore);
      } else
        //过程性评价
        if (detaillist[i].scoreType == 5 || detaillist[i].scoreType == 6 || detaillist[i].scoreType == 7 || detaillist[i].scoreType == 8) {
          guoChengTitle.push(detaillist[i].scoreTypeName + '(' + detaillist[i].distributionScore + '分)');
          detailId_guoCheng.push(detaillist[i].scoreConfigurationDetailId);
          //最大分数
          maxScoreArrGuoCheng.push(detaillist[i].distributionScore);
          //其他
        } else if (detaillist[i].scoreType != 1) {
          $('#titleFirst').append('<td style="min-width: 140px" rowspan="2" scoreConfigurationDetailId="' + detaillist[i].scoreConfigurationDetailId + '">' + detaillist[i].scoreTypeName + '(' + detaillist[i].distributionScore + '分)</td>');
          detailId_other.push(detaillist[i].scoreConfigurationDetailId);
          other++;
          //最大分数
          maxScoreArrOther.push(detaillist[i].distributionScore);
        };
      if (detaillist[i].scoreType == 1) {
        scoreConfigurationDetailId = detaillist[i].scoreConfigurationDetailId;
      }
    }
  }
  //统计分数格子
  for (var i = 0; i < specialProjectNum; i++) {//特色项目，格式为字符串，不验证最值
    //加上scroetype就不会验证最值
    scoreNum += '<td><input style="min-width: 140px" max="' + maxScoreArrTeSe[i] + '" scoreType="2" class="change txt" type="text" readonly value=""></td>';
  }
  //统计分数格子
  for (var i = 0; i < processEvaluationNum; i++) {//过程性评价
    scoreNum += '<td><input style="min-width: 140px" max="' + maxScoreArrGuoCheng[i] + '" class="change txt" type="number" readonly value=""></td>';
  }
  //统计分数格子
  for (var i = 0; i < other; i++) {//其他的
    scoreNum += '<td><input style="min-width: 140px" max="' + maxScoreArrOther[i] + '" class="change txt" type="number" readonly value=""></td>';
  }

  // 学生人数姓名统计
  for (var i = 0; i < studentJSON.length; i++) {
    //统计格子个数，并挂载
    var stuTr = $(
      '<tr>' +
      '<td style="min-width: 90px"><input class="txt" type="text" readonly value="' + (i + 1) + '"></td>' +
      '<td style="min-width: 90px"><input class="txt" ' + "sudentId=" + "'" + studentJSON[i].studentId + "'" + ' type="text" readonly value="' + studentJSON[i].studentName + '"></td>' +
      scoreNum +
      '</tr>');
    $('#stuList').append(stuTr);
    //判断是否有回传的分数
    if (typeof (studentJSON[i].studentScores) != 'undefined') {
      scoreNull = false;
    };
  }
  //特色项目 挂载表格
  if (teSe.length == 0) {
    $('#special').css({ 'dsiplay': 'none' });
  } else {
    // 合并单元格
    $('#special').attr({ 'colspan': specialProjectNum });
    //添加特色单元格
    for (var i = 0; i < teSe.length; i++) {
      $('#titleSecond').append('<td style="min-width: 330px"  scoreConfigurationDetailId="' + detailId_teSe[i] + '">' + teSe[i] + '</td>')
    }
  }
  //过程性评价 挂载表格
  if (guoChengTitle.length == 0) {
    $('#process').css({ 'dsiplay': 'none' });
  } else {
    // 合并单元格
    $('#process').attr({ 'colspan': processEvaluationNum });
    //添加过程性评价单元格
    for (var i = 0; i < guoChengTitle.length; i++) {
      $('#titleSecond').append('<td style="min-width: 140px;" scoreConfigurationDetailId="' + detailId_guoCheng[i] + '">' + guoChengTitle[i] + '</td>')
    }
  }
  //detailId
  detailId_totle = detailId_teSe.concat(detailId_guoCheng, detailId_other);
}
//判断输入值 
$('body').on('input', '.change', function () {
  var ifNumber = $(this).attr('scoreType');
  if (ifNumber) {
    //为特殊项目，不用判断大小
  } else {
    //非特殊项目，需要判断大小
    var inputVal = parseInt($(this).val().trim());
    var maxVal = parseInt($(this).attr('max').trim());
    //判断特殊符号+ - e
    if (!/^[-]?[0-9]*\.?[0-9]+(eE?[0-9]+)?$/.test(inputVal)) {
      Alert.globalWarning({ type: 'error', words: '请输入正确的分数' });
      $(this).val('');
    }
    if (inputVal > maxVal) {
      Alert.globalWarning({ type: 'error', words: '分数不能大于 ' + maxVal + ' 分' });
      $(this).val('');
    };
    if (inputVal < 0) {
      Alert.globalWarning({ type: 'error', words: '分数不能小于 0 分' });
    }
  }
});
//保存成绩管理
$('body').on('click', '.saveStu', function () {
  Alert.loading("show");
  // 获取表格数据
  var tblTr = $('#stuList tr');
  for (var i = 0; i < tblTr.length; i++) {
    for (var j = 0; j < tblTr[i].cells.length; j++) {
      if (j == 1) {
        stuId = $(tblTr[i].cells[j]).find('input').attr('sudentid');
      }
      if (j > 1) {
        var tdVal = $(tblTr[i].cells[j]).find('input').val();
        tdVal = SymbolToString(tdVal);
        if (tdVal == '') {//表格数据有空值
          Alert.globalWarning({
            times: 1250,
            type: "success",
            words: '分数不能为空！',
            callBack: function () {
              return;
            }
          });
          return;
        }
        if (scoreNull == true) {//页面没有预填分数
          var resObj = {
            'studentid': stuId,
            'scoreconfigurationdetailid': detailId_totle[j - 2],//-2因为j未统计前两项
            'achievement': tdVal
          }
        } else {//页面有预填分数
          var resObj = {
            'studentid': stuId,
            'scoreconfigurationdetailid': detailId_totle[j - 2],
            'achievement': tdVal,
            'studentsScoreId': $(tblTr[i].cells[j]).find('input').attr('studentsScoreId')
          }
        }
        resArray.push(resObj);
      }
    }
  }
  // console.log(JSON.stringify(resArray));
  $.ajax({
    type: "POST", //类型  
    url: "/performanceManagement/inputScore.do", //请求访问的servlet
    traditional: true,
    data: {
      studentScoreJSON: JSON.stringify(resArray),
      basicDetailId: scoreConfigurationDetailId
    },
    dataType: "json",
    success: function (result) {
      if (result.state) {
        Alert.loading("hide");
        Alert.globalWarning({
          times: 1250,
          type: "success",
          words: result.message,
          callBack: function () {
            return;
          }
        });
        resArray = [];//清空数据，避免累积
        return;
      } else {
        Alert.globalWarning({
          times: 1250,
          type: "error",
          words: result.message,
          callBack: function () {
            return;
          }
        });
        return;
      }
    },
  });
});

//根据后台返回值自动填充成绩管理数据
if (scoreNull == false) {//有回传分数
  var tdArr = $('#stuList tr');
  var thisStuId = '';
  var tdIndex = '';
  //循环每个学生对象
  for (var i = 0; i < studentJSON.length; i++) {
    //循环学生的所有分数对象,含有分数  id等信息
    for (var j = 0; j < studentJSON[i].studentScores.length; j++) {
      // console.log(studentJSON[i].studentScores);
      // 循环表格每行
      for (var k = 0; k < tdArr.length; k++) {
        //取得表格中的每个学生id
        thisStuId = $(tdArr[k].cells[1]).find('input').attr('sudentid');
        // 对比学生id和分数对象中的id
        if (thisStuId == studentJSON[i].studentScores[j].studentId) {
          for (var l = 0; l < detailId_totle.length; l++) {
            if (detailId_totle[l] == studentJSON[i].studentScores[j].scoreConfigurationDetailId) {
              var score = studentJSON[i].studentScores[j].achievement;
              score = StringToSymbol(score);
              $(tdArr[k].cells[l + 2]).find('input').val(score).attr({ 'studentsScoreId': studentJSON[i].studentScores[j].studentsScoreId, 'scoreConfigurationDetailId': studentJSON[i].studentScores[j].scoreConfigurationDetailId });
            }
          }
        }
      }
    }
  };
}
function StringToSymbol(srcString) {//汉字单双 转化为单双引号
  srcString = srcString.replace(/\单/g, "\'");
  srcString = srcString.replace(/\双/g, '\"');
  return srcString;
}
function SymbolToString(mySymbol) {//单双引号 转化为汉字单双
  mySymbol = mySymbol.replace(/\'/g, "单");
  mySymbol = mySymbol.replace(/\"/g, "双");
  return mySymbol;
}
// 导出excel
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
  var blob = new Blob([html], { type: "application/vnd.ms-excel" });
  var urlA = document.createElement('a');
  // 利用URL.createObjectURL()方法为a元素生成blob URL
  $('.table-btn-group').append(urlA);
  urlA.href = URL.createObjectURL(blob);
  // 设置文件名，目前只有Chrome和FireFox支持此属性
  urlA.download = "学生成绩表.xls";
  urlA.click();
});
//查看成绩，加载缓慢 显示loading
function toCheckScore(obj) {
  Alert.loading("show");
  var classId = obj;
  window.location.href = "/performanceManagement/checkScore.do?classId=" + classId;
}

(function(){
  selectNew();
  if($('.form-control.select .select-list>li>a').hasClass('selected')){
    $('.form-control.select .select-list>li .selected').click();
  }
})();