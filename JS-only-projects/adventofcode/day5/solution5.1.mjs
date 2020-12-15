import { inputArr } from './puzzle-input.mjs'


const testArr = [
    'BBBBBBBRRR',   // 1
    'FFFFFFFLLL',   //  
    'BFFFBBFRRR',   // 567
    'FFFBBBFRRR',   // 119
    'BBFFBBFRLL'    // 820
]

function returnHighest(arr) {
    let ticketNumbersArr = [];

    for (let i = 0; i < arr.length; i++) {
        let currentTicket = arr[i];
        let currentRow = returnRowNumber(currentTicket);
        let currentSeat = returnSeatNumber(currentTicket);
        // console.log(`row: ${currentRow}, seat: ${currentSeat}`);
        let currentTicketNumber = currentRow * 8 + currentSeat;
        ticketNumbersArr.push(currentTicketNumber);
    }
    ticketNumbersArr.sort((a, b) => a-b);
    let missingSeat = returnMissingOne(ticketNumbersArr);
    console.log(`the missing Seat is ${missingSeat}`);
}


function returnRowNumber(ticket) {
    let rowOutput = 0;
    for (let j = 0; j < 7; j++) {
        let exponent = 8 - j - 1;
        let currentCharacter = ticket.charAt(j);
        if (currentCharacter === 'B') {
            let summand = ((2 ** exponent) / 2);
            rowOutput = rowOutput + summand;
        }
    }
    return rowOutput
}

function returnSeatNumber(ticket) {
    let seatOutput = 0;
    for (let j = 7; j < 10; j++) {
        let exponent = 3 - j + 7;
        let currentCharacter = ticket.charAt(j);
        if (currentCharacter === 'R') {
            let summand = ((2 ** exponent) / 2);
            seatOutput = seatOutput + summand;
            // console.log(`____seats:${currentCharacter} :  + ${summand} = ${seatOutput}`);
        }
    }
    return seatOutput
}

function returnMissingOne(arr) {
    for (let i=0; i<arr.length; i++) {
        let currentSeatNumber = arr[i];
        let nextSeatNumber = arr[i+1];
        if (currentSeatNumber+1 !== nextSeatNumber) {
            return currentSeatNumber+1
        }
    }
}




// execution

returnHighest(inputArr);
