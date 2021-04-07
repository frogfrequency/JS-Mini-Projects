var testArr = [7,45,22,7,22,7,6];
var detectedPairs = [];

function test(arr) {
    var x = 0;
    for (j=0; j<6; j++) {
        for(i=0; i<6; i++) {
          x = j;
          var h = (x+i+1) % 7;
          if(arr[j] === arr[h]) {
                       // detectedPairs.push(j);
            detectedPairs.push(arr[j]);
            var counterfor[arr[j]]????
          }
        }  
    }
}

test(testArr);
console.log(detectedPairs);