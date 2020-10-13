var length = 0;

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

}

function compare() {
    const userNr = document.getElementById("user-input").value;
    const outputMsg = document.getElementById("result-msg");
    var resultText = 'You guessed: ' + userNr + ' , correct answer: ' + length;
    outputMsg.innerHTML = resultText;
}







