import { wireOne } from "./puzzle-input.mjs";
import { wireTwo } from "./puzzle-input.mjs";


let testWireOne = ['R75', 'D30', 'R83', 'U83', 'L12', 'D49', 'R71', 'U7', 'L72'] //// wronnnnnggg

let testWireTwo = ['U62', 'R66', 'U55', 'R34', 'D71', 'R55', 'D58', 'R83']

let firstWire = wireOne;
let secondWire = wireTwo;



function doIt(input) {

    let currentPosition = [0, 0];
    let visitedPositions = [];

    for (let i = 0; i < input.length; i++) {
        let currentElement = input[i];
        let direction = currentElement[0];
        let distance = currentElement.slice(1);
        let thisLineVisited = giveVisitedPlaces([...currentPosition], direction, distance);

        visitedPositions = visitedPositions.concat(thisLineVisited);

        currentPosition = thisLineVisited[thisLineVisited.length - 1];
    }
    return visitedPositions
}

function giveVisitedPlaces(pos, dir, dist) {
    let outputArr = [];
    for (let i = 1; i <= dist; i++) {

        switch (dir) {
            case 'U':
                pos[1] = pos[1] + 1;
                break;
            case 'D':
                pos[1] = pos[1] - 1;
                break;
            case 'R':
                pos[0] = pos[0] + 1;
                break;
            case 'L':
                pos[0] = pos[0] - 1;
                break;
        }

        outputArr.push([...pos]);
    }
    // console.log(outputArr);
    return outputArr
}

function giveManhattan(cords) {
    return Math.abs(cords[0]) + Math.abs(cords[1])
}


let firstVisited = doIt(firstWire);
let secondVisited = doIt(secondWire);




for (let i = 0; i < firstVisited.length; i++) {
    firstVisited[i] = JSON.stringify(firstVisited[i]);
}

for (let i = 0; i < secondVisited.length; i++) {
    secondVisited[i] = JSON.stringify(secondVisited[i]);
}

let theElementsStrings = [
    '[-5,2175]',
    '[224,2271]',
    '[-599,1979]',
    '[-663,1979]',
    '[224,2523]',
    '[269,2808]',
    '[377,2808]',
    '[269,2976]',
    '[237,3111]',
    '[377,2976]',
    '[435,2976]',
    '[237,3255]',
    '[237,3290]',
    '[98,3542]',
    '[-4246,-98]',
    '[-4000,-633]',
    '[-4208,892]',
    '[-3956,-1728]',
    '[-3668,-2759]',
    '[-4099,-2455]',
    '[-3668,-2944]',
    '[-3668,-2949]',
    '[-3961,-2803]',
    '[1268,5523]',
    '[-4054,-2803]',
    '[1268,5777]',
    '[-4054,-3033]',
    '[-4522,-2565]',
    '[-1586,5526]',
    '[-4522,-2608]',
    '[1103,6127]',
    '[1053,6243]',
    '[-4591,-2803]',
    '[-4591,-2828]',
    '[209,7214]',
    '[-2215,5356]',
    '[370,7301]',
    '[-2135,5648]',
    '[-2421,5394]',
    '[-1674,6218]',
    '[-2135,5916]',
    '[-2061,6218]',
    '[-2844,5836]',
    '[-3012,5854]'
];


let firstIntersectionDistancesSum = [];

for (let i = 0; i < theElementsStrings.length; i++) {
    let occurenceIdxFirst = firstVisited.indexOf(theElementsStrings[i]);
    let occurenceIdxSecond = secondVisited.indexOf(theElementsStrings[i]);
    let sum = occurenceIdxFirst + occurenceIdxSecond;
    firstIntersectionDistancesSum.push(sum);

    // console.log(`${occurenceIdxFirst} + ${occurenceIdxSecond} = ${sum}`);
}

firstIntersectionDistancesSum.sort((a, b) => a - b);

console.log(firstIntersectionDistancesSum);


firstIntersectionDistancesSum.forEach((elem, idx, arr) => arr[idx] = arr[idx]+2)


console.log(firstIntersectionDistancesSum);

// take the first number from the final arr because its the lowest...