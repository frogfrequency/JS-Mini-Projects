// 2783 is wrong?

import {inputArr} from "./puzzle-input.mjs"

const testArr = [
'F10',
'N3',
'F7',
'R90',
'F11'
]

const testArr2 = [
    'R180',
    'F30', // 30 west
    'N20', // 30 west 20 north
    'R90',
    'N20', // 30 west 40 north
    'S70', // 30 west 30 south
    'L180',
    'F40', // 30 west 70 south;
    'L90', 
    'F40', // 10 right 70 south;
    'E22', // 32 right 70 south;
]




const directions = ['E', 'S', 'W', 'N']
let currentDirectionIdx = 0;

let currentEast = 0;
let currentNorth = 0;



function processInstructions(arr) {
    for (let i=0; i<arr.length; i++) {
        let element = arr[i];
        let currentLetter = element.slice(0,1);
        let currentValue = parseInt(element.slice(1, element.length));
        switch(currentLetter) {
            case 'N':
                move(currentLetter, currentValue);
                break;
            case 'E':
                move(currentLetter, currentValue);
                break;
            case 'S':
                move(currentLetter, currentValue);
                break;
            case 'W':
                move(currentLetter, currentValue);
                break;
            case 'F':
                move(directions[currentDirectionIdx], currentValue);
                break;
            case 'R':
                currentDirectionIdx = (currentDirectionIdx+1*(currentValue/90))%4;
                break;
            case 'L':
                currentDirectionIdx = (currentDirectionIdx-1*(currentValue/90))%4;
                break;
            default:
                console.log('critical error in switch');
        }
    }
}


function move(dir, val) {
    switch(dir) {
        case 'N':
            currentNorth = currentNorth + val;
            break;
        case 'E':
            currentEast = currentEast + val;
            break;
        case 'S':
            currentNorth = currentNorth - val;
            break;
        case 'W':
            currentEast = currentEast - val;
            break;
    }
}

function logManhattandistance() {
    if (currentNorth < 0) {
        currentNorth = currentNorth * -1;
    }
    if (currentEast < 0) {
        currentEast = currentEast * -1;
    }
    console.log(`the manhattandistance: ${currentNorth} (north) + ${currentEast} (east) = ${currentNorth + currentEast}`);
}




// execution

// try processInstructions with testArr testArr2 and inputArr

processInstructions(testArr2);

console.log(currentNorth, currentEast);

logManhattandistance();

