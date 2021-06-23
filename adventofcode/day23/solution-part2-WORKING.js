function giveKey(number) {
    return 'e' + number
}

// 186524973

let puzzleObject = {
    e1: 8,
    e2: 4,
    e3: 10,
    e4: 9,
    e5: 2,
    e6: 5,
    e7: 3,
    e8: 6,
    e9: 7
}


let testObject = {
    e1: 2,
    e7: 10,
    e2: 5,
    e3: 8,
    e4: 6,
    e5: 4,
    e6: 7,
    e8: 9,
    e9: 1
}

let object = puzzleObject;

// increase object to 1'000'000 here

for (let i=10; i<1000000; i++) {
    let newKey = 'e' + i;
    object[newKey] = i+1;
}

let lastkey = 'e1000000';

object[lastkey] = 1;






const objectLength = Object.keys(object).length;
console.log(objectLength);


// 389125467

function logTheObject(obj) {
    let length = objectLength;
    let current;
    for (let i=0; i<10; i++) {
        let key = giveKey(i);
        if (obj[key] === 1) {
            current = obj[key];
        }
    }

    for (let i=0; i<length; i++) {
        console.log(current);
        let newKey = 'e' + current;
        current = obj[newKey];
    }

}

function move(extractAfter) {
    
    // change insertAfter so it is derived from extractAfter

    let takenLabels = [];

    let key = giveKey(extractAfter);
    let value = object[key];

    for (let i=0; i<3; i++) {
        takenLabels.push(object[key])
        key = giveKey(object[key]);
    }

    
    let newValue = object[key];
    object[giveKey(extractAfter)] = newValue;

    let insertAfter = extractAfter-1;
    if (insertAfter === 0) {
        insertAfter = objectLength;
    }


    while (takenLabels.includes(insertAfter)) {
        insertAfter = insertAfter-1;
        if (insertAfter === 0) {
            insertAfter = objectLength;
        }
    }


    let insertAfterKey = giveKey(insertAfter);
    let insertAfterKeyValue = object[insertAfterKey];
    object[insertAfterKey] = value;
    object[key] = insertAfterKeyValue;

}


function playRounds(quantity, firstCurrent) {
    let current = firstCurrent;

    for (let i=0; i<quantity; i++) {
        move(current);
        current = object[giveKey(current)];
    }
}

playRounds(10000000, 1);

// logTheObject(object);


let valueObjectRightOf1 = object[giveKey(1)];
let valueObjectTwoRightOf1 = object[giveKey(valueObjectRightOf1)];

console.log('first ' + valueObjectRightOf1);
console.log('second ' + valueObjectTwoRightOf1);


// console.log(`${valueObjectRightOf1} * ${valueObjectTwoRightOf1} = ${valueObjectTwoRightOf1*valueObjectTwoRightOf1}`);
//      --> this doesnt work because numbers to big for javascript standard types????

// 389125467

// 1--> 167389254
// 2--> 154627389
// 3--> 154673289
// 4--> 126735489
// 5--> 125346789
// 6--> 125738469
// 7--> 125463897
// 8--> 123854679
// 9--> 125946738


