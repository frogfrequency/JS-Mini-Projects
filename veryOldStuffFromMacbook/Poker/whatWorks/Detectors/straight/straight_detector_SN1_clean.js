// trying to detect a straight. what is a straight?
// assumption. remainders % 13 already taken and array sorted numerically (highest first)
// to-do: in checkFunction: create new variables maybe k,l to
// k = arr[dgt + j], l = arr[dgt + j + 1]+ 1), so than you can simply
// if (k === j)  {counter++ etc. ...  console.log('k: ' + k ....)} 

// Important .... use as well for straightflushdetection ??!?!! easy

var testArr = [34,33,32,31,30,2,1];

function checkFunction(arr, dgt) {
    var counter = 0;
    for (j=0; j<4; j++) {
        var k = arr[dgt + j];
        var l = arr[dgt + j + 1] + 1;
        console.log(k + ' = ' + l + '\t\ti: ' + dgt   + ',\tj: ' + j +',\tcounter: ' + counter);
        if (k === l) {
            counter++;
        }
    }
    if (counter === 4) {console.log('STRAIGHT!')}
}

function straightDetection(arr) {
    for (i=0; i<3; i++){
        checkFunction(arr,i);
        console.log('-------------------------------------');
    }
}   

straightDetection(testArr);