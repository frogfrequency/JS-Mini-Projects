const gridFactor = 50;


function onLoad() {
    
    for (i=0; i<11; i++){
        const horzNr = document.createElement('div');
        horzNr.style.position = "absolute";
        horzNr.style.left = i*gridFactor + "px";
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
    const chooseColor = document.getElementById('choose-color').value;

    console.log('my m:' + m + 'my c: ' + c);

    for (i=0; i<500; i++){
        const newPix = document.createElement('div');
        newPix.style.position = "absolute";
        newPix.style["background-color"] = chooseColor;
        newPix.style.width = '3px';
        newPix.style.height = '3px';
        newPix.style.left = i + 5 + 'px';

            const yOffset = (i*m) + c*gridFactor;
        newPix.style.top = 505-yOffset + 'px';

        document.body.appendChild(newPix);

    }    
}