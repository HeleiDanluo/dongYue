$(function(){
  $('.btn-save').click(function(){
    Alert.twoBtn({
      words: '教学计划已保存，是否去创建单元计划？',
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
  })
})