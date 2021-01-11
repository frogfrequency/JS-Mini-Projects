
import { inputArr } from "./puzzle-input.mjs"

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
    'N49',
    'L90', 
    'R90',
    'L180'

]




let wayPoint = [1, 10]; // N, E


let currentEast = 0;
let currentNorth = 0;



function processInstructions(arr) {
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        let currentLetter = element.slice(0, 1);
        let currentValue = parseInt(element.slice(1, element.length));
        console.log('----------------------------');
        console.log(`currentNorth: ${currentNorth}, currentEast: ${currentEast}`);
        console.log(`wayPoint: ${wayPoint} (N/E)`);
        switch (currentLetter) {
            case 'N':
            case 'E':
            case 'S':
            case 'W':
                moveWayPoint(currentLetter, currentValue);
                break;
            case 'F':
                move(currentValue);
                break;
            case 'R':
                turnRight(currentValue);
                break;
            case 'L':
                turnLeft(currentValue);
                break;
            default:
                console.log('critical error in switch');
        }
        // control logs
        console.log(arr[i]);
        console.log(`currentNorth: ${currentNorth}, currentEast: ${currentEast}`);
        console.log(`wayPoint: ${wayPoint} (N/E)`);
        console.log('----------------------------');


        // end control logs

    }
}


function move(amount) {
    currentNorth = currentNorth + wayPoint[0] * amount;
    currentEast = currentEast + wayPoint[1] * amount;
}

function moveWayPoint(dir, val) {
    switch (dir) {
        case 'N':
            wayPoint[0] = wayPoint[0] + val;
            break;
        case 'E':
            wayPoint[1] = wayPoint[1] + val;
            break;
        case 'S':
            wayPoint[0] = wayPoint[0] - val;
            break;
        case 'W':
            wayPoint[1] = wayPoint[1] - val;
            break;
    }
}

function logManhattandistance() {
    let absoluteNorth = Math.abs(currentNorth);
    let absoluteEast = Math.abs(currentEast);
    console.log(`the manhattandistance: ${absoluteNorth} (north) + ${absoluteEast} (east) = ${absoluteNorth + absoluteEast}`);
}


function turnRight(degree) {
    let ticksToTurn = (degree / 90)%4;
    let newWayPoint = ['x', 'x'];
    switch(ticksToTurn) {
        case 2:
            wayPoint[0] = wayPoint[0]*(-1);
            wayPoint[1] = wayPoint[1]*(-1);
            break;
        case 1:
            newWayPoint[0] = wayPoint[1]*(-1);
            newWayPoint[1] = wayPoint[0];
            wayPoint[0] = newWayPoint[0];
            wayPoint[1] = newWayPoint[1];
            break;
        case 3:
            newWayPoint[0] = wayPoint[1];
            newWayPoint[1] = wayPoint[0]*(-1);
            wayPoint[0] = newWayPoint[0];
            wayPoint[1] = newWayPoint[1];
            break;
    }
}

function turnLeft(degree) {
    let ticksToTurn = (degree / 90)%4;
    let newWayPoint = ['x', 'x'];
    switch(ticksToTurn) {
        case 2:
            wayPoint[0] = wayPoint[0]*(-1);
            wayPoint[1] = wayPoint[1]*(-1);
            break;
        case 1:
            newWayPoint[0] = wayPoint[1];
            newWayPoint[1] = wayPoint[0]*(-1);
            wayPoint[0] = newWayPoint[0];
            wayPoint[1] = newWayPoint[1];
            break;
        case 3:
            newWayPoint[0] = wayPoint[1]*(-1);
            newWayPoint[1] = wayPoint[0];
            wayPoint[0] = newWayPoint[0];
            wayPoint[1] = newWayPoint[1];
            break;
    }
}





// execution

// try processInstructions with testArr testArr2 and inputArr

processInstructions(inputArr);

console.log(currentNorth, currentEast);

logManhattandistance();

