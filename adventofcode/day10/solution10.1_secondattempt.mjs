import { inputArr } from "./puzzle-input.mjs";
import { testInputArr } from "./test-input.mjs";

let masterCounter = 0;

function doIt(arr) {
    arr.sort((a, b) => a - b);
    arr.unshift(0); // adding the 0 because the first joltage output is 0 and we go from there... donno      
    let differencesArr = returnDifferences(arr);
    let singleDifferenceSequencesArr = returnSingleDifferenceSequenceLength(differencesArr);
    let tribonacciEquivalentsArr = returnTribonacciEquivalents(singleDifferenceSequencesArr);
    let product = returnProduct(tribonacciEquivalentsArr);
    console.log(product);
}


function returnDifferences(arr) {
    let differenceCollector = [];
    arr.sort((a, b) => a - b);

    
    for (let i=1; i<arr.length; i++) {
        let currentElement = arr[i];
        let previousElement = arr[i-1];
        let difference = currentElement-previousElement;
        differenceCollector.push(difference);
    }
    return differenceCollector
}

function returnSingleDifferenceSequenceLength(differencesArr) {
    let sequenceArr = [];
    let temporaryCounter = 0;
    for (let i=0; i<differencesArr.length; i++) {
        if (differencesArr[i] === 3) {
            sequenceArr.push(temporaryCounter);
            temporaryCounter = 0;
        } else if (differencesArr[i] === 1) {
            temporaryCounter++
        }
        if (i+1 === differencesArr.length) {
            sequenceArr.push(temporaryCounter);
        }
    }
    sequenceArr = sequenceArr.filter(number => number !== 0)
    return sequenceArr
}   



function returnTribonacciEquivalents(sequenceArr) {
    let tribonacciEquivalentsOutputArr = [];
    for (let i=0; i<sequenceArr.length; i++) {
        let currentElement = sequenceArr[i];
        let currentEquivalent = returnCorrespondentTribonacci(currentElement);
        tribonacciEquivalentsOutputArr.push(currentEquivalent);
    }
    return tribonacciEquivalentsOutputArr
}

function returnCorrespondentTribonacci(num) {
    const tribonacciPattern = [0,1,2,4,7];
    for (let i=4; i<num+1; i++) {
        let toPush = tribonacciPattern[i]+tribonacciPattern[i-1]+tribonacciPattern[i-2]
        tribonacciPattern.push(toPush);
    }
    return tribonacciPattern[num]
}

function returnProduct(arr) {
    let output = 1;
    for (let i=0; i<arr.length; i++) {
        output = output*arr[i];
    }
    return output
}







// execution

doIt(inputArr);

