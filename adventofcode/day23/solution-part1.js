let puzzleInput = [1,8,6,5,2,4,9,7,3];

let testInput = [3,8,9,1,2,5,4,6,7];


function play100(input) {
    let arr = [...input];
    let currentCup = arr[0]; // arr[0];  
   
    for (let i=0; i<100; i++) {

        console.log(`round: \t ${i+1}`);
        console.log(`\t ${arr}  -  (${currentCup}):`);
        let roundResult = playRound(currentCup, arr);
        currentCup = roundResult[0];
        arr = roundResult[1];
    }
    return arr
}

function playRound(currentCup, arr) { // idea: return new current one but change global input "input"
    let result = [undefined, undefined]; // first element is the newArr, second is the new currentOne
    let newArr = [...arr];

    let crabInventory = [];
    let currentCupIdx = arr.indexOf(currentCup);
    let targetIdxs = giveTargetIdxs(currentCupIdx);

    addToCrabInventory(targetIdxs, newArr, crabInventory);
    console.log(`\t\tcrabInventory = ${crabInventory}`);
    removeFromNewArr(targetIdxs, newArr);
    console.log(`\t\tarr without inv ${newArr}`)
    let destinationCup = giveDestinationCup(currentCup, newArr);
    let destinationCupIdx = newArr.indexOf(destinationCup);
    console.log(`\t\t\tdestinationCup and idx: ${destinationCup}  /  ${destinationCupIdx}`);
    for (let i=2; 0<=i ; i--) {
        newArr.splice(destinationCupIdx+1, 0, crabInventory[i]);
    }
    console.log(`\t\t\tnewArr: ${newArr}`);
    crabInventory = [];

    result[0] = newArr[(newArr.indexOf(currentCup)+1) % 9];
    result[1] = newArr;
    return result
}

function giveTargetIdxs(current) {
    let output = [];
    output.push((current+1)%9);
    output.push((current+2)%9);
    output.push((current+3)%9);
    return output
}


function addToCrabInventory(targetIdxs, arr, crabInv) {
    crabInv.push(arr[targetIdxs[0]]);
    crabInv.push(arr[targetIdxs[1]]);
    crabInv.push(arr[targetIdxs[2]]);
}

function removeFromNewArr(targetIdxs, newArr) {
    targetIdxs.sort((a,b) => b -a);
    for (let i=0; i<3; i++) {
        newArr.splice(targetIdxs[i], 1);
    }
}

function giveDestinationCup(currentCup, arr) {
    if (currentCup === undefined) {
        console.log('no valid currentCup passed into giveDestinationCup');
        return 'x0';
    }
    while (true) {
        currentCup = currentCup -1 ;
        if (currentCup === -1) {
            currentCup = 9;
        }
        if (arr.includes(currentCup)) {
            return currentCup
        }
    }
}


// current must be defined upfront
// find and remove the 3 thingys
// find targetIdx
// insert the thingys after the target
// return arr?




function giveFinalAnswer(finalSequence) {
    while (finalSequence[0] !== 1) {
        finalSequence.push(finalSequence[0]);
        finalSequence.shift();
    }

    finalSequence.shift();

    let outputString = '';
    for (let i=0; i<finalSequence.length; i++) {
        outputString += finalSequence[i];
    }
    return outputString
}





let finalSequence = play100(puzzleInput);
let finalString = giveFinalAnswer(finalSequence);
console.log(finalString);


