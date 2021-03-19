import { inputString } from "./puzzle-input.mjs";
import { testInputString } from "./puzzle-test-input.mjs";
// console.log(testInputString);


function preProcess(string) {
    let preProcessOutput = [];
    let startIdx = 0;
    let temporaryLine = [];
    
    do {
        let nextNewLineIdx = string.indexOf(`\n`, startIdx)
        for (let i=startIdx; i<nextNewLineIdx; i++) {
            temporaryLine.push(string[i])
        }
        preProcessOutput.push(temporaryLine);
        temporaryLine = [];
        startIdx = nextNewLineIdx+1
    } while (startIdx < string.length);
    return preProcessOutput
}



function performNextIteration(arr) {
    let newMasterArr = [];
    for (let i=0; i<arr.length; i++) {
        let newTemporaryLine = [];
        let currentRow = arr[i];
        for (let j=0; j<currentRow.length; j++) {
            newTemporaryLine.push(returnNewValue(i,j,currentRow[j]));
        }
        newMasterArr.push(newTemporaryLine);
    }
    
    masterArr = newMasterArr;
}

function returnNewValue(rowIdx, elementIdx, value) {
    let adjacentTakenSeatsAmount = returnAdjacentTakenSeatsAmount(rowIdx, elementIdx);
    if (value === '#' && 4 <= adjacentTakenSeatsAmount) {
        return 'L'
    } else if (value === 'L' && adjacentTakenSeatsAmount === 0) {
        return '#'
    } else {
        return value
    }
}


function returnAdjacentTakenSeatsAmount(rowIdx, elementIdx) {
    let returnAdjacentTakenSeatsAmountOutput = [];
    if (rowIdx !== 0) {
        returnAdjacentTakenSeatsAmountOutput.push(masterArr[rowIdx-1][elementIdx-1]);
        returnAdjacentTakenSeatsAmountOutput.push(masterArr[rowIdx-1][elementIdx]);
        returnAdjacentTakenSeatsAmountOutput.push(masterArr[rowIdx-1][elementIdx+1]);
    }

    returnAdjacentTakenSeatsAmountOutput.push(masterArr[rowIdx][elementIdx-1]);
    returnAdjacentTakenSeatsAmountOutput.push(masterArr[rowIdx][elementIdx+1]);
    if (rowIdx !== masterArr.length-1) {
    returnAdjacentTakenSeatsAmountOutput.push(masterArr[rowIdx+1][elementIdx-1]);
    returnAdjacentTakenSeatsAmountOutput.push(masterArr[rowIdx+1][elementIdx]);
    returnAdjacentTakenSeatsAmountOutput.push(masterArr[rowIdx+1][elementIdx+1]);
    }
    returnAdjacentTakenSeatsAmountOutput = returnAdjacentTakenSeatsAmountOutput.filter(element => element === '#').length;

    return returnAdjacentTakenSeatsAmountOutput

}



function loopUntilEnd() {
    let counter = 0;
    let oldArr = masterArr;
    let newArr = [];
    
    do {
        oldArr = masterArr;
        performNextIteration(masterArr);
        newArr = masterArr;
        counter++
    } while (areUnequal(oldArr, newArr));
    let totalTakenSeatsCount = returnTotalTakenSeatsCount(masterArr);
    console.log(totalTakenSeatsCount);
}

function areUnequal(arr1, arr2) {
    for (let i=0; i<arr1.length; i++) {
        for (let j=0; j<arr1[i].length; j++) {
            if (arr1[i][j] !== arr2[i][j]) {
                return true;
            }  
        }
    }
    return false
}

function returnTotalTakenSeatsCount(arr) {
    let totalTakenSeatsCounter = 0;
    for (let i=0; i<arr.length; i++){
        for (let j=0; j<arr[i].length; j++) {
            if (arr[i][j] === '#') {
                totalTakenSeatsCounter++
            }
        }
    }
    return totalTakenSeatsCounter
}

// execution

let masterArr = preProcess(inputString);

loopUntilEnd();

