$(function () {
  // 点击加载弹窗
  $(".changeClassContent").click(function () {
    var mhtml = '<div class="alert-div  form-box teacher_preview back_white animated fadeInDownBig" style="margin-top: -287.5px !important;">\
        <div class="form-head t_r">\
            <div style="margin-top:18px" class="col-16-16 no-padding t_l f24 teacher_preview_title">\
                <span>上午 / 第一节</span>\
            </div>\
            <a class="close-btn f12 icon-guanbi" href="javascript:;"></a>\
        </div>\
        <div>\
            <div id="my-result" class="plan-list-wrapper back_white mt30" style="padding: 0px 40px">\
                <h3>选择授课教案</h3>\
                <!-- 下拉列表 -->\
                <label class="form-control chooseselect classYear select" style="margin-top: 15px;">\
                    <input style="text-indent: 20px" type="text" id="content" placeholder="课程类别" readonly="">\
                    <span class="caret icon-hehe"></span>\
                    <ul class="select-list" style="display: none;">\
                        <li>\
                            <a style="text-indent: 16px" href="javascript:;" data-val="1" onclick="" contentid="1">走和跑</a>\
                        </li>\
                        <li>\
                            <a style="text-indent: 16px" href="javascript:;" data-val="1" onclick="" contentid="1">走和跑</a>\
                        </li>\
                    </ul>\
                </label>\
                <!-- 数据列表 -->\
                <div class="chooseClass" style="margin-top: 15px; height: 352px;overflow: auto;">\
                    <!-- 一条数据 -->\
                    <div class="each-week-item clearfix" style="padding: 0 20px">\
                        <div class="col-1-16">\
                            <span class="class-num">1</span>\
                        </div>\
                        <div class="col-12-16 tip-word">\
                            <p class="t_c" style="overflow: hidden;text-overflow:ellipsis;white-space: nowrap;">\
                                队列队形&nbsp;:&nbsp;原地踏步走原地踏步走原地踏步走原地踏步走原地踏步走原地踏步走原地踏步走原地踏步走原地踏步走原地踏步走原地踏步走原地踏步走原地踏步走原地踏步走原地踏步走原地踏步走</p>\
                        </div>\
                        <div class="col-3-16 t_c control-box add-this-class t_r">\
                            <a href="javascript:void(0)" class="form-link choosenow">选取为教案</a>\
                        </div>\
                    </div>\
                </div>\
            </div>\
        </div>\
    </div>\
'
  Alert.changeClass({
    data:mhtml
  });

  });
})