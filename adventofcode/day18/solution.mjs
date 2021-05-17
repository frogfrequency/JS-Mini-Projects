import {testInput} from "./puzzle-input.mjs";
import {puzzleInput} from "./puzzle-input.mjs";


let theInput = puzzleInput; // testInput should be 26335



// 26.  437. 12240. 13632.  = 26335

function purifyInput(arr) {
    for (let i=0; i<arr.length; i++) {   
        arr[i] = arr[i].replace(/ /g, '');
    }
}



function doIt(arr) {
    let mainCounter = 0;
    purifyInput(arr);
    for (let i=0; i<arr.length; i++) {
        mainCounter += returnLineResult(arr[i]);
    }
    console.log(`the final answer is: ${mainCounter}`);
    // return result of every line 
    // add result to counter
    // return counter at the end
}

let testLine1 = '5*9*(7*3*3+9*3+(8+6*4))' // 12240.
let testLine2 = '((2+4*9)*(6+9*8+6)+6)+2+4*2' // 13632

function returnLineResult(line) {
    // console.log(`returnLineResult is called with string: ${line}`);
    let result = undefined;
    let currentOperand = undefined;
    let currentNumber = undefined;
    for (let i=0; i<line.length; i++) {
        let currentCharI = line.charAt(i);
        if (currentCharI === '(') {
            let sliceStartIdx = i+1; // because when you slice you dont want the ( to be part of the new string
            let sliceEndIdx;
            let closingParenthesisNeeded = 1;
            for (let j=i+1; j<line.length; j++) {
                let currentCharJ = line.charAt(j);
                if (currentCharJ === '(') {
                    closingParenthesisNeeded++;
                } else if (currentCharJ === ')') {
                    closingParenthesisNeeded--;
                    if (closingParenthesisNeeded === 0) {
                        sliceEndIdx = j;
                        break;
                    }
                }
            }
        
            i = sliceEndIdx;
            let slicedString = line.slice(sliceStartIdx, sliceEndIdx);
            if (result === undefined) {
                result = returnLineResult(slicedString);
            } else {
                currentNumber = returnLineResult(slicedString);
                result = updateResult(result, currentOperand, currentNumber);
            }
        } else if (currentCharI === '*' || currentCharI === '+') {
            currentOperand = currentCharI;
        } else if (0 <= currentCharI && currentCharI <= 9)  { // careful here.. currentCharI is type char but gets converted to int
            if (result === undefined) {
                result = currentCharI;
            } else {
                currentNumber = currentCharI;
                result = updateResult(result, currentOperand, currentNumber);
            }            
        } else {
            console.log(`default: i was neither '(' nor '+/*' nor a number....`);
        }
    }
    console.log(`returnLineResult returns: ${result}   --> input was ${line}`);
    return result
}

function updateResult(currentResult, operand, number) {
    // console.log(`updateResult is called with res / operand  / number: ${currentResult} / ${operand} / ${number}`);

    currentResult = parseInt(currentResult, 10);
    number = parseInt(number, 10);
    if (operand === '+') {
        currentResult = currentResult + number;
    } else if (operand === '*') {
        currentResult = currentResult * number;
    }
    return currentResult;
}


doIt(theInput);
