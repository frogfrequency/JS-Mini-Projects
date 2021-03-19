const timeOfArrival = 1000508;

const inputArr = [29,37,467,23,13,17,19,443,41];


function returnRemainders(arr) {
    let returnRemaindersOutput = [];
    for (let i=0; i<arr.length; i++) {
        returnRemaindersOutput.push(timeOfArrival%arr[i]);
    }
    return returnRemaindersOutput
}

let remainders = returnRemainders(inputArr);

// the code doesnt output the answer but i can  be easily derivated from the remainder arr...

