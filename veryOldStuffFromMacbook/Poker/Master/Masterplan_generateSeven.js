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

console.log(generateSeven());