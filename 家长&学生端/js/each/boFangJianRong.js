// 视屏播放兼容苹果自动播放
(function () {
    var u = navigator.userAgent;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    var iosPlayer = '<audio id="bgmusic" src="../bgsound/bgsound.wav" loop autoplay></audio>';
    // console.log('是否是Android：'+isAndroid);
    // console.log('是否是iOS：'+isiOS); 
    if(isiOS){
        $('#bgAndroid').remove();
        $('body').append(iosPlayer);
        function log(info) {
            console.log(info);
            // alert(info);
        }
        function forceSafariPlayAudio() {
            audioEl.load(); // iOS 9   还需要额外的 load 一下, 否则直接 play 无效
            audioEl.play(); // iOS 7/8 仅需要 play 一下
        }
        var audioEl = document.getElementById('bgmusic');
        // 可以自动播放时正确的事件顺序是
        // loadstart
        // loadedmetadata
        // loadeddata
        // canplay
        // play
        // playing
        // 
        // 不能自动播放时触发的事件是
        // iPhone5  iOS 7.0.6 loadstart
        // iPhone6s iOS 9.1   loadstart -> loadedmetadata -> loadeddata -> canplay
        audioEl.addEventListener('loadstart', function () {
            log('loadstart');
        }, false);
        audioEl.addEventListener('loadeddata', function () {
            log('loadeddata');
        }, false);
        audioEl.addEventListener('loadedmetadata', function () {
            log('loadedmetadata');
        }, false);
        audioEl.addEventListener('canplay', function () {
            log('canplay');
        }, false);
        audioEl.addEventListener('play', function () {
            log('play');
            // 当 audio 能够播放后, 移除这个事件
            window.removeEventListener('touchstart', forceSafariPlayAudio, false);
        }, false);
        audioEl.addEventListener('playing', function () {
            log('playing');
        }, false);
        audioEl.addEventListener('pause', function () {
            log('pause');
        }, false);
    
        // 由于 iOS Safari 限制不允许 audio autoplay, 必须用户主动交互(例如 click)后才能播放 audio,
        // 因此我们通过一个用户交互事件来主动 play 一下 audio.
        window.addEventListener('touchstart', forceSafariPlayAudio, false);
    }
})();