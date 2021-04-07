var tempNum = 0;
var assCounter = 0;
var twoCounter = 0;
var threeCounter = 0;
var fourCounter = 0;
var fiveCounter = 0;
var sixCounter = 0;
var sevenCounter = 0;
var eightCounter = 0;
var nineCounter = 0;
var tenCounter = 0;
var jackCounter = 0;
var queenCounter = 0;
var kingCounter = 0;
var i = 0;

while(i < 500040) {                
    tempNum = Math.random() * 13;    // 0 and 1 theoreticly possible when generated?
    tempNum = Math.floor(tempNum)+1;  // +1 = unnecessary
    switch(tempNum) {
        case 1:
            assCounter ++;
            break;
        case 2:
            twoCounter ++;
            break;
        case 3:
            threeCounter ++;
            break;
        case 4:
            fourCounter ++;
            break;
        case 5:
            fiveCounter ++;
            break;
        case 6:
            sixCounter ++;
            break;
        case 7:
            sevenCounter ++;
            break;
        case 8:
            eightCounter ++;
            break;
        case 9:
            nineCounter ++;
            break;
        case 10:
            tenCounter ++;
            break;
        case 11:
            jackCounter ++;
            break;
        case 12:
            queenCounter ++;
            break;
        case 13:
            kingCounter ++;
            break;
    }

    i++;
}
var cardArray = 
console.log("assCounter: " + assCounter);
console.log("twoCounter: " + twoCounter);
console.log("threeCounter: " + threeCounter);
console.log("fourCounter: " + fourCounter);
console.log("fiveCounter: " + fiveCounter);
console.log("sixCounter: " + sixCounter);
console.log("sevenCounter: " + sevenCounter);
console.log("eightCounter: " + eightCounter);
console.log("nineCounter: " + nineCounter);
console.log("tenCounter: " + tenCounter);
console.log("jackCounter: " + jackCounter);
console.log("queenCounter: " + queenCounter);
console.log("kingCounter: " + kingCounter);





