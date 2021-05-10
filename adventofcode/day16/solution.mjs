import { yourTicket } from "./puzzle-input.mjs";
import { rangesArr } from "./puzzle-input.mjs";
import { nearbyTickets } from "./puzzle-input.mjs";


 


function returnInvalids(ranges, nearbyTickets) {
    let invalidsArr = [];
    for (let i=0; i<nearbyTickets.length; i++) {
        const currentTicket = nearbyTickets[i];
        console.log(currentTicket);
        let currentTicketValidity = false;
        for (let j=0; j<ranges.length; j++) {
        
            for (let k=0; k<ranges[j].length; k++) {
                let currentMin = ranges[j][k][0];
                let currentMax = ranges[j][k][1];
                if (currentMin <= currentTicket && currentTicket <= currentMax) {
                    currentTicketValidity = true;
                }
            }
        }
        if (!currentTicketValidity) {
            invalidsArr.push(currentTicket);
        }
    }
    return invalidsArr
}

function sumUp(arr) {
    let sum = 0;
    for (let i=0; i<arr.length; i++) {
        sum += arr[i];
    }
    console.log("the final sum is: " + sum)
}




// exec


let theInvalids = returnInvalids(rangesArr, nearbyTickets);


console.log("theInvalids are: " + theInvalids);



sumUp(theInvalids);