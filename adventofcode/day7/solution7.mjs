import {initializeArrCreation, colorArr, contentArr} from './preprocessor.mjs';
import {testInput, inputString} from './puzzle-input.mjs';


initializeArrCreation(inputString);

let currentColorFullArr = [];

function returnFullContentsArr(arr) {
    let returnFullContentsArrOutput = [];
    for (let i=0; i<arr.length; i++) {
        let currentColor = arr[i];
        currentColorFullArr = [];
        setCurrentColorFullArr(currentColor);
        let currentColorFullArrClean = removeDuplicates(currentColorFullArr);
        returnFullContentsArrOutput.push(currentColorFullArrClean)
    }
    return returnFullContentsArrOutput
}


function setCurrentColorFullArr(color) {
    let colorId = colorArr.indexOf(color);
    let content = contentArr[colorId];
    content.forEach(element => currentColorFullArr.push(element));
    for (let i=0; i<content.length; i++) {
        setCurrentColorFullArr(content[i]);
    }
}

function removeDuplicates(data) {
    return data.filter((value, index) => data.indexOf(value) === index);
}

function countShinyGold(arr) {
    let shinyGoldCounter = 0;
    for (let i=0; i<arr.length; i++) {
        let currentDeepContent = arr[i];
        if (currentDeepContent.indexOf('shiny gold') !== -1) {
            shinyGoldCounter++
        }
    }
    console.log(shinyGoldCounter);
}

// execution

let deepContentArr = returnFullContentsArr(colorArr);
countShinyGold(deepContentArr);








































// archiv 

const testColorArr = [
    'brown',
    'orange',
    'yellow',
    'burgundy',
    'master brown',
    'bright blue',
    'bright burgundy',
    'dark cyan',
];

const testColorContents = [
    ['orange', 'yellow', 'burgundy'],
    ['bright blue', 'bright burgundy'],
    ['dark cyan'],
    ['yellow', 'bright burgundy'],
    ['bright burgundy', 'dark cyan'],
    [],
    [],
    [],
];