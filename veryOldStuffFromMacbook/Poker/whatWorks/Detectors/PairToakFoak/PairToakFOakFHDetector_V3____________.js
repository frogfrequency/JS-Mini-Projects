var testArr = [4,0,7,4,2,2,1];
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
console.log(testArr + '\n');

check(testArr);

console.log(testArr + '\n');


masterPair.sort((a,b) => a-b);
masterToak.sort((a,b) => a-b);
masterFoak.sort((a,b) => a-b);

console.log("Masterpair: " + masterPair);
console.log("Mastertoak: " + masterToak);
console.log("Masterfoak: " + masterFoak + "\n");


////////////////////////////////////////////////////////////////

if(masterFoak[0]) {
    console.log('four of a kind, ' + masterFoak[1] + '\'s');
}
else if(masterToak[0]) {
    if(masterPair[0]) {
        console.log('full house, ' + masterToak[1] + '\'s full of ' + masterPair[1] + '\'s');
    }
    else {
        console.log("congrats three of a kind");
    }
        
}
else if(masterPair[0]) {
    if(masterPair.length > 2) {
        console.log('congrats two Pair')
    }
    else {
        console.log('congratulazie ONLY ONE PAIR');
    }
}