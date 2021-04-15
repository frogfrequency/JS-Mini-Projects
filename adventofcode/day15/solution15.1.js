// it doesnt work like that .... at least it is not performant 
// the problem probably is the saving of the whole array with all the elements.. since past elements dont really matter
// maybe work with some key - value pair system where you only save the each numbers last occurence-idx...? i - this OccIdx then gives the interpsace

let inputArr = [14,3,1,0,9,5];

let testArr1 = [0,3,6]; // 175594
let testArr2 = [1,3,2]; // 2578
let testArr3 = [2,1,3]; // 3544142


let arrToUse = testArr1;

// take last element and see when it was spoken last, calculate and add interspace to arr, if not spoken last at all add 0 to arr


function doIt(arr){
    for (let i=0; i<100000; i++) {
        if (i%2000 === 0) {console.log(i);}
        const lastArrElement = arr[arr.length-1];
        const lastOccurenceIdx = arr.lastIndexOf(lastArrElement, arr.length-2);
        let interspace;
        if (lastOccurenceIdx === -1) {
            arr.push(0);
        } else {
            interspace = arr.length-1-lastOccurenceIdx;
            arr.push(interspace);
        } 
        
        console.log(`i: ${i}   element: ${lastArrElement}     interspace: ${interspace}`);
        
    }
    console.log(arr);

    // console.log(`----------------the answer: is ${arr[29999999]}`);
}

doIt(arrToUse);

// loop through 30'000'001
    // set last value as "interspace"
    // see if is already stored
        // --> where should they be stored
    // if it has been stored calculate interspace = i - occurenceIdx
    // restart loop with new interspacevalue


    // use object?? 


    
    // function doIt(arr){
    //     let theElement;
    //         for (let i=0; i<100; i++) {
    //             console.log(`i: ${i}`);
    //             theElement = arr[arr.length-1];
    //             console.log(theElement);
    //             // const lastOccurenceIdx = arr.lastIndexOf(lastArrElement, arr.length-2);
    //             // let interspace;
    //             // if (lastOccurenceIdx === -1) {
    //             //     arr.push(0);
    //             // } else {
    //             //     interspace = arr.length-1-lastOccurenceIdx;
    //             //     arr.push(interspace);
    //             // } 
    //             // console.log(`i: ${i}   element: ${lastArrElement}     interspace: ${interspace}`);
    //         }
    //         // console.log(`----------------the answer: is ${arr[29999999]}`);
    //     }

    //     doIt(arrToUse);