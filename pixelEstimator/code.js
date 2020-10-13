var length = 0;
var roundPlayed = false;

function clearBoard() {
    var toClear = document.getElementById("main-field");
    toClear.innerHTML = '';
}

function generateBoard() {

    const seedPercent = Math.floor(Math.random() * Math.floor(100));

        for (i=0; i<100; i++) {

            const newDiv = document.createElement("div"); 

                const nr = Math.floor(Math.random() * Math.floor(100));
                if (nr < seedPercent) {
                    newDiv.className = "pixelOne";
                } else {
                    newDiv.className = "pixelTwo";
                }


            const x = document.getElementById("main-field");
            x.appendChild(newDiv); 
        }

    length = document.querySelectorAll('#main-field .pixelOne').length;

    roundPlayed = true;

    setTimeout(clearBoard, 1000);

}

function compare() {
    if (roundPlayed) {
        const userNr = document.getElementById("user-input").value;
        const outputMsg = document.getElementById("result-msg");
        var resultText = 'You guessed: ' + userNr + ' , correct answer: ' + length + '<br>';
        outputMsg.innerHTML += resultText ;
    }
    roundPlayed = false;
}







