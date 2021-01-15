import { inputArr } from "./puzzle-input.mjs"



function mainLoop() {
    let stop = false;
    let i = 29;

    do {
        console.log(i);
        check(i);


        i = i + 29;
        if (1000000 < i) { stop = true }
    } while (stop === false)

}

function check(index) {
    let currentNumber = index*29;
    inputArr.forEach((element, idx) => {
        console.log(`inside forEach: ${element} (idx: ${idx})`);
    });
}


    mainLoop();