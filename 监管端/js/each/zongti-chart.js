// 点击图形查看大图
$('body').on('click', '.chart-item-box', function () {
  var $this = $(this);
  if (!$this.hasClass('bigger')) {
    $this.addClass('bigger');
    $this.find('.place-img,.mask').addClass('hidden');
    // 调用echart
    setTimeout(function () {
      // 中考成绩
      if ($this.find('.item-content').attr('id') == 'zhongKaoChengJi-nan') {
        // 男
        chart.areaLine({
          element: 'zhongKaoChengJi-nan',
          xAxis: ['一年级', '二年级', '三年级', '四年级', '五年级', '六年级' ,'初一', '初二', '初三'],
          // 第一条数据放的是值，后面的数据存放的是与上一条数据的差值，因为这个区域图是堆叠显示的
          data: [{
            name: '不及格',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [70, 75, 70, 72, 75, 73, 74, 72, 75, 73, 74]
          },
          {
            name: '及格',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
          },
          {
            name: '良好',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6]
          },
          {
            name: '优秀',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6]
          }
          ]
        })
        // 女
        chart.areaLine({
          element: 'zhongKaoChengJi-nv',
          xAxis: ['一年级', '二年级', '三年级', '四年级', '五年级', '六年级' ,'初一', '初二', '初三'],
          // 第一条数据放的是值，后面的数据存放的是与上一条数据的差值，因为这个区域图是堆叠显示的
          data: [{
            name: '不及格',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [70, 75, 70, 72, 75, 73, 74, 72, 75, 73, 74]
          },
          {
            name: '及格',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
          },
          {
            name: '良好',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6]
          },
          {
            name: '优秀',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6]
          }
          ]
        })
        // 男
        chart.areaLine({
          element: 'zhongKaoChengJi-zongti',
          xAxis: ['一年级', '二年级', '三年级', '四年级', '五年级', '六年级' ,'初一', '初二', '初三'],
          // 第一条数据放的是值，后面的数据存放的是与上一条数据的差值，因为这个区域图是堆叠显示的
          data: [{
            name: '不及格',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [70, 75, 70, 72, 75, 73, 74, 72, 75, 73, 74]
          },
          {
            name: '及格',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
          },
          {
            name: '良好',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6]
          },
          {
            name: '优秀',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6]
          }
          ]
        })
      } else

      // 50米成绩
      if ($this.find('.item-content').attr('id') == 'wuShiMi') {
        chart.areaLine({
          element: 'wuShiMi',
          xAxis: ['一年级', '二年级'],
          // xAxis: ['一年级', '二年级', '三年级', '四年级', '五年级', '六年级' ,'初一', '初二', '初三'],
          data: [{
            name: '男生城乡差异',
            type: 'bar',
            data: [8.0, 4.9],
            barMaxWidth: 50
          },
          {
            name: '女生城乡差异',
            type: 'bar',
            data: [8.6, 5.9],
            barMaxWidth: 50
          },
          // {
          //   name: '总体平均增长曲线',
          //   type: 'line',
          //   data: [8, 20, 54.5, 76.3, 80.2, 182.3, 193.4, 183.0, 196.5, 12.0, 6.2, 2.0]
          // }
          // ,
          // {
          //   name: '男生平均增长曲线',
          //   type: 'line',
          //   data: [76.3, 2.0, 8, 20, 54.5, 80.2, 182.3, 193.4, 183.0, 196.5, 12.0, 6.2]
          // }
          // ,
          // {
          //   name: '女生平均增长曲线',
          //   type: 'line',
          //   data: [2.0, 8, 20, 54.5, 76.3, 80.2, 182.3, 193.4, 183.0, 196.5, 12.0, 6.2]
          // }
          ]
        })
      } else

      // 3分钟跳绳 sanFenZhongTiaoSheng
      if ($this.find('.item-content').attr('id') == 'sanFenZhongTiaoSheng') {
      } else

      // 仰卧起坐 yangWoQiZuo
      if ($this.find('.item-content').attr('id') == 'yangWoQiZuo') {
      } else

      // 中考成绩得分热力图 zkcjReLiTu
      if ($this.find('.item-content').attr('id') == 'zkcjReLiTu') {
        chart.map({
          element: 'zkcjReLiTu',
          data:[{
            type: 'map',
            name: '数据名称',
            map: '320100',
            data: [
              { name: '市辖区', value: 40000 },
              { name: '玄武区', value: 45988 },
              { name: '秦淮区', value: 34753 },
              { name: '建邺区', value: 42467 },
              { name: '鼓楼区', value: 46734 },
              { name: '浦口区', value: 39085 },
              { name: '栖霞区', value: 40877 },
              { name: '雨花台区', value: 48007 },
              { name: '江宁区', value: 44978 },
              { name: '六合区', value: 42356 },
              { name: '溧水县', value: 43567 },
              { name: '高淳县', value: 47846 }
            ],
          }]
        })
      } else

      // 800米/1000米 yiQianMi
      if ($this.find('.item-content').attr('id') == 'yiQianMi') {
      } else

      // 引体向上 yinTiXiangShang
      if ($this.find('.item-content').attr('id') == 'yinTiXiangShang') {
      } else

      // 实心球 shiXinQiu
      if ($this.find('.item-content').attr('id') == 'shiXinQiu') {
      } else

      // 立定跳远 liDingTiaoYuan
      if ($this.find('.item-content').attr('id') == 'liDingTiaoYuan') {
      }

    }, 500)
  }
})

