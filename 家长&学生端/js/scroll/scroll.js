/**
 * Created by Administrator on 2017/7/11.
 */
(function($){
    $.fn.scrollFn=function(options) {
        var $this = $(this)
        var defaults = {
            confirm: null
        }
        var list=$('.training_record_list')
        var opts = $.extend({}, defaults, options)

        return $this.each(function () {
            function scroll(){
                var $this=$(this)
                var $test = $('.training_record_list')

                var test1=$test.scrollTop()
                var test2=$test.height()
                var test3=test1+test2

                var t1 = $this.scrollTop()
                var t2 = $this.height()
                var tAll=t1+t2

                var h = $this.get(0).scrollHeight

                var innertime=new Date().getTime()
                var differ=innertime-outertime
                if(tAll+1>=h&&differ>1500&&test3!='0'){
                    opts.confirm&&opts.confirm();
                    outertime=innertime
                }
            }
            $('.can-scroll').bind('scroll',scroll)
        })
    }

    $.extend({
        loading:function(opt){
            var defaults = {
                type: null,
            }
            var list=$('.training_record_list')
            var libHtml=$(
                '<div class="load-more" flex="cross:center main:center">'+
                '<span class="load-more-circle"></span>'+
                '</div>'
            )
            var opts = $.extend({}, defaults, opt);
            if (opts.type == "show") {
                list.append($(libHtml))
            } else {
                $('.load-more').remove();
            }
        }
    })
})(window.jQuery)