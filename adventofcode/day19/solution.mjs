// array first [4,1,5]

// array second    [a,2,3,b],
//                 [a,3,2,b]

// array third     [a,4,4,4,5,b]
//                 [a,5,5,4,5,b]
//                 a,4,4,5,4,b
//                 a,5,5,5,4,b

//                 a,4,5,4,4,b
//                 a,4,5,5,5,b
//                 a,5,4,4,4,b
//                 a,5,4,5,5,b

// 0: 4 1 5
// 1: 2 3 | 3 2
// 2: 4 4 | 5 5
// 3: 4 5 | 5 4
// 4: "a"
// 5: "b"


let testArr = [['a'], [[[["a", "a"], ["b", "b"]], [["a", "b"], ["b", "a"]]], [[["a", "b"], ["b", "a"]], [["a", "a"], ["b", "b"]]]], ['b']];


// [4,1,5]
// [a,[[2,3][3,2]],b]                       
// [a,[]]

// ababbb
// bababa
// abbbab
// aaabbb
// aaaabbb


// own testCase

const testRulesArr2 = [
    [[4,4,1,4,4]],              // 0
    [[2], [3]],         // 1
    [[4,4], [5,5]],         // 2
    [[4,5], [5,4]],         // 3
    "a",                  // 4
    "b",                   // 5
    "c"                    // 6
]


import { testRulesArr } from "./test-input.mjs";

let testInput = [4, 1, 5];


function doIt(rulesArr) {
    let doItOutput = [];
    for (let x = 0; x < rulesArr[0][0].length; x++) {
        doItOutput.push(replace(rulesArr[0][0][x], rulesArr));
    }
    // console.log(`\n\ndoItOutput: ${doItOutput}`);
    return doItOutput
}

function replace(ruleIdx, rulesArr) {
    // console.log(`replace() is being called with: ${ruleIdx}  and ${rulesArr}`);
    let replaceOutput = [];
    let currentRule = rulesArr[ruleIdx];
    for (let i = 0; i < currentRule.length; i++) {
        if (Array.isArray(currentRule[i])) {
            // console.log(`this is an array: `);
            // console.log(currentRule[i]);
            let newMiniArray = [];
            for (let j = 0; j < currentRule[i].length; j++) {
                newMiniArray.push(replace(currentRule[i][j], rulesArr));
            }
            replaceOutput.push(newMiniArray);
        } else {
            // console.log(`this is not an array: `);
            // console.log(currentRule[i]);

            return currentRule[i];
        }
    }

    return replaceOutput
}





function createPossibilities(deepArr) {
    console.log(`createPossibilites receives:`);
    console.log(deepArr);
    let temp = [];
    let tempCopyOne = [];
    let tempCopyTwo = [];
    for (let i = 0; i < deepArr.length; i++) {
        let currentOne = deepArr[i];
        if (Array.isArray(currentOne)) {
            // if (currentOne.length === 1) {   // maybe needed when arrs with only 1 element appear?
            //     temp.push(currentOne[0]);
            // } else {
                tempCopyOne = JSON.parse(JSON.stringify(temp));
                tempCopyTwo = JSON.parse(JSON.stringify(temp));
                                    
                        let firstReturn = createPossibilities(currentOne[0]);
                        for (let j=0; j<firstReturn.length; j++) {
                            console.log(j);
                            console.log(firstReturn[j]);
                        }

                        let secondReturn = createPossibilities(currentOne[1]);

                        // tempCopyOne[j] = tempCopyOne[j] + createPossibilities(currentOne[0]);
                        // tempCopyTwo[j] = tempCopyTwo[j] + createPossibilities(currentOne[1]);
                    


                temp = JSON.parse(JSON.stringify(tempCopyOne));
                temp.push(JSON.parse(JSON.stringify(tempCopyTwo)));
                
            // }
            
        } else {
            
            if (temp.length < 1) {
                temp.push(currentOne);
            } else {
                for (let v=0; v<temp.length; v++) {
                    temp[v] = temp[v] + currentOne;
                }
            }
        }
    }
    console.log(temp);
    return temp
}

createPossibilities(doIt(testRulesArr2));
