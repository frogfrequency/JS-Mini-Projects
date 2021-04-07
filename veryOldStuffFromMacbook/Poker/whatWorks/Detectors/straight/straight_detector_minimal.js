var testArr = [9,7,0,5,4,3,2];


function checkFunction(arr, dgt) {
    var counter = 0;
    for (j=0; j<4; j++) {
        var k = arr[dgt + j];
        var l = arr[dgt + j + 1] + 1;
        if (k === l) {
            counter++;
        }   
    }
    return counter;
}

function straightDetection(arr) {
    for (i=0; i<3; i++) {
        if(checkFunction(arr,i) === 4) {
            return true
        }
    }
    return false;
}   

console.log(straightDetection(testArr));