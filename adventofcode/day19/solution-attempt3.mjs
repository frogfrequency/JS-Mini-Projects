const testRulesArr1 = [
    [[4, 1, 5]],              // 0
    [[2, 3], [3, 2]],         // 1
    [[4, 4], [5, 5]],         // 2
    [[4, 5], [5, 4]],         // 3
    "a",                  // 4
    "b"                   // 5
]

const testRulesArr2 = [
    [[1]],          // 0
    [[2,3]],         // 1
    [[3]],         // 2
    [[4]],         // 3
    "a",                  // 4
    "b",                   // 5
    "c"                     // 6
]


// let testArr123 = ['a', [[4]], [[4, 6]], [[5], [4]], [[4, 4],[5, 6]], 'b'];

// expected status codes: 1, 2, 3, 4, 5, 1



function doIt(rule) {
    console.log('do it called with:');
    console.log(rule);
    let returnArr = [''];
    let newReturnArr = [];  
    
        let statusCode = analyzeElement(rule);
        console.log(`--> status code ${statusCode}`);
        console.log(`-------------------------------`);
        
        
        switch(statusCode) {
            case 1:
                for (let j=0; j<returnArr.length; j++) {
                    returnArr[j] += rule;
                }
                break;
            case 2:
                let x = doIt(testRulesArr2[rule[0][0]]);
                for (let k=0; k<x.length; k++) {
                    for (let j=0; j<returnArr.length; j++) {
                        let string = returnArr[j] + x[k];
                        newReturnArr.push(string);
                    }
                    returnArr = JSON.parse(JSON.stringify(newReturnArr));
                }
                
                break;
            case 3:
                let a = doIt(testRulesArr2[rule[0][0]]);
                let b = doIt(testRulesArr2[rule[0][1]]);
                
                let c = combineAND(a,b);


                for (let f=0; f<c.length; f++) {
                    for (let g=0; g<returnArr.length; g++) {
                        let string = returnArr[g] + c[f];
                        newReturnArr.push(string);
                    }
                    returnArr = JSON.parse(JSON.stringify(newReturnArr));
                }


                // make all the connections between x and y and store them maybe in z
                // then do the same as with x in case two but do it with the z
                break;
            case 4:
                // code block
                break;
            case 5:
                // code block
                break;
            default:
                // code block
          }
    console.log(`doIt returns: `);      
    console.log(returnArr);
    return returnArr
}

function analyzeElement(element) {
    console.log(`analyzeElement receives: `);
    console.log(element);
    if (element === 'a' || element === 'b') { // element is char so we return status code 1
        return 1
    }
    let elementLength = element.length;
    let subElementLength = element[0].length;

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


function combineAND(a,b) {
    let output = [];
    for (let i=0; i<a.length; i++) {
        for (let j=0; j<b.length; j++) {
            let subString = a[i] + b[j];
            output.push(subString);
            console.log(subString);
        }
    }
    console.log(`final output: `);
    console.log(output);
    return output
}

function addToEveryElement() {}

// what kind of cases do we have:
// --> contains a letter
// --> contains a single ruleIdx
// --> contains two combined rule Idxs
// --> contains two or-separated rules
// --> contains contains two pairs of or-separated rules


let finalResult = doIt(testRulesArr2[0]);
console.log(`final result: ${finalResult}`); 