$(function () {
    /*********** 点击姓名,打开弹窗 *****************/
    $('body').on('click', '.see-more', function () {
        Alert.bigWindow({
            data: `<div class="zuo-ye-xiang-qing">
      <!-- 标题 -->
      <div class="title">
          <span class="name">李梦雨</span>
          <span class="grade-class">三年级（1）班</span>
      </div>

      <!-- 内容 -->
      <div class="content mt20">
          <!-- 左边时间 -->
          <div class="opts-panel">
            <span class="opts-btn before icon-toLeft"></span>
            <span class="time">
                <span class="alert-opts-year">2018</span>年
                <span class="alert-opts-month">8</span>月
            </span>
            <span class="opts-btn next icon-toRight btn-hide"></span>
        </div>
          <!-- 右边内容 -->
          <div class="content-box">
              <!-- 一个 -->
              <div class="content-item">
                  <div class="item-left">
                      <span class="time">2小时前</span>
                  </div>
                  <div class="item-right">
                      <span class="btn themeBtn">推荐作业</span>
                      <h3 class="action-name mt20">【仰卧起坐】8组，每组8个</h3>
                      <div class="img-box mt10">
                          <img src="../images/404.png" alt="" srcset="">
                          <img src="../images/404.png" alt="" srcset="">
                          <img src="../images/404.png" alt="" srcset="">
                          <img src="../images/404.png" alt="" srcset="">
                          <img src="../images/404.png" alt="" srcset="">
                      </div>
                      <br><br><br>
                  </div>
              </div>
              <!-- 一个 -->
              <div class="content-item">
                <div class="item-left">
                    <span class="time">8月20日</span><br>
                    <span class="time">10：00</span>
                </div>
                  <div class="item-right">
                      <span class="btn themeBtn">推荐作业</span>
                      <h3 class="action-name mt20">【仰卧起坐】8组，每组8个</h3>
                      <br><br><br>
                  </div>
              </div>
              <!-- 一个 -->
              <div class="content-item">
                  <div class="item-left">
                      <span class="time">2小时前</span>
                  </div>
                  <div class="item-right">
                      <span class="btn themeBtn">推荐作业</span>
                      <h3 class="action-name mt20">【仰卧起坐】8组，每组8个</h3>
                      <div class="img-box mt10">
                          <img src="../images/404.png" alt="" srcset="">
                          <img src="../images/404.png" alt="" srcset="">
                          <img src="../images/404.png" alt="" srcset="">
                      </div>
                      <br><br><br>
                  </div>
              </div>
          </div>
      </div>
      <!-- 显示更多 -->
      <div class="see-more-btn btn grayBtn">
          显示更多
      </div>
  </div>`,
            callBack: function () {}
        });
    });

    /************* 点击左右切换 页面和弹窗********************/
    // 获取当前日期
    var myDate = new Date(),
        thisYear = myDate.getFullYear(),
        thisMonth = myDate.getMonth() + 1;
        
        $('body').on('click', '.ayck-opts-panel .change, .opts-panel .opts-btn', function () {
        var $this = $(this);
        //页面上的年月
            if($('.alert-opts-year').length > 0){
                //弹窗的日期
                var yearInPage = $('.alert-opts-year').text().trim(),
                monthInPage = $('.alert-opts-month').text().trim();
            }else{
                var yearInPage = $('.opts-year').text().trim(),
                monthInPage = $('.opts-month').text().trim();
            }
        
        // 判断点击是左或右
        if ($this.hasClass('before')) {
            monthInPage--;
            setPageDate(yearInPage, monthInPage);
        } else if ($this.hasClass('next')) {
            monthInPage++;
            setPageDate(yearInPage, monthInPage);
        }
    });

    /* 设置页面日期的函数 */
    function setPageDate(pageYear, pageMonth) {
        $('.ayck-opts-panel .change, .opts-panel .opts-btn').removeClass('btn-hide');
        //当前月份以后
        if((pageMonth + 1) > thisMonth && pageYear >= thisYear){
            if($('.alert-opts-year').length > 0){
                $('.opts-panel .next').addClass('btn-hide');
            }else{
                $('.ayck-opts-panel .next').addClass('btn-hide');
            }
        }
        
        // 去年本月以前
        if(pageYear < thisYear && pageMonth < (thisMonth + 1) ){
            if($('.alert-opts-year').length > 0){
                $('.opts-panel .before').addClass('btn-hide');
            }else{
                $('.ayck-opts-panel .before').addClass('btn-hide');
            }
        }

        //月份大于12
        if(pageMonth > 12){
            pageMonth = 1;
            pageYear++;
        }else
        // 月份<1
        if(pageMonth < 1){
            pageMonth = 12;
            pageYear--;
        }

        if($('.alert-opts-year').length > 0){
            $('.alert-opts-month').text(pageMonth);
            $('.alert-opts-year').text(pageYear);
        }else{
             $('.opts-month').text(pageMonth);
             $('.opts-year').text(pageYear);
        }
    }
})