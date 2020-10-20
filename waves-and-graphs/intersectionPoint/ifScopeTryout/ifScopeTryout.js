const targetLeft = 100;
const targetLeftMax = targetLeft + 50;

const targetTop = 100;
const targetTopMax = targetTop + 50;

const elementLeft = 102;
const elementTop = 101;

function checkMatch() {
    if(targetLeft < elementLeft && elementLeft < targetLeft + 50 && targetTop < elementTop && elementTop < targetTop + 50) {
        console.log('match');
    } else {
        console.log('no match');
    }
}

checkMatch();