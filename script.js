//This project has been done as a quick & messy exercise. 
//Could be refactored in a clearer way, with i.e. class constructors, getters & setters for 
//scrollLeft or xPosition as a shared variable. Also need to consider pressing arrow buttons before animation has finished.

function next() {
    let xPosition = document.querySelector('#slideContainer').scrollLeft;
    if (xPosition === 600) {
        xPosition = 0;
    }
    else {
        xPosition += 300;
    }
    document.querySelector('#slideContainer').scrollLeft = xPosition;
    activeSlide(xPosition);
}

function previous() {
    let xPosition = document.querySelector('#slideContainer').scrollLeft;
    if (xPosition === 0) {
        xPosition = 600;
    }
    else {
        xPosition -= 300;
    }
    document.querySelector('#slideContainer').scrollLeft = xPosition;
    activeSlide(xPosition);
}

function activeSlide(i) {

    document.querySelector('#navDot1').classList.remove('active');
    document.querySelector('#navDot2').classList.remove('active');
    document.querySelector('#navDot3').classList.remove('active');
    //could change below to toggle with test conditional
    if (i === 0) {  
        document.querySelector('#navDot1').classList.add('active');
    }
    else if (i === 300) {
        document.querySelector('#navDot2').classList.add('active');
    }
    else if (i === 600) {
        document.querySelector('#navDot3').classList.add('active');
    }
}

function circleNav(clickedID) {
    let xPosition = document.querySelector('#slideContainer').scrollLeft;
    if (clickedID === 'navDot1') {
        xPosition = 0   
    }
    else if (clickedID === 'navDot2') {
        xPosition = 300   
    }
     else if (clickedID === 'navDot3') {
        xPosition = 600   
    }
    activeSlide(xPosition);
    document.querySelector('#slideContainer').scrollLeft = xPosition;
}
setInterval(next, 5000)
activeSlide(document.querySelector('#slideContainer').scrollLeft);
