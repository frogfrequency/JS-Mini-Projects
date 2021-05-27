// let arr = ['Marcel', 'Mirja', 'Mäsi', 'Frank'];

// let lettersToAdd = 'XX';

// console.log(`arr before: ${arr}`);


// for (let i=0; i<arr.length; i++) {
//     arr[i] = arr[i]+lettersToAdd;
// }

// console.log(`arr after: ${arr}`);

let a = ['a', 'b', 'c'];
let b = ['d', 'e', 'f'];


function combineOr(x, y) {
    let output = [];
    for (let i=0; i<x.length; i++) {
        for (let j=0; j<y.length; j++) {
            output.push(x[i] + y[j]);
        }
    }
    return output
}

console.log(combineOr(a, b));