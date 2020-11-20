var arr = [];

for (let i=0; i<64; i++) {
    arr.push(i)
}

function remainderFunction(x){
    x.forEach(element => {
        console.log(element + ' remainder 8 -->  ' + element % 8);



    });
}


remainderFunction(arr);