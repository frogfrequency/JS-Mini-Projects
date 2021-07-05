let inputArr = [1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,13,1,19,1,5,19,23,2,10,23,27,1,27,5,31,2,9,31,35,1,35,5,39,2,6,39,43,1,43,5,47,2,47,10,51,2,51,6,55,1,5,55,59,2,10,59,63,1,63,6,67,2,67,6,71,1,71,5,75,1,13,75,79,1,6,79,83,2,83,13,87,1,87,6,91,1,10,91,95,1,95,9,99,2,99,13,103,1,103,6,107,2,107,6,111,1,111,2,115,1,115,13,0,99,2,0,14,0];

inputArr[1] = 12;
inputArr[2] = 2;


let testArr1= [1,1,1,4,99,5,6,0,99];

// DONT FORGET TO CHANGE THE PROGRAMM POSITIONS 1 AND 12 BEFORE RUNNING!!

let arr = inputArr;


function loopIt() {
    for (let i=0; i<arr.length; i = i+4) {
        let operation = arr[i];
        
        if (operation === 99) { // halting here if needed
            return
        }


        let firstNumber = arr[arr[i+1]];
        let secondNumber = arr[arr[i+2]];
        let targetIdx = arr[i+3];

        let result = giveResult(operation, firstNumber, secondNumber);
        arr[targetIdx] = result;
        console.log(result);

    }
}


function giveResult(operation, first, second) {
    if (operation === 1) {
        return first + second
    } else if (operation === 2) {
        return first * second
    }
}

loopIt(testArr1);



console.log(`value ar idx 0 --> ${arr[0]}`);

console.log(arr);