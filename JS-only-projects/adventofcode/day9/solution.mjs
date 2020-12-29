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

function returnError(arr, depth){
    for (let i=depth; i<arr.length; i++) {
        let currentElement = arr[i];
        let precursors = returnPrecursors(arr, depth, i);
        let failsCheck = isValidNumber(currentElement, precursors);
        if (failsCheck) {
            console.log('result: ' + currentElement);
            return
        }

    }
}

function returnPrecursors(arr, depth, idx) {
    let output = [];
    for (let i=idx-1; idx-1-depth<i; i--) {
        let currentElement = arr[i];
        output.push(currentElement);
    }
    return output
}

function isValidNumber(element, precursors) {
    let output = true;
    for (let i=0; i<precursors.length; i++) {
        let currentElement = precursors[i];
        let currentRequiredMatch = element - currentElement;
        
        
        for (let j=0; j<precursors.length; j++) {
            
            if(currentElement !== currentRequiredMatch) {
                if(precursors[j] === currentRequiredMatch) {
                    output = false;
                } 
            }
        }
        
        
    }
    return output 
}


returnError(testInput, 5);
returnError(inputArr, 25);