function sortNumber(a, b) {
    return a - b;
  }

/// DOESTN WORK AT ALL 



  var hand = [0, 1, 2, 7, 4, 5, 45];     // straight flush
var r = 0; // rowindex
 // lets go





function testLine(arr, row) {
    var i = 0 + row;
    var result = "Straight-flush! Congratulation!";
                        console.log("before whilesache i =" + i);
        while(i < 4) {
            if (arr[i] + 1 != arr[i+1]) {
                result = "Error in link: " + i + " and row: " + r;
                return result;
            }
                i++;
        }
    i = 0;
    console.log("after whilesache i =" + i);
    return result;
}

 
    for (var x = 0; x < 3; x++) {

        testLine(hand, r);
        r++
    }
    



console.log(testLine(hand));

console.log("calculated from hand: " + hand);

   
