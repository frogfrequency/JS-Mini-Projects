// variables

let legalMovesFor = []
let legalMoveIDs = [];
let halfMoveCounter = 0;

let gameArr = [,,,,,,,,,,,,,,,,,,,,,

    'bR','bK','bB','bKi','bQ','bB','bK','bR'
,,,         'bP','bP','bP','bP','bP','bP','bP','bP'     
,,,         ,,,,,,,     
,,,         ,,,,,,,
,,,         ,,,,,,,
,,,         ,,,,,,,
,,,         'wP','wP','wP','wP','wP','wP','wP','wP'
,,,         'wR','wK','wB','wQ','wKi','wB','wK','wR'
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
        setLegalMoves(clickedFieldID, clickedColor, clickedPiece);
        
        // evaluate legal moves and assign them to legalMoves set legalMovesFor too
        colorizeLegalMoves(legalMoveIDs);
    } 

};


function makeMove(cID, movesFor) {
    gameArr[cID] = gameArr[movesFor];
    gameArr[movesFor] = '';
    refreshBoard();
    halfMoveCounter++;
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



