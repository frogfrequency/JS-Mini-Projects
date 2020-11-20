


// import

import {rookMoves, bishopMoves} from './pieceMoveFunctions.js';


import {returnColor} from './globalFunctions.js';

// chess logic


var fieldArr = ['bR','bK','bB','bQ','bKi','bB','bK','bR',
    'bP','bP','bP','bP','bP','bP','bP','bP',
    'bB','bB',,,,'bB',,,
    'bB',,,,,'wB',,,
    ,,,'bB',,,,,
    ,,'wQ',,,,,'wR',
    'wP','wP','wP','wP','wP','wP','wP','wP',
    'wR','wK','wB','wQ','wKi','wB','wK','wR'];

function squareClick() {
    const fieldID = parseInt(this.id); // since the id is returned as a string we have to parseInt it
    const fieldContent = fieldArr[fieldID];
    console.log('------------------------------------------\nyou just clicked on the field with id: ' + fieldID + ' where a ' + fieldArr[fieldID] + ' is standing');

    possibleMoves(fieldID, fieldContent);
}

function possibleMoves(id, piece) {

    if (piece === undefined){
        alert('square empty!')
    } else {
        var color = returnColor(piece);
        var pieceType = returnPieceType(piece);

        console.log('_____returnColor returns: ' + color);          // control logs for color and type
        console.log('_____returnPieceType returns: ' + pieceType);

        var moveArr = [];
        moveArr = calcMoves(color, pieceType, id);
        console.log('possible moves for this piece: ' + moveArr);

        colorizePossible(moveArr);
    }


    // highlight the possible moves for this piece
    // ready up for moving this piece to the wanted field
}

function returnPieceType(input) {
    return input.substring(1);
} 

function calcMoves(color, pieceType, id) { // function that should return an array of ids where the piece can go
    switch(pieceType) {
        case 'P':
            return [16,24]; // test-value / not yet defined
        case 'R':
            return rookMoves(color, id, fieldArr);
        case 'K':
            return [11,16,18]; // test-value / not yet defined
        case 'B':
            return bishopMoves(color, id, fieldArr); // test-value / not yet defined
        case 'Ki':
            return [3,5,11,12,13]; // test-value / not yet defined
        case 'Q':
            return [11,19,27,35,43,51,59, 12,21,30,39, 10, 17, 24]; // test-value / not yet defined
        default:
        alert('MAJOR ERROR: invalid pieceType passed into calcMoves --> should never happen!')
      }
}

// chess logic      // piece-move-functions
                



// chess logic      // piece-move-functions     // prerequisites
                













// display


function createBoard() { // creates the board

    var offset = 0;

    for (let i=0; i<64; i++) {
        var newSquare = document.createElement('div');
        newSquare.id = i;
        if ( (i)%8 === 0) {
            if (offset === 0){
                offset = 1;
            } else {
                offset = 0;
            }
        }
        if ((i+offset)%2 === 0) {
            newSquare.className += "square black-square";
        } else { 
            newSquare.className = "square white-square";
        }
        newSquare.addEventListener("click", squareClick);

        document.getElementById('container').appendChild(newSquare);
    }
}

function generateFieldfromArr() { // creates inserts pieces from the fieldArr
    for (let i=0; i<64; i++) {
        var currentContent = fieldArr[i];
        var currentField = document.getElementById(i);

        var img = document.createElement('img');
        
        if (currentContent === 'bR') {
            img.src = './pieces/rook_black.png';
            var currentField = document.getElementById(i);
            currentField.appendChild(img);
        } else if (currentContent === 'bK') {
            img.src = './pieces/knight_black.png';
            var currentField = document.getElementById(i);
            currentField.appendChild(img);
        } else if (currentContent === 'bB') {
            img.src = './pieces/bishop_black.png';
            var currentField = document.getElementById(i);
            currentField.appendChild(img);
        } else if (currentContent === 'bQ') {
            img.src = './pieces/queen_black.png';
            var currentField = document.getElementById(i);
            currentField.appendChild(img);
        } else if (currentContent === 'bKi') {
            img.src = './pieces/king_black.png';
            var currentField = document.getElementById(i);
            currentField.appendChild(img);
        } else if (currentContent === 'bP') {
            img.src = './pieces/pawn_black.png';
            var currentField = document.getElementById(i);
            currentField.appendChild(img);
        } else if (currentContent === 'wR') {
            img.src = './pieces/rook_white.png';
            var currentField = document.getElementById(i);
            currentField.appendChild(img);
        } else if (currentContent === 'wK') {
            img.src = './pieces/knight_white.png';
            var currentField = document.getElementById(i);
            currentField.appendChild(img);
        } else if (currentContent === 'wB') {
            img.src = './pieces/bishop_white.png';
            var currentField = document.getElementById(i);
            currentField.appendChild(img);
        } else if (currentContent === 'wQ') {
            img.src = './pieces/queen_white.png';
            var currentField = document.getElementById(i);
            currentField.appendChild(img);
        } else if (currentContent === 'wKi') {
            img.src = './pieces/king_white.png';
            var currentField = document.getElementById(i);
            currentField.appendChild(img);
        } else if (currentContent === 'wP') {
            img.src = './pieces/pawn_white.png';
            var currentField = document.getElementById(i);
            currentField.appendChild(img);
        }
    }
}



function colorizePossible (arr) {
    
        arr.forEach(element => {
            var x = document.getElementById(element);
            x.style.backgroundColor = "red";
        });
    
}



//__________________id-overlay (can be removed at the end)

function createOverlay() {
    for (let i=0; i<64; i++){
        var xOffset = (i%8) * 80 + 11;
        var yOffset = Math.floor(i/8) * 80 + 11;

        var newNr = document.createElement('div');

        
        newNr.style.left = xOffset + 'px';
        newNr.style.top = yOffset + 'px';
        newNr.style.position = 'absolute';
        newNr.innerHTML = i;
        console.log(newNr);

        let theContainer = document.getElementById('over-lay-container');
        theContainer.appendChild(newNr);
        console.log(theContainer);
    }
}

//____________________TRYOUT-FUNCTION HERE_________________//


function testFunction(){
    console.log('i work a bit');
}


//_____________________test-boards-arrs__________________//

            //normal field
// var fieldArr = ['bR','bK','bB','bQ','bKi','bB','bK','bR',
//     'bP','bP','bP','bP','bP','bP','bP','bP',
//     ,,,,,,,,
//     ,,,,,,,,
//     ,,,,,,,,
//     ,,,,,,,,
//     'wP','wP','wP','wP','wP','wP','wP','wP',
//     'wR','wK','wB','wQ','wKi','wB','wK','wR'];




// eventlisteners sandy-style

document.getElementById('generateFieldBtn').addEventListener('click', generateFieldfromArr);
document.getElementById('testFunctionBtn').addEventListener('click', testFunction);


createBoard();
createOverlay();
generateFieldfromArr();