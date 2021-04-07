// vars
// creation
var drawnCards = [];


// functions
// creation


function returnRandom(max) { 
  return Math.floor(Math.random() * max);
}

// function createCardDeck() {
//     for (i = 0; i < 51; i++) {
//         const newCard = createCard();
//         cardDeck.push(newCard);
//     }
// }


function createCard() {
    var newCard;
    do {
        newCard = returnRandom(52);
    } while (drawnCards.includes(newCard)); // restarts creation (returnRandom(52)) if card is already existing

    return newCard;
}

// drawn quantitiy of cards and push to the drawnCards-Array
function drawNewCard(quantity) {
    if (quantity > 52) {
        throw new Error('DO NOT DRAW MORE THAN 52 Cards');
    }
    for (x = 0; x < quantity; x++) {
        var card = createCard();
        drawnCards.push(card);
    }
}

 
//converter (functions)

// generates remainder (used to decide Card Value later)
function returnRemainder(input) {
    return input % 13;
}

// converts remainder into card value expl. 11 = K
function convertRemainder(input) {
    if (input < 9) {
        return input + 2
    } else if (input === 9) {
        return "J";
    } else if (input === 10) {
        return "Q";
    } else if (input === 11) {
        return "K";
    } else if (input == 12) {
        return "A";
    } else {
        throw new Error('error detected! Number ' + input + ' is not good foa this fanction');
    }
}                


function returnSuit(input) {        // returns suit letter derived from raw number  
                                    // suits: club, diamond, heart, spades
    if (input < 13) {
        return "c";
    } else if (input < 26) {
        return "d";
    } else if (input < 39) {
        return "h";
    } else if (input < 52) {
        return "s"
    } else {
        throw new Error('WARNING! Crucial code error!');
    }

}

// returns value and suit from input
function displayCard(input) {
    const remainder = returnRemainder(input);
    return convertRemainder(remainder) + returnSuit(input);
}



// execution

drawNewCard(6);  // change amount of cards to generate DONT GO OVER 52!

console.log("The following " + drawnCards.length + " cards have been drawn:\n")
for (var i = 0; i < drawnCards.length; i++) {
  console.log(displayCard(drawnCards[i]));
}

