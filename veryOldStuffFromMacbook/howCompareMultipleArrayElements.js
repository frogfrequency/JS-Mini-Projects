var existArr = [[1,2],[3,4],[5,6]];
var newNums = [1,2];



function noCloneCheck(exist) {
    return newNums !== exist; 
}

console.log(existArr.every(noCloneCheck));



var existArrFFFF = [[1,2],[3,4],[5,6]];
var newNumsFFFF = [7,8];

