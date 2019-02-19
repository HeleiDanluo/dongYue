$(function(){
  var myHtml = $('<div style="height: 100%;overflow: auto;"></div>').load("chaKanXIangQing.html");
  // 查看
  $('.look').click(function(){
    Alert.bigWindow({
      data: myHtml
    });
  });

  // 编辑
  $('.edit').click(function(){
    Alert.twoBtn({
      words:'编辑【教学计划】会清空已制定的【单元计划】您确定要继续吗？',
      btnLeft: '继续编辑',
      btnRight: '只编辑单元计划',
      timer: true,//是否使用倒计时
      time: 5, // 倒计时长
      callBack: function(){
        // 点击左边按钮事件
        $('#btn-left').click(function(){
          alert('左←')
        });
        // 点击右边按钮事件
        $('#btn-right').click(function(){
          alert('右→')
        });
      }
    });
  });

   // 删除
   $('.delete').click(function(){
    Alert.twoBtn({
      words:'删除【教学计划】会删除所有计划，包含已制定的【教学计划】和【单元计划】确定要继续吗？',
      btnLeft: '全部删除',
      btnRight: '只删除单元计划',
      timer: true,//是否使用倒计时
      time: 5, // 倒计时长
      callBack: function(){
        // 点击左边按钮事件
        $('#btn-left').click(function(){
          alert('左←')
        });
        // 点击右边按钮事件
        $('#btn-right').click(function(){
          alert('右→')
        });
      }
    });
  });
})