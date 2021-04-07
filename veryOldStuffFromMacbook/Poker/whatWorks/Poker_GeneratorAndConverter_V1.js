// vars
// creation
var drawnCards = [99];
var newCard = [99];


// functions
// creation

// used in function createCard() to ensure no copies
function unequalTester(number){
  return number !== newCard;
}


function returnRandom(max) { 
  return Math.floor(Math.random() * max);
}


function createCard() {  
        do {
            newCard = returnRandom(52);
        } while (!drawnCards.every(unequalTester)); // restarts creation (returnRandom(52)) if card is already existing
        return newCard;
}

// drawn quantitiy of cards and push to the drawnCards-Array
function drawNewCard(quantity) {
    for (x = 0; x < quantity; x++) {
        var card = createCard();
        drawnCards.push(card);
    }
    drawnCards.shift();
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
    } 
        else if (input == 9) {
            return "J";
        }
            else if (input == 10) {
                return "Q";
            }
                else if (input == 11) {
                    return "K";
                }
                    else if (input == 12) {
                        return "A";
                    }
                        else {
                            return "error in returnCardNr function";
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
        return "WARNING! Crucial code error!"
      
    }

}


function displayCard(input) {               // returns value and suit from input
    return convertRemainder(returnRemainder(input)) + returnSuit(input);
}



// execution

drawNewCard(20);  // change amount of cards to generate DONT GO OVER 52!

console.log("The following " + drawnCards.length + " cards have been drawn:\n")
for (var i = 0; i < drawnCards.length; i++) {
  console.log(displayCard(drawnCards[i]));
}



