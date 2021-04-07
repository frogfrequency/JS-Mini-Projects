

var testArr = [29,16,2,3,17,5,42];
console.log(testArr);


function remainderFunction(part, index, theArr) {
    theArr[index] = part % 13;
};

testArr.forEach(remainderFunction);


console.log(testArr);



// function digitCheck(z) {
//     for (i = 0; i < 6 ; i++) {
//         h = (z+i+1) % 7;
//         if (remainderArr[z] === remainderArr[h]) {
//             return "Ding!";
//         }
//     return "Dong";
//     }
// }

// console.log(digitCheck(0));
