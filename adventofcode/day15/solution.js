let inputArr = [14,3,1,0,9,5];

let testArr1 = [1,3,2]; // 1
let testArr2 = [2,1,3]; // 10
let testArr3 = [1,2,3]; // 27
let testArr4 = [2,3,1]; // 78


let arrToUse = inputArr;

// take last element and see when it was spoken last, calculate and add interspace to arr, if not spoken last at all add 0 to arr


function doIt(arr){
    for (let i=0; i<2021; i++) {
        const lastArrElement = arr[arr.length-1];
        const lastOccurenceIdx = arr.lastIndexOf(lastArrElement, arr.length-2);
        if (lastOccurenceIdx === -1) {
            arr.push(0);
        } else {
            const interspace = arr.length-1-lastOccurenceIdx;
            arr.push(interspace);
        } 
    }
    console.log(`----------------the answer: is ${arr[2019]}`);
}

doIt(arrToUse);
