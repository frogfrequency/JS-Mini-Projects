var drawnCards = [ 1, 2, 3, 4, 5 ];
var newCard = 2;


function incrementer(input) {
    input++;
}


function tester(number){
  return number !== newCard;
}

do {
    newCard++;
    console.log(newCard);
  } while (!drawnCards.every(tester));




if(drawnCards.every(tester)) {
    console.log("Push it");
} else {
    console.log("hoppla number already used");
}


