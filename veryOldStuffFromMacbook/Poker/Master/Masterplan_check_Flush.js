var testArr = [49,50,44,45,46,48,47];

function flushCheck(input) {
    var x = JSON.parse(JSON.stringify(input));
    x.forEach((element, idx, arr) => {
        arr[idx] = Math.floor(element / 13);
    });
    for(i=0; i<4; i++) {
        var altered = x.filter(value => value === i);
        if (5 <= altered.length) {
            return 5;
        } 
    }
    return 0;
}
  
console.log(flushCheck(testArr));