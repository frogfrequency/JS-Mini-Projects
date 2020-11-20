var arr = []
console.log('array before: ' + arr);

function pushNothing(){
    arr.push(1);
    arr.push('');
    arr.push(1);

    arr.push(1);
    arr.push('');
    arr.push(1);
    arr.push('');
    arr.push(1);
    arr.push('');
    arr.push(1);
    arr.push('');
    

}
pushNothing();
console.log('array after: ' + arr);
