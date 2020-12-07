function setLegalMoves(id, color, piece) {
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

    legalMoveIDs.push(id-10);
    legalMoveIDs.push(id-11);
    legalMoveIDs.push(id-12);
    legalMovesFor = [id];
}

function rookMoves(originID, origincolor) {
    for (let i=1; i<1000; i++) {
        addIdIfLegal(originID+i, origincolor);
    }
}

function knightMoves() {
    
}

function bishopMoves() {
    
}

function kingMoves() {
    
}

function queenMoves() {
    
}

function pawnMoves() {
    
}


function addIdIfLegal(targetID, originColor) {
    console.log(`addIdIfLegal receives ${targetID}   ${originColor}`);
    if (isOnField(targetID)) {
        gameArr[targetID]

    }
}