let arr = [];

for (let i=0; i<1000000; i++) {
    arr.push(i);
}



// for (let i=0; i<arr.length; i++) { // 4.5 sec
//     console.log(arr[i]);
// }

// for (let i=0; i<arr.length; i++) { // 108'730 pro 6.2s / 200'000 pro 19.9s / 303'500 pro 45.1s ---> 17,5k / 10,1k / 6.7k
//     console.log(arr.indexOf(i));            // indexOf is very slow with those huge arrays... (i.e arr.length = 1'000'000 )
// }

for (let i=0; i<10000; i++) { // inserting ad idx 0 --> 11.907s // inserting at idx 999998 ---> 0.171s!! // inserting at 999998 + i --> 0.115s
    arr.splice(999998, 0, i*2);
}


// INSERTING AT THE BEGINNING OF ARRAY TAKES VERY LONG BECAUSE THE WHOLE ARRAY HAS TO BE MOVED ---> WE NEED LINKED/CIRCULAR LIST!!!!

