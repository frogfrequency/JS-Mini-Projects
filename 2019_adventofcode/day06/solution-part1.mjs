import { orbitTable, testOrbitTable } from "./puzzle-input.mjs";

// recursive 

let input = orbitTable; // input

let masterCounter = 0;

function runThroughBodies(body, depth) {
    masterCounter = masterCounter+depth;
    let filtered = input.filter((value) => value[0] === body);
    filtered.forEach(element => runThroughBodies(element[1], depth+1));
}

runThroughBodies('COM', 0);

console.log(masterCounter)

// let filtered = input.filter((value) => value[0] === 'B');

// console.log(filtered);