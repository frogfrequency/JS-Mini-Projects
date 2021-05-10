// this is a mess.. but hey it worked

import { yourTicket } from "./puzzle-input2.mjs";
import { rangesArr } from "./puzzle-input2.mjs";
import { nearbyTickets } from "./puzzle-input2.mjs";


 


function returnInvalids(ranges, nearbyTickets) {
    let invalidTickets = [];
    for (let i=0; i<nearbyTickets.length; i++) { // loop tickets

        for (let j=0; j<nearbyTickets[i].length; j++) { // loop ticketNumbers
            let currentTicketNr = nearbyTickets[i][j];
            let currentTicketNrValidity = false;
            

            for (let k=0; k<ranges.length; k++) { // loop ranges
                let isInCurrentRangePair = false;
                
                for (let l=0; l< 2; l++) { // loop the two ranges
                    let currentMin = ranges[k][l][0];
                    let currentMax = ranges[k][l][1];
                    let isWithinRange = isItWithinRangeFunction(currentTicketNr, currentMin, currentMax);
                    if (isWithinRange) {
                        isInCurrentRangePair = true;
                    }


                    // console.log(`is ${currentMin} <= ${currentTicketNr} and ${currentTicketNr} <= ${currentMax} ?? `);
                
                }
                if (isInCurrentRangePair) {
                currentTicketNrValidity = true;
                }
            }

            if (!currentTicketNrValidity) {
                invalidTicketIdxs.push(i);
                invalidTicketNrs.push(nearbyTickets[i][j]);
            }
        
        }
    }
    return invalidTickets;
}

let invalidTicketIdxs = [];
let invalidTicketNrs = [];



function isItWithinRangeFunction(ticket, min, max) {
    return min <= ticket && ticket <= max
}
          



function sumUp(arr) {
    let sum = 0;
    for (let i=0; i<arr.length; i++) {
        sum += arr[i];
    }
    console.log("the final sum is: " + sum)
    return "nothing";
}







function spliceInvalids(invalidIdxs) {
    for (let i=invalidIdxs.length-1; 0<=i; i--) {
        nearbyTickets.splice(invalidIdxs[i],1);
    }
}

// exec


returnInvalids(rangesArr, nearbyTickets);
console.log(invalidTicketNrs)
sumUp(invalidTicketNrs);
console.log(invalidTicketIdxs);

// splice invalid Tickets:

console.log(`nearby tickets length before: ${nearbyTickets.length}`);

spliceInvalids(invalidTicketIdxs);

console.log(`nearby tickets length after: ${nearbyTickets.length} \n\n\n\n`);


let correspondingPossibleFieldIdxs = [ // in the first bracket are all the fieldIdxs that match the range
    [],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]
];

// let fieldIdxThatMatchesRange = []; // the first number in here indicates the fieldIdx that matches the first Range

for (let rangesIdx=0; rangesIdx<rangesArr.length; rangesIdx++) {
    let MinOne = rangesArr[rangesIdx][0][0];
    let MaxOne = rangesArr[rangesIdx][0][1];
    let MinTwo = rangesArr[rangesIdx][1][0];
    let MaxTwo = rangesArr[rangesIdx][1][1];

    
    
    
    for (let ticketFieldIdx=0; ticketFieldIdx<20; ticketFieldIdx++) {

        for (let ticketIdx=0; ticketIdx<nearbyTickets.length; ticketIdx++) {
            let fieldValue = nearbyTickets[ticketIdx][ticketFieldIdx];
            let inRangeOne = isItWithinRangeFunction(fieldValue, MinOne, MaxOne);
            let inRangeTwo = isItWithinRangeFunction(fieldValue, MinTwo, MaxTwo);

            console.log(`range, ticketFieldIdx, TicketIdx, value: ${rangesIdx} \t${ticketFieldIdx} \t${ticketIdx} \t${fieldValue}`);
            
            if (!inRangeOne && !inRangeTwo) {
                console.log(`${fieldValue} is not in range ${MinOne} - ${MaxOne}, ${MinTwo} - ${MaxTwo}`);
                break;
            }
            if (ticketIdx === nearbyTickets.length-1) { // when all value of the specific fieldIdx match range --> add to correspondingPossibleFieldIdxs
                correspondingPossibleFieldIdxs[rangesIdx].push(ticketFieldIdx);
            }
        }
    
    }
}

console.log('this should be good ' + correspondingPossibleFieldIdxs);


let definitiveCorrespondingFieldIdxs = ['x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x'];

function fillFieldIdxsThatMatchRangeIdx(inputArr) {
    let arr = [...inputArr];
    let numberToBeSpliced;
    
    for (let k=0; k<arr.length; k++) {
        for (let i=0; i<arr.length; i++) {
            let currentElement = arr[i];
            if (currentElement.length === 1) {
                definitiveCorrespondingFieldIdxs[i] = arr[i][0];
                numberToBeSpliced = arr[i][0];
                break;
            }
        }
        
        for (let j=0; j<arr.length; j++) { // filtrin'
            arr[j] = arr[j].filter(nr => nr !== numberToBeSpliced);
        }
    }
}


fillFieldIdxsThatMatchRangeIdx(correspondingPossibleFieldIdxs);

console.log(`well this arr should only contain 20 different elements... ${definitiveCorrespondingFieldIdxs}`);


function logTheFinalResult(arr) {
    let result = 1;
    for (let i=0; i<6; i++) {
        result = result*yourTicket[arr[i]]

    }
    console.log(`the final result is ${result}`)
}

logTheFinalResult(definitiveCorrespondingFieldIdxs);