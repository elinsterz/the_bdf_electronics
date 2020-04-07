function init() {
    let playButton = document.getElementById('play-button');
    let myVideo = document.getElementById('my-video');
    let playIcon = document.getElementById('play-icon');
    let progressBar = document.getElementById('progress-bar');

    playButton.addEventListener("click", playPause);

    function playPause() {
        if (myVideo.paused) {
            myVideo.play();
            // playButton.innerHTML = "Pause";
            playIcon.src = "/assets/icons/pause_icon.png"
        } else {
            myVideo.pause();
            // playButton.innerHTML = "Play";
            playIcon.src = "/assets/icons/play_icon.png"
        }
    }

    myVideo.addEventListener('timeupdate', updateProgressBar, false);

    progressBar.addEventListener("click", seek);

    function seek(e) {
        var percent = e.offsetX / this.offsetWidth;
        player.currentTime = percent * player.duration;
        e.target.value = Math.floor(percent / 100);
        e.target.innerHTML = progressBar.value + '% played';
    }

    // Update the progress bar
    function updateProgressBar() {
        // Work out how much of the media has played via the duration and currentTime parameters
        var percentage = Math.floor((100 / myVideo.duration) * myVideo.currentTime);
        // Update the progress bar's value
        progressBar.value = percentage;
        // Update the progress bar's text (for browsers that don't support the progress element)
        progressBar.innerHTML = percentage + '% played';
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
