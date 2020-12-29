import {inputArr} from './puzzle-input.mjs';

const testInput = [
    35,
    20,
    15,
    25,
    47,
    40,
    62,
    55,
    65,
    95,
    102,
    117,
    150,
    182,
    127,
    219,
    299,
    277,
    309,
    576
]

// target 127 in testInput



function findSequence(arr, target) {
    for (let i=0; i<arr.length; i++) {
        let summandsArr = returnTestResult(arr,i, target);
        if (summandsArr !== undefined) {
            summandsArr.sort((a,b) => a-b)
            console.log(summandsArr);
            let smallestElement = summandsArr[0];
            let largestElement = summandsArr[summandsArr.length-1];
            console.log(`the two numbers are: ${smallestElement} + ${largestElement} = ${smallestElement + largestElement}`);
        }
    }
}

function returnTestResult(arr, idx, target) {
    let collector = [arr[idx]];
    let sum = arr[idx];
    
    for (let j=idx+1; j<arr.length; j++) {
        collector.push(arr[j]);
        if (sum < target) {
            sum = sum + arr[j];
            if (sum === target) {
                return collector
            }
        }
    }
    return undefined
}

findSequence(testInput, 127);
findSequence(inputArr, 27911108);