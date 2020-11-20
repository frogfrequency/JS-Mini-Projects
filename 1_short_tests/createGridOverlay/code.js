function createOverlay() {
    for (i=0; i<64; i++){
        var xOffset = (i%8) * 80;
        var yOffset = Math.floor(i/8) * 80;

        var newNr = document.createElement('div');

        
        newNr.style.left = xOffset + 'px';
        newNr.style.top = yOffset + 'px';
        newNr.style.position = 'absolute';
        newNr.innerHTML = i;
        console.log(newNr);

        let theContainer = document.getElementById('container');
        theContainer.appendChild(newNr);
        console.log(theContainer);
    }
}