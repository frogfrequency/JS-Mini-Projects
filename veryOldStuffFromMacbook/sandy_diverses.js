


var testArr = [29,16,2,3,17,5,42];
console.log(testArr);

// basic variant, return with if / else condition
var filteredArray1 = testArr.filter(element => {
    if ((element % 2) === 0) {
        return true;
    } else {
        return false;
    }
});

// ====================================================

/**
 * These 2 callback functions are not the same.
 * 
 * If the curly braces {} are not present in an arrow
 * funtion, the function returns whatever is on the right
 * side of the arrow.
 * 
 * Simple Example:
 * 
 * This returns nothing just executes the code inside the function:
 * () => {
 *   var foo = 2 + 2;
 * }
 * 
 * This returns the result of the calculation (var foo);
 * () => var foo = 2 + 2
 */
var filteredArray2 = testArr.filter(element => {
    return (element % 2) === 0;
});

var filteredArray3 = testArr.filter(element => (element % 2) === 0);



console.log(`
=======================

Array1: ${filteredArray1}

Array2: ${filteredArray2}

Array3: ${filteredArray3}

=======================
`);

// Array.forEach does not want the callback function
// to return something, the return value would be ignored.
// So this is how to do it (no return):
testArr.forEach((part, index, theArr) => {
    theArr[index] = part % 13
});


console.log(testArr);

// 3 levels of strings:
var stringDemoVar = 13;
var level1 = "i am the basic version with double quotes";
var level2 = 'i am the most common version with single quotes';
var level3 = `
    i am the the strongest version with backticks

    i also respect whitespace

    and you can use variables like this inside me:
    ${stringDemoVar}
`;