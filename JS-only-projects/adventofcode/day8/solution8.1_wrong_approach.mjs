import {inputArr} from './puzzle-input.mjs';


 // !!! this doesnt work and is a stupid idea
// notes: 
// use a recursive function
// start with bottom-most element and look if there is a instruction with 'nop' as instruction, theoretically matching jump-length and also is part of the first-riddle-visited-arr
// if yes ---> great
// if not check if there is an 'jmp' instruction pointing to this location: call function with this jmp instruction
// also after the previous check and eventual call of function: check if the previous instruction is a 'jmp' and part of the first-riddle-array
// if yes ---> great!
// if not part of first-riddle-array ---> check if instruction is 'acc' or 'nop' and call the function with it..  (if it is a jmp, this is bad)
// eventually you should find a "great" one

// no dont do that. start from the beginning and just change any new jmp to nop and vice versa. check if you end up in an infinity loop and go to the next

const alreadyVisitedArrFromRiddleOne = [0,236,237,238,496,497,573,574,575,120,130,361,362,363,513,514,515,602,603,546,547,548,549,550,226,227,332,333,334,17,18,404,
405,406,407,408,242,243,81,82,83,84,197,45,46,47,48,160,161,162,4,5,6,7,8,447,448,449,450,327,328,313,465,466,467,468,261,262,263,74,75,76,381,382,383,293,294,396,
462,463,53,568,569,58,59,60,280,281,282,175,176,177,178,179,480,481,482,483,484,138,139,273,143,144,145,146,39,40,191,538,539,540,541,133,351,352,433,434,435,370,
371,372,373,256,257,258,259,11,165,354,355,356,357,358,367,455,456,457,458,459,345,346,231,319,122,123,124,299,300,29,30,31,32,33,167,168,169,170,64,65,269,579,416,
417,418,599,532,249,250,251,252,410,411,412]

let accumulator = 0;
let alreadyVisitedArr = [];

function nameMe(arr) {
	for (let i=arr.length-1; 0<=i; i--) {
		let matchingJumpValueIdx = returnMatchingJumpValue(i);

		console.log(`we've found a matching jump value on i: ${matchingJumpValueIdx}: ${arr.returnMatchingJumpValue}`);
	}
}

function changeI(i,arr) {
  let newI = i;
  let previousI = i-1;
  let previousInstruction = arr[previousI][0];
  let previousValue = arr[previousI][1];
  let isPartOfRiddleOne = returnIsPartOfRiddleOne(previousI, previousValue, alreadyVisitedArrFromRiddleOne);
  if (isPartOfRiddleOne) {
    console.log(`we have found the error:
	on i:${previousI} with the content of: ${arr[previousI]}
	the ${previousInstruction} should be 'nop'`);
  }
  return newI
}

function returnIsPartOfRiddleOne(idx, value, arr) {
	let output = false;	
	for (let i=0; i<arr.length; i++) {
		let currentElement = arr[i];
		if (currentElement === idx) {
			output = true;
		}
	}
	return output
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

nameMe(inputArr);

