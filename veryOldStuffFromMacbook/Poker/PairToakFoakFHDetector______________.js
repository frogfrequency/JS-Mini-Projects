// can check if there is a Pair, Toak, Foak or FH

var testArr = [29,16,2,3,17,5,42];
var collectorArr = [];
var whichDigit = 0;
var isPair = false;
var isToak = false;
var isFoak = false;

var masterFoak;
var masterToak;
var masterPair1;
var masterPair2;




function check(arr,j) {
    for (i = 0; i < 6 ; i++) {
        h = (j+i+1) % 7;
        if(arr[j] % 13 === arr[h] % 13) {
            if (isToak === true) {
                isFoak = true;
                isPair = false;
                isToak = false;
                arr[h] = "z";
            } else if (isPair === true) {
                isToak = true;
                isPair = false;
                arr[h] = "y";    
            } else if (isToak === false && isFoak === false) {
                isPair = true;
                arr[h] = "x"; 
            }
        }
    }
    if (isFoak === true) {
        masterFoak = arr[j];
    } else if (isToak === true) {
        if (arr[j] % 13 > masterToak) {
            masterToak = arr[j] % 13;
        }
    }
    if (isPair) {
        //hier wirds hässlich
    }



}



function increaseDigit(jumper) {
    jumper = (jumper+1) % 7;
    return jumper;  
}



function detectorMaster(digit, array) {
    for(z = 0; z < 7; z++) {
        check(array,digit);
        digit = increaseDigit(digit);
    }
}


// execution

detectorMaster(whichDigit, testArr);

console.log("pair: " + isPair + "\nToak: " + isToak + "\nFoak: " + isFoak);
console.log(testArr);

console.log("Foak: " +masterFoak + "  Toak: " + masterToak + "  pair1: " + masterPair1 + "  pair2: " + masterPair2)
