var drawnCards = [ 99, ];
var newCard = [99];

// functions

function unequalTester(number){
  return number !== newCard;
}


function returnRandom(max) {
    
  return Math.floor(Math.random() * max);
}

// code

do {
    newCard = returnRandom(7);
    console.log("Checking created card for duplications: " + newCard);
  } while (!drawnCards.every(unequalTester));

  console.log("Card successfully created: " + newCard);







