// variables

let specialCaseEnPassant = 0;
let enPassantPlaceHolder = undefined;

let legalMovesFor = []
let legalMoveIDs = [];
let halfMoveCounter = 0;

let observedByWhite = []; // watch out for pawns which only observe diagonal
let observedByBlack = [];

let gameArr = [
,,,,,,,,,,,,,,,,,,
,,,         'bR',,'wK',,'bKi',,,'bR'
,,,         ,'bP','bB',,'bQ',,'bP','bP'     
,,,         ,,,,,,,'bB'     
,,,         'bQ',,,'wB',,,,'bP'
,,,         ,,,,'wKi','wP','wB',
,,,         ,,'bP',,,,'wP','bKi'
,,,         'wP','wP','wQ','wP','wP',,'wQ','wP'
,,,         'wR',,,,'wKi','bK',,'wR'
,,,,,,,,,,,,,,,,,,,,,,       
];

// logic

function initialize() {
    createEmptyBoard();
    createOverlay();
    resetGameArr();
    fillSquares();
}


function resetGameArr() {

};





function squareClicked() {
    
    const clickedFieldID = parseInt(this.id);
    const fieldContent = gameArr[clickedFieldID];
    const clickedColor = returnColor(fieldContent);
    const clickedPiece = returnPiece(fieldContent);
        console.log(`
            clickedFieldID: ${clickedFieldID}
            fieldContent: ${fieldContent}
            clickedColor: ${clickedColor}
            clickedPiece: ${clickedPiece}
            
            legalMovesFor: ${legalMovesFor} 
            legalMoveIDs: ${legalMoveIDs}

            `);

    
    if (clickedIsValidMove(clickedFieldID)) {
        console.log(`the clicked one is a valid move`);
        makeMove(clickedFieldID, legalMovesFor);
        resetLegalMoves();
    } else if (colorToMove() === clickedColor) {
        resetLegalMoves();
        refreshBoard();
        console.log(`now is the clicked colors turn yes`);
        legalMovesFor = clickedFieldID;
        legalMoveIDs = returnLegalMoves(clickedFieldID, clickedColor, clickedPiece);
        colorizeLegalMoves(legalMoveIDs);
    } 
};


function makeMove(cID, movesFor) {
    
    enPassantPlaceHolder = 0;
    if (specialCaseEnPassant === cID+10 || specialCaseEnPassant === cID-10) {
        enPassantPlaceHolder = specialCaseEnPassant;
    }
    specialCaseEnPassant = 0;
    // insert check for moves that kill the king here

    // returnObservedBy('b');
    // returnObservedBy('w');

    // actual moving below this
    gameArr[cID] = gameArr[movesFor];
    gameArr[movesFor] = undefined;
    refreshBoard();
    colorizeSpecialCaseEnPassant(enPassantPlaceHolder);
    halfMoveCounter++;
}


function castle() {

}

////////// observedBy ...

function returnObservedBy(observingColor) {
    for (let i=0; i<99; i++) {
        let content = gameArr[i];
        let color = returnColor(content);
        let piece = returnPiece(content);
        if (content !== undefined && color === observingColor) {
            if (piece === 'P') {
                // to continue here maybe the whole pawnMove should be split in "moves" and "takes" so the takes-moves can be used here easily
            } else {
                returnLegalMoves(i, color, piece);
                // nonono
            }

        } 
        
    }
}






/////// subsidiary functions

function colorToMove(){
    let remainder = halfMoveCounter%2;
    if (remainder === 0) {
        return 'w'
    } else if (remainder === 1) {
        return 'b'
    }
}

function returnColor(content) {
        if (content === undefined){
            return;
        } else {
        return content.charAt(0);
        }
}
function returnPiece(content) {
    if (content === undefined){
        return;
    } else {
    return content.substring(1);
    }
}

function clickedIsValidMove(id) {
    for (let i=0; i<legalMoveIDs.length; i++) {
        if (id === legalMoveIDs[i]) {
            return true
        }   
    }
    return false
}

function resetLegalMoves() {
    legalMovesFor = []
    legalMoveIDs = [];
}

function refreshBoard() {
    createEmptyBoard();
    fillSquares();
}

function isOnField(id) {
    if (20 < id && id < 99) {
        if (id%10 !== 9 && id%10 !== 0) {
            return true;
        } else {
            return false
        }
    }
}




//////////////////////// testfunction


document.getElementById('test-function-button').addEventListener('click', testFunction);

function testFunction() {
    gameArr[55] = 'bB';
};

document.getElementById('test-function-button2').addEventListener('click', testFunction2);

function testFunction2() {
    console.log(returnPiece(gameArr[95]));
};

document.getElementById('refresh-button').addEventListener('click', refreshBoard);

document.getElementById('logGameArr-button').addEventListener('click', logGameArr);

function logGameArr() {
    for(let i=0; i<99; i++) {
        // if (isOnField(i)) {
            console.log(i + ': ' + gameArr[i]);
        // }
    }
};











//////////////////////////////// sample gamearrays

// ,,,,,,,,,,,,,,,,,,
// ,,,         'bR','bK','bB','bQ','bKi','bB','bK','bR'
// ,,,         'bP','bP','bP','bP','bP','bP','bP','bP'     
// ,,,         ,,,,,,,     
// ,,,         ,,,,,,,
// ,,,         ,,,,,,,
// ,,,         ,,,,,,,
// ,,,         'wP','wP','wP','wP','wP','wP','wP','wP'
// ,,,         'wR','wK','wB','wQ','wKi','wB','wK','wR'
// ,,,,,,,,,,,,,,,,,,,,,,






// ,,,,,,,,,,,,,,,,,,
// ,,,         'bR',,,,'bKi',,,'bR'
// ,,,         ,'bP','bB',,'bQ',,'bP','bP'     
// ,,,         ,,,,,,,'bB'     
// ,,,         'bQ',,,'wB',,,,'bP'
// ,,,         ,,,,'wKi','wP','wB',
// ,,,         ,,'bP',,,,'wP','bKi'
// ,,,         'wP','wP','wQ','wP','wP',,'wQ','wP'
// ,,,         'wR',,,,'wKi',,,'wR'
// ,,,,,,,,,,,,,,,,,,,,,,       