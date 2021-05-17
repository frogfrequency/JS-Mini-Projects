let testLine = '100+200+300*2*2*4+5'; // 600 * 2 * 2 * 9 = 21600
let testLine2 = '300+20*5+3*2' // 320 * 8 * 2 = 5120
let testLine3 = '400*3';
let testSumString= '100+200+300+4'; // 604
let testMultiplyString = '2*100*200*300'; // 12'000'000

let testParenthesisLine = '1+(2*3)+(4*(5+6))'; // 51.
let testParenthesisLine2 = '5+(8*3+9+3*4*3)'; // 1445.





console.log('-----------------');


console.log('-----------------');


let testArr = [
    '1+(2*3)+(4*(5+6))', // 51.
    '2*3+(4*5)', // 46.
    '5+(8*3+9+3*4*3)', // 1445.
    '5*9*(7*3*3+9*3+(8+6*4))', // 669060.
    '((2+4*9)*(6+9*8+6)+6)+2+4*2' // 23340.
]



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





// store all * idxs
// call sumUp with the strings between the *'s
// store the results of sumUp in an array that is called toBeMultiplied
// multiply those and return result
