/**分页插件
 2015-03-10 fish
 **/
(function($){
  var ms = {
    init:function(obj,args){
      return (function(){
        args.pageCount=parseInt(args.pageCount);
        args.current=parseInt(args.current);
        ms.fillHtml(obj,args);
        ms.bindEvent(obj,args);
      })();
    },
    //填充html
    fillHtml:function(obj,args){
      return (function(){
        obj.empty();
        //上一页
        if(args.current > 1){
          obj.append('<a href="javascript:void(0);" class="pageB prevPage"><em class="iconfont icon-left mr5"></em>上一页</a>');
        }else{
          obj.remove('.prevPage');
          obj.append('<span class="pageB disabled"><em class="iconfont icon-left mr5"></em>上一页</span>');
        }
        //中间页码
        if(args.current != 1 && args.current >= 3 && args.pageCount != 3){
          obj.append('<a href="javascript:void(0);" class="tcdNumber">'+1+'</a>');
        }
        if(args.current-1 > 2 && args.current <= args.pageCount && args.pageCount > 4){
          obj.append('<span>...</span>');
        }
        var start = args.current -1,end = args.current+1;
        if((start > 1 && args.current < 4)||args.current == 1){
          end++;
        }
        if(args.current > args.pageCount-4 && args.current >= args.pageCount){
          start--;
        }
        //debugger;
        for (;start <= end; start++) {
          if(start <= args.pageCount && start >= 1){
            if(start != args.current){
              obj.append('<a href="javascript:void(0);" class="tcdNumber">'+ start +'</a>');
            }else{
              obj.append('<span class="current">'+ start +'</span>');
            }
          }
        }
        if(args.current + 2 < args.pageCount - 1 && args.current >= 1 && args.pageCount > 4){
          obj.append('<span>...</span>');
        }
        if(args.current != args.pageCount && args.current < args.pageCount -1  && args.pageCount != 3){
          obj.append('<a href="javascript:void(0);" class="tcdNumber">'+args.pageCount+'</a>');
        }
        //下一页
        if(args.current < args.pageCount){
          obj.append('<a href="javascript:void(0);" class="pageB nextPage">下一页<em class="iconfont icon-right ml5"></em></a>');
          // obj.append('<span class="turnpage3">共<span>'+args.pageCount+'</span>页&nbsp;&nbsp;到第</span> <input class="turnpage0" type="text" maxlength="3" onkeyup="BASEisNotNum(this);" onblur="BASEisNotNum(this);" onafterpaste="BASEisNotNum(this);"/><span>页</span><a class="turnpage1 grayBtn">确定</a>');
        }else{
          obj.remove('.nextPage');
          obj.append('<span class="pageB disabled">下一页<em class="iconfont icon-right ml5"></em></span>');
          // obj.append('<span class="turnpage3">共<span>'+args.pageCount+'</span>页&nbsp;&nbsp;到第</span> <input class="turnpage0" type="text" maxlength="3" onkeyup="BASEisNotNum(this);" onblur="BASEisNotNum(this);" onafterpaste="BASEisNotNum(this);"/><span>页</span><a class="turnpage1 grayBtn">确定</a>');
        }
      })();
    },
    //绑定事件
    bindEvent:function(obj,args){
      obj.unbind("click");
      return (function(){
        obj.on("click","a.tcdNumber",function(){
          var current = parseInt($(this).text());
          ms.fillHtml(obj,{"current":current,"pageCount":args.pageCount});
          if(typeof(args.backFn)=="function"){
            args.backFn(current,args.pageCount);
          }
        });
        //上一页
        obj.on("click","a.prevPage",function(){
          var current = parseInt(obj.children("span.current").text());
          ms.fillHtml(obj,{"current":current-1,"pageCount":args.pageCount});
          if(typeof(args.backFn)=="function"){
            args.backFn(current-1,args.pageCount);
          }
        });
        //下一页
        obj.on("click","a.nextPage",function(){
          console.log("hehe");
          var current = parseInt(obj.children("span.current").text());
          ms.fillHtml(obj,{"current":current+1,"pageCount":args.pageCount});
          if(typeof(args.backFn)=="function"){
            args.backFn(current+1,args.pageCount);
          }
        });
        // 到第 X 页
        obj.on("click",".turnpage1.grayBtn",function(){
          var current = parseInt($(".turnpage0").val(), 10);
          ms.fillHtml(obj,{"current":current,"pageCount":args.pageCount});
          if(typeof(args.backFn)=="function"){
            args.backFn(current,args.pageCount);
          }
        });
      })();
    }
  };
  $.fn.createPage = function(options){
    var args = $.extend({
      pageCount :parseInt('10'),
      current :parseInt('1'),
      backFn : function(){}
    },options);
    ms.init(this,args);
//        alert(typeof (options))
//        args.pageCount=parseInt(options.pageCount);
//        args.current=parseInt(options.current);
//        alert(options.pageCount)
  }
})(jQuery);

