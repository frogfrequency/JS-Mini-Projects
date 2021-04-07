// checkets if the nth* element of an array has a duplicate in this array  (change whichDigit to change nth element)

var testArr = [33,33,33,43,23,33,24];
var detectedPairs = [];
var whichDigit = 0;
var isPair = false;
var isToak = false;
var isFoak = false;



function check(arr,j) {
    for (i = 0; i < 6 ; i++) {
        h = (j+i+1) % 7
        console.log(i + ":          j: " + j +"  h: " + h);
        
        if(arr[j] === arr[h]) {
            if (isToak === true) {
                isFoak = true;
                isPair = false;
                isToak = false;
                arr[h] = "z";
                console.log("VIERLLING" + isPair + isToak + isFoak);
            } else if (isPair === true) {
                isToak = true;
                isPair = false;
                arr[h] = "y";
                console.log("DRILLING" + isPair + isToak + isFoak);
            } else if (isToak === false && isFoak === false) {
                isPair = true;
                arr[h] = "x"; 
                console.log("PAIR" + isPair + isToak + isFoak);
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
        console.log("------------ Card Nr.: " + (z+1) +" (" + array[z] + ") is being checked next. -----------");
        check(array,digit);
        digit = increaseDigit(digit);
    }
}


// execution

pairDetector(whichDigit, testArr);

console.log("pair: " + isPair + "\nToak: " + isToak + "\nFoak: " + isFoak);
console.log(testArr);



