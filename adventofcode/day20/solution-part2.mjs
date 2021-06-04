import {testInput} from "./test-puzzle-input.mjs";
import {puzzleInput} from "./puzzle-input.mjs";


function giveBordersArr(input) {
    let bordersArr = [];
    for (let i=0; i<input.length; i++) {
        let currentId = input[i][0];
        let currentBorders = giveBorders(input[i][1]);
        let newElement = [];
        newElement.push(currentId);
        newElement.push(currentBorders);
        bordersArr.push(newElement);
    }
    return bordersArr
}



function giveBorders(tile) {
    // console.log(`giveBorders called with: ${tile}`);
    let output = ['', '', '', ''];
    output[0] = tile.slice(0,10);

    for (let i=9; i<100; i=i+10) {
        output[1] = output[1] + tile.charAt(i);
    }

    for (let i=99; 90 <= i; i--) {
        output[2] = output[2] + tile.charAt(i);
    }

    for (let i=90; 0<=i; i=i-10) {
        output[3] = output[3] + tile.charAt(i);
    }
    // console.log(`giveBorders return: ${output}`);

    return output
}

// giveBordersArr(testInput);




function giveMatchingBorderCount(currentTileBorders, currentTileIdx) {
    let counter = 0;
    
    for (let i=0; i<4; i++) {
        let currentBorder = currentTileBorders[i];
        let currentBorderReversed = reverseString(currentBorder);
        for (let j=0; j<bordersArr.length; j++) {
            if (j !== currentTileIdx) {
                let currentBorderToCompare = bordersArr[j][1];
                if (currentBorderToCompare.includes(currentBorderReversed) || currentBorderToCompare.includes(currentBorder)) {
                    counter ++;
                    console.log(`border ${currentBorder} found at ${bordersArr[j][0]} border ${i}`);
                }
            }
        }
    }
    
    return counter
}


function reverseString(string) {
    return string.split("").reverse().join("");
}

function giveCornerIdxs(arr) {
    let cornerIdxs = [];
    for (let x=0; x<arr.length; x++) {
        let matchingCount = giveMatchingBorderCount(bordersArr[x][1],x)
        console.log(`element: ${arr[x]} matches ${matchingCount}`);
        if (matchingCount === 2) {
            cornerIdxs.push(arr[x][0]);
        }
    }
    return cornerIdxs
}


let bordersArr = giveBordersArr(testInput);

let cornerIdxs = giveCornerIdxs(bordersArr);


console.log(`the corner Idx's are: ${cornerIdxs}`);

