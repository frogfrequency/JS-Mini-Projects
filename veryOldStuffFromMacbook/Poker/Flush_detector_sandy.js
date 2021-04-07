var testArr = [49,50,1,51,2,3,16];


console.log('testArr : ' + testArr);

function test(someArr) {
    var x = JSON.parse(JSON.stringify(someArr));
    x.forEach((element, idx, arr) => {
        arr[idx] = Math.floor(element / 13);
    });
    console.log('x: ' + x);
    for (i = 0; i<4; i++) {
        
    }
}

test(testArr);

console.log('testArr : ' + testArr);
 