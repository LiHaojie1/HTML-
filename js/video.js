function myPause() {
    var myvideo = document.getElementById("videoplace");
    if (myvideo.paused) {
        myvideo.play();
    }
    else {
        myvideo.pause();
    }
    this.myPlaytime();
}

function myStop() {
    var myvideo = document.getElementById("videoplace");
    myvideo.currentTime = 0;
    myvideo.pause();
    this, myPlaytime();
}

function myPlaytime() {
    var myvideo = document.getElementById("videoplace");
    document.getElementById("videotime").innerHTML = myvideo.currentTime.toFixed(2) + "/" + myvideo.duration.toFixed(2);
    document.getElementById("percent").style.width = (myvideo.currentTime / myvideo.duration.toFixed(0)) * 300 + "px";
    document.getElementById("progress").value = myvideo.currentTime / myvideo.duration * 100;
    var con = setTimeout("myPlaytime()", 20);
    if (myvideo.currentTime == myvideo.duration || myvideo.paused == true) {
        clearTimeout(con);
    }
}


function mySmall() {
    var myvideo = document.getElementById("videoplace");
    myvideo.width = 240;
}

function myReset() {
    var myvideo = document.getElementById("videoplace");
    myvideo.width = 360;
}

function myBig() {
    var myvideo = document.getElementById("videoplace");
    myvideo.width = 640;
}

function myFullscreen() {
    var myvideo = document.getElementById("videoplace");
    myvideo.webkitRequestFullscreen();
}

function showVolume() {
    var myvideo = document.getElementById("videoplace");
    document.getElementById("myVolume").innerHTML = (myvideo.volume * 100).toFixed(0);
    if (myvideo.volume >= 0.7) {
        document.getElementById("myVolume").style.color = "red";
    } else if (myvideo.volume >= 0.3) {
        document.getElementById("myVolume").style.color = "orange";
    } else {
        document.getElementById("myVolume").style.color = "green";
    }
}

function myVolDown() {
    var myvideo = document.getElementById("videoplace");
    if (myvideo.volume <= 0.05) {
        myvideo.volume = 0;
    } else {
        myvideo.volume -= 0.05;
    }
    vol = myvideo.volume;
    this.showVolume();
}

function myVolUp() {
    var myvideo = document.getElementById("videoplace");
    if (myvideo.volume >= 0.95) {
        myvideo.volume = 1;
    } else {
        myvideo.volume += 0.05;
    }
    vol = myvideo.volume;
    this.showVolume();
}

var vol = 0;                         　　　　　　　　　　　　　　　　　 //mute前のVolumeを記録
function myMute() {
    var myvideo = document.getElementById("videoplace");
    if (myvideo.volume == 0) {
        myvideo.volume = vol;
    } else {
        vol = myvideo.volume;
        myvideo.volume = 0;
    }
    this.showVolume();
}

function myBack() {
    var myvideo = document.getElementById("videoplace");
    if (myvideo.currentTime - 1 <= 0) {
        myvideo.currentTime = 0;
    } else {
        myvideo.currentTime -= 1;
    }
    this.myPlaytime();
}

function myFront() {
    var myvideo = document.getElementById("videoplace");
    if (myvideo.currentTime + 1 >= myvideo.duration) {
        myvideo.currentTime = myvideo.duration;
    } else {
        myvideo.currentTime += 1;
    }
    this.myPlaytime();
}

function showMP4() {
    var myvideo = document.getElementById("videoplace");
    var x = document.createElement("VIDEO");
    if (x.canPlayType("video/mp4")) {
        x.setAttribute("src", "../src/videos/mov_bbb.mp4");
        x.setAttribute("width", "240");
        x.setAttribute("controls", "controls");
        document.body.appendChild(x);                        //重要！！Elementの新築、Attributesの編集、HTMLへの追加
    } else {
        console.log("showMP4() Failed due to non-MP4 file.")
    }
}

function myPlay() {
    this.myPlaytime();
    this.showVolume();
}

function myKey(event) {
    var keyCode = event.keyCode;
    console.log(event.key);
    switch (keyCode) {
        case 13:   //Enter
            this.myFullscreen();
            break;
        case 32:   //Space
            this.myPause();
            break;
        case 37:   //Left
            this.myBack();
            break;
        case 39:  //Right
            this.myFront();
            break;
        case 38:  //Up
            this.myVolUp();
            break;
        case 40:  //Down
            this.myVolDown();
            break;
        case 77:  //"Mm"
            this.myMute();
            break;
    }
    // var key = event.key;
    // console.log(key);
    // switch(key) {
    //     case "ArrowUp":
    //         this.myVolUp();
    //         break;
    //     case "ArrowDown":
    //         this.myVolDown();
    //         break;
    // }
}