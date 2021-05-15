import {testInput} from "./puzzle-input.mjs";
import {puzzleInput} from "./puzzle-input.mjs";


let theInput = testInput;


// 26.  437. 12240. 13632.  = 26335



function purifyInput(arr) {
    for (let i=0; i<arr.length; i++) {   
        arr[i] = arr[i].replace(/ /g, '');
    }
}


purifyInput(testInput);



function doIt(arr) {
    // return result of every line 
    // add result to counter
    // return counter at the end
}

let testLine1 = '5*9*(7*3*3+9*3+(8+6*4))' // 12240.
let testLine2 = '((2+4*9)*(6+9*8+6)+6)+2+4*2' // ??

function returnLineResult(line) {
    console.log(`returnLineResult is called with string: ${line}`);
    let result = 0;
    let currentNumber;
    let currentOperand;
    for (let i=0; i<line.length; i++) {
        let x = line.charAt(i);
        if (x === '(') {
            let sliceStartIdx = i+1; // because when you slice you dont want the ( to be part of the new string
            let sliceEndIdx;
            let closingParenthesisNeeded = 1;
            for (let j=i+1; j<line.length; j++) {
                let currentChar = line.charAt(j);
                if (currentChar === '(') {
                    closingParenthesisNeeded++;
                } else if (currentChar === ')') {
                    closingParenthesisNeeded--;
                    if (closingParenthesisNeeded === 0) {
                        sliceEndIdx = j;
                    }
                }
            }
        
            let slicedString = line.slice(sliceStartIdx, sliceEndIdx);
            returnLineResult(slicedString);
        }
    }
}


returnLineResult(testLine2);