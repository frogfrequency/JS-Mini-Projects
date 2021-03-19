const inputObject = {
    '1-4 j': 'jjjqzmgbjwpj',
    '2-4 w': 'sckwwf',
    '1-13 b': 'bcbbbbbbbbbbhbb',
    '10-11 x': 'xjxxxxxxxxzxxx',
    '13-14 d': 'dddddddddddddd',
    '16-18 s': 'ksttbjsstpnsvtcjnx',
    '3-8 k': 'gkkqkbpvkrx',
    '3-7 c': 'mccnjgcxkfkp',
    '3-7 b': 'hgbqzrjvwqbfc',
    '8-14 r': 'rrrrrrrfrrrtrrrr',
    '5-6 v': 'vvvvwpvvv',
    '4-5 b': 'zfkpb',
    '12-13 n': 'nwnwdplnhfhlnnnntfn',
    '9-14 z': 'sxzjzfrzztczlw',
    '1-14 n': 'vnnnnnnnnnnnnnnnnnnn'
}

let inputArr = Object.entries(inputObject);

function returnCountOfValids(arr) {
    let counter = 0;
    for (let i=0; i< arr.length; i++) {
        let currentElementPair = arr[i];
        let desiredCharacter = currentElementPair[0].slice(-1);
        let min = returnMin(currentElementPair[0]);
        let max = returnMax(currentElementPair[0]);
        let string = currentElementPair[1];
        counter = counter + addOneIfValid(desiredCharacter, min, max, string);
    }
    console.log(`the final counter is: ${counter}`);
}

function returnMin(property) {
    let hyphenIdx = property.indexOf('-');
    let min = property.slice(0, hyphenIdx);
    return min
}

function returnMax(property) {
    let hyphenIdx = property.indexOf('-');
    let max = property.slice(hyphenIdx+1, property.length-2);
    return max
}

function addOneIfValid(desiredCharacter, min, max, string) {
    let regex = new RegExp(desiredCharacter, 'g'); 
    const appearances = string.match(regex).length;
    if (min <= appearances && appearances <= max) {
        return 1
    } else {
        return 0
    }
}


returnCountOfValids(inputArr);
