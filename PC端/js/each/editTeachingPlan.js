$(function () {
    $('select').comboSelect();

    //自动扩展
    function setHeight(element) {
        $(element).css({'height': 'auto', 'overflow-y': 'hidden'}).height(element.scrollHeight);
    }

    $('textarea').each(function () {
        setHeight(this);
    }).on('input', function () {
        setHeight(this);
    });

    // //删除
    // function num() {
    //     $('.item-num').each(function () {
    //         if ($(this).parent().parent().find('.each-model-item').length > 0) {
    //             var number = $(this).parent().prevAll().length + 1;
    //             $(this).text(number);
    //         }
    //     });
    // }

    //删除按钮控制
    function btnDelete(){
        $('.icon-delete').each(function () {
            if ($(this).parent().parent().parent().find('.each-model-item').length > 1) {
                $(this).parent().parent().parent().find('.icon-delete').show();
            }
            if ($(this).parent().parent().parent().find('.each-model-item').length < 2) {
                $(this).parent().parent().find('.icon-delete').hide();
            }
        });
    }

    btnDelete();
    $('.model-list').on('click', '.icon-delete', function () {
        if ($(this).parent().parent().parent().find('.each-model-item').length > 1) {
            $(this).parent().parent().remove();
        }
        btnDelete();
    });

    //添加
    function add(obj,msg) {
        obj.click(function () {
            var arr = new Array();
            if (obj.hasClass('add-redio')) {
                arr.push('<div class="each-model-item edit-teach-item mt20">');
                arr.push('<span class="item-num"></span>');
                arr.push('<div class="edit-box clearfix">');
                arr.push('<div class="icon-delete f20"></div>');
                arr.push('<div class="edit-text">');
                arr.push('<select>');
                for(var i = 0;i < 4;i++) {
                    arr.push('<option>1111111</option>');
                }
                arr.push('</select></div>');
                arr.push('</div></div>');
                $(this).parent().parent().next().append(arr.join(''));
            } else if (obj.hasClass('add-img')) {
                arr.push('<div class="each-model-item edit-teach-item mt20">');
                // arr.push('<span class="item-num"></span>');
                arr.push('<div class="edit-box clearfix">');
                arr.push('<div class="icon-delete f20"></div>');
                arr.push('<label class="edit-text">');
                arr.push('<textarea rows="1" flag="0" class="f14 con-text" placeholder="'+ msg +'"></textarea>');
                arr.push('<div class="upload-img mt20"><label>');
                arr.push('<span class="id-photo-inp">');
                arr.push('<input flag="0" type="file" />');
                arr.push('<em><i class="icon-uploadImg"></i>');
                arr.push('<i class="f14">上传图片（大小<2M）</i></em>');
                arr.push('</span></label></div>');
                arr.push('</div></div>');
                $(this).parent().parent().next().append(arr.join(''));
            } else {
                arr.push('<div class="each-model-item edit-teach-item mt20">');
                // arr.push('<span class="item-num"></span>');
                arr.push('<div class="edit-box clearfix">');
                arr.push('<div class="icon-delete f20"></div>');
                arr.push('<label class="edit-text">');
                arr.push('<textarea rows="1" flag="0" class="f14 con-text" placeholder="'+ msg +'"></textarea>');
                arr.push('</label>');
                arr.push('</div></div>');
                $(this).parent().parent().next().append(arr.join(''));
            }
            // num();
            btnDelete();
            $('textarea').each(function () {
                setHeight(this);
            }).on('input', function () {
                setHeight(this);
            });
            $('select').comboSelect();
        });
    }

    add($('.add-order'), '请输入教学目标');
    add($('.add-con'), '请输入教学内容');
    add($('.add-active'), '请输入学生活动');
    add($('.add-active-other'), '请输入教师活动');
    add($('.add-img'), '请输入队列名称');
    add($('.add-place'), '请输入场地器材');
    add($('.add-redio'));


    //图片上传

    $('.model-list').on('change','.upload-img input', function () {
        imgUpload(this);
    });

    function imgUpload (obj) {
        lrz(obj.files[0], {width: 400}, function (results) {
            demo_report( results.base64, results.base64.length * 0.8);
        });
    }

    function demo_report(src) {
        //这里请求接口，展示以上传数据
    }
    function callSearchSelect(obj,className){
        obj.html("");
        var selectHtml=$('<select class="'+className+'">' +
          '<option value="">选择游戏项目</option>' +
          '<option value="篮球">篮球</option>' +
          '<option value="足球">足球</option>' +
          '<option value="排球">排球</option>' +
          '<option value="羽毛球">羽毛球</option>' +
          '</select>')
        obj.append(selectHtml);
        $("."+className).comboSelect();
    }
    $(".addGame").click(function(){
        callAlert("addGame.html",{
            initFn:function(){
                $('.game>select').comboSelect();
                $(".gameType").change(function(e, v){
                    console.log('你选择了第' + e.target.selectedIndex + '项，值是' + e.target.value);
                    callSearchSelect($(".game-option-select"),"typeOption");
                })
            },
            confirmFn:function(){}
        })
    })
});