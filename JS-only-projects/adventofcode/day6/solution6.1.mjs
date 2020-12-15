import {inputArr2} from './puzzle-input6.1.mjs';

const testArr = [
    ['b',
    'b',
    'b',
    'b'], // 1
    ['x',
    'xfkj',
    'xb'], // 1
    ['ovuxdgiheszjbaltw', 
    'oxwjiubhfylzavst'], // ovuxihszjbaltw 14
    ['se',
    'u',
    'j',
    'se'] // 0
]

function returnRequiredCount(arr) {
    let totalOfAllGroups = 0;
    for (let i = 0; i < arr.length; i++) {
        let currentArr = arr[i];
        let currentArrCount = returnGroupAnswersCount(currentArr);
        totalOfAllGroups = totalOfAllGroups + currentArrCount;
    }
    console.log(totalOfAllGroups);
}

function returnGroupAnswersCount(arr) {
    let groupCounter = 0;
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    for (let i = 0; i < alphabet.length; i++) {
        let currentLetter = alphabet[i];
        let currentLetterIsValid = isValid(currentLetter, arr);
        if (currentLetterIsValid === true) {
            groupCounter++
        }
    }
    return groupCounter
}

function isValid(letter, arr) {
    for (let i=0; i<arr.length; i++) {
        let currentString = arr[i];
        let indexOfLetter = currentString.indexOf(letter);
        if (indexOfLetter === -1) {
            return false
        }
    }
    return true

}


returnRequiredCount(inputArr2);