import { inputArr } from "./puzzle-input.mjs"


let x = 'x';

let inputArrTest = [7,13,x,x,59,x,31,19];

let testArr2 = [2,5,x,x,9]; // 14
let testArr2b = [3,x,4,x,7];
let testArr3 = [17,x,13,19]; // 3417
let testArr4 = [67,x,7,59,61]; // 779210
let testArr5 = [1789,37,47,1889]; // 1202161486
let testArr6 = [3,x,4,x,7];


let testArr = testArr5;


let continuator = true;
let counter = 1;
let stepSize = 1;


function doIt(arr) {
    for (let j=0; j<arr.length; j++) {
        let output = returnSomething(counter, stepSize, arr[j], j);
        counter = output[0];
        stepSize = output[1];
    }
    console.log('the final answer maybe is: ' + counter);
}


function returnSomething(counter, stepSize, modulo, offSet) { // this function should be called with every element in the array with the new values...???
    if (modulo === x) {
        console.log('it is x here ..');
        return [counter, stepSize]
    }
    let output = []; // should have a form of: counter, new stepsize
    offSet = offSet%modulo; // because the offSet can be greater than the modulo asked for example (x,x,x,x,x,x,x,4) // so the remainder would never match the Offset
    let firstMatch = undefined;
    let secondMatch = undefined;
    let newStepSize = undefined;
    for (let i=counter; i>=0; i=i+stepSize) {
        let remainder = (i+offSet)%modulo;
        console.log('i: ' + i);
        console.log('the remainder is: ' + remainder);
        if (remainder === 0) {
            console.log(111);
            if (firstMatch !== undefined) {
                console.log('secondMatch hit where i is: ' + i);
                secondMatch = i;
                i=-2222222222222222222222222222222222222222222222222222222222222222; // is very minus because the i = i+stepSize and stepSize can grow very big. a simple -1 would be positive after the step is added
            } else {
                console.log('firstMatch hit where i is: ' + i);
                firstMatch = i;
            }    
        }
    }
    output.push(firstMatch); // because the firstMatch is automatically the new Counter
    newStepSize = secondMatch - firstMatch;
    output.push(newStepSize); // because this is the new Stepsize
    return output
}

console.log(doIt(inputArr));



// while (continuator) {
//     if (counter > 100000) {
//         continuator = false;
//     }
//     let sum = 0;
//     for (let i=0; i<testArr.length; i++) {
//         let remainder = (counter+i)%testArr[i];
//         // console.log('the remaindder: ' + remainder);
//         if (0 <= remainder) {
//             sum = sum + (counter+i)%testArr[i];
//         }
//     }
//     // console.log('counter:                  ' + counter);
//     // console.log('the sum:                  ' + sum);
//     if (sum === 0) {
//         console.log(counter);
//         // continuator = false;
//     } else {
//         increaser = increaser
//     }

//     counter = counter + increaser;
// }

