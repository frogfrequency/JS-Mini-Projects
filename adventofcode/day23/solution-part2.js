let puzzleInput = [1,8,6,5,2,4,9,7,3];

let testInput = [3,8,9,1,2,5,4,6,7];


let arr = puzzleInput;


for (let i=10; i<1000001; i++) {
    arr.push(i);
}

let arrLength = arr.length;
let currentCupIdx = 0;


function play() {
    for (let i=0; i<10000000; i++) { // CHANGE AMOUNT HERE 
        console.log(`round:\t${i+1}`);
        playRound();
    }
}

function playRound() {
    let currentCupId = arr[currentCupIdx];
    let crabInv = [];

    // console.log(`\tarr: ${arr} (${currentCupId})     ${currentCupIdx}`);
    
    if ( (arrLength-3) <= currentCupIdx) {
        // console.log(`SPECIAL CRABINV MADE HERE`);
        let targetIdx = [];
        targetIdx.push((currentCupIdx+1) % arrLength);
        targetIdx.push((currentCupIdx+2) % arrLength);
        targetIdx.push((currentCupIdx+3) % arrLength);
        
        crabInv.push(arr[targetIdx[0]]);
        crabInv.push(arr[targetIdx[1]]);
        crabInv.push(arr[targetIdx[2]]);

        targetIdx.sort((a,b) => b - a);
        arr.splice(targetIdx[0], 1);
        arr.splice(targetIdx[1], 1);
        arr.splice(targetIdx[2], 1);

    } else {
        // console.log(`\t\tnormal`);
        crabInv = arr.splice(currentCupIdx+1, 3);
    }
    
    let destinationCupId = currentCupId;
    do {
        // console.log('doin it once');
        destinationCupId--;
        if (destinationCupId === 0) {
            destinationCupId = arrLength;   // change this to 1'000'000??
        }
    } while (crabInv.includes(destinationCupId));

    let destinationCupIdx = arr.indexOf(destinationCupId)

    // console.log(`\t\tdest / idx: ${destinationCupId} ${destinationCupIdx}`);
    // console.log(`\t\t\t${arr}  -  ${crabInv}`);
    for (let i=2; 0<=i ; i--) {
        arr.splice(destinationCupIdx+1, 0, crabInv[i]);
    }

    crabInv = [];

    currentCupIdx = (arr.indexOf(currentCupId) + 1) % arrLength;
    
    // insert the crabInv after the
      




   
}


function removeFromNewArr(targetIdxs, newArr) {
    targetIdxs.sort((a,b) => b -a);
    for (let i=0; i<3; i++) {
        newArr.splice(targetIdxs[i], 1);
    }
}




// current must be defined upfront
// find and remove the 3 thingys
// find targetIdx
// insert the thingys after the target
// return arr?
 



play();

console.log(arr);


