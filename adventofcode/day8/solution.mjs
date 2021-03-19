import {inputArr} from './puzzle-input.mjs';
import {inputArrRepared} from './puzzle-input-repared.mjs';

const testArr = [
	['nop', +0],
	['acc', +1],
	['jmp', +4],
	['acc', +3],
	['jmp', -3],
	['acc', -99],
	['acc', +1],
	['jmp', -4],
	['acc', +6]
]

let accumulator = 0;
let alreadyVisitedArr = [];

function nameMe(arr) {
	
	for (let i=0; i<arr.length; i++) {
		let currentInstruction = arr[i][0];
		let currentValue = arr[i][1];
		console.log(`i: ${i},instruction: ${currentInstruction}, value: ${currentValue}, accumulator: ${accumulator}
		${alreadyVisitedArr}`);
		if (checkForAlreadyVisited(i, alreadyVisitedArr)) {
			i = arr.length+10;
      console.log(`we're done here, the accumulator is: ${accumulator}, ${alreadyVisitedArr.length}/${arr.length} were visited`)
      console.log(`the alreadyVisitedArr is: ${alreadyVisitedArr}`);;
		} else {
		i = changeI(currentInstruction, currentValue, i);
		}
	}
}


function changeI(instruction, value, i) {
	let newI = i;
	
	if (instruction === 'acc') {
		accumulator = accumulator + value;
	}
	if (instruction === 'jmp') {
		newI = i+value-1; // -1 because it is increased by one every new loop
	}
	alreadyVisitedArr.push(i);
	return newI	
}

function checkForAlreadyVisited(idx, arr) {
	let output = false;
	for (let i=0; i<arr.length; i++) {
		if (arr[i] === idx) {
			output = true;
		}
	}
	return output;
}

nameMe(inputArrRepared);