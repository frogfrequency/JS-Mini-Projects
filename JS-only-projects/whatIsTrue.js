let whatArr = [
    true,
    false,
    123,
    'abc',
    undefined,
    null,
    '',
    ' ',
    [1,2,3],
    [],
    {}
];


for (let i=0; i<whatArr.length; i++) {
    if (whatArr[i]) {
        console.log(whatArr[i] + ' <-- is TRUE');
    } else {
        console.log(whatArr[i] + ' <-- is FALSE');
        
    }
}
