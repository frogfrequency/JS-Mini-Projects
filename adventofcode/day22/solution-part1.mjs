let playerOneTestStack = [9, 2, 6, 3, 1];
let playerTwoTestStack = [5, 8, 4, 7, 10];

import {playerOneStack} from "./puzzle-input.mjs";
import {playerTwoStack} from "./puzzle-input.mjs";



let continueWhile = true;


function playRound() {
    
    let playerOneCard = playerOneStack[0];
    playerOneStack.shift();
    let playerTwoCard = playerTwoStack[0];
    playerTwoStack.shift();

    let sortedPair = [];
    sortedPair.push(playerOneCard);
    sortedPair.push(playerTwoCard);
    sortedPair.sort((a,b) => b-a);

    if (playerOneCard < playerTwoCard) {
        playerTwoStack.push(sortedPair[0]);
        playerTwoStack.push(sortedPair[1]);
    } else {
        playerOneStack.push(sortedPair[0]);
        playerOneStack.push(sortedPair[1]);
    }
    if (playerOneStack.length === 0 || playerTwoStack.length === 0) {
        continueWhile = false;
    }
    console.log(`round played`);
}

function playGame() {
    while (continueWhile) {
        playRound();
    }
}


console.log(playerOneStack);
console.log(playerTwoStack);

function giveWinningScore() {
    let stack;
    let score = 0;
    
    if (playerOneStack.length !== 0) {
        stack = playerOneStack;
    } else {
        stack = playerTwoStack;
    }
    
    let stackLength = stack.length;
    for (let i=0; i<stackLength; i++) {
        let newSummand = stack[i]*(stackLength-i);
        console.log(`new summand: ${newSummand}`);
        score += newSummand;
    }
    return score
}




playGame();
console.log(giveWinningScore());