let x = 'x';


let testArr2 = [2,5,x,x,9]; // 14
let testArr2b = [3,x,4,x,7];
let testArr3 = [17,x,13,19]; // 3417
let testArr4 = [67,x,7,59,61]; // 779210
let testArr5 = [1789,37,47,1889]; // 1202161486
let testArr6 = [3,x,4,x,7]; // 66
let inputArr7 = [7,13,x,x,59,x,31,19];

let testArr = testArr2;

let current = 0;
let step = testArr[0];

while (step<10000) {
    console.log(step);
    current = current + step;
    for (let i=0; i<testArr.length; i++) {
        if ((testArr[i]+i) % testArr[i] === 0) {
            console.log('we have a hit: ');
            i++
        }
    }
}
