// 201020 this should work but it does not

function createLine() {

    for (i=0; i<300; i++) {

        const lineElement = document.createElement('div');
        lineElement.className = "line";
        lineElement.style.left = i + 'px';
        
        lineElement.style.top = i + 'px';
        document.body.appendChild(lineElement);
    }


}


function checkMatch() {
    const targetElement = document.getElementById('target');
    const targetLeft = returnLeftValue(targetElement);
    const targetTop = returnTopValue(targetElement);


    const graphElements = Array.from(document.getElementsByClassName('line'));

    graphElements.forEach(element => {
        let elementLeft = returnLeftValue(element);
        let elementTop = returnTopValue(element);
        console.log('tl: ' + targetLeft + ', tt: ' + targetTop + ', el: ' + elementLeft + ', et: ' + elementTop);
        if(targetLeft < elementLeft){console.log('checkone')};
        if(targetLeft < elementLeft && elementLeft < targetLeft + 50 && targetTop < elementTop && elementTop < targetTop + 50) {
            console.log('match');
        } else {
            console.log('no match');
        }
        
    });
    
}

function returnLeftValue(x) {
    return window.getComputedStyle(x).getPropertyValue("left").slice(0,-2);
}

function returnTopValue(x) {
    return window.getComputedStyle(x).getPropertyValue("top").slice(0,-2);
}
