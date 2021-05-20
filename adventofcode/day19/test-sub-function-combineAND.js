let a = ['a', 'b', 'c'];
let b = ['x', 'y'];

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


combineAND(a,b);