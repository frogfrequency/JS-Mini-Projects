// 20201120 this will be a huuuuuge mess... but it will work and teach us alot
// imports
import {returnColor} from './globalFunctions.js';


// logic

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

////////////////// 20201120 20:46 hier unten weitermachen mit bishop

export function bishopMoves(color, idx, arr) {  // this approach might be very stupid
    var outputMoves = [1,2,3,4,5,6,5,58,59,60,61];

    const xDistance = 7-(idx%8);
    const xMinusDistance = 7-xDistance;
    const upDistance = Math.floor(idx/8);
    const downDistance = 7-upDistance;

    console.log('right / left / up / down: ' + xDistance + ', ' + xMinusDistance + ', ' + upDistance + ', ' + downDistance);

    for (let i=0; i<1; i++) { // right down check
        idx = idx + 9;
        console.log('first: ' + idx);
    }
}

