function init() {

    // //click green arrow
    // let leftArrow = document.getElementsByClassName('left-arrow');

    // for (var i = 0; i < leftArrow.length; i++) {
    //     leftArrow[i].addEventListener('click', () => {
    //         greenArrow();
    //         newWindow();
    //     });
    // }
}

function openHeatSink(){
    window.location.pathname = 'heat_sink.html'
}

function openHeatPipe(){
    window.location.pathname = 'heat_pipe.html'
}

function openCoolingFan(){
    window.location.pathname = 'cooling_fan.html'
}

function openElectricalWires(){
    window.location.pathname = 'electrical_wire.html'
}

///////* CHANGE COLOR OF LETTER WHEN BUTTON IS CLICKED */////////
function greenArrow() {
    console.log('green arrow clicked!');
}

window.addEventListener('load', init);
