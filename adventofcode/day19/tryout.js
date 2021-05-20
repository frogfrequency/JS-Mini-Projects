let arr = ['Marcel', 'Mirja', 'Mäsi', 'Frank'];

let lettersToAdd = 'XX';

console.log(`arr before: ${arr}`);


for (let i=0; i<arr.length; i++) {
    arr[i] = arr[i]+lettersToAdd;
}




console.log(`arr after: ${arr}`);
