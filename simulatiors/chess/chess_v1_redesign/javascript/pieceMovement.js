// globalContinuator is needed :(

let globalContinuator = true;

let whiteKingMoved = false;
let whiteRookRightMoved = false;
let whiteRookLeftMoved = false;

let blackKingMoved = false;
let blackRookRightMoved = false;
let blackRookLeftMoved = false;


// ....


function setLegalMoves(id, color, piece) {
    globalContinuator = true;
    switch(piece) {
        case 'R':
            rookMoves(id,color);
            break;
        case 'K':
            knightMoves(id,color);
            break;
        case 'B':
            bishopMoves(id,color);
            break;
        case 'Ki':
            kingMoves(id,color);
            break;
        case 'Q':
            queenMoves(id,color);
            break;
        case 'P':
            pawnMoves(id,color);
            break;
        default:
            alert("invalid argument for piece passed into setLegalMoves");
    }
}

// rook-moves

function rookMoves(originID, originColor) {
    let rookPattern = [1,10,-1,-10]
    for (let j=0; j<4; j++) {
        let template = rookPattern[j];
        console.log('\n\n\n j: ' + j + ', template: ' + template);
        console.log('------------------------------------------');
        globalContinuator = true;
        for (let i=1; i<10; i++) {
            if(globalContinuator) {
                let targetID = originID+i*template;
                addIdIfLegal(targetID, originColor)
            }
        }
    }
}

// knight-moves


function knightMoves(originID, originColor) {
    let knightPattern = [-19,-8, 12, 21, 19, 8, -12, -21];
    for (let i=0; i<8; i++) {
        addIdIfLegal(originID+knightPattern[i], originColor);
    }
}

// bishop-moves

function bishopMoves(originID, originColor) {
    let bishopPattern = [-9,11,9,-11]
    for (let j=0; j<4; j++) {
        let template = bishopPattern[j];
        console.log('\n\n\n j: ' + j + ', template: ' + template);
        console.log('------------------------------------------');
        globalContinuator = true;
        for (let i=1; i<10; i++) {
            if(globalContinuator) {
                let targetID = originID+i*template;
                addIdIfLegal(targetID, originColor)
            }
        }
    }
}

// king-moves

function kingMoves(originID, originColor) {
    let kingPattern = [-11,-10,-9, 1, 11, 10, 9, -1, -11];
    for (let i=0; i<9; i++) {
        addIdIfLegal(originID+kingPattern[i], originColor);
    }
}

// queen-moves

function queenMoves(originID, originColor) {
    rookMoves(originID, originColor);
    bishopMoves(originID, originColor);
}

// pawn-moves

function pawnMoves(originID, originColor) {
    switch(originColor) {
        case 'w':
            whitePawnMoves(originID);
            break;
        case 'b':
            blackPawnMoves(originID);
            break;
    }

}

function whitePawnMoves(originID) {
    if (gameArr[originID-10] === undefined) {
        legalMoveIDs.push(originID-10);
    }
    if (80 < originID && originID < 89) {
        if (gameArr[originID-20] === undefined && gameArr[originID-10] === undefined) {
            specialCaseEnPassant = originID-10;
            legalMoveIDs.push(originID-20);
        }
    }
    if (returnColor(gameArr[originID-11]) === 'b' || originID-11 === enPassantPlaceHolder) {
        legalMoveIDs.push(originID-11);
    }
    if (returnColor(gameArr[originID-9]) === 'b' || originID-9 === enPassantPlaceHolder) {
        legalMoveIDs.push(originID-9);
    }
}

function blackPawnMoves(originID) {
    if (gameArr[originID+10] === undefined) {
        legalMoveIDs.push(originID+10);
    }
    if (30 < originID && originID < 39) {
        if (gameArr[originID+20] === undefined && gameArr[originID+10] === undefined) {
            specialCaseEnPassant = originID+10;
            legalMoveIDs.push(originID+20);
        }
    }
    if (returnColor(gameArr[originID+11]) === 'w' || originID+11 === enPassantPlaceHolder) {
        legalMoveIDs.push(originID+11);
    }
    if (returnColor(gameArr[originID+9]) === 'w' || originID+9 === enPassantPlaceHolder) {
        legalMoveIDs.push(originID+9);
    }
}





// other functions



function addIdIfLegal(targetID, originColor) {
    console.log('________addIdIfLegal receives: targetID: ' + targetID + ', originColor: ' + originColor);
    let targetContent = gameArr[targetID];

    
    if (isOnField(targetID) === false) {
        globalContinuator = false;
    }
    if (isOnField(targetID)) {
        if(targetContent === undefined) {
            legalMoveIDs.push(targetID);
        } else if (returnColor(targetContent) === originColor) {
            globalContinuator = false;
        } else {
            legalMoveIDs.push(targetID);
            globalContinuator = false;
    }
        
    }
}
