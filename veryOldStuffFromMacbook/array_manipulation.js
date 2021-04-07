var testArr = [3,43,1,4,6,8,3];
var copy = [1,1,1,1,1,1];

console.log(testArr);
console.log(copy);

testArr = copy.push(444);

console.log('---------------');
console.log(testArr);
console.log(copy);

// testArr.forEach((element, idx, arr) => {
//     arr[idx] = element % 13;
// });

// console.log(testArr);
