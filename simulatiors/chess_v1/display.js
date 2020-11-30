export function createBoard() { // creates the board

    var offset = 0;

    for (let i=0; i<64; i++) {
        var newSquare = document.createElement('div');
        newSquare.id = i;
        if ( (i)%8 === 0) {
            if (offset === 0){
                offset = 1;
            } else {
                offset = 0;
            }
        }
        if ((i+offset)%2 === 0) {
            newSquare.className += "square black-square";
        } else { 
            newSquare.className = "square white-square";
        }
        newSquare.addEventListener("click", squareClick);

        document.getElementById('container').appendChild(newSquare);
    }
}

document.getElementById('generateFieldBtn').addEventListener('click', generateFieldfromArr);
document.getElementById('testFunctionBtn').addEventListener('click', testFunction);
