var arr = [1,9,2,3,5,6,7,8,3,2,1,3];

function removeDuplicates(data) {
    return data.filter((value, index) => data.indexOf(value) === index);
}

console.log(removeDuplicates(arr));