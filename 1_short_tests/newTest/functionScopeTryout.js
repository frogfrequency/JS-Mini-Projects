// trying out things with function scope and the same variable-names used on different levels

var abc = '4'

function levelOne(x) {
    console.log('1________ abc: ' + abc);
    console.log('1________ x: ' +  x);
    console.log('1________ doubleAbc: ' + doubleAbc);
    
    
    var doubleAbc = x*2;

    levelTwo(x, doubleAbc);


    console.log('1.1________ abc: ' + abc);
    console.log('1.1________ x: ' +  x);
    console.log('1.1________ doubleAbc: ' + doubleAbc);
}


function levelTwo(x, doubleAbc) {
    doubleAbc += 6;
    x = x + 33333
    console.log('\n2 abc: ' + abc);
    console.log('2 x: ' +  x);
    console.log('2 doubleAbc: ' + doubleAbc + '\n');
}

levelOne(abc);

console.log('so it seems that even when the same variable-names are used and passed it does only the one in the function');