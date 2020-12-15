// globalContinuator is needed :(

let globalContinuator = true;

let whiteKingMoved = false;
let whiteRookRightMoved = false;
let whiteRookLeftMoved = false;

let blackKingMoved = false;
let blackRookRightMoved = false;
let blackRookLeftMoved = false;


// ....


function returnLegalMoves(id, color, piece) {
    globalContinuator = true;
    let returnLegalMovesOutput = [];
    switch(piece) {
        case 'R':
            returnLegalMovesOutput = rookMoves(id,color);
            break;
        case 'K':
            returnLegalMovesOutput = knightMoves(id,color);
            break;
        case 'B':
            returnLegalMovesOutput = bishopMoves(id,color);
            break;
        case 'Ki':
            returnLegalMovesOutput = kingMoves(id,color);
            break;
        case 'Q':
            returnLegalMovesOutput = queenMoves(id,color);
            break;
        case 'P':
            returnLegalMovesOutput = pawnMoves(id,color);
            break;
        default:
            alert("invalid argument for piece passed into returnLegalMoves");
    }
    return returnLegalMovesOutput
}

// rook-moves

function rookMoves(originID, originColor) {
    let rookMovesOutput = []; 
    let rookPattern = [1,10,-1,-10];
    for (let j=0; j<4; j++) {
        let template = rookPattern[j];
        globalContinuator = true;
        for (let i=1; i<10; i++) {
            if(globalContinuator) {
                let targetID = originID+i*template;
                rookMovesOutput.push(returnIdIfLegal(targetID, originColor));
            }
        }
    }
    return rookMovesOutput
}

// knight-moves


function knightMoves(originID, originColor) {
    let knightMoveOutput = [];
    let knightPattern = [-19,-8, 12, 21, 19, 8, -12, -21];
    for (let i=0; i<8; i++) {
        knightMoveOutput.push(returnIdIfLegal(originID+knightPattern[i], originColor));
    }
    return knightMoveOutput
}

// bishop-moves

function bishopMoves(originID, originColor) {
    let bishopMovesOutput = []
    let bishopPattern = [-9,11,9,-11]
    for (let j=0; j<4; j++) {
        let template = bishopPattern[j];
        console.log('\n\n\n j: ' + j + ', template: ' + template);
        console.log('------------------------------------------');
        globalContinuator = true;
        for (let i=1; i<10; i++) {
            if(globalContinuator) {
                let targetID = originID+i*template;
                bishopMovesOutput.push(returnIdIfLegal(targetID, originColor));
            }
        }
    }
    return bishopMovesOutput
}

// king-moves

function kingMoves(originID, originColor) {
    let kingMovesOutput = [];
    let kingPattern = [-11,-10,-9, 1, 11, 10, 9, -1, -11];
    for (let i=0; i<9; i++) {
        kingMovesOutput.push(returnIdIfLegal(originID+kingPattern[i], originColor));
    }
    return kingMovesOutput
}

// queen-moves

function queenMoves(originID, originColor) {
    let queenMovesOutput = [];
    queenMovesOutput = rookMoves(originID, originColor);
    bishopMoves(originID, originColor).forEach(element => 
        queenMovesOutput.push(element));
    return queenMovesOutput
}

// pawn-moves
// pawn: distinguish between move and takes, promotion, EN PASSANT 
// maybe have only one function, where *-1 changes direction?
// have "takes" so it can be used by observedByFunction..?
// -----> make only for white first, then add functionality that differs between b/w in the same funciton ?
// ----> have two functions to evaluate moves, one "takes" one for "moves"
//              ---> takes can be used by observed by!

function pawnMoves(originID, originColor) {
    let pawnMovesOutput = [];
    switch(originColor) {
        case 'w':
            pawnMovesOutput = whitePawnMovesOnly(originID);
            pawnMovesOutput = whitePawnTakesOnly(originID);
            break;
        case 'b':
            blackPawnMoves(originID);
            break;
    }
    return pawnMovesOutput
}

// 20201210 continue here with pawn-moves

function whitePawnMovesOnly(originID) {
    let whitePawnTakesOnly = [];
    if (gameArr[originID-10] === undefined) {
        whitePawnTakesOnly.push(originID-10);
    }
    if (80 < originID && originID < 89) {
        if (gameArr[originID-20] === undefined && gameArr[originID-10] === undefined) {
            specialCaseEnPassant = originID-10;
            legalMoveIDs.push(originID-20);
        }
    }
    return whitePawnTakesOnly;
}

function whitePawnTakesOnly(originID) {
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



function returnIdIfLegal(targetID, originColor) {
    console.log('________returnIdIfLegal receives: targetID: ' + targetID + ', originColor: ' + originColor);
    let targetContent = gameArr[targetID];

    
    if (isOnField(targetID) === false) {
        globalContinuator = false;
    }
    if (isOnField(targetID)) {
        if(targetContent === undefined) {
            return targetID
        } else if (returnColor(targetContent) === originColor) {
            globalContinuator = false;
        } else {
            globalContinuator = false;
            return targetID
    }
        
    }
}
