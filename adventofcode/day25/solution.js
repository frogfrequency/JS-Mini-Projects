const doorPublicKeyTest = 17807724;
const cardPublicKeyTest = 5764801;

const doorPublicKey = 8987316;
const cardPublicKey = 14681524;



function transform(loopSize, subjectNumber) {
    let value = 1;
    for (let i=0; i<loopSize; i++) {
        value = value*subjectNumber;
        value = value%20201227;
    }

    return value
}


function findLoopSize(publicKey, subjectNumber) {
    let value = 1;
    let loopCounter = 0;
    while (value != publicKey) {
        value = value*subjectNumber;
        value = value%20201227;
        loopCounter++
    }
    return loopCounter
}


let doorLoopSize = findLoopSize(doorPublicKey, 7);
1
let cardLoopSize = findLoopSize(cardPublicKey, 7);

console.log(doorLoopSize);
console.log(cardLoopSize);

let doorEncryptionKey = transform(doorLoopSize, cardPublicKey);
let cardEncryptionKey = transform(cardLoopSize, doorPublicKey);

console.log(doorEncryptionKey);
console.log(cardEncryptionKey);
