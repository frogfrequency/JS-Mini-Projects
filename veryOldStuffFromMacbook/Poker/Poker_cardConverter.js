var testArr = [7 ,9 , 30, 43];
var sector = "kake";
var remainder = undefined;

function returnRemainder(input) {
    remainder = input % 13;
    return remainder;
}

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





function returnSuit(input) {

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

function displayCard(input) {
    return convertRemainder(returnRemainder(input)) + returnSuit(input);
}

// code

console.log(displayCard(0));
console.log(displayCard(1));
console.log(displayCard(2));
console.log(displayCard(3));
console.log(displayCard(4));
console.log(displayCard(45));
console.log(displayCard(36));