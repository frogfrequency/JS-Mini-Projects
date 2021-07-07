import {wireOne} from "./puzzle-input.mjs";
import {wireTwo} from "./puzzle-input.mjs";


let testWireOne = ['R75','D30','R83','U83','L12','D49','R71','U7','L72'] //// wronnnnnggg

let testWireTwo = ['U62','R66','U55','R34','D71','R55','D58','R83']

let firstWire = wireOne;
let secondWire = wireTwo;



function doIt(input) {
    
    let currentPosition = [0,0];
    let visitedPositions = [];
    
    for (let i=0; i<input.length; i++) {
        let currentElement = input[i];
        let direction = currentElement[0];
        let distance = currentElement.slice(1);
        let thisLineVisited = giveVisitedPlaces([...currentPosition], direction, distance);

        visitedPositions = visitedPositions.concat(thisLineVisited);

        currentPosition = thisLineVisited[thisLineVisited.length-1];
    }
    return visitedPositions
}

function giveVisitedPlaces(pos, dir, dist) {
    let outputArr = [];
    for (let i=1; i<=dist; i++) {
        
        switch(dir) {
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



// console.log(`before:`);
// console.log(firstVisited);

firstVisited.sort((a,b) => giveManhattan(a) - giveManhattan(b));
secondVisited.sort((a,b) => giveManhattan(a) - giveManhattan(b));

for (let i = 0; i < firstVisited.length; i++) {
    firstVisited[i] = JSON.stringify(firstVisited[i]);
}

for (let i = 0; i < secondVisited.length; i++) {
    secondVisited[i] = JSON.stringify(secondVisited[i]);
}



for (let i=0; i<firstVisited.length; i++) {
    let currentElement = firstVisited[i];
    if (secondVisited.includes(currentElement)) {
        console.log(currentElement);
    }
}




// console.log(`after:`);
// console.log(firstVisited);

