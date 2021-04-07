var hand = [5,7,17,6,1,1,8]; 

// console.log(hand);





function fiveSequenceCheck(inputOriginal) {
    input = JSON.parse(JSON.stringify(inputOriginal));
    input.sort((a,b)=>b-a);
    input = input.filter((value, index) => input.indexOf(value) === index);
    for (i=0; i<3; i++) {
        var counter = 0;
        for (j=0; j<4; j++) {
            var k = input[i + j];
            var l = input[i + j + 1] + 1;
            if (k === l) {
                counter++;
            }  
            if (counter === 4) {
                return true;
            }    
        }
    
    }
    return false;
}


function straightAndSfCheck(toCheck) {
    var arr = JSON.parse(JSON.stringify(toCheck));
    var secondArr = JSON.parse(JSON.stringify(arr));
    if (fiveSequenceCheck(arr) === true) {
        return 8;
    }
    secondArr.forEach((val,idx,arr) => arr[idx] = val % 13);
    if(fiveSequenceCheck(secondArr) === true) {
        return 4;
    } else {
        return 0;
    }
}

console.log(straightAndSfCheck(hand));