$(function(){
  var commentStopTime = new Pikaday({
    field: document.getElementById('commentStopTime'),
    onSelect: function () {
      console.log(new Date(this.getDate()).getTime());
      console.log(new Date().getTime());
    }
  });
  $("body").on("click",".addTgtExp",function(){
    var tgtExp=$('<div class="target-explain-item clearfix l_h36 mt20">' +
      '<div class="col-12-18 col-offset-3-18">' +
      '<label class="form-control">' +
      '<input type="text" placeholder="请输入指标说明">' +
      '</label></div>' +
      '<div class="col-2-18">' +
      '<label class="form-control">' +
      '<input type="number" placeholder="请输入最大分值"></label></div>' +
      '<div class="col-1-18 t_r">' +
      '<a href="javascript:void(0);" class="dec-btn"><i class="icon-dec"></i></a>' +
      '</div></div>');
    var targetExpList=$(this).closest(".target-item").find(".target-explain-list");
    targetExpList.append(tgtExp);
    voliTgtExpLength(targetExpList)
  });
  $("body").on("click",".dec-btn",function(){
    var nowBox = $(this).closest(".target-explain-list");
    $(this).closest(".target-explain-item").remove();
    voliTgtExpLength(nowBox);
  });
  $(".addTgt").click(function(){
    var newTgt=$('<div class="target-item">' +
      '<div class="form-inline l_h36 clearfix mt20">' +
      '<div class="col-3-18 t_c">输入评价指标：</div>' +
      '<div class="col-12-18"><label class="form-control">' +
      '<input type="text" placeholder="输入评价指标名称"></label></div>' +
      '<div class="col-1-18">' +
      '<a href="javascript:void(0)" style="display:none" class="blockBtn blueBtn decTgt">删除</a>' +
      '</div>' +
      '<div class="col-2-18">' +
      '<a href="javascript:void(0)" class="blockBtn yellowBtn add-target-icon addTgtExp">指标说明</a>' +
      '</div></div><div class="target-explain-list"><div class="target-explain-item clearfix l_h36 mt20">' +
      '<div class="col-12-18 col-offset-3-18">' +
      '<label class="form-control">' +
      '<input type="text" placeholder="请输入指标说明"></label>' +
      '</div><div class="col-2-18">' +
      '<label class="form-control">' +
      '<input type="number" placeholder="请输入最大分值"></label></div><div class="col-1-18 t_r">' +
      '<a href="javascript:void(0);" class="dec-btn" style="display:none">' +
      '<i class="icon-dec"></i></a></div></div></div></div>');
    $(".target-set-list").append(newTgt);
    voliTgtLength();
  })
  $("body").on("click",".decTgt",function(){
    $(this).closest(".target-item").remove();
    voliTgtLength();
  })
  function voliTgtExpLength(obj){
    var length=obj.children().length;
    if(length>1){
      obj.find(".dec-btn").show();
    }else{
      obj.find(".dec-btn").hide();
    }
  }
  function voliTgtLength(){
    var tgtLength=$(".target-set-list").children().length;
    if(tgtLength>1){
      $(".decTgt").show();
    }else{
      $(".decTgt").hide();
    }
  }
})