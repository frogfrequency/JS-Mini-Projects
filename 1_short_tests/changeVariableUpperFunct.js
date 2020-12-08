// function callTheOther() {
//     let x = 1;
//     console.log('x before: ' + x);
//     iAmCalled();
//     console.log('x after: ' + x);
// }

// function iAmCalled() {
//     // console.log(`x inside second funct before it is changed ${x}`);
//     x = 7;
//     console.log('x is now set to: ' + x);
// }


// callTheOther();


//////////////////////////////////////////////////////////////////
// answer by sandro :


// let stopper = false;

// function longLoop() {
//     for (let i=0; i<20; i++) {
//         const stopCondition = stopFunction(i);
//         if (stopCondition) {
//             break;
//         }
//         console.log(i);

//     }
// }

// function stopFunction(param)  {
//     // i want to stop the for loop that constantly calls me
//     return param > 10;
// };

// longLoop();

let arr = [];

function checkAndAdd() {
    
    for (let i=0; i<20; i++) {
        if (stopFunction(i)){
        }
    }
    console.log(arr);
}

function stopFunction(x) {
    if (x < 10) {
        arr.push(x);
        return true
    } else {
        arr.push(x);
        return false
    }

}

checkAndAdd();