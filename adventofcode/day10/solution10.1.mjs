import { inputArr } from "./puzzle-input.mjs";
import { testInputArr } from "./test-input.mjs";

let masterCounter = 0;

function doIt(arr) {
    arr.sort((a, b) => a - b);
    arr.unshift(0); // adding the 0 because the first joltage output is 0 and we go from there... donno
    recursiveFunction(0, arr);
}


function recursiveFunction(startIdx, arr) {
    let currentElement = arr[startIdx];
    let currentElementSuccessors = [];
    for (let i=startIdx+1; i<startIdx+4; i++) {
        currentElementSuccessors.push(arr[i]);
    }
    let validSuccessorsArr = returnValidSuccessors(currentElement, currentElementSuccessors);
    if (validSuccessorsArr.length === 0) {
        masterCounter++
    } else {
        for (let k=0; k<validSuccessorsArr.length; k++) {
            let validSuccessorIdx = arr.indexOf(validSuccessorsArr[k]);
            recursiveFunction(validSuccessorIdx, arr);
        }
    }
}




function returnValidSuccessors(element, successors) {
    const result = successors.filter(successor => successor <= element+3);
    return result
}
// console.log(testInputArr);
// console.log(inputArr);

doIt(testInputArr);

console.log(masterCounter);