

function generate() {
    var output = [];
    output.push(Math.floor(Math.random() * 9));
    output.push(Math.floor(Math.random() * 9));
    output.push(Math.floor(Math.random() * 9));
    output.push(Math.floor(Math.random() * 9));
    console.log(output);
    return output
}

function evaluate(x) {
    x.sort((a,b)=>b-a); // insert whole evaluation process here
    return x[0]
}



function generateEvaluateCount(amount) {
    switch(evaluate(generate())) {
        case 0:
            highCardCounter++
            break;
        case 1:
            pairCounter++
            break;
        case 2:
            twoPairCounter++
            break;
        case 3:
            toakCounter++
            break;
        case 4:
            straightCounter++
            break;   
        case 5:
            flushCounter++
            break;
        case 6:
            fullHouseCounter++
            break;
        case 7:
            FoakCounter++
            break;   
        case 8:
            straightFlushCounter++
            break;
        
    }

}

////////////////////

generateEvaluateCount(1);