// 20201120 this will be a huuuuuge mess... but it will work and teach us alot


// imports
import {returnColor, wKiMoved, wRLeftMoved, wRRightMoved, bKiMoved, bRLeftMoved, bRRightMoved} from './globalFunctions.js';


// logic

// logic        // special memory (castle, en passant)

// logic        // rook

export function rookMoves(color, idx, arr) {
    var outputMoves = [];

    var amount = 8 - (idx % 8);
    for (let i=idx+1; i<idx + amount; i++) { // right: starts with next field on the right, does it till end of row
        var content = arr[i];
        if (content === undefined) {
            outputMoves.push(i);
        } else if (color === returnColor(content)) {
            break;
        } else {
            outputMoves.push(i);
            break;
        }
    }

    amount = (idx % 8) + 1;
    for (let i=idx-1; i>idx - amount; i--) { // left: starts with next field on the left, does it till start of row
        var content = arr[i];
        if (content === undefined) {
            outputMoves.push(i);
        } else if (color === returnColor(content)) {
            break;
        } else {
            outputMoves.push(i);
            break;
        }
    }
    
    for (let i=idx+8; i<63; i=i+8) { // down: starts with next field on the next line till edge of board
        var content = arr[i];
        if (content === undefined) {
            outputMoves.push(i);
        } else if (color === returnColor(content)) {
            break;
        } else {
            outputMoves.push(i);
            break;
        }
    }

    for (let i=idx-8; 0<i; i=i-8) { // up: starts with next field on previous line till edge of board
        var content = arr[i];
        if (content === undefined) {
            outputMoves.push(i);
        } else if (color === returnColor(content)) {
            break;
        } else {
            outputMoves.push(i);
            break;
        }
    }
    return outputMoves;
}


// logic        // bishop

export function bishopMoves(color, idx, arr) {  // this approach might be very stupid
    var outputMoves = [];
    // console.log('*bishopMoves* bishopMoves receives color, idx, arr: ' + color + ', ' + idx + ', ' + arr);
    // console.log(arr);

    const xDistance = 7-(idx%8);
    const xMinusDistance = 7-xDistance;
    const upDistance = Math.floor(idx/8);
    const downDistance = 7-upDistance;

    const upRight = (xDistance<upDistance ? xDistance : upDistance); // calculating how far in each diagonal we have to check
    const downRight = (xDistance<downDistance ? xDistance : downDistance);
    const downLeft = (xMinusDistance<downDistance ? xMinusDistance : downDistance);
    const upLeft = (xMinusDistance<upDistance ? xMinusDistance : upDistance);

    // console.log('*bishopMoves* caLculated right / left / up / down: ' + xDistance + ', ' + xMinusDistance + ', ' + upDistance + ', ' + downDistance);
    // console.log('*bishopMoves* caLculated upRight / downRight / downLeft / upLeft: ' + upRight + ', ' + downRight + ', ' + downLeft + ', ' + upLeft);

    for (let i=0; i<upRight; i++) { // checking the fields upRight one after the other
        let targetIdx = idx - 7*(i+1);
        let targetCont = arr[targetIdx];
        if (targetCont === undefined) {
            outputMoves.push(targetIdx);
        } else if (color === returnColor(targetCont)) {
            break;
        } else {
            outputMoves.push(targetIdx);
            break;
        }
    }

    for (let i=0; i<downRight; i++) { // checking the fields downRight one after the other
        let targetIdx = idx + 9*(i+1);
        let targetCont = arr[targetIdx];
        if (targetCont === undefined) {
            outputMoves.push(targetIdx);
        } else if (color === returnColor(targetCont)) {
            break;
        } else {
            outputMoves.push(targetIdx);
            break;
        }
    }

    for (let i=0; i<downLeft; i++) { // checking the fields downLeft one after the other
        let targetIdx = idx + 7*(i+1);
        let targetCont = arr[targetIdx];
        if (targetCont === undefined) {
            outputMoves.push(targetIdx);
        } else if (color === returnColor(targetCont)) {
            break;
        } else {
            outputMoves.push(targetIdx);
            break;
        }
    }

    for (let i=0; i<upLeft; i++) { // checking the fields downLeft one after the other
        let targetIdx = idx - 9*(i+1);
        let targetCont = arr[targetIdx];
        if (targetCont === undefined) {
            outputMoves.push(targetIdx);
        } else if (color === returnColor(targetCont)) {
            break;
        } else {
            outputMoves.push(targetIdx);
            break;
        }
    }

    return outputMoves;
}




// logic        // Knight

