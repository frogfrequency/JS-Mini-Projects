


var testArr = [29,16,2,3,17,5,42];
console.log(testArr);



/* function remainderFunction(part, index, theArr) {
    theArr[index] = part % 13;
};

testArr.forEach(remainderFunction); */

testArr.forEach((element, idx, arr) => {
    arr[idx] = element % 13;
});

console.log(testArr);