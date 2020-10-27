//  work in progress


function gravity() {

    let vRight = document.getElementById('set-v-right').value;
    console.log(vRight);
    vRight = Number.parseInt(vRight);
    console.log(vRight);
    let vUp = document.getElementById('init-v-up').value;
    const gDown = document.getElementById('set-gravity').value;
    let elasticity = document.getElementById('elasticity').value*(-1);
    console.log(elasticity);

    setInterval(() => {
        let theBall = document.getElementById('ball');
        let topValue = window.getComputedStyle(theBall).getPropertyValue("top");
        topValue = Number.parseInt(topValue.slice(0,-2));
        let leftValue = window.getComputedStyle(theBall).getPropertyValue("left");
        leftValue = Number.parseInt(leftValue.slice(0,-2));
        // console.log('left: ' + leftValue);

        if (600 < topValue) {
            vUp = vUp * (elasticity)
        }

        vUp = vUp - gDown;
        theBall.style.top = topValue + vUp*(-1) +'px';
        theBall.style.left = leftValue + vRight +'px';
    }, 10);

    
}