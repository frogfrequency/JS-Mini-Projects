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
    const targetLeft = returnValue(targetElement, "left");
    const targetTop = returnValue(targetElement, "top");


    const graphElements = Array.from(document.getElementsByClassName('line'));

    graphElements.forEach(element => {
        let elementLeft = returnValue(element, "left");
        let elementTop = returnValue(element, "top");
        console.log('tl: ' + targetLeft + ', tt: ' + targetTop + ', el: ' + elementLeft + ', et: ' + elementTop);
        if(targetLeft < elementLeft){console.log('checkone')};
        if(targetLeft < elementLeft && elementLeft < targetLeft + 50 && targetTop < elementTop && elementTop < targetTop + 50) {
            console.log('match');
        } else {
            console.log('no match');
        }
        
    });
    
}

    // these two are not used anymore because with have the returnValue(element, whichValue) where you can specify the value you want returned

// function returnLeftValue(x) {
//     let leftValue = window.getComputedStyle(x).getPropertyValue("left")
//     leftValue = Number.parseInt(leftValue.slice(0,-2));
//     return leftValue;
// }

// function returnTopValue(x) {
//     let topValue = window.getComputedStyle(x).getPropertyValue("top")
//     topValue = Number.parseInt(topValue.slice(0,-2));
//     return topValue;
// }

function returnValue(element, whichValue){
    let value = window.getComputedStyle(element).getPropertyValue(whichValue)
    value = Number.parseInt(value.slice(0,-2));
    return value;
}
