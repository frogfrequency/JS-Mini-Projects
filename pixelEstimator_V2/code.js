var percentage = 0;
var roundPlayed = false;

function clearBoard() {
    var toClear = document.getElementById("main-field");
    toClear.innerHTML = '';
}

function generateBoard() {
    const seedPercent = Math.floor(Math.random() * 100);

    const totalPixels = 40000;
    for (i = 0; i < totalPixels; i++) {

        const newDiv = document.createElement("div");

        const nr = Math.floor(Math.random() * 100);
        if (nr < seedPercent) {
            newDiv.className = "pixelOne";
        } else {
            newDiv.className = "pixelTwo";
        }

        const x = document.getElementById("main-field");
        x.appendChild(newDiv);
    }

    percentage = Math.floor((document.querySelectorAll('#main-field .pixelOne').length / totalPixels) * 100);

    roundPlayed = true;

    setTimeout(clearBoard, 2000);

}

function compare() {
    if (roundPlayed) {
        const userNr = document.getElementById("user-input").value;
        const outputMsg = document.getElementById("result-msg");
        var resultText = 'You guessed: ' + userNr + ' , correct answer: ' + percentage + '<br>';
        outputMsg.innerHTML += resultText;
    }
    roundPlayed = false;
}







