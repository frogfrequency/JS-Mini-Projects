let a = 10;


function doSomeThing() {
    a = a*2;
}


function doSeveralTimes(amount) {
    for (let i=0; i<amount; i++) {
    
    doSomeThing();

    }
}

doSeveralTimes(100);


console.log(a);