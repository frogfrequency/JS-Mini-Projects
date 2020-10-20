const gridFactor = 50;


function onLoad() {
    
    for (i=0; i<11; i++){
        const horzNr = document.createElement('div');
        horzNr.style.position = "absolute";
        horzNr.style.left = (i*gridFactor) + "px";
        horzNr.style.top = '500px';
        horzNr.textContent = i;
        document.body.appendChild(horzNr);

        const vertNr = document.createElement('div');
        vertNr.style.position = "absolute";
        vertNr.style.left = '0px';
        vertNr.style.top = 500-(i*gridFactor) + "px";
        vertNr.textContent = i;
        document.body.appendChild(vertNr);
    }
}


function drawGraph() {
    const m = document.getElementById('chooseM').value;
    const c = document.getElementById('chooseC').value;

    for (i=0; i<500; i++){
        const newPix = document.createElement('div');
        newPix.style.position = "absolute";
        newPix.style["background-color"] = 'black';
        newPix.style.width = '1px';
        newPix.style.height = '1px';
        newPix.className = 'graphElement';
        newPix.style.left = i + 'px';

            const yOffset = (i*m) + c*gridFactor;
        newPix.style.top = 500-yOffset + 'px';

        document.body.appendChild(newPix);

    }    
}


function drawTargets() {
    

    for (i=0; i<2; i++){
        const newTarget = document.createElement('div');
        newTarget.style.position = "absolute";
        newTarget.style["background-color"] = 'red';
        newTarget.style.width = '50px';
        newTarget.style.height = '50px';
        newTarget.className = 'targetElement';
        newTarget.style.left = Math.floor(Math.random()*450) + 'px';
        newTarget.style.top = Math.floor(Math.random()*450) + 'px';

        document.body.appendChild(newTarget);

    }    
}