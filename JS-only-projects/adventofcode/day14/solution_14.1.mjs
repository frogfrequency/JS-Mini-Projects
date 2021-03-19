import {inputArr} from "./puzzle-input.mjs"


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
            console.log(`\n\n----------- mask changed to: ${currentMask}\n`);
        } else {
            createUpdateMemory(currentMask, arr[a]);
        }
    }
}

function createUpdateMemory(mask, element) {
    let memoryAdressFirst = toBinary(element[0], 36);
    let value = element[1];
    // console.log(`memoryAdressFirst ${memoryAdressFirst}    value: ${value}`);
    let memoryAdressUpdated = applyMask(memoryAdressFirst, currentMask);
    let generatedAdresses = returnAllAdresses(memoryAdressUpdated);
    for (let h=0; h<generatedAdresses.length; h++) {
        let adressToWrite = generatedAdresses[h];
        let adressIdx = memoryAdressArr.indexOf(adressToWrite);
        if (adressIdx === -1) {
            memoryAdressArr.push(adressToWrite);
            memoryContentArr.push(value);
            // console.log(`not found --> new entry made for ${adressToWrite} ${value}`);
        } else {
            memoryContentArr[adressIdx] = value;
            // console.log(`found --> entry ${memoryAdress} changed to ${value}`);
        }
    }
}

function returnAllAdresses(adr) {
    let returnAllAdressesOutput = [];
    const regex = /[X]/g;
    const Xcount = adr.match(regex).length;
    // console.log('Xcount: ' + Xcount);
    let pattern = returnPatternArr(Xcount);
    for (let x=0; x<pattern.length; x++) {
        let newAdress = applyPatternToAdress(pattern[x], adr);
        returnAllAdressesOutput.push(newAdress)
    }
    // console.log('all the adresses are: ' +  returnAllAdressesOutput);
    return returnAllAdressesOutput
}

function applyPatternToAdress(ptr, adr) {
    // console.log(`inside applyPatternToAdress: ${ptr} ${adr}`);
    let applyPatternToAdressOutput = '';
    let vCounter = 0;
    for (let c=0; c<adr.length; c++) {
        let currentChar = adr.substring(c,c+1);
        if (currentChar === 'X') {
            applyPatternToAdressOutput = applyPatternToAdressOutput + ptr[vCounter];
            vCounter++;
        } else {
            applyPatternToAdressOutput = applyPatternToAdressOutput + currentChar;
        }
    }
    return applyPatternToAdressOutput
}

function returnPatternArr(count) {
    let patternArr = [];
    let onesString = '';
    for (let a=0; a<count; a++) {
        onesString = onesString + '1';
    }
    // console.log(onesString);
    let newAdressesCount = parseInt(onesString, 2)+1;
    // console.log(newAdressesCount + '--------------');
    for (let i=0; i<newAdressesCount; i++) {
        let currentIteration = toBinary(i, count);
        let innerOutput = [];
        for (let b=0; b<currentIteration.length; b++) {
            innerOutput.push(currentIteration.substring(b,b+1));
        }
        patternArr.push(innerOutput);
    }
    // console.log(patternArr);
    return patternArr
}


function applyMask(adressUnmasked, msk) {
    let output = '';
    for (let i=0; i<msk.length; i++) {
        let adressDigit = adressUnmasked.substring(i,i+1);
        let mskDigit = msk.substring(i,i+1);
        if (mskDigit === '0') {
            output = output + adressDigit;
        } else if (mskDigit === '1' || mskDigit === 'X') {
            output = output + mskDigit;
        } 
    }
    // console.log('masked: ' + output);
    return output
}


function toBinary(dec, length) {
    let output = dec.toString(2);
    let neededZeros = length - output.length;
    for (let i = 0; i < neededZeros; i++) {
        output = '0' + output;
    }
    return output
}

main(inputArr);



function returnTotalSum(arr) {
    let output = 0;
    for (let i=0; i<arr.length; i++) {
        output = output + arr[i];
    }
    console.log(`the final sum might be: ${output}`)
}

returnTotalSum(memoryContentArr);

