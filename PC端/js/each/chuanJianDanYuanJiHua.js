//C创建但原单元计划
$(function(){
  // 根据总课时，挂载选项框
  var allNum = $('.title-all-num')[0].innerText.trim();
  var whiteBox = '';
  for(var i=0; i<allNum; i++){
    whiteBox += '<div class="content-item null"></div>'
  };
  // 挂载
  $('.content-item-box').append(whiteBox);

  //删除
  $('body').on('click', '.cotent-item-del', function(){
    var $this = $(this);
    var thisParentId = $this.parent().attr('newItemId');
    // var selectedListItem = $('div[newItemId='+ thisParentId +']');
    var allThisSum = $('div[itemId='+ thisParentId +']').find('.this-sum').attr('sum');//当前点击的
    if(allThisSum > 0 ){
      $('div[itemId='+ thisParentId +']').find('.this-sum').attr('sum', +allThisSum - 1).text( +allThisSum - 1);
      $this.parent().addClass('null').removeAttr('newitemid');
      $this.siblings().remove();
      $this.remove();
      // 一选数量减一
      numRdc();
    }
  });

  // 点击选中
  $('body').on('click', '.cjdyjh-item .opts-btn', function(){
    var $this = $(this);
    var curNum = parseInt($('.title-cur-num')[0].innerText);//当前选择数量
    var allNum = parseInt($('.title-all-num')[0].innerText);//所有选择数量
    var thisSum = $this.parent().find('.this-sum').attr('sum');//点击处的数量
    console.log(thisSum)
    //添加
    if($this.hasClass('add-status')){
      if(curNum < allNum){
        // $this.addClass('active');
        $thisTxt = $this.parent().find('.cjdyjh-item-txt').clone();
        $thisAttr = $this.parent().find('.cjdyjh-item-txt');
        $thisTxt = $thisTxt.removeClass('cjdyjh-item-txt').addClass('item-txt')[0].outerHTML;
        $thisItemId = $this.parent().attr('itemId').trim();
        var resEle = $($thisTxt  +'<div class="cotent-item-del icon-guanbi"></div>');
        $('.content-item.null').first().append(resEle).removeClass('null').attr('newItemId',$thisItemId);
        $this.parent().find('.this-sum').text( +thisSum + 1).attr('sum', +thisSum + 1);
        numAdd();
      }
      
      //减
    }else{
      if(thisSum>0){
        var $this = $(this);
        var thisParentId = $this.parent().attr('itemId');
        var selectedListItem = $('div[newItemId='+ thisParentId +']');
        selectedListItem.last().find('.cotent-item-del').click();
        $this.parent().find('.this-sum').text( +thisSum - 1).attr('sum', +thisSum - 1);
        // numRdc();
      }
    }
  });

  //点击一级菜单
  $('body').on('click', '.hwork-head-menu>a', function(){
    $(this).addClass('current').siblings().removeClass('current');
  })

  //点击二级菜单
  $('body').on('click', '.form-inline .menu-item', function(){
    $(this).addClass('txt-green').siblings().removeClass('txt-green');
    $('.select-all').parent().parent().hide();
  })
  
  //弹出下拉  校本教案
  var xbopen = false;
  $('body').on('click', '#xbja', function(e){
    var slectPanel = $(this).find('.cjdyjh-ul');
    if(!xbopen){
      slectPanel.css('display','block');
      xbopen = true;
      e && e.stopPropagation();
    }else{
      slectPanel.hide();
      xbopen = false;
      e && e.stopPropagation();
    }
  })
  //弹出下拉  历史单元计划选课
  var xnopen = false;
  $('body').on('click', '#xnxx', function(e){
    var slectPanel = $(this).find('.cjdyjh-ul');
    if(!xnopen){
      slectPanel.css('display','block');
      xnopen = true;
      e && e.stopPropagation();
    }else{
      slectPanel.hide();
      xnopen = false;
      e && e.stopPropagation();
    }
  })
  
  //点击选项 校本教案
  $('body').on('click', '.select-panel li', function(e){
    var $this = $(this);
    var slectPanel = $this.parent();
    var thisTxt = $this.text();
    var panelRoot = $this.parent().parent();
    $this.addClass('checked').siblings().removeClass('checked');
    panelRoot.find('.selext-res').text(thisTxt);
    slectPanel.hide();
    e && e.stopPropagation();
    xbopen = false;
    xnopen = false;

    if(panelRoot.parent().find('#xnxx').length > 0){
      //历史单元计划选课
      console.log('历史单元计划选课')
      $('.select-all').parent().parent().show();
    }else if(panelRoot.parent().find('#xbja').length > 0){
      //校本教案
      console.log('校本教案')
    }
  })


  //点击下拉以外元素
  $('body').click(function(e){
    if($(e.target).closest(".cjdyjh-ul").length == 0){
      $('.cjdyjh-ul').hide();
    }
  })
  //全选
  $('body').on('click', '.select-all', function(){
    $('.content-item-box .content-item .cotent-item-del').click();
    $('.set-hwork-panel .cjdyjh-item').click();
  });
  
  //清除
  $('body').on('click', '.qingchu', function(){
    $('.content-item-box .content-item .cotent-item-del').click();
  })
  // 保存
  $('body').on('click', '.side-btn-save', function(){
    var allNum = parseInt($('.title-all-num')[0].innerText);
    var cueNum = parseInt($('.title-cur-num')[0].innerText);
    if(cueNum<allNum){
      Alert.twoBtn({
        words: '还有'+ (allNum - cueNum) +'个教案未选，是否保存？',
        btnLeft: '取消',
        btnRight: '确定',
        btnLeftGray: true,//是否灰色
        btnRightGray:  false,//是否灰色
        callBack: function(){
          //取消
          $('#btn-left').click(function(){
            $(".close-btn").click();
          });
          //确定
          $('#btn-right').click(function(){
            alert('保存操作')
          })
        }
      })
    }
  })

  //画出侧边
  $('body').on('click', '.side-btn-status', function(){
    $('.side-page-cjdyjh').removeClass('hide-in-side');
  });

  //关闭侧边
  $('body').on('click', '.close-side-btn,.page-left', function(){
    $('.side-page-cjdyjh').addClass('hide-in-side');
  });
 

  //数量加一
  function numAdd(){
    $('.title-cur-num').text(parseInt($('.title-cur-num')[0].innerText) + 1);
  }

  //数量减一
  function numRdc(){
    $('.title-cur-num').text(parseInt($('.title-cur-num')[0].innerText) - 1);
  }

  //标签阻止冒泡
  $('body').on('click', '.cjdyjh-item>a', function(e){
    e & e.stopPropagation();
  })

  //排序插件
  var list = document.getElementById("contentItemBox");
  Sortable.create(list, 
    { 
      group: "omega",
      animation: 150
     }); // That's all.

})