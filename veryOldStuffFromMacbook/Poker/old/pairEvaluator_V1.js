// checkets if the nth* element of an array has a duplicate in this array  (change whichDigit to change nth element)

var testArr = [7,1,7,1,3,4,7];
var detectedPairs = [];
var whichDigit = 0;


function check(arr,j) {
    var controlOutput = [];

        for (i = 0; i < 6 ; i++) {
            h = (j+i+1) % 7
            controlOutput.push("j: " + j +"       i: " + i + "       h: " + h);
            
            
            if(arr[j] === arr[h]) {
                controlOutput.push("MATCH! (j: " + j + "), (h: " + h + ")");
                // detectedPairs.push(j);
                detectedPairs.push(arr[j]);
                

            }
        }
        console.log(controlOutput);
        return controlOutput
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

var controlLog = pairDetector(whichDigit, testArr);
console.log(controlLog);
console.log("all detectedPairs: " + detectedPairs);

