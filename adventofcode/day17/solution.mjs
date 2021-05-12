import { externTestInput } from "./puzzle-input.mjs";
import { externPuzzleInput } from "./puzzle-input.mjs";




let puzzleInput = [...externPuzzleInput];
let testInput = [...externTestInput];

let theInput = puzzleInput;


function addNewLayers(arr) {
    let lineLength = arr[0][0].length + 2;
    let linesCount = arr[0].length + 2;

    for (let z=0; z<arr.length; z++) { // adding false to start and end of each line
        for (let y=0; y<arr[z].length; y++) {
            arr[z][y].unshift(false);
            arr[z][y].push(false);
        }        
    }
 
    let newLine = []; // making a new false-line
    for (let i=0; i<lineLength; i++) {
        newLine.push(false);
    }

    for(let z=0; z<arr.length; z++) { // pushing and unshifting the newline to every z
        arr[z].push(JSON.parse(JSON.stringify(newLine)));
        arr[z].unshift(JSON.parse(JSON.stringify(newLine)));
    }
    
    let newZ = [];  // creating a empty newZ
    for (let i=0; i<linesCount; i++) {  // filling the newZ with newLines
        newZ.push(JSON.parse(JSON.stringify(newLine)));
    }

    arr.push(JSON.parse(JSON.stringify(newZ))); // pushing and unshiftig the newZ to arr
    arr.unshift(JSON.parse(JSON.stringify(newZ)));
}

function visualizeArr(arr) {
    let outputString = '';
    for (let z=0; z<arr.length; z++) {
        outputString += (`z-level: ${z}\n`);
        for (let y=0; y<arr[z].length; y++) {
            for (let x=0; x<arr[z][y].length; x++) {
                if (arr[z][y][x]) {
                    outputString += '#';
                } else {
                    outputString += '.';
                }
            }
            outputString += '\n';
        }
        outputString += '\n';
    }
    console.log(outputString);
}


// make one iteration to be: add new layers --> theInput = returnUpdatedArr(theInput); --> visualize(theInput)

function main(iterationCount, arr) {
    console.log(`initial arr is: `);
    visualizeArr(arr);
    

    for (let counter=0; counter<iterationCount; counter++) {
        addNewLayers(arr);
        arr = returnUpdatedArr(arr);
        visualizeArr(arr);
        returnActiveCount(arr);
    }
}



function returnActiveCount(arr) {
    let counter = 0;
    for (let z=0; z<arr.length; z++) {
        for (let y=0; y<arr[0].length; y++) {
            for (let x=0; x<arr[0][0].length; x++) {
                if(arr[z][y][x]) {
                    counter++;
                }
                
            }
        }
    }
    console.log(`the counter is at: ${counter}`);
}

function returnUpdatedArr(arr) {
    let newArr = JSON.parse(JSON.stringify(arr));
    // evaluate each field of arr and write result (true or false) to newArr
    for (let z=0; z<arr.length; z++) {
        for (let y=0; y<arr[0].length; y++) {
            for (let x=0; x<arr[0][0].length; x++) {
                
                let currentFieldFutureActivity = isFieldBeingActivated(z, y, x, arr[z][y][x], arr);
                newArr[z][y][x] = currentFieldFutureActivity; 

            }
        }
    }
    return newArr
}


function isFieldBeingActivated(zIdx, yIdx, xIdx, content, arr) {
    let returnStatement = false;
    console.log(`isFieldBeingActivated receives: ${zIdx} ${yIdx} ${xIdx} ${content}`);
    
    let neighboursArr = [];
    for (let z=-1; z<2; z++) {
        if (arr[zIdx + z] !== undefined) {
            for (let y=-1; y<2; y++) {
                if (arr[zIdx + z][yIdx + y] !== undefined) {
                    for (let x=-1; x<2; x++) {
                        if (!(x===0 && y===0 && z===0)) {
                            console.log(`checking: ${zIdx+z} ${yIdx+y} ${xIdx+x} which is ${arr[zIdx+z][yIdx+y][xIdx+x]}`);
                            neighboursArr.push(arr[zIdx+z][yIdx+y][xIdx+x]);
                        }
                    }
                }
            }
        }
    }
    // console.log(`the neighboursArr before filtering : `);
    // console.log(neighboursArr);

    let nearbyActiveFields = neighboursArr.filter(element => element === true).length;
    // console.log(`count ${nearbyActiveFields}`);
    if (content) {
        if (2 <= nearbyActiveFields && nearbyActiveFields <= 3) {
            returnStatement = true;
        }
    } else {
        if (nearbyActiveFields === 3) {
            returnStatement = true;
        }
    }
    return returnStatement
}

returnActiveCount(theInput);
main(6, theInput);
