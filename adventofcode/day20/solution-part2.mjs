import { testInput } from "./test-puzzle-input.mjs";

import { puzzleInput } from "./puzzle-input.mjs";


let theInput = puzzleInput; //////////////////// change input here


let bordersArr = giveBordersArr(theInput);

let bordersArrCopy = [...bordersArr];


let idArr = [];
let rotationArr = [];

let upperLeftCornerId;

if (theInput.length === 9) {
    upperLeftCornerId = 2971; // 2971
} else {
    upperLeftCornerId = 3187;
}


// initialization of idArr and rotationArr

idArr.push([upperLeftCornerId]);

rotationArr.push([[false, 0]]);

removeFromBorderArr(upperLeftCornerId);


// functions old

function giveBordersArr(input) {
    let bordersArr = [];
    for (let i = 0; i < input.length; i++) {
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
    output[0] = tile.slice(0, 10);

    for (let i = 9; i < 100; i = i + 10) {
        output[1] = output[1] + tile.charAt(i);
    }

    for (let i = 99; 90 <= i; i--) {
        output[2] = output[2] + tile.charAt(i);
    }

    for (let i = 90; 0 <= i; i = i - 10) {
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
    for (let i = 0; i < bordersArr.length; i++) { // fancy way to remove the element from bordersArr
        if (bordersArr[i][0] === idToRemove) {
            bordersArr.splice(i, 1);
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
            switch (match[3]) {
                case 0:
                    if (match[2]) {
                        rotationArr.push([[true, 0]]);
                    } else {
                        rotationArr.push([[false, 0]]);
                    }
                    break;
                case 1:
                    if (match[2]) {
                        rotationArr.push([[true, 1]]);
                    } else {
                        rotationArr.push([[false, 3]]);
                    }
                    break;
                case 2:
                    if (match[2]) {
                        rotationArr.push([[true, 2]]);
                    } else {
                        rotationArr.push([[false, 2]]);
                    }
                    break;
                case 3:
                    if (match[2]) {
                        rotationArr.push([[true, 3]]);
                    } else {
                        rotationArr.push([[false, 1]]);
                    }
                    break;
            }
            // add rotation to rotationArr --- done?

            removeFromBorderArr(match[0]);

            // remove element from bordersArr
        }
    }

}

function fillRow(rowIdx) {  // which row should be filled (0-11)
    let continueRowFilling = true;
    while (continueRowFilling) {

        let easternBorderToMatch = giveEasternBorder(rowIdx);
        let match = findMatch(easternBorderToMatch);

        if (match === 'noMatch') {
            console.log(`no eastern Match found for ${easternBorderToMatch}`);
            continueRowFilling = false;
        } else {
            idArr[rowIdx].push(match[0]); // id pushed here
            switch (match[3]) {
                case 0:

                    if (match[2]) {
                        rotationArr[rowIdx].push([true, 3]); // 3?
                    } else {
                        rotationArr[rowIdx].push([false, 3]);
                    }
                    break;
                case 1:
                    if (match[2]) {
                        rotationArr[rowIdx].push([true, 0]);
                    } else {
                        rotationArr[rowIdx].push([false, 2]);
                    }
                    break;
                case 2:
                    if (match[2]) {
                        rotationArr[rowIdx].push([true, 1]);
                    } else {
                        rotationArr[rowIdx].push([false, 1]);
                    }
                    break;
                case 3:
                    if (match[2]) {
                        rotationArr[rowIdx].push([true, 2]);
                    } else {
                        rotationArr[rowIdx].push([false, 0]);
                    }
                    break;
            }
            removeFromBorderArr(match[0]);
        }
    }
}

function giveSouthernBorder() {
    let targetId = idArr[idArr.length - 1][0];
    console.log(`\tborder retrieved from ${targetId}`);
    let targetRotation = rotationArr[rotationArr.length - 1][0];
    let targetBorders;
    for (let i = 0; i < bordersArrCopy.length; i++) {
        if (bordersArrCopy[i][0] === targetId) {
            targetBorders = bordersArrCopy[i][1];
        }
    }
    // so if the tile is flipped or rotated we obviously have to return a different border.. next lines take care of this

    switch (targetRotation[1]) {
        case 0:
            if (targetRotation[0]) {
                return reverseString(targetBorders[2]);
            } else {
                return targetBorders[2]
            }
        case 1:
            if (targetRotation[0]) {
                return reverseString(targetBorders[3]);
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
                return reverseString(targetBorders[1]);
            } else {
                return targetBorders[3]
            }
        default:
            console.log('no valid rotations inside switch of giveSouthernBorder()');
    }
}

function giveEasternBorder(rowIdx) {
    let targetId = idArr[rowIdx][idArr[rowIdx].length - 1];
    console.log(targetId);

    let targetRotation = rotationArr[rowIdx][rotationArr[rowIdx].length - 1];
    console.log(targetRotation);
    let targetBorders;
    for (let i = 0; i < bordersArrCopy.length; i++) {
        if (bordersArrCopy[i][0] === targetId) {
            targetBorders = bordersArrCopy[i][1];
        }
    }
    console.log(targetBorders);

    switch (targetRotation[1]) {
        case 0:
            if (targetRotation[0]) {
                return reverseString(targetBorders[3]);
            } else {
                return targetBorders[1]
            }
        case 1:
            if (targetRotation[0]) {
                return reverseString(targetBorders[0]);
            } else {
                return targetBorders[0]
            }
        case 2:
            if (targetRotation[0]) {
                return reverseString(targetBorders[1]);
            } else {
                return targetBorders[3]
            }
        case 3:
            if (targetRotation[0]) {
                return reverseString(targetBorders[2]);
            } else {
                return targetBorders[2]
            }
        default:
            console.log('no valid rotations inside switch of giveEasternBorder()');
    }
}

function findMatch(border) { // this function returns the match.. it does not regard whether you are searching for south or east!!
    console.log(`\tfindMatch called with ${border}`);
    let borderReversed = reverseString(border);
    for (let borderArrIdx = 0; borderArrIdx < bordersArr.length; borderArrIdx++) {
        let currentElement = bordersArr[borderArrIdx];
        let currentId = currentElement[0];
        let currentBorders = currentElement[1];
        for (let i = 0; i < 4; i++) {
            let specificBorder = currentBorders[i];
            if (specificBorder === border) {
                return [currentId, borderArrIdx, true, i];
            } else if (specificBorder === borderReversed) {
                return [currentId, borderArrIdx, false, i];
            }

        }

    }
    return 'noMatch' // if no match found false is returned
}


// functions to do the last part of the solution (after rows and columns are filled)

function giveHolePicture() {
    let thePicture = [];
    for (let i = 0; i < idArr.length * 8; i++) {
        thePicture.push(['']);
    }

    for (let row = 0; row < idArr.length; row++) {
        for (let rowElement = 0; rowElement < idArr.length; rowElement++) {
            let flippedTileWithBorders = giveFlippedAndRotated(row, rowElement);
            let flippedTileWithoutBorders = giveWithoutBorders(flippedTileWithBorders);
            for (let i = 0; i < flippedTileWithoutBorders.length; i++) {
                thePicture[row * 8 + i] += flippedTileWithoutBorders[i];
            }
        }
    }
    return thePicture
}

function giveFlippedAndRotated(yCord, xCord) {
    let id = idArr[yCord][xCord];
    let rotation = rotationArr[yCord][xCord];
    let tileArr = returnTileArr(id);
    if (rotation[0]) {
        tileArr = flipTile(tileArr);
    }
    for (let i = 0; i < rotation[1]; i++) {
        tileArr = rotateTile(tileArr);
    }
    return tileArr
}

function returnTileArr(id) {
    for (let i = 0; i < theInput.length; i++) {
        if (id === theInput[i][0]) {
            return givePreparedTile(theInput[i][1]);
        }
    }
}

function givePreparedTile(tile) {
    let output = ['', '', '', '', '', '', '', '', '', ''];
    for (let i = 0; i < 100; i++) {
        let currentLineIdx = Math.floor(i / 10);
        let currentChar = tile.charAt(i);
        output[currentLineIdx] = output[currentLineIdx] + currentChar;
    }
    return output
}

function flipTile(tileArr) {
    let output = [];
    for (let i = 0; i < tileArr.length; i++) {
        output.push(reverseString(tileArr[i]));
    }
    return output
}

function rotateTile(tileArr) {
    let rotatedTile = [];
    for (let i=0; i<tileArr.length; i++) {
        rotatedTile.push('');
    }
    
    
    for (let x = 0; x < tileArr.length; x++) {
        for (let y = tileArr.length - 1; 0 <= y; y--) {
            // console.log(tileArr[y][x]);
            rotatedTile[x] += (tileArr[y][x]);

        }
    }
    return rotatedTile
}

function giveWithoutBorders(tile) {
    tile.shift();
    tile.pop();
    // console.log(tile);
    for (let i = 0; i < tile.length; i++) {
        tile[i] = tile[i].slice(1, 9);
    }
    return tile
}



//exec

// fillLeftColumn(); // alters the idArr and rotationArr

// console.log(`end:`); 
// console.log(rotationArr);
// console.log(idArr);
// console.log(`-----`);

// console.log(borderArr);

fillLeftColumn();

for (let i = 0; i < idArr.length; i++) {
    fillRow(i);
}

console.log(idArr);


// the arr and rotations are done and saved in idArr and rotationArr


// what if the monsters overlappp?

let thePicture = giveHolePicture();

console.log(thePicture);

console.log(`\n--------------------------line--------------------------------------------------------------------------\n`);

// seamonsterPattern started from the tail

let monsterPattern = [
    [0, 0],
    [5, 0],
    [6, 0],
    [11, 0],
    [12, 0],
    [17, 0],
    [18, 0],
    [19, 0],
    [18, -1],
    [1, 1],
    [4, 1],
    [7, 1],
    [10, 1],
    [13, 1],
    [16, 1]
]



function giveMonsterCountfromPicture(picture) {
    let monsterCount = 0;
    for (let y=0; y<picture.length; y++) {
        for (let x=0; x<picture[y].length; x++) {

            let bodyPartsCount = 0;

            for (let i=0; i<monsterPattern.length; i++) {
                // console.log('bodyparts: ' + bodyPartsCount);
                let targetX = x+monsterPattern[i][0];
                let targetY = y+monsterPattern[i][1];
                if (0<=targetY && targetY < picture.length-1 && targetX < picture[y].length-1) {
                    
                    if (picture[targetY].charAt(targetX) === '#') {
                        bodyPartsCount++
                    }
                }
            }

            if (bodyPartsCount === 15) {
                monsterCount++
                console.log('MONSTER FOUND MONSTER FOUND MONSTER FOUND');
            }

        }
    }
    return monsterCount
}



function checkAllPictures(picture) {
    let masterMonsterCount = 0;
    console.log(picture);
    for (let i=0; i<4; i++) {
        picture = rotateTile(picture);
        let thisPictureMonsterCount = giveMonsterCountfromPicture(picture);
        if (0 < thisPictureMonsterCount) {
            masterMonsterCount = thisPictureMonsterCount;
        }
    }

    picture = flipTile(picture);

    for (let i=0; i<4; i++) {
        picture = rotateTile(picture);
        let thisPictureMonsterCount = giveMonsterCountfromPicture(picture);
        if (0 < thisPictureMonsterCount) {
            masterMonsterCount = thisPictureMonsterCount;
        }
    }
    return masterMonsterCount
}


function giveWaterCount(picture) {
    let waveCounter = 0;
    for (let y=0; y<picture.length; y++) {
        for (let x=0; x<picture[0].length; x++) {
            
            if (picture[y].charAt(x) === '#') {
                waveCounter++
            }
        }
    }
    return waveCounter
}

let monsterCount = checkAllPictures(thePicture);
let waveCount = giveWaterCount(thePicture);


console.log(`the water roughness is waveCount (${waveCount}) - monsterCount (${monsterCount})*15 = ${waveCount - (monsterCount*15)}`);

"changes in filenaming, solution for part 2 is now named solution-part2.mjs and not test.mjs"
