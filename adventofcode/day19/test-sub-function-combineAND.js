let a = ['aaa', 'bbb', 'ccc'];
let b = ['xx', 'yy'];




function combineAND(a,b) {
    let output = [];
    for (let i=0; i<a.length; i++) {
        for (let j=0; j<b.length; j++) {
            let subString = a[i] + b[j];
            output.push(subString);
            console.log(subString);
        }
    }
    console.log(`final output: `);
    console.log(output);
}


function combineANDtwo(first, second) {
    let combineAndOutput = []; 
    for (let i=0; i<first.length; i++) {
        for (let j=0; j<second.length; j++) {
            let subString = first[i] + second[j];
            combineAndOutput.push(subString);
        }
    }
    return combineAndOutput
}


console.log(combineANDtwo(a,b));