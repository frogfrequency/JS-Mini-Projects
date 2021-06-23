let object = {
    
}



function addSome(amount) {
    for (let i=0; i<amount; i++) {
        let key = 'a' + i;
        let value;

        if (i<amount-1) {
            value = i+1;
        } else {
            value = 0;
        }
        object[key] = value;

    }
}


addSome(10);

console.log(object);