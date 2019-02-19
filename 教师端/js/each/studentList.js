$(function(){
  showChecked();
  //点击出现
  $('#qhbj').click(function(){
    if($(this).hasClass('active')){
      close();
      $(this).removeClass('active');
    }else{
      $(this).addClass('active').siblings().removeClass('active');
      // 切换班级
      $("#qiehuanbanji").css({display:'block'});
      // 更新数据
      $("#gengxinshuju").css({display:'none'});
      $("#data-update-content-box").css({"display":"block"}).animate({"opacity":"1"},400);
      $(".data-update-content").animate({"top":"0rem"},300);
    }
  });

  $('#gxsj').click(function(){
    if($(this).hasClass('active')){
      close();
      $(this).removeClass('active');
    }else{
      $(this).addClass('active').siblings().removeClass('active');
      // 切换班级
      $("#qiehuanbanji").css({display:'none'});
      // 更新数据
      $("#gengxinshuju").css({display:'block'});
      $("#data-update-content-box").css({"display":"block"}).animate({"opacity":"1"},400);
      $(".data-update-content").animate({"top":"0rem"},300);
    }
  });
  //选中
  $(".data-update-detail").click(function(){
    // alert('a')
    $(this).find('i').addClass('icon-selected-gougou');
    $(this).siblings().find("i").removeClass('icon-selected-gougou');
    // 添加选中状态
    $(this).find('input').attr("checked","checked").parent().siblings().find('input').removeAttr("checked",' ')
    //选中的值
    var ckedTxt = $(this).find('span').html();
    var ckedVal = $(this).find('input').val();
    if($(this).parent().attr('id') == "gengxinshuju"){
      // 更新数据
      showChecked()
      $('#gxsj').removeClass('active');
    }else if($(this).parent().attr('id') == "qiehuanbanji"){
      // 切换班级
      showChecked();
      $('#qhbj').removeClass('active');
    }
    // 选择完毕后关闭
    close();
    // 选中后返回结果
    console.log(ckedVal);
  });
  //关闭
  // $("#exit i").click(
  //   function(){close();}
  // );
  // 关闭函数
  function close(){
    $("#data-update-content-box").animate({"opacity":"0"},400);
    $(".data-update-content").animate({"top":"-2rem"},300);
    setTimeout(function() {
      $("#data-update-content-box").css("display","none");
      $("#gengxinshuju").css("display","none");
      $("#qiehuanbanji").css("display","none");
    }, 500);
    
  }
  //选中的值展示到标题函数
  function showChecked(){
    var defGxsj = $('#gengxinshuju li input[checked]+').html();
    $('#gxsj-res').html(defGxsj)
    var defQhbj = $('#qiehuanbanji li input[checked]+').html();
    $('#qhbj-res').html(defQhbj);
  }

  $(".ldty-ok-box").click(function(){
    // 选中的更新数据
    var checkedGxsj = $("#gengxinshuju li input[checked]").val();
    // 选中的班级
    var checkedQhbj = $("#qiehuanbanji li input[checked]").val();
    console.log('班级：' + checkedQhbj + '   项目：' + checkedGxsj);
  });
  stuOrder();
});
    function stuOrder(){
      var totalNum = $('.student-list li');
      var totalArr = new Array();
      for(var i=0; i<totalNum.length; i++){
        totalArr.push(totalNum[i])
        // console.log($(totalNum[i]).attr('totalNum'))
        // console.log(totalArr)
      };
      //排序
      for(i=0; i<totalArr.length-1; i++){
        for(j=i+1; j<totalArr.length; j++){
          if($(totalArr[i]).attr('totalNum') < $(totalArr[j]).attr('totalNum')){
            var temp = totalArr[i];
            totalArr[i] = totalArr[j];
            totalArr[j] = temp;
          }
        }
      }
      for(var i=0; i<totalArr.length; i++){
        $('.student-list').append(totalArr[i]);
      }
    }
