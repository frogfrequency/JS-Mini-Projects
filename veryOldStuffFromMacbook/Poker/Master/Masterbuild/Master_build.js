

// prerequisites: 1.flushCheck, 2. pairEtcCheck, 3. straightAndSfCheck, 4. evaluate, 5. generateSeven

// 1. flushCheck

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

// 2. PairEtcCheck

function pairEtcCheck(inputOriginalX) {

    var arrx = JSON.parse(JSON.stringify(inputOriginalX));
    
    arrx.forEach((element, idx, arR) => {
        arR[idx] = element % 13;
    });
    

    var pair = 0;
    var toak = 0;
    var foak = 0;

    for(j = 0; j < 6; j++) { 
        var counter = 0; 
        for(i = 0; i<6; i++) {
            var k = (j+i+1) % 7;
            if(arrx[j] === arrx[k]) {
                arrx[k] = "placeholder" + (k+1);
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


// 3. straightAndSfCheck

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


// 4. evaluate (function)

function evaluate(toEvaluate) {
    var output = [];
    output.push(flushCheck(toEvaluate));
    output.push(pairEtcCheck(toEvaluate));
    output.push(straightAndSfCheck(toEvaluate));

    output.sort((a,b)=>b-a); // insert whole evaluation process here
    return output[0]
    
}


// 5. generateSeven

function generateSeven() {
    var drawnCards = [];
    for (x = 0; x<7; x++) {
        var newCard;
        do {
            newCard = Math.floor(Math.random() * 52);
        }  while (drawnCards.includes(newCard)); 
        drawnCards.push(newCard);
    }
    return drawnCards;
}




//////////////////////////////////////////////////////////////////////





function generateEvaluateCount(amount) {

    var highCardCounter = 0;
    var pairCounter = 0;
    var twoPairCounter = 0;
    var toakCounter = 0;
    var straightCounter = 0;
    var flushCounter = 0;
    var fullHouseCounter = 0;
    var FoakCounter = 0;
    var straightFlushCounter = 0;

    for(e = 0; e < amount; e++) {
        var switcher = evaluate(generateSeven());
        switch(switcher) {
            case 0:
                highCardCounter++
                break;
            case 1:
                pairCounter++
                break;
            case 2:
                twoPairCounter++
                break;
            case 3:
                toakCounter++
                break;
            case 4:
                straightCounter++
                break;   
            case 5:
                flushCounter++
                break;
            case 6:
                fullHouseCounter++
                break;
            case 7:
                FoakCounter++
                break;   
            case 8:
                straightFlushCounter++
                break;
        }
    }

console.log(' ---> you have generated ' + amount + ' hands of seven cards. Frequencies below:')
console.log('high card:\t\t\t\t' + highCardCounter/amount*100 + '%');
console.log('pair:\t\t\t\t\t\t\t' + pairCounter/amount*100 + '%');
console.log('two pair:\t\t\t\t\t' + twoPairCounter/amount*100 + '%');
console.log('toak:\t\t\t\t\t\t\t' + toakCounter/amount*100 + '%');
console.log('straight:\t\t\t\t\t' + straightCounter/amount*100 + '%');
console.log('flush:\t\t\t\t\t\t' + flushCounter/amount*100 + '%');
console.log('full house:\t\t\t\t' + fullHouseCounter/amount*100 + '%');
console.log('foak:\t\t\t\t\t\t\t' + FoakCounter/amount*100 + '%');
console.log('straight flush:\t\t' + straightFlushCounter/amount*100 + '%');
}

////////////////////

generateEvaluateCount(1000000); // only change this line 


// achtung strasse vergisst Ass glaubs!!!!!! jo eh fuck