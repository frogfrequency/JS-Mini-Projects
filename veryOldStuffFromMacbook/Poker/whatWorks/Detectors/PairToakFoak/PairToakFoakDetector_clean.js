// can check if there is a pair Toak or Foak
// doesnt work if you have more than 1 pair etc.

var testArr = [29,1,2,3,17,5,6];
var detectedPairs = [];
var whichDigit = 0;
var isPair = false;
var isToak = false;
var isFoak = false;



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
}



function increaseDigit(jumper) {
    jumper = (jumper+1) % 7;
    return jumper;  
}



function pairDetector(digit, array) {
    for(z = 0; z < 7; z++) {
        check(array,digit);
        digit = increaseDigit(digit);
    }
}


// execution

pairDetector(whichDigit, testArr);

console.log("pair: " + isPair + "\nToak: " + isToak + "\nFoak: " + isFoak);
console.log(testArr);



