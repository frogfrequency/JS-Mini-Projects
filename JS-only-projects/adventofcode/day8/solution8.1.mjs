import {inputArr} from './puzzle-input.mjs';


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

let alternativeAlreadyVisitedArr = [];

function nameMe(arr) {
	
	for (let i=0; i<arr.length; i++) {
		let currentInstruction = arr[i][0];
		let currentValue = arr[i][1];
		console.log(`i: ${i},instruction: ${currentInstruction}, value: ${currentValue}, accumulator: ${accumulator}
		${alreadyVisitedArr}`);
		let alternativeStartingPoint = returnAlternativeNextTarget(i, currentInstruction, currentValue);
		if (alternativeStartingPoint !== undefined) {
			let isItInfinite = endsInInfinity(alternativeStartingPoint, arr);
			console.log(`the alternative starting point ${alternativeStartingPoint} is infinite? ${isItInfinite}`);
			if (isItInfinite !== true) {console.log(`xxxx
			xxx
			xxx
			xx
			xx
			xx
			xx
			xxx
			xx
			xx
			xx
			xx

			theeeee foloooowing element is wrong: index: ${i}, ${arr[i]}
			`);}
		}
		if (checkForAlreadyVisited(i, alreadyVisitedArr)) {
			i = arr.length+10;
      		console.log(`we're done here, the accumulator is: ${accumulator}, ${alreadyVisitedArr.length}/${arr.length} were visited`);
      		console.log(`the alreadyVisitedArr is: ${alreadyVisitedArr}`);
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

function returnAlternativeNextTarget(i, instruction, value) {
	let output = undefined;
	if (instruction === 'nop') {
		output = i+value;
	} else if (instruction === 'jmp') {
		output = i+1;
	}
	return output
}




function endsInInfinity(altStartingPoint, arr) {
	alternativeAlreadyVisitedArr = [];
	for (let a=altStartingPoint; a<arr.length; a++) {
		let currentAltInstruction = arr[a][0];
		let currentAltValue = arr[a][1];
		
		if (checkForAlreadyVisited(a, alternativeAlreadyVisitedArr)) {
			a = arr.length+10;
			return true
		} else {
			a = changeA(currentAltInstruction, currentAltValue, a);
		}
	}
	return false
}

function changeA(instruction, value, a) {
	let newA = a;
	if (instruction === 'jmp') {
		newA = a+value-1; // -1 because it is increased by one every new loop
	}
	alternativeAlreadyVisitedArr.push(a);
	return newA
}



nameMe(inputArr);

// console.log(endsInInfinity(8, testArr));