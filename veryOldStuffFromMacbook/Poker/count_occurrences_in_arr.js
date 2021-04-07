const SUITS = {
    SPADES: 0,
    HEARTS: 1,
    DIAMONDS: 2,
    CLUBS: 3,
};

const HAND_COMBINATIONS = {
    NOTHING: 0,
    PAIR: 1,
    TOAK: 2,
    FULL_HOUSE: 3,
};

export function testImportLog() {
    console.log('hello from the other file');
}

export function checkHandCombinations() {
    var handCombination = HAND_COMBINATIONS.NOTHING;

    // check hand combinations
    // in checks if something is found:
    var foundCombination = HAND_COMBINATIONS.TOAK;
    if (handCombination < foundCombination) {
        handCombination = foundCombination;
    }

    // repeat for all checks
    return handCombination;
}

// Game
player.currentHand = checkHandCombinations();

if (player1.currentHand > player2.currentHand) {
    console.log('player2 wins');
}

var testArr = [3,3,0,3,0,0,0];

function filterFunction(arr) {
    return arr.filter((value, index) => value === SUITS.HEARTS ).length;
}

console.log(filterFunction(testArr));