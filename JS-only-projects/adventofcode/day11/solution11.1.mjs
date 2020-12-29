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
    let adjacentTakenSeatsAmount = returnVisibleTakenSeatsAmount(rowIdx, elementIdx);
    if (value === '#' && 5 <= adjacentTakenSeatsAmount) {
        return 'L'
    } else if (value === 'L' && adjacentTakenSeatsAmount === 0) {
        return '#'
    } else {
        return value
    }
}


function returnVisibleTakenSeatsAmount(rowIdx, elementIdx) {
    let returnAdjacentTakenSeatsAmountOutput = [];
    let spreadVectors = [ [-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1] ]; // first is rowchange second is idx

    for (let i=0; i<spreadVectors.length; i++) {
        let currentDirectionVectors = spreadVectors[i];
        for (let j=1; j<100; j++) {
            let currentTargetOnVectorRowIdx = rowIdx + currentDirectionVectors[0]*j;
            let currentTargetOnVectorElementIdx = elementIdx + currentDirectionVectors[1]*j;
            if (currentTargetOnVectorRowIdx <= 98 && 0 <= currentTargetOnVectorRowIdx && currentTargetOnVectorElementIdx <= 91 && 0 <= currentTargetOnVectorElementIdx) {
                let currentTarget = masterArr[currentTargetOnVectorRowIdx][currentTargetOnVectorElementIdx];
                if (currentTarget === '#') {
                    returnAdjacentTakenSeatsAmountOutput.push('#');
                    j = 200;
                } else if (currentTarget === 'L') {
                    returnAdjacentTakenSeatsAmountOutput.push('L');
                    j = 200;
                } else {
                    returnAdjacentTakenSeatsAmountOutput.push('no seat in sight');
                }
            }
        }
    }
    returnAdjacentTakenSeatsAmountOutput = returnAdjacentTakenSeatsAmountOutput.filter(element => element === '#').length;

    // return returnAdjacentTakenSeatsAmountOutput
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
    console.log(`the total taken seats amount after the loop stopped is: ${totalTakenSeatsCount}`);
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

console.log(masterArr);

