// vars

var drawnCards = [99];
var newCard = [99];






// functions

function unequalTester(number){
  return number !== newCard;
}


function returnRandom(max) {
    
  return Math.floor(Math.random() * max);
}

function createCard() {  
        do {
            newCard = returnRandom(30);
            console.log("Checking created card for duplications: " + newCard);
        } while (!drawnCards.every(unequalTester));
        
        console.log("Card successfully created: " + newCard);
        return newCard;
}

function pushNewCard(toPush,targetArr) {
    targetArr.push(toPush);
    return targetArr
}

function drawNewCard(quantity) {
    for (x = 0; x < quantity; x++) {
        drawnCards.push(createCard());
    }
    drawnCards.shift();


};


// code

drawNewCard(15);
console.log(drawnCards);

for (var i = 0; i < drawnCards.length; i++) {
  console.log(drawnCards[i]);

}

