// create a function that returns a grid with conditions for x and y. also choose the size of your grid

// have ascending numbers from left to right and subsequent letter of alphabet from top to bottom


const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];




// arr.push(Array());

function returnGrid(rowAmount, columnAmount) {

    var output = [];


    for (j=0; j<rowAmount; j++) {

        output.push(Array());

        for (i=0; i<columnAmount; i++) {
            output[j].push(alphabet[j] + (1+i));  // change conditions here for x any y
        }
    }
    return output;

}



console.log(returnGrid(20,4));           // change how many rows and columns you get  !watch out alphabet has only 26 letters