let playerOneTestStack = [9, 2, 6, 3, 1];
let playerTwoTestStack = [5, 8, 4, 7, 10];

import { playerOneStack } from "./puzzle-input.mjs";
import { playerTwoStack } from "./puzzle-input.mjs";

let subGamesCounter = 0;

function playGame(stack1, stack2) {
    subGamesCounter ++;
    console.log('subgames: ' + subGamesCounter);
    let counter = 0;    
    let archiveArr = [['x','x']];
    let continueTheWhile = true;

    while (continueTheWhile) {
        if (isInArchive(stack1, stack2, archiveArr)) {
            // console.log('the exact same position has been had before!');
            continueTheWhile = false; // is this even necessary? since we return the GAME-Winner here the while should be terminated anyway?...
            return 1 // this is not the round winner it is the game winner !!!!
        }
        let newArchiveElement = [];
        newArchiveElement.push(stack1);
        newArchiveElement.push(stack2);
        archiveArr.push(JSON.parse(JSON.stringify(newArchiveElement)));


        let card1 = stack1[0];
        let card2 = stack2[0];
        stack1.shift();
        stack2.shift();
       
        let roundWinner = giveRoundWinner(card1, card2, stack1, stack2); // returns 1 or 2


        if (roundWinner === 1) {
            stack1.push(card1);
            stack1.push(card2);
        } else if (roundWinner === 2) {
            stack2.push(card2);
            stack2.push(card1);
        }

        // checking game-winning things below this line
        
        let score = undefined;


        if (stack1.length === 0) {
            
            score = giveScore(stack1, stack2);
            console.log(`Player 2 won this game with a score of: ${score}`);
            return 2 // this is not the round winner it is the game winner !!!!
        } 
        if (stack2.length === 0) {
            score = giveScore(stack1, stack2);
            console.log(`Player 1 won this game with a score of: ${score}`);
            return 1 // this is not the round winner it is the game winner !!!!
        } 
        counter++;
    }
}

function giveRoundWinner(card1, card2, stack1, stack2) { // returns 1 if player 1 is winner and 2 if player 2 is winner

    if (card1 <= stack1.length && card2 <= stack2.length ) { // play subgame
        let subStack1 = stack1.slice(0,card1);
        let subStack2 = stack2.slice(0,card2);
        return playGame(subStack1, subStack2);
    } else {
        if (card2 < card1) {
            return 1
        } else {
            return 2
        }
    }
}


function isInArchive(stack1, stack2, archiveArr) {
    // console.log(`is in archive called with ${stack1}     ${stack2}`);
    
    for (let i=0; i<archiveArr.length; i++) {
        let currentArchiveElement1 = archiveArr[i][0];
        let currentArchiveElement2 = archiveArr[i][1];
        if (JSON.stringify(currentArchiveElement1) === JSON.stringify(stack1)) {
            if (JSON.stringify(currentArchiveElement2) === JSON.stringify(stack2)) {
                return true
            }
        }
    }
    return false
}

function giveScore(stack1, stack2) {
    let score = 0;
    let stack = stack1;
    if (stack1.length < stack2.length) {
        stack = stack2; 
    }

    let stackLength = stack.length;
    for (let i=0; i<stackLength; i++) {
        let newSummand = stack[i]*(stackLength-i);
        score += newSummand;
    }
    return score
}

playGame(playerOneStack, playerTwoStack);

