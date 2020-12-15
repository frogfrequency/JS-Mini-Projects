

const input = require("./puzzle-input.js");

const cleanInput = input.inputArr;

function returnMultiplicationOfNumbersThatAddTo2020 (arr) {
    let output = 0;

    for (let i=0; i<arr.length; i++) {
        let currentNumber = arr[i];
        let missingSummand = 2020-currentNumber;
        x = arr.indexOf(missingSummand, i);
        if (x !== -1) {
           output = arr[x]*currentNumber; 
           console.log(`the numbers were ${currentNumber} with and index of ${i} and the second one was ${arr[x]}`);
        }
    }
    console.log(`the final answer iiiiiiiiiiiiiiiiiiiiiiiis.......: ${output}` );
}

returnMultiplicationOfNumbersThatAddTo2020(cleanInput);

