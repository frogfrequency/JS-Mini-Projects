
function sym() {
    let argsArr = [];   
    for (let i=0; i<arguments.length; i++) {
        argsArr.push(arguments[i]);
    }

    let currentDelta = argsArr[0];

    for (let i=1; i<argsArr.length; i++) {
        let current1 = currentDelta;
        let current2 = argsArr[i];
        let duplicatesArr = [];

        for (let i=0; i<current1.length; i++) { // evaluating the duplicates  between two
            let toCheck = current1[i];
            for (let i=0; i<current2.length; i++) {
                if (current2[i] === toCheck) {
                    duplicatesArr.push(toCheck)
                }
            }    
        }
        let unfiltered = []
            current1.forEach(element => unfiltered.push(element))
            console.log(`unfiltered after first ${unfiltered}`);
            current2.forEach(element => unfiltered.push(element))
            console.log(`unfiltered after second ${unfiltered}`);
        
        for (let i=0; i<duplicatesArr.length; i++) {
            console.log(`---------------before filter ${unfiltered}`);
            unfiltered = unfiltered.filter(element => element !== duplicatesArr[i])
            console.log(`---------------afterfilter ${unfiltered}`);
        }

        console.log(`duplicatesArr ${duplicatesArr}      filtered${unfiltered}`);

        unfiltered = unfiltered.filter((value, index) => unfiltered.indexOf(value) === index);
        unfilleter = unfiltered.sort();
        currentDelta = unfiltered;
    }


    console.log(`RESULT RESULT RESULT ${currentDelta}`);
    console.log(currentDelta);
    return currentDelta;
}




sym([1, 2, 3], [5, 2, 1, 4]);


