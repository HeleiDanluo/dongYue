$(function(){
    $('.img img').click(function(){
        var $this=$(this)
        var imgSrc=$this.attr('src')
        console.log(imgSrc)
        var imgShowHtml=$('\
            <div class="imgShow can-scroll" flex="cross:center main:center">\
                <div class="imgBox">\
                    <img src='+imgSrc+'>\
                </div>\
            </div>\
        ')
        $('body').append(imgShowHtml)
    })

    $('body').delegate('.imgShow','click',function(){
        $('.imgShow').detach()
    })
    $('body').delegate('.imgBox','click',function(){
        $('.imgShow').detach()
    })
})