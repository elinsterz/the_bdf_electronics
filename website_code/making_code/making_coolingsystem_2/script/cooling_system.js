function init() {

    //click green arrow
    let leftArrow = document.getElementsByClassName('left-arrow');

    for (var i = 0; i < leftArrow.length; i++) {
        leftArrow[i].addEventListener('click', () => {
            greenArrow();
            newWindow();
        });
    }


    // //change line height when window below certain width
    // let headerText = document.getElementsByClassName('header-text');

    // if (window.attachEvent) {
    //     window.attachEvent('onresize', function () {
    //         if (window.innerWidth < 760)
    //             console.log("Less than 760");
    //         else
    //             console.log("More than 760");
    //     });
    // } else if (window.addEventListener) {
    //     window.addEventListener('resize', function () {
    //         if (window.innerWidth < 760) {
    //             // console.log("Less than 760");
    //             headerText.style.lineHeight = '0.8em';
    //         } else {
    //             //console.log("More than 760");
    //             headerText.style.lineHeight = '0em';
    //         }
    //     });
    // }
}

function newWindow(){
    window.location.pathname = 'heat_pipe.html'
}

///////* CHANGE COLOR OF LETTER WHEN BUTTON IS CLICKED */////////
function greenArrow() {
    console.log('green arrow clicked!');
}

window.addEventListener('load', init);
