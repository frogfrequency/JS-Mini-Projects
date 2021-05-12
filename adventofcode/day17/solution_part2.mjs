import { externTestInput2 } from "./puzzle-input-part2.mjs";
import { externPuzzleInput2 } from "./puzzle-input-part2.mjs";




let puzzleInput = [...externPuzzleInput2];
let testInput = [...externTestInput2];

let theInput = puzzleInput;


function addNewLayers(arr) { // this function increases every dimension by two (one at beginning and one at end)
    let lineLength = arr[0][0][0].length + 2;
    let linesCount = arr[0][0].length + 2;
    let zCount = arr[0].length + 2;

    // adding false(x) to start and end of each line (y)
    for (let w=0; w<arr.length; w++) {
        for (let z=0; z<arr[w].length; z++) {
            for (let y=0; y<arr[w][z].length; y++) {
                arr[w][z][y].unshift(false);
                arr[w][z][y].push(false);
            }        
        }
    }

    // creating newLine(y) and adding it at beginning and end of z's   
    let newLine = [];
    for (let i=0; i<lineLength; i++) {
        newLine.push(false);
    }

    for (let w=0; w<arr.length; w++) {
        for(let z=0; z<arr[w].length; z++) {
            arr[w][z].push(JSON.parse(JSON.stringify(newLine)));
            arr[w][z].unshift(JSON.parse(JSON.stringify(newLine)));
        }
    }

    // creating newZ and adding it at beginning and end of w's  
    let newZ = [];  // creating a empty newZ
    for (let i=0; i<linesCount; i++) {  // filling the newZ with newLines
        newZ.push(JSON.parse(JSON.stringify(newLine)));
    }

    for (let w=0; w<arr.length; w++) {        
        arr[w].push(JSON.parse(JSON.stringify(newZ))); // pushing and unshiftig the newZ to arr
        arr[w].unshift(JSON.parse(JSON.stringify(newZ)));
    }

    // creating w and adding it at beginning and end of whole array

    let newW = [];
    for (let i=0; i<zCount; i++) {
        newW.push(JSON.parse(JSON.stringify(newZ)));
    }

    arr.push(JSON.parse(JSON.stringify(newW)));
    arr.unshift(JSON.parse(JSON.stringify(newW)));

}

function visualizeArr(arr) {
    let outputString = '';
    for (let w=0; w<arr.length; w++) {        
        for (let z=0; z<arr[w].length; z++) {
            outputString += (`w/z: ${w} / ${z}\n`);
            for (let y=0; y<arr[w][z].length; y++) {
                for (let x=0; x<arr[w][z][y].length; x++) {
                    if (arr[w][z][y][x]) {
                        outputString += '#';
                    } else {
                        outputString += '.';
                    }
                }
                outputString += '\n';
            }
            outputString += '\n';
        }
    }
    console.log(outputString);
}


// make one iteration to be: add new layers --> theInput = returnUpdatedArr(theInput); --> visualize(theInput)

function main(iterationCount, arr) {
    console.log(`initial arr is: `);
    visualizeArr(arr);
    

    for (let counter=0; counter<iterationCount; counter++) {
        console.log(`the loop is at: ${counter}`);
        addNewLayers(arr);
        arr = returnUpdatedArr(arr);
        visualizeArr(arr);
        returnActiveCount(arr);
    }
}



function returnActiveCount(arr) {
    let counter = 0;
    for (let w=0; w<arr.length; w++) {
        for (let z=0; z<arr[w].length; z++) {
            for (let y=0; y<arr[w][z].length; y++) {
                for (let x=0; x<arr[w][z][y].length; x++) {
                    if(arr[w][z][y][x]) {
                        counter++;
                    }
                    
                }
            }
        }
    }
    console.log(`the counter is at: ${counter}`);
}

function returnUpdatedArr(arr) {
    let newArr = JSON.parse(JSON.stringify(arr));
    // evaluate each field of arr and write result (true or false) to newArr
    for (let w=0; w<arr.length; w++) {
        for (let z=0; z<arr[w].length; z++) {
            for (let y=0; y<arr[w][z].length; y++) {
                for (let x=0; x<arr[w][z][y].length; x++) {
                    
                    let currentFieldFutureActivity = isFieldBeingActivated(w, z, y, x, arr[w][z][y][x], arr);
                    newArr[w][z][y][x] = currentFieldFutureActivity; 

                }
            }
        }
    }
    return newArr
}


function isFieldBeingActivated(wIdx, zIdx, yIdx, xIdx, content, arr) {
    let returnStatement = false;
    // console.log(`isFieldBeingActivated receives: ${wIdx} ${zIdx} ${yIdx} ${xIdx} ${content}`);
    
    let neighboursArr = [];
    for (let w=-1; w<2; w++) {
        if (arr[wIdx + w] !== undefined) {
            for (let z=-1; z<2; z++) {
                if (arr[wIdx + w][zIdx + z] !== undefined) {
                    for (let y=-1; y<2; y++) {
                        if (arr[wIdx + w][zIdx + z][yIdx + y] !== undefined) {
                            for (let x=-1; x<2; x++) {
                                if (!(x===0 && y===0 && z===0 && w===0)) {
                                    // console.log(`checking: ${wIdx+w} ${zIdx+z} ${yIdx+y} ${xIdx+x} which is ${arr[wIdx+w][zIdx+z][yIdx+y][xIdx+x]}`);
                                    neighboursArr.push(arr[wIdx+w][zIdx+z][yIdx+y][xIdx+x]);
                                }
                            }
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


main(6, theInput);
