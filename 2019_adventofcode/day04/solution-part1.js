const range = [134564, 585159];

let counter = 0;


for (let i=range[0]; i<range[1]+1; i++) {

    let theString = JSON.stringify(i);

    if (includesDouble(theString) && onlyIncreasing(theString)) {
        counter++
    }
}


function includesDouble(input) {
    let includesDouble = false;
    
    for (let i = 0; i < input.length - 1; i++) {
        if (input.charAt(i) === input.charAt(i + 1)) {
            includesDouble = true;
        }
    }
    return includesDouble;
}


function onlyIncreasing(input) {
    let onlyIncreasing = true;
    
    for (let i = 0; i < input.length; i++) {
        if (parseInt(input.charAt(i)) > parseInt(input.charAt(i+1))) {
            onlyIncreasing = false;
        }
    }
    
    return onlyIncreasing
    
}



console.log(`the counter is ${counter}`);