import { moduleMasses } from "./puzzle-input.mjs";

function returnFuel(mass) {
    return Math.floor(mass/3)-2
}


let totalFuel = 0;  

for (let i=0; i<moduleMasses.length; i++) {
    totalFuel += returnFuel(moduleMasses[i])
}

console.log(totalFuel);