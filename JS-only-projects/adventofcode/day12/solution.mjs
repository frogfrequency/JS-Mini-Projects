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

const testArr3 = [ // E (0)
    'R90', // S (1)
    'L180', // N (3)
    'F20', // ...
    'L270', // E (0)
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
            case 'E':
            case 'S':
            case 'W':
                move(currentLetter, currentValue);
                break;
            case 'F':
                move(directions[currentDirectionIdx], currentValue);
                break;
            case 'R':
                currentDirectionIdx = (currentDirectionIdx+(currentValue/90))%4;
                break;
            case 'L':
                currentDirectionIdx = (currentDirectionIdx-(currentValue/90))%4;
                while (currentDirectionIdx < 0) {
                    currentDirectionIdx = 4 - Math.abs(currentDirectionIdx);
                }
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
    let absoluteNorth = Math.abs(currentNorth);
    let absoluteEast = Math.abs(currentEast);
    console.log(`the manhattandistance: ${absoluteNorth} (north) + ${absoluteEast} (east) = ${absoluteNorth + absoluteEast}`);
}




// execution

// try processInstructions with testArr testArr2 and inputArr

processInstructions(inputArr);

console.log(currentNorth, currentEast);

logManhattandistance();

