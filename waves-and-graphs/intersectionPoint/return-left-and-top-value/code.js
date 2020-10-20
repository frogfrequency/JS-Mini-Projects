function createLine() {
    for (i=0; i<300; i++) {

        const lineElement = document.createElement('div');
        lineElement.className = "line";
        lineElement.style.left = i + 'px';
        
        lineElement.style.top = i + 'px';
        document.body.appendChild(lineElement);
    }
}


function returnIt() {
    const targetElement = document.getElementById('target');
    console.log('targetElement: ' + targetElement);

    console.log(returnLeftValue(targetElement) + '    ' + returnTopValue(targetElement));
    
}


function returnLeftValue(x) {
    return window.getComputedStyle(x).getPropertyValue("left").slice(0,-2);
}

function returnTopValue(x) {
    return window.getComputedStyle(x).getPropertyValue("top").slice(0,-2);
}

