/**
 * Created by Administrator on 2017/7/12.
 */
(function($){
    $.fn.slide=function(options){
        var $this = $(this)
        var defaults = {
            confirm: null
        }
        var caption=$('.caption .title i')
        var captionBox=$('.caption .box')
        var captionBoxHeight=captionBox.height()
        var persen=$('.persen .title i')
        var persenBox=$('.persen .box')
        var persenBoxHeight=persenBox.height()
        var count=1;
        var newcount=1;
        caption.click(function(){
            var $this=$(this)
            var height
            count++
            if(count%2=='0'){
                height=0
            }else{
                height=captionBoxHeight
            }
            $this.toggleClass('focus')
            captionBox.animate({
                height:height
            })

        })
        persen.click(function(){
            var $this=$(this)
            var height
            newcount++
            if(newcount%2=='0'){
                height=0
            }else{
                height=persenBoxHeight
            }
            $this.toggleClass('focus')
            persenBox.animate({
                height:height
            })
        })

    }
})(window.jQuery)