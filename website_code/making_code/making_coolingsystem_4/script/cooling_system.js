function init() {
    let playButton = document.getElementById('play-button');
    let myVideo = document.getElementById('my-video');

    playButton.addEventListener("click", playPause);

    function playPause() {
        if (myVideo.paused) {
            myVideo.play();
            playButton.innerHTML = "Pause";
        } else {
            myVideo.pause();
            playButton.innerHTML = "Play";
        }
    }

}
// OPEN PG WHEN CLICKED //
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


window.addEventListener('load', init);
