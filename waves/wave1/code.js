

function generateWave() {

    const mainDiv = document.getElementById('main-div');
    mainDiv.innerHTML = "";
    
    const factor = document.getElementById("inputtedSteepness").value;
    const desiredColor = document.getElementById("bg-color-selector").value;
    console.log(desiredColor);
    
    console.log(factor);
    for (i=0; i<1000; i++) { 
        const newDiv = document.createElement("div");
        newDiv.className = "wave-element";
        newDiv.style["background-color"] = desiredColor;
        newDiv.style.left = (Math.sin(i*0.1)*factor + 200) + "px";


        setTimeout(() => {
            mainDiv.appendChild(newDiv);
        }, 50 * i);

    }

}

