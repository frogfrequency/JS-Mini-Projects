const testRulesArr = [
    [[4,1,5]],              // 0
    [[2,3], [3,2]],         // 1
    [[4,4], [5,5]],         // 2
    [[4,5], [5,4]],         // 3
    "a",                  // 4
    "b"                   // 5
]


function doIt(theRule, rulesArr) {
    let container = [];
    let contCopyOne;
    let contCopyTwo;

    
    let theNextRules = returnRules(theRule, rulesArr);
    // console.log(theNextRules);

    // loop through the next rules
    for (let i=0; i<theNextRules.length; i++) {
        // if it has only one element add this to container
        // if it has more than one element make copy of container shizzle etc.
        if (theNextRules[i].length === 1) {
            if(container.length === 0) {
                container.push(theNextRules[i]);
            } else {
                for (let k=0; k<container.length; k++) {
                    container[k].push(theNextRules[i]);
                }
            } 
            // container.push(theNextRules[i]); // wrong .. push to every instance not only to container
        } else {
            contCopyOne = JSON.parse(JSON.stringify(container));
            contCopyTwo = JSON.parse(JSON.stringify(container));
            let firstRule = theNextRules[i][0];
            let secondRule = theNextRules[i][1];

            contCopyOne.push(firstRule);
            contCopyTwo.push(secondRule);

            container = [];
            container.push(contCopyOne);
            container.push(contCopyTwo);

        }
    console.log(i);
    console.log(container);
    }
    return container
}


function returnRules(theRule, rulesArr) {
    let output = [];
    for (let i=0; i<theRule.length; i++) {
        output.push(rulesArr[theRule[i]]);
    }
    return output
}


function reallyDoIt() {
    let firstWave = doIt(testRulesArr[0][0], testRulesArr);
    
    while(containsInt(firstWave)) {
        reallyDoIt
    }

    // try to make it again and again...




}

reallyDoIt();