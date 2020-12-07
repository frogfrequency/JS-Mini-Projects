function createEmptyBoard() {
    document.getElementById('container').innerHTML = '';
    for (let i=21; i<99; i++) {
        if (i%10 !== 9 && i%10 !== 0) {
            let offSet = Math.floor(i/10)%2; // offsets changes color of first-square every other rank
            let newDiv = document.createElement('div')
            newDiv.className = 'square';
            newDiv.id = i;
            if ( (i+offSet)%2 === 0) {
                newDiv.className = 'square black-square'    
            } else {
                newDiv.className = 'square white-square'
            }
            newDiv.addEventListener('click', squareClicked)
            document.getElementById('container').appendChild(newDiv);
        }
    }
}

function createOverlay() {
    let allSquares = document.querySelectorAll('.square');
        for (let i=0; i<64; i++){
            var xOffset = (i%8) * 80 + 11;
            var yOffset = Math.floor(i/8) * 80 + 11;
            var newNr = document.createElement('div');
            newNr.style.left = xOffset + 'px';
            newNr.style.top = yOffset + 'px';
            newNr.style.position = 'absolute';
            newNr.innerHTML = allSquares[i].id;
            document.getElementById('overlay-container').appendChild(newNr);
        }
}



function fillSquares() { // creates inserts pieces from the gameArr
    
    
    for (let i=21; i<99; i++) {
        if (i%10 !== 9 && i%10 !== 0) {
            var currentContent = gameArr[i];
            var currentField = document.getElementById(i);
            currentField.innerHTML = '';
            var img = document.createElement('img');
            
            if (currentContent === 'bR') {
                img.src = './pieces/bR.png';
                var currentField = document.getElementById(i);
                currentField.appendChild(img);
            } else if (currentContent === 'bK') {
                img.src = './pieces/bK.png';
                var currentField = document.getElementById(i);
                currentField.appendChild(img);
            } else if (currentContent === 'bB') {
                img.src = './pieces/bB.png';
                var currentField = document.getElementById(i);
                currentField.appendChild(img);
            } else if (currentContent === 'bQ') {
                img.src = './pieces/bQ.png';
                var currentField = document.getElementById(i);
                currentField.appendChild(img);
            } else if (currentContent === 'bKi') {
                img.src = './pieces/bKi.png';
                var currentField = document.getElementById(i);
                currentField.appendChild(img);
            } else if (currentContent === 'bP') {
                img.src = './pieces/bP.png';
                var currentField = document.getElementById(i);
                currentField.appendChild(img);
            } else if (currentContent === 'wR') {
                img.src = './pieces/wR.png';
                var currentField = document.getElementById(i);
                currentField.appendChild(img);
            } else if (currentContent === 'wK') {
                img.src = './pieces/wK.png';
                var currentField = document.getElementById(i);
                currentField.appendChild(img);
            } else if (currentContent === 'wB') {
                img.src = './pieces/wB.png';
                var currentField = document.getElementById(i);
                currentField.appendChild(img);
            } else if (currentContent === 'wQ') {
                img.src = './pieces/wQ.png';
                var currentField = document.getElementById(i);
                currentField.appendChild(img);
            } else if (currentContent === 'wKi') {
                img.src = './pieces/wKi.png';
                var currentField = document.getElementById(i);
                currentField.appendChild(img);
            } else if (currentContent === 'wP') {
                img.src = './pieces/wP.png';
                var currentField = document.getElementById(i);
                currentField.appendChild(img);
            }
        }
    }
}

function colorizeLegalMoves(arr) {
    arr.forEach(element => {
        if (isOnField(element)) {
                var x = document.getElementById(element);
                x.style.backgroundColor = "red";
        }
    });
}