

function generateWave() {

    const mainDiv = document.getElementById("main-div");
    mainDiv.innerHTML = "";
    
    var factor = document.getElementById("inputtedSteepness").value;
    console.log(factor);
    for (i=0; i<100; i++) { 
        const newDiv = document.createElement("div");
        newDiv.className = "wave-element";
        newDiv.style.left = (Math.sin(i*0.1)*factor + 200) + "px";


        mainDiv.appendChild(newDiv);

    }

}

