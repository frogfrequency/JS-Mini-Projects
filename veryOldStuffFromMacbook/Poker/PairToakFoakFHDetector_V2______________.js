var testArr = [4,2,5,4,2,5,1];
var masterPair = [false];
var masterToak = [false];
var masterFoak = [false];

function countAppearances(arr,j) {
    var output = [];

    for (i = 0; i < 6 ; i++) {
        h = (j+i+1) % 7;

        if(arr[j] === arr[h]) {
            arr[h] = "placeholder" + (h+1);
            output.push(arr[j]);
        }
    }
    return output;  
}


function check(arr) {
    for (k = 0; k < 6 ; k++) {
        var temp = countAppearances(arr,k);
            if (2 < temp.length) {
                masterFoak[0] = true;
                masterFoak.push(arr[k]);
            }
            else if (1 < temp.length) {
                masterToak[0] = true;
                masterToak.push(arr[k]);
            }
            else if (0 < temp.length) {
                masterPair[0] = true;
                masterPair.push(arr[k]);
            }
            
    }
}


// execution
console.log(testArr);

check(testArr);

console.log(testArr);

console.log("Masterpair: " + masterPair);
console.log("Mastertoak: " + masterToak);
console.log("Masterfoak: " + masterFoak);

console.log(masterPair.sort((a,b) => a-b));

// next step PairToakFOakFHDetector_V3____________.js