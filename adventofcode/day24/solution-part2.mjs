import { puzzleInput } from "./puzzle-input.mjs";

import { testInput } from "./test-input.mjs";


let input = puzzleInput;

function giveInitialPattern(input) {
    let output = [];
    for (let i = 0; i < input.length; i++) {
        let element = evaluateElement(input[i]);
        element = JSON.stringify(element);
        if (output.includes(element)) {
            // console.log('is included');
            let idx = output.indexOf(element);
            output.splice(idx, 1);
        } else {
            // console.log(`i: ${i} is not included`);
            output.push(element);
        }

    }
    return output
}

function evaluateElement(element) {
    let outputCoords = [0, 0]; // nw, ne, e
    let elementLength = element.length;
    let i = 0;
    while (i < elementLength) {
        let characterI = element.charAt(i);
        switch (characterI) {
            case 'e':
                outputCoords[1]++;
                i++;
                break;
            case 'w':
                outputCoords[1]--;
                i++;
                break;
            case 'n':
                if (element.charAt(i + 1) === 'e') {
                    outputCoords[0]++;
                    i = i + 2;
                } else if (element.charAt(i + 1) === 'w') {
                    outputCoords[0]++;
                    outputCoords[1]--;
                    i = i + 2;
                }
                break;
            case 's':
                if (element.charAt(i + 1) === 'e') {
                    outputCoords[0]--;
                    outputCoords[1]++;
                    i = i + 2;
                } else if (element.charAt(i + 1) === 'w') {
                    outputCoords[0]--;
                    i = i + 2;
                }
                break;
        }
    }
    return outputCoords
}

let initialPattern = giveInitialPattern(input);

// console.log(initialPattern);

//// part two from here


function giveMinMax(pattern) {
    let minNE = 0;
    let maxNE = 0;
    let minE = 0;
    let maxE = 0;
    for (let i = 0; i < pattern.length; i++) {
        let currentCoords = JSON.parse(pattern[i]);

        let currentCoordsNE = currentCoords[0];
        let currentCoordsE = currentCoords[1];

        if (maxNE < currentCoordsNE) {
            maxNE = currentCoordsNE;
        } else if (currentCoordsNE < minNE) {
            minNE = currentCoordsNE;
        }

        if (maxE < currentCoordsE) {
            maxE = currentCoordsE;
        } else if (currentCoordsE < minE) {
            minE = currentCoordsE;
        }

    }
    return [minNE - 1, maxNE + 1, minE - 1, maxE + 1];
}

function simulate100days(startPattern) {
    let pattern = startPattern;
    for (let i = 0; i < 100; i++) {
        console.log(`DAY ${i}`);
        // console.log(pattern);
        pattern = giveNewDay(pattern); 
    }
    return pattern
}

function giveNewDay(pattern) {
    let newPattern = [];
    let tempCounter = 0;
    let minMax = giveMinMax(pattern);
    let blackCounter = 0;

    // console.log(pattern);



    for (let i = minMax[0]; i < minMax[1]+1; i++) {
        for (let j = minMax[2]; j < minMax[3]+1; j++) {
            // console.log(i + '   ' + j);
            let isBlackNextDay = giveIsBlackNextDay(i, j, pattern);
            if (isBlackNextDay) {
                blackCounter++;
                let elementString = [undefined, undefined];
                elementString[0] = i;
                elementString[1] = j;
                newPattern.push(JSON.stringify(elementString))
            }
            // console.log('\t\t' + blackCounter);
            tempCounter++;
            // console.log('\t#:' + tempCounter);
        }
    }
    console.log(newPattern.length);
    return newPattern
}

function giveIsBlackNextDay(NE, E, pattern) {
    let element = [];
    element.push(NE);
    element.push(E);
    let elementString = JSON.stringify(element);
    let thisTileIsBlack = pattern.includes(elementString);

    let neighbours = giveNeighbours(element);
    let blackNeighbourCount = giveBlackNeighbourCount(neighbours, pattern);
  
    if (thisTileIsBlack) {
        if (blackNeighbourCount === 0 || 2 < blackNeighbourCount) {
            return false
        }
    } else if (blackNeighbourCount === 2) {       
        return true
    } 

    return thisTileIsBlack
}


function giveNeighbours(coords) {

    let neighbourPattern = [[1, -1], [1, 0], [0, 1], [-1, 1], [-1, 0], [0, -1]];
    let output = [];

    for (let i = 0; i < neighbourPattern.length; i++) {
        let targetCoords = [undefined, undefined];
        targetCoords[0] = coords[0] + neighbourPattern[i][0];
        targetCoords[1] = coords[1] + neighbourPattern[i][1];
        output.push(targetCoords);
    }
    return output
}

function giveBlackNeighbourCount(neighbours, pattern) {
    let counter = 0;
    for (let i = 0; i < neighbours.length; i++) {
        let currentNeighbourString = JSON.stringify(neighbours[i]);
        if (pattern.includes(currentNeighbourString)) {
            counter++
        }
    }
    return counter
}


// giveNewDay(initialPattern);

simulate100days(initialPattern);


// console.log(giveNeighbours([-3,0]));