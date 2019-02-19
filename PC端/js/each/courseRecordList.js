$('body').on('click','.link-box a',function(){
    if($(this).hasClass('current') && !$(this).hasClass('must')){
        $(this).removeClass('current');
    }else{
        $(this).addClass('current').siblings().removeClass('current');
    }
})