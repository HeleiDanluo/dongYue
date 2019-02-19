// 同一页面多个视频 设置优酷id
var $youkuplayer = document.getElementsByClassName("youkuplayer");
for(var i=0; i<$youkuplayer.length; i++){
    var thisVid = $youkuplayer[i].getAttribute("ykVid");
    var eachyk_id = 'youkuplayer_'+i
    var width = $youkuplayer[i].scrollWidth;
    $youkuplayer[i].style.height = (width > 900 ? 600 : width * 6 / 9) + "px";
    $youkuplayer[i].setAttribute('id',eachyk_id);//设置不同的id
    player = new YKU.Player(eachyk_id,{
        styleid: '2',
        client_id: 'b10ab8588528b1b1',
        vid: thisVid,
        autoplay: false,
        show_related: false,
        newPlayer: true,
        // events:{
        //     onPlayEnd: function(){
        //         playVideo();
        //     }
        // }
    });
}
// function playVideo(){
//     player.playVideo();
// }