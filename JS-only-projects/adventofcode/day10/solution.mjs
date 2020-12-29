import { inputArr } from "./puzzle-input.mjs";
import { testInputArr } from "./test-input.mjs";



function returnDifferences(arr) {
    let differenceCollector = [];
    arr.sort((a, b) => a - b);
    differenceCollector.push(arr[0]);
    differenceCollector.push(3);
    
    for (let i=1; i<arr.length; i++) {
        let currentElement = arr[i];
        let previousElement = arr[i-1];
        let difference = currentElement-previousElement;
        differenceCollector.push(difference);
    }
    return differenceCollector
}


function countDifferences(differencesArr) {
    let oneCounter = 0;
    let threeCounter = 0;
    for (let i=0; i<differencesArr.length; i++) {
        if (differencesArr[i] === 1) {
            oneCounter++
        } else if (differencesArr[i] === 3) {
            threeCounter++
        }
    }
    let output = `ones: ${oneCounter}, threes: ${threeCounter} ---> those multiplied equal to: ${oneCounter*threeCounter}`
    return output
}

console.log(countDifferences(returnDifferences(testInputArr)));
// console.log(countDifferences(returnDifferences(inputArr)));

