let x = 'x';

let inputArr = [7,13,x,x,59,x,31,19];

let testArr2 = [2,5,x,x,9]; // 14
let testArr2b = [3,x,4,x,7];
let testArr3 = [17,x,13,19]; // 3417
let testArr4 = [67,x,7,59,61]; // 779210
let testArr5 = [1789,37,47,1889]; // 1202161486
let testArr6 = [3,x,4,x,7];


let testArr = testArr6;


let continuator = true;
let counter = 0;

let increaser = 1;

function returnSomething(counter, stepSize, modulo, offSet) {
    for (let i=counter; i<100; i=i+stepSize) {
        let remainder = i%modulo;
        console.log('i: ' + i);
        console.log('the remainder is: ' + remainder);
        if (remainder === offSet) {
            console.log('offset matched!');
        }
    }
}

returnSomething(0, 1, 18, 6);



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

