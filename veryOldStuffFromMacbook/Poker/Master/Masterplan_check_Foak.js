//  0: high card
//  1: pair
//  2: two pair
//  3: toak
//  6: full house
//  7: foak
// straights and flushes not included

var testArr = [0,13,1,14,26,27,32];




function pairEtcCheck(inputOriginal) {

    var arr = JSON.parse(JSON.stringify(inputOriginal));
    
    arr.forEach((element, idx, arR) => {
        arR[idx] = element % 13;
    });
    

    var pair = 0;
    var toak = 0;
    var foak = 0;

    for(j = 0; j < 6; j++) { 
        var counter = 0; 
        for(i = 0; i<6; i++) {
            var k = (j+i+1) % 7;
            if(arr[j] === arr[k]) {
                arr[k] = "placeholder" + (k+1);
                counter++;
            }
        }
        if (2 < counter) {
            foak++;
        } else if (1 < counter) {
            toak++;
        } else if (0 < counter) {
            pair++;
        }

    }
    if (0 < foak) {
        return 7
    } else if (1 < toak || 0 < toak && 0 < pair) {
        return 6
    } else if (0 < toak) {
        return 3
    } else if (1 < pair) {
        return 2
    } else if (0 < pair) {
        return 1
    } else {
        return 0
    }
}

console.log(pairEtcCheck(testArr));