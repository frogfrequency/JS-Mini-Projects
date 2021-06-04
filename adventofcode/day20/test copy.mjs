import {testInput} from "./test-puzzle-input.mjs";

import {puzzleInput} from "./puzzle-input.mjs";


let theInput = testInput; //////////////////// change input here


let bordersArr = giveBordersArr(theInput);

let bordersArrCopy = [...bordersArr];


let idArr = [];
let rotationArr = [];

let upperLeftCornerId;

if (theInput.length === 9) {
    upperLeftCornerId = 1171; // 2971
} else {
    upperLeftCornerId = 3187;
}


// initialization of idArr and rotationArr

idArr.push([upperLeftCornerId]);

rotationArr.push([false, 2 ]);

removeFromBorderArr(upperLeftCornerId);


// functions old

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

function reverseString(string) {
    return string.split("").reverse().join("");
}

// functions new to part 2

function removeFromBorderArr(idToRemove) {
    for (let i=0; i<bordersArr.length; i++) { // fancy way to remove the element from bordersArr
        if (bordersArr[i][0] === idToRemove) {
            bordersArr.splice(i,1);
        }
    }
}


function fillLeftColumn() {
    let continueColumnFilling = true;
    while (continueColumnFilling) {
        console.log(`column while loop called here`);
        // include it all in a while loop? while ??
        let southernBorderToMatch = giveSouthernBorder();
        console.log(`\tsouthernBorderToMatch ${southernBorderToMatch}`);
        // find "southern" border of lowermost tile --- done above
        
        let match = findMatch(southernBorderToMatch); // matchform = [currentId, borderArrIdx, false, i];
        console.log(`\t\tthe match is: ${match}`);
        // loop through all remaining elements and find match --- done?
        
        if (match === 'noMatch') {
            console.log(`no Match found for ${southernBorderToMatch}`);
            continueColumnFilling = false;
        } else {
            idArr.push([match[0]]);
            if (match[2]) {
                rotationArr.push([tru, match[3]]);
            } else {
                switch(match[3]) {
                    case 0:
                        rotationArr.push([true, match[0]]);
                        break;
                    case 1:
                        rotationArr.push([true, match[3]]);
                        break;
                    case 2:
                        rotationArr.push([true, match[2]]);
                        break;
                    case 3:
                        rotationArr.push([true, match[1]]);
                        break;
                }
            }
            // add rotation to rotationArr --- done?

            removeFromBorderArr(match[0]);

            // remove element from bordersArr
        }
    }
    
}


function giveSouthernBorder() {
    let targetId = idArr[idArr.length-1][0];
    console.log(`\tborder retrieved from ${targetId}`);
    let targetRotation = rotationArr[rotationArr.length-1];
    let targetBorders;
    for (let i=0; i<bordersArrCopy.length; i++) {
        if (bordersArrCopy[i][0] === targetId) {
            targetBorders = bordersArrCopy[i][1];
        }
    }
    // so if the tile is flipped or rotated we obviously have to return a different border.. next lines take care of this
    
    
    switch(targetRotation[1]) {
        case 0:
            if (targetRotation[0]) {
                return reverseString(targetBorders[2]);
            } else {
                return targetBorders[2]
            }
        case 1:
            if (targetRotation[0]) {
                return reverseString(targetBorders[1]);
            } else {
                return targetBorders[1]
            }
        case 2:            
            if (targetRotation[0]) {
                return reverseString(targetBorders[0]);
            } else {
                return targetBorders[0]
            }
        case 3: 
            if (targetRotation[0]) {
                return reverseString(targetBorders[3]);
            } else {
                return targetBorders[3]
            }
        default:
        console.log('no valid rotations inside switch of giveSouthernBorder()');
    }
}


function findMatch(border) { // this function returns the match.. it does not regard whether you are searching for south or east!!
    console.log(`\tfindMatch called with ${border}`);
    let borderReversed = reverseString(border);
    for (let borderArrIdx = 0; borderArrIdx<bordersArr.length; borderArrIdx++) {
        let currentElement = bordersArr[borderArrIdx];
        let currentId = currentElement[0];
        let currentBorders = currentElement[1];
        for (let i=0; i<4; i++) {
            let specificBorder = currentBorders[i];
            if (specificBorder === border) {
                return [currentId, borderArrIdx, false, i];
            } else if (specificBorder === borderReversed) {
                return [currentId, borderArrIdx, true, i];
            }
            
        }

    }
    return 'noMatch' // if no match found false is returned
}



//exec

fillLeftColumn(); // alters the idArr and rotationArr


console.log(`end:`);
console.log(rotationArr);
console.log(idArr);