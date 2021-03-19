import {initializeArrCreation, colorArr, contentArr, multiplierArr} from './preprocessor7.1.mjs';
import {testInput, inputString} from './puzzle-input.mjs';

let testInput2 = `
shiny gold bags contain 2 dark red bags.
dark red bags contain 2 dark orange bags.
dark orange bags contain 2 dark yellow bags.
dark yellow bags contain 2 dark green bags.
dark green bags contain 2 dark blue bags.
dark blue bags contain 2 dark violet bags.
dark violet bags contain no other bags.`

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

let bagArr = [];



function fillTheBag(color) {
    bagArr.push(color);
    let currentColorIdx = colorArr.indexOf(color);
    let currentColorContent = contentArr[currentColorIdx];
    if (currentColorContent[0] !== undefined) {
        let contentCount = currentColorContent.length;
        for (let i=0; i<contentCount; i++) {
            let thisColor = currentColorContent[i];
            let thisMultiplier = multiplierArr[currentColorIdx][i];
            // console.log(`thisColor: ${thisColor}, thisMultiplier: ${thisMultiplier}`);
            for (let j=0; j<thisMultiplier; j++) {
                fillTheBag(thisColor);
            }
        }
        
    }
}



// execution

// fillTheBag('dim tan');

// console.log(colorArr, contentArr, multiplierArr);
fillTheBag('shiny gold');
// clear tan bags contain 5 bright purple bags, 1 pale black bag, 5 muted lime bags.


console.log(`the length of the following arr is: ${bagArr.length-1}`); // -1 because the initial color must not be countet
console.log(bagArr);









// console.log(colorArr);
// console.log(contentArr);
// console.log(multiplierArr);


// arch-------------------------------------------------

// let shinyGoldenBagArr = ['shiny gold'] 
// let shinyGoldenBagArrStartIdx = 0;
// let newTempArrLength = 0;
// let newTempArr = [];
// for (let i=shinyGoldenBagArrStartIdx; i<arr.length; i++) {
//     let currentColor = arr[i];
//     let currentColorMultipliers = multiplierArr[currentColorIdx];
//     for (let j=0; j<currentColorMultipliers.length; j++) {
//         let currentMultiplier = currentColorMultipliers[j];
//         let currentContent = currentColorContent[j];
//         for (let k=0; k<currentMultiplier; k++) {
//             newTempArr.push(currentContent);
//         }
//     }
// }
// newTempArrLength = newTempArr.length;
// shinyGoldenBagArrStartIdx = shinyGoldenBagArrStartIdx+newTempArrLength;
// for (let m=0; m<newTempArrLength; m++) {
//     shinyGoldenBagArr.push(newTempArr[m]);
// }
// console.log(shinyGoldenBagArr);
// fillTheGoldenBag(shinyGoldenBagArr);