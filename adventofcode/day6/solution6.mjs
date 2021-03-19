import {inputArr} from './puzzle-input.mjs';

const testArr = [
    `b
b
b
b`,

    `x
xfkj
xb`,

    `ovuxdgiheszjbaltw
oxwjiubhfylzavst`,

    `se
u
j
se`
]

function returnRequiredCount(input) {
    let totalOfAllGroups = 0;
    let arr = removeNewLines(input);
    for (let i = 0; i < arr.length; i++) {
        let currentString = arr[i];
        let currentStringCount = returnGroupAnswersCount(currentString);
        totalOfAllGroups = totalOfAllGroups + currentStringCount;
    }
    console.log(totalOfAllGroups);
}

function returnGroupAnswersCount(string) {
    let groupCounter = 0;
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    for (let i = 0; i < alphabet.length; i++) {
        let currentLetter = alphabet[i];
        let indexOfcurrentLetter = string.indexOf(currentLetter);
        if (indexOfcurrentLetter !== -1) {
            groupCounter++;
        }
    }
    return groupCounter
}


function removeNewLines(arr) {
    let output = [];
    for (let i = 0; i < arr.length; i++) {
        let currentString = arr[i];
        let newString = currentString.replace(/\n/g, '');
        output.push(newString);
    }
    return output
}

returnRequiredCount(inputArr);