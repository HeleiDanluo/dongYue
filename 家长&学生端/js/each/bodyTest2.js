$(function(){
  var label=[
    {name: '平衡', max: 100},
    {name: '肌耐力', max: 100},
    {name: '心肺有氧', max: 100},
    {name: '反应', max: 100},
    {name: '柔韧度', max: 100},
    {name: '躯干及下肢', max: 100},
    {name: '躯干及上肢', max: 100}
  ];
  var data = [75, 85, 88, 90, 58, 86, 71];
  $(".sick-radar-wrapper").setRadar({
    labelData:label,
    data:data,
  });
})