var myGlobalVar = "333";
var myGlobalObj = document.getElementById('div1');

function functionOne() {
    console.log('we try to show, that global defined obj are not passed into the function correctyl: ');
    console.log("I " + myGlobalVar); // is displayed correctly
    console.log("II " + myGlobalObj); // is displayed as null
    console.log("III " + document.getElementById('div1')); // is displayed correctly (as element)
    console.log("IV " + aNonExistingVar); // is displayed as "... is not defined"
}



function functionTwo() {
    document.getElementById('div1').innerHTML = '444';
}


function functionThree() {
    myGlobalVar = myGlobalVar*2;
    console.log('inside functionThree myGlobalVar is found:' + myGlobalVar);
    functionFour();
}

function functionFour() {

    myGlobalVar = myGlobalVar + 100000000000;

}