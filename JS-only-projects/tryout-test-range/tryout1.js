let a = [
    [
        [true,true,true],
        [true,true,true]
    ],
    [
        [true,true,true],
        [true,true,true]
    ]
];


function pushTenFalse(arr) {
    let newLine = [];
    let counter = arr[0][0].length;
    for (let i=0; i<counter; i++) {
        newLine.push(false);
    }
    
    let newZ = [];
    let Zcounter = arr[0].length;
    for (let i=0; i<Zcounter; i++) {
        newZ.push(JSON.parse(JSON.stringify(newLine)));
    }
    
    
    
    arr.push(JSON.parse(JSON.stringify(newZ)));
    arr.unshift(JSON.parse(JSON.stringify(newZ)));
 
    for (let z=0; z<arr.length; z++) {
        arr[z].push(JSON.parse(JSON.stringify(newLine)));
    }
}


function visualizeArr(arr) {
    let outputString = '';
    for (let z=0; z<arr.length; z++) {
        outputString += (`z-level: ${z}\n`);
        for (let y=0; y<arr[z].length; y++) {
            for (let x=0; x<arr[z][y].length; x++) {
                if (arr[z][y][x]) {
                    outputString += '#';
                } else {
                    outputString += '.';
                }
            }
            outputString += '\n';
        }
        outputString += '\n';
    }
    console.log(outputString);
}




console.log(`a before:`);
visualizeArr(a);
pushTenFalse(a);

console.log(`a after1:`);
visualizeArr(a);
pushTenFalse(a);

console.log(`a after2:`);
visualizeArr(a);
pushTenFalse(a);

console.log(`a after3:`);
visualizeArr(a);



