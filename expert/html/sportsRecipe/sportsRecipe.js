$(function(){
  var boxChunk=$('.boxChunk')
  boxChunk.delegate('.second','click',function(){
    var chunk=$(this).parents('.chunk')
    chunk.hide(500)
  })

  var addBox=$('.addBox')

  addBox.click(function(){
    var libHtml=$(
      '<div class="chunk once"  flex="dir:top">'+
      '<div class="top" flex="dir:left cross:center"> ' +
      '<div></div>' +
      '<a href="javascript:void(0)">查看详情</a>' +
      '<i class="icon-jiantou first"></i>' +
      '<i class="icon-guanbi second"></i>' +
      '</div>' +
      '<div class="bottom" flex="dir:left">' +
      '<a href="javascript:void(0)">' +
      '<img src="../../img/boy.png">' +
      '<span class="msg" font="10">添加动作</span>' +
      '</a>' +
      '<div class="detail">' +
      '<h1>待添加</h1>' +
      '<input placeholder="请输入"></input>' +
      '</div>' +
      '</div>' +
      '</div>'
    )
      $('.boxChunk').append(libHtml)
      $('.chunk').last().animate({
        opacity:'1'
      },500)
  })


})