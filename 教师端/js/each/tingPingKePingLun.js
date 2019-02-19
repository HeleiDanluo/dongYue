$(function () {
  // 点击回复，自动聚焦
  $('body').on('click', '.pinglun-btn', function(){
    $('.pinglun-input-box').attr('id','huifu').find('input').focus();
  })

  // 点击菜单滚动顶部
  $('body').on('click', '.header-link-menu li', function () {
    $('.teachPlan-detail-wrapper')[0].scrollTop = 0
  })
})