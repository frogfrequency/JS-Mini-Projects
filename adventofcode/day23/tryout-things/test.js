function giveKey(number) {
    return 'e' + number
}


// let object = {
//     a1: 3,
//     a2: 8,
//     a3: 9,
//     a4: 1,
//     a5: 2,
//     a6: 5,
//     a7: 4,
//     a8: 6,
//     a9: 7
// }




// let object = {
    //     a1: 2,
    //     a2: 3,
    //     a3: 4,
    //     a4: 5,
    //     a5: 6, 
    //     a6: 7,
    //     a7: 8,
    //     a8: 9,
    //     a9: 0
    // }
    
    let object = {
        e1: 2,
        e7: 3,
        e2: 5,
        e3: 8,
        e4: 6,
        e5: 4,
        e6: 7,
        e8: 9,
        e9: 1
    }


// 389125467

function logTheObject(obj) {
    let length = Object.keys(obj).length;
    
    let current = obj['e9'];
    for (let i=0; i<length; i++) {
        console.log(current);
        let newKey = 'e' + current;
        current = obj[newKey];
    }

}

function move(extractAfter, insertAfter) {
    
    // change insertAfter so it is derived from extractAfter

    let key = giveKey(extractAfter);
    let value = object[key];

    for (let i=0; i<3; i++) {
        key = giveKey(object[key]);
    }
    
    let newValue = object[key];
    object[giveKey(extractAfter)] = newValue;

    let insertAfterKey = giveKey(insertAfter);
    let insertAfterKeyValue = object[insertAfterKey];
    object[insertAfterKey] = value;
    object[key] = insertAfterKeyValue;

}


function oneRound(current) {

}


move(4, 2);


logTheObject(object);
