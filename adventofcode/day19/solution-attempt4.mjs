import { testRulesArr } from "./test-input.mjs";
import { inputRulesArr } from "./puzzle-input.mjs";
import { satelliteDataArr } from "./puzzle-input.mjs";


const testCaseArr = [
    [['a']],              // case 1
    [[2]],                // case 2
    [[1,2]],              // case 3
    [[55],[3]],           // case 4
    [[23,12],[14,12]]     // case 5
]

const testRulesArr2 = [
    [[4,5,4]],                  // 0
    [[4],[5]],         // 1
    [[4,5]],         // 2
    [[4],[5]],                  // 3
    ["a"],                  // 4
    ["b"]                   // 5
]




let arr = inputRulesArr;


function analyzeElement(element) {
    // console.log(`analyzeElement receives: `);
    // console.log(element);
    if (element[0][0] === 'a' || element[0][0] === 'b' || element[0][0] == 'c') { // element is char so we return status code 1
        return 1
    }
    
    let elementLength = element.length;
    let subElementLength = element[0].length;
    
    if (subElementLength === 3) { // this case is very special and only added because the testexample rule 0 contains it...
        return 99
    }

    if (elementLength === 1) {
        if (subElementLength === 1) {
            return 2 // element contains one single rule Idx --> status code 2
        } else {
            return 3 // element contains two "concatenated" rule Idx's --> status code 3
        }
    } else {
        if (subElementLength === 1) {
            return 4 // element contains two single or-separated Idx's
        } else {
            return 5 // element contains two or-separated pairs of Idx's
        }        
    }
}



function doIt(ruleIdx, allRules) {
    // console.log('doIt called with ruleIdx: ' + ruleIdx);
    let currentRule = allRules[ruleIdx];
    let statusCode = analyzeElement(currentRule);
    // console.log('status code: ' + statusCode);

    switch(statusCode) {
        case 1: // letter
            return currentRule // WATCHOUT [0] removed... then even the second [0] removed (currentRule[0][0] is now currentRule)
            break;
        case 2: // single ruleIdx
            return doIt(currentRule[0][0], allRules);
            break;
        case 3: // two single and separated values
            let andOne = doIt(currentRule[0][0], allRules);
            let andTwo = doIt(currentRule[0][1], allRules);
            return combineAND(andOne, andTwo); // FIX THIS FUNCTION AND TEST IT
            break;
        case 4: // two or-separated single idx's
            let orOne = doIt(currentRule[0][0], allRules);
            let orTwo = doIt(currentRule[1][0], allRules);
            return orOne.concat(orTwo);
            break;
        case 5: // two or separeted "andpairs"
            let pairOneAndOne = doIt(currentRule[0][0], allRules);
            let pairOneAndTwo = doIt(currentRule[0][1], allRules);
            let pairOne = combineAND(pairOneAndOne, pairOneAndTwo);

            let pairTwoAndOne = doIt(currentRule[1][0], allRules);
            let pairTwoAndTwo = doIt(currentRule[1][1], allRules);
            let pairTwo = combineAND(pairTwoAndOne, pairTwoAndTwo);

            return pairOne.concat(pairTwo);
            break;
        case 99: // three single and separated values
        let sepcialAndOne = doIt(currentRule[0][0], allRules);
        let specialAndTwo = doIt(currentRule[0][1], allRules);
        let specialAndThree = doIt(currentRule[0][2], allRules);
        let specialOutput = combineAND(sepcialAndOne, specialAndTwo);
        specialOutput = combineAND(specialOutput, specialAndThree);
        return specialOutput
        break;
        default:
            console.log('NO VALID CASE INSIDE SWITCH');
      }
}


function combineAND(first, second) {
    let combineAndOutput = []; 
    for (let i=0; i<first.length; i++) {
        for (let j=0; j<second.length; j++) {
            let subString = first[i] + second[j];
            combineAndOutput.push(subString);
        }
    }
    return combineAndOutput
}



///////////////////////////////

let finalAnswer = doIt(0, arr); 

// console.log(`finalanswerlength before: ${finalAnswer.length}`);


// finalAnswer.filter((value, idx) => finalAnswer.indexOf(value) === idx); // this takes too long

// function giveArrWithoutDuplicates(arr) { // this takes too long as well maybe filtering is not needed
//     let output = [];
//     for (let i=0; i<arr.length; i++) {
//         if (i%10000 === 0) {
//             console.log(`current i: ${i}`);
//         }
//         let currentElement = arr[i];
//         if (!output.includes(currentElement)) {
//             output.push(currentElement)
//         }
//     }
// }

// let filteredFinalAnswer = giveArrWithoutDuplicates(finalAnswer);


// console.log(`finalanswerlength after: ${filteredFinalAnswer.length}`);



// console.log(`final answer: ${finalAnswer}`);


let counter = 0;
for (let i=0; i<satelliteDataArr.length; i++) {
    let currentData = satelliteDataArr[i];
    if (finalAnswer.includes(currentData)) {
        counter++;
    }
    console.log(`the final answer is: ${counter}`);
}