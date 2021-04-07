// global vars

var cardValueArr = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", ]
var suitsArr = ["c", "d", "h", "s"];
var drawnArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];


// functions

function returnRandom() { 
    return Math.floor(Math.random() * 52);
}



function alreadyUsedTest(subjects) {
    return subjects !== candidate;
}


candidate = returnRandom();
console.log(candidate);
alreadyUsedTest(candidate);

console.log(drawnArr.every(alreadyUsedTest));
