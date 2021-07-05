import { moduleMasses } from "./puzzle-input.mjs";

function returnFuel(mass) {
    let accumulator = 0;

    while (mass >= 0) {
        mass = Math.floor(mass/3)-2;
        if (mass >= 0) {
            accumulator += mass;
        }
    }

    return accumulator
}



let totalFuel = 0;

totalFuel = 0;

for (let i=0; i<moduleMasses.length; i++) {
        totalFuel += returnFuel(moduleMasses[i])
}
    
    
console.log(`totalFuel ${totalFuel}`);