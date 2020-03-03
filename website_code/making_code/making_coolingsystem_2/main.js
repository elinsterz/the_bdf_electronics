function init() {

    let leftArrow = document.getElementsByClassName('left-arrow');

    for (var i = 0; i < leftArrow.length; i++) {
        leftArrow[i].addEventListener('click', greenArrow);
    }
    
}

///////* CHANGE COLOR OF LETTER WHEN BUTTON IS CLICKED */////////
function greenArrow() {
    alert('hi!');

}

window.addEventListener('load', init);
