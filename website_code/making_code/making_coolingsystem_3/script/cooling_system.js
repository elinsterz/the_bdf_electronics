function init() {

    // Grab a handle to the video
    var video = document.getElementById("video");
    // Turn off the default controls
    video.controls = false;
    var playpause = document.getElementById("playpause");

    video.addEventListener("timeupdate", updateProgress, false);
}

function openHeatSink() {
    window.location.pathname = 'heat_sink.html'
}

function openHeatPipe() {
    window.location.pathname = 'heat_pipe.html'
}

function openCoolingFan() {
    window.location.pathname = 'cooling_fan.html'
}

function openElectricalWires() {
    window.location.pathname = 'electrical_wire.html'
}

///////* CHANGE COLOR OF LETTER WHEN BUTTON IS CLICKED */////////
function greenArrow() {
    console.log('green arrow clicked!');
}

/* TOGGLE PLAY PAUSE */
function togglePlayPause() {
    var playpause = document.getElementById("playpause");
    if (video.paused || video.ended) {
       playpause.title = "pause";
       playpause.innerHTML = "pause";
       video.play();
    }
    else {
       playpause.title = "play";
       playpause.innerHTML = "play";
       video.pause();
    }
 }

 /* VOLUME BAR */
 function setVolume() {
    var volume = document.getElementById("volume");
    video.volume = volume.value;
 }

/* PROGRESS BAR */
function updateProgress() {
    var progress = document.getElementById("progress");
    var value = 0;
    if (video.currentTime > 0) {
        value = Math.floor((100 / video.duration) * video.currentTime);
    }
    progress.style.width = value + "%";
}


window.addEventListener('load', init);
