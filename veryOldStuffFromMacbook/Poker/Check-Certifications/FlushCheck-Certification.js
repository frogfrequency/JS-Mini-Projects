// probability from wikipedia to have a flush with 7 cards: 3.03%

                // ATTENTION
// ATTENTION: with this method you will detect 0.0279% to many
// because you also count all the straight flushes!!

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


function flushCheck(input) {
    var y = JSON.parse(JSON.stringify(input));
    y.forEach((element, idx, arr) => {
        arr[idx] = Math.floor(element / 13);
    });
    for(i=0; i<4; i++) {
        var altered = y.filter(value => value === i);
        if (5 <= altered.length) {
            return 5;
        } 
    }
    return 0;
}



///////////////////////

var flushCounter = 0;
var highCardCounter = 0;

function certificate(testAmount) {
    for (h = 0; h < testAmount; h++) {
        var currentTestHand = generateSeven();
        //console.log(currentTestHand);
        if (flushCheck(currentTestHand) === 5) {
            flushCounter++;
        } else {
            highCardCounter++;
        }

    }
    
}

// we have to subtract 0.0279 percent because those are the straight flushes
certificate(1000000);
console.log(flushCounter/1000000*100-0.0279 + '%');
flushCounter = 0;
certificate(1000000);
console.log(flushCounter/1000000*100-0.0279 + '%');
flushCounter = 0;
certificate(1000000);
console.log(flushCounter/1000000*100-0.0279 + '%');
flushCounter = 0;
certificate(1000000);
console.log(flushCounter/1000000*100-0.0279 + '%');
flushCounter = 0;
