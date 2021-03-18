let testArr = [['mask', '0101111110011010X110100010X100000XX0'],
[46424, 216719],
[43628, 6647],
[21582, 4737255],
[62945, 25540],
[14304, 1226]
]

let currentMask = undefined
let memoryAdressArr = [];
let memoryContentArr = [];

function main (arr) {
    for (let a=0; a<arr.length; a++) {
        if (arr[a][0] === 'mask') {
            currentMask = arr[a][1];
        } else {
            createUpdateMemory(currentMask, arr[a]);
        }
    }
}

function createUpdateMemory(mask, element) {
    let memoryAdress = element[0];
    let value = toBinary(element[1]);
    value = updateValue(value, mask);
    console.log(`memoryAdress ${memoryAdress}    value: ${value}`);
    let adressIdx = memoryAdressArr.indexOf(memoryAdress);
    if (adressIdx === -1) {
        console.log('not found');
        memoryAdressArr.push(memoryAdress);
        memoryContentArr.push(value);
    } else {
        memoryContentArr[adressIdx] = value;
    }

}

function updateValue(val, msk) {
    let output = '';
    for (let i=0; i<msk.length; i++) {
        let valDigit = val.substring(i,i+1);
        let mskDigit = msk.substring(i,i+1);
        if (mskDigit === '0' || mskDigit === '1') {
            output = output + mskDigit;
        } else {
            output = output + valDigit;
        }
    }
    return output
}


function toBinary(dec) {
    let output = dec.toString(2);
    let neededZeros = 36 - output.length;
    for (let i = 0; i < neededZeros; i++) {
        output = '0' + output;
    }
    return output
}

main(testArr);


let theTestVariable = '0101000101100000110'

console.log('hoi' + parseInt(theTestVariable, 10));