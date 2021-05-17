import {testInput} from "./puzzle-input.mjs";
import {puzzleInput} from "./puzzle-input.mjs";


let theInput = puzzleInput; 


function purifyInput(arr) {
    for (let i=0; i<arr.length; i++) {   
        arr[i] = arr[i].replace(/ /g, '');
    }
}

 

function doIt(arr) {
    let mainCounter = 0;
    purifyInput(arr);
    for (let i=0; i<arr.length; i++) {
        mainCounter += processLine(arr[i]);
    }
    console.log(`the final answer is: ${mainCounter}`);
}


function processLine(line) {
    console.log(`processLine called with line: ${line}`);
    let result = undefined;
    
    // while result != undefined .. do this
    while (result === undefined) {
        let newLine = '';
        let openIdx = line.indexOf('('); // taken away +1 at end of ('(')      +1 <-- this
        let closeIdx;
        if (openIdx === -1) {
            result = calculateCleanLine(line);   
        } else {
            let requiredCloses = 1;
            for (let j=openIdx+1; j<line.length; j++) {
                let potentialCloser = line.charAt(j);
                if (potentialCloser === '(') {
                    requiredCloses++
                } else if (potentialCloser === ')') {
                    requiredCloses--;
                    if (requiredCloses === 0) {
                        closeIdx = j;
                        break;
                    }
                }
            }
            let slicedString = line.slice(openIdx+1, closeIdx);
            let newPart = processLine(slicedString);
            
            // console.log(slicedString);
            
            
            newLine = newLine + line.substring(0, openIdx);
            newLine = newLine + newPart;
            newLine = newLine + line.substring(closeIdx+1, line.length);
            line = newLine;
            // console.log(newLine);
        }
    }

    // stop the while here?
    console.log('returnedresult :' + result);
    return result
}


function calculateCleanLine(line) {
    let result = 1;
    let asteriskIdxs = returnIdxsOfOperand(line, '*');
    // console.log(asteriskIdxs);
    
    let start = 0;
    let end = 0;
    for (let i=0; i<asteriskIdxs.length+1; i++) {
        end = asteriskIdxs[i] !== undefined ? asteriskIdxs[i] : line.length;
        let subString = line.slice(start, end) ;
        start = end+1;
        result = result * sumOrMultiplyString(subString, '+');
    }
    // console.log(result);
    return result
}

function returnIdxsOfOperand(line, operand) {
    let index;
    let startIndex = 0;
    let indexes = [];

    while ((index = line.indexOf(operand, startIndex)) > -1) {
        indexes.push(index);
        startIndex = index + 1;
    }
    return indexes;
}

function sumOrMultiplyString(string, operand) {
    let indexes = returnIdxsOfOperand(string, operand);
    // console.log(`the indexes of ${operand} are: ${indexes}`);
    let result = 0;
    let start = 0;
    let end = 0;
    for (let i=0; i<indexes.length+1; i++) {
        end = indexes[i] !== undefined ? indexes[i] : string.length;
        let number = parseInt(string.slice(start, end), 10) ;
        start = end+1;
        if (operand === '+') {
            result = result + number;
        } else {
            if (result === 0) {
                result = 1;
            }
            result = result * number;
        }
    }
    return result
}







doIt(theInput);



