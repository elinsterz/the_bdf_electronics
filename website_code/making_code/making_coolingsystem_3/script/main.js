function init() {

    //click green arrow
    let leftArrow = document.getElementsByClassName('left-arrow');

    for (var i = 0; i < leftArrow.length; i++) {
        leftArrow[i].addEventListener('click', greenArrow);
    }

    //change line height when window below certain width
    if (window.attachEvent) {
        window.attachEvent('onresize', function() {
          if (window.innerWidth < 760)
            console.log("Less than 760");
          else
            console.log("More than 760");
        });
      } else if (window.addEventListener) {
        window.addEventListener('resize', function() {
          if (window.innerWidth < 760)
            console.log("Less than 760");
          else
            console.log("More than 760");
        }, true);
      } else {
        //The browser does not support Javascript event binding
      }

}

///////* CHANGE COLOR OF LETTER WHEN BUTTON IS CLICKED */////////
function greenArrow() {
    alert('hi!');

}

window.addEventListener('load', init);