export function knightMoves(color, idx, arr) {  // this approach might be very stupid
    let outputMoves = [];
    let allJumps = [];
    console.log('*knightMoves* knightMoves receives color, idx, arr: ' + color + ', ' + idx + ', ' + arr);
    console.log(arr);

    // checking all possible jumps clockwise starting with the one two up one right (called "upRi") then "riUp"
    // let relativeJumps = [-15, -6, 10, 17, 15, 6, -10, -17];
    if (0 < idx-15 && idx%8 !== 7) {allJumps.push(idx-15)};
    if (0 < idx-6 && idx%8 !== 7 && idx%8 !==6) {allJumps.push(idx-6)};
    if (idx+10 < 63 && idx%8 !== 7 && idx%8 !==6) {allJumps.push(idx+10)};
    if (idx+17 < 64 && idx%8 !== 7) {allJumps.push(idx+17)};
    if (idx+15 < 64 && idx%8 !== 0) {allJumps.push(idx+15)};
    if (idx+6 < 64 && idx%8 !== 0 && idx%8 !==1) {allJumps.push(idx+6)};
    if (0 < idx-10 && idx%8 !== 0 && idx%8 !==1) {allJumps.push(idx-10)};
    if (0 < idx-17 && idx%8 !== 0) {allJumps.push(idx-17)};

    console.log(allJumps);
    for (let i=0; i<allJumps.length; i++) {
        let targetIdx = allJumps[i];
        let targetCont = arr[targetIdx];

        console.log('idx: ' + targetIdx + ' cont: ' + targetCont);
        if (targetCont === undefined) {
            outputMoves.push(targetIdx);
        } else if (color !== returnColor(targetCont)) {
            outputMoves.push(targetIdx);
        }
    }

    return outputMoves;

}



// logic        // Queen

export function queenMoves(color, idx, arr) {
    let queenOutputMoves = rookMoves(color, idx, arr);
    let fromBishopMoves = bishopMoves(color, idx, arr);

    for (let i=0; i<fromBishopMoves.length; i++){
        queenOutputMoves.push(fromBishopMoves[i]);
    }
    return queenOutputMoves;
}



// logic        // King

export function kingMoves(color, idx, arr) {
    let outputMoves = [];
    
    // generate arr with targetindexes from index and template
    const kingTemplate = [1,9,8,7,-1,-9,-8,-7] // all the kingmoves relative to its position clockwise starting on the right
    let allSteps = [];
    for (let i=0; i<8; i++) {
        let nextTarget = idx + kingTemplate[i];
        if (0 <= nextTarget && nextTarget < 64){
            let idxRem = idx%8;
            let tarRem = nextTarget%8;
            if (idxRem === tarRem || idxRem + 1 === tarRem || idxRem - 1 === tarRem) {
                allSteps.push(nextTarget);
            }
        }
    }

    for (let i=0; i<allSteps.length; i++) {
        let targetIdx = allSteps[i];
        let targetCont = arr[targetIdx];

        console.log('idx: ' + targetIdx + ' cont: ' + targetCont);
        if (targetCont === undefined) {
            outputMoves.push(targetIdx);
        } else if (color !== returnColor(targetCont)) {
            outputMoves.push(targetIdx);
        }
    }

    castleCheck(color, arr, outputMoves);

    return outputMoves;
}


// logic        // King         // castleCheck

function castleCheck(color, arr, outputMoves) {
        // for white
    if (color === 'w') {
        if (wKiMoved === false && wRLeftMoved === false) {
            if (arr[61] === undefined && arr[62] === undefined) {
                outputMoves.push(62);
            }
        }
        if (wKiMoved === false && wRRightMoved === false) {
            if (arr[57] === undefined && arr[58] === undefined && arr[59] === undefined) {
                outputMoves.push(58);
            }
        }
    }
        // for black
    if (color === 'b') {
        if (bKiMoved === false && bRLeftMoved === false) {
            if (arr[5] === undefined && arr[6] === undefined) {
                outputMoves.push(6);
            }
        }
        if (bKiMoved === false && bRRightMoved === false) {
            if (arr[1] === undefined && arr[2] === undefined && arr[3] === undefined) {
                outputMoves.push(2);
            }
        }
    }
    
}




// logic        // Pawn

export function pawnMoves(color, idx, arr) {
    let outputMoves = [];

    if (color === 'w') { // only white moves being checked here...better find solution that makes extra second one for black obsolete
        if (7<idx){
            if (arr[idx-8] === undefined) {
                outputMoves.push(idx-8);
                if (Math.floor(idx/8) === 6 && arr[idx-16] === undefined) {
                    outputMoves.push(idx-16);
                }
            }
            if (idx%8 !== 0 && returnColor(arr[idx-9]) === 'b') {
                outputMoves.push(idx-9);
            }
            if (idx%8 !== 7 && returnColor(arr[idx-7]) === 'b') {
                outputMoves.push(idx-7);
            }
        }
    }

    if (color === 'b') { // only black moves being checked here...better find solution that makes extra second one for black obsolete
        if (idx<56){
            if (arr[idx+8] === undefined) {
                outputMoves.push(idx+8);
                if (Math.floor(idx/8) === 1 && arr[idx+16] === undefined) {
                    outputMoves.push(idx+16);
                }
            }
            if (idx%8 !== 0 && returnColor(arr[idx+9]) === 'w') {
                outputMoves.push(idx+9);
            }
            if (idx%8 !== 7 && returnColor(arr[idx+7]) === 'w') {
                outputMoves.push(idx+7);
            }
        }
    }

    return outputMoves;
}