// 点击缩小图形
$('body').on('click', '.reset-echart', function (e) {
  e.stopPropagation();
  var $this = $(this).parent().parent();
  $this.removeClass('bigger');
  $this.find('.place-img,.mask').removeClass('hidden');

})

// 点击切换中考成绩
$('body').on('click', '.zk-select', function() {
  $(this).addClass('btn-green').removeClass('btn-gray').siblings().removeClass('btn-green').addClass('btn-gray')
  // 男
  if($(this).attr('id').trim() == 'nan'){
    $('#zhongKaoChengJi-nan').addClass('active');
    $('#zhongKaoChengJi-nv').removeClass('active');
    $('#zhongKaoChengJi-zongti').removeClass('active');
  }else 
  // 女
  if($(this).attr('id').trim() == 'nv'){
    $('#zhongKaoChengJi-nan').removeClass('active');
    $('#zhongKaoChengJi-nv').addClass('active');
    $('#zhongKaoChengJi-zongti').removeClass('active');
  }else 
  // 总体
  if($(this).attr('id').trim() == 'zongti'){
    $('#zhongKaoChengJi-nan').removeClass('active');
    $('#zhongKaoChengJi-nv').removeClass('active');
    $('#zhongKaoChengJi-zongti').addClass('active');
  }
})

// 图表插件封装，勿修改
var chart = {}
// 显示区域折线图
chart.areaLine = function (options) {
  var defaults = {
    element: '', // echarts着陆元素
    title: '', // 标题
    xAxis: '', // X坐标
    legend: '', // 图例名字  需要和data数据名相同
    data: '' // 表格数据
  };

  // 默认值覆盖
  var opts = $.extend({}, defaults, options);

  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById(opts.element));

  // 指定图表的配置项和数据
  var option = {
    title: {
      text: opts.title
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {
      data: opts.legend
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      boundaryGap: true,
      data: opts.xAxis
    }],
    yAxis: [{
      type: 'value',
    }],
    series: opts.data
  };
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
}

// 柱状图和折线图结合
chart.LineAndBar = function (options) {
  var defaults = {
    element: '', // echarts着陆元素
    title: '', // 标题
    xAxis: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'], // X坐标
    legend: '', // 图例名字  需要和data数据名相同
    data: '' // 表格数据
  };

  // 默认值覆盖
  var opts = $.extend({}, defaults, options);

  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById(opts.element));

  // 指定图表的配置项和数据
  var option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        crossStyle: {
          color: '#999'
        }
      }
    },

    legend: {
      data: ['男生', '女生', '城乡差异']
    },
    xAxis: [{
      type: 'category',
      data: opts.xAxis,
      axisPointer: {
        type: 'shadow'
      }
    }],
    yAxis: [{
      type: 'value',
    }],
    series: opts.data
  };
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
}
// 地图
chart.map = function (options) {
  var defaults = {
    element: '', // echarts着陆元素
    title: '', // 标题
    max:50000,
    min:800,
    data: null // 表格数据
  };

  // 默认值覆盖
  var opts = $.extend({}, defaults, options);

  $.get('../js/mapjson/geometryCouties/320100.json', function (chinaJson) {
    echarts.registerMap('320100', chinaJson);
    var myChart = echarts.init(document.getElementById(opts.element));
    var option = {
      title: {
        text: opts.title,
      },
      tooltip: {
        trigger: 'item',
        formatter: '{b}<br/>{c} (p / km2)'
      },
      visualMap: {
        min: opts.min,
        max: opts.max,
        text: ['最高值', '最低值'],
        realtime: false,
        calculable: true,
        inRange: {
          color: ['lightskyblue', 'yellow', 'orangered']
        }
      },
      series: opts.data
    }
    myChart.setOption(option);
  });
}
// 点击数据录入
$('body').on('click', '#shujuluru', function () {
  $('.tanchuang-content').addClass('show')
})

// 点击关闭数据录入弹窗
$('body').on('click', '.close-tanchuang', function () {
  $('.tanchuang-content').removeClass('show');
});
