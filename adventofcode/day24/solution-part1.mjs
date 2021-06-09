import { puzzleInput } from "./puzzle-input.mjs";

import { testInput } from "./test-input.mjs";


let input = puzzleInput;

function giveTranslatedArr(input) {
    let output = [];
    for (let i = 0; i < input.length; i++) {
        let element = evaluateElement(input[i]);        
        element = JSON.stringify(element);
        if (output.includes(element)) {
            console.log('is included');
            let idx = output.indexOf(element);
            output.splice(idx, 1);
        } else {
            console.log(`i: ${i} is not included`);
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



let translatedArr = giveTranslatedArr(input);

console.log(translatedArr.length);
