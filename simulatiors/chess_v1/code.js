function createBoard() {

    var offset = 0;

    for (i=0; i<64; i++) {
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



// chess logic

var fieldArr = ['bR','bK','bB','bQ','bKi','bB','bK','bR',
    'bP','bP','bP','bP','bP','bP','bP','bP',
    ,,,,,,,,
    ,,,,,,,,
    ,,,,,,,,
    ,,,,,,,,
    'wP','wP','wP','wP','wP','wP','wP','wP',
    'wR','wK','wB','wQ','wKi','wB','wK','wR'];

function squareClick() {
    const fieldID = this.id;
    const fieldContent = fieldArr[fieldID];
    console.log('you just clicked on the field with id: ' + fieldID + ' where a ' + fieldArr[fieldID] + ' is standing');

    possibleMoves();
}

function possibleMoves() {


    
    console.log('i am inside the function that wants to calculate the possible moves');
}






// display

function generateFieldfromArr() {
    for (i=0; i<64; i++) {
        var currentContent = fieldArr[i];
        var currentField = document.getElementById(i);
        console.log('whichfield: ' + currentField);
        console.log('currentContent: ' + currentContent);

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


function testFunction(){
}