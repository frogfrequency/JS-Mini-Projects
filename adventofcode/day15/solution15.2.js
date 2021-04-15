// trying to use an Obj here...


// 2,3,1, the 2020th number spoken is 78.

let theObj = {
    14: 0,
    3: 1,
    1: 2,
    0: 3,
    9: 4,
    5: undefined
}
14,3,1,0,9,5

function doIt() {
    let lastSpokenNumber = 5;                                     // *
    let lastOccurenceIdx;
    let interspace;

    for (let i=5; i<29999999; i++) {                              // *

        if(i%50000  === 0) {console.log(i);}
        lastOccurenceIdx = theObj[lastSpokenNumber];
        theObj[lastSpokenNumber] = i;
        if (lastOccurenceIdx === undefined) {
            theObj[lastSpokenNumber] = i;
            lastSpokenNumber = 0;
        } else {
            interspace = i-lastOccurenceIdx;
            lastSpokenNumber = interspace;
        }
        // console.log(`i : ${i} --> ${lastSpokenNumber}`);
    }

    console.log(lastSpokenNumber);


}


doIt();