const elementLeft = 131;
const elementTop = 131;
const targetLeft = 100;
const targetTop = 130;


function checkMatch(){

    console.log('tl: ' + targetLeft + ', tt: ' + targetTop + ', el: ' + elementLeft + ', et: ' + elementTop);
    if(targetLeft < elementLeft && elementLeft < targetLeft + 50 && targetTop < elementTop && elementTop < targetTop + 50) {
        console.log('match');
    } else {
        console.log('no match');
    }
}

checkMatch();