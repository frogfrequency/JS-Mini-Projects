// from a given grid 10x10 random numbers (ten arrays with ten numbers in) add all numbers around the object and the amount of the selected object (9 numbers to add)
// 201010: doesnt work for fringe-numbers atm for obvious reasons...
var grid1 = [
    [
      1, 2, 3, 4, 5,
      6, 7, 8, 9
    ],
    [
      10, 11, 12, 13, 14,
      15, 16, 17, 18, 19
    ],
    [
      20, 21, 22, 23, 24,
      25, 26, 27, 28, 29
    ],
    [
      30, 31, 32, 33, 34,
      35, 36, 37, 38, 39
    ],
    [
      40, 41, 42, 43, 44,
      45, 46, 47, 48, 49
    ],
    [
      50, 51, 52, 53, 54,
      55, 56, 57, 58, 59
    ],
    [
      60, 61, 62, 63, 64,
      65, 66, 67, 68, 69
    ],
    [
      70, 71, 72, 73, 74,
      75, 76, 77, 78, 79
    ],
    [
      80, 81, 82, 83, 84,
      85, 86, 87, 88, 89
    ],
    [
      90, 91, 92, 93, 94,
      95, 96, 97, 98, 99
    ]
  ];


  // target number coord x,y : 5, 7     (75) numbers around result should be 675  //achtun x und y vertauscht quasi

function giveSpotlightSum(grid, xCord,yCord) {
    var x = xCord-1;
    var y = yCord-1;
    var sum = 0;

    for (j=0; j<3; j++) {

        for (i=0; i<3; i++) {
            sum += grid[x+j][y+i];
                // console.log(sum); 

        }
    }
    return sum;
}

console.log(giveSpotlightSum(grid1,5,3)); // change target field here








