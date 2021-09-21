var percentage = 0;
var roundPlayed = false;

function coverUp() {
    var x = document.getElementById("abdecker")
    x.style.display = "block";
}

function generateBoard() {
    document.getElementById("abdecker").style.display = "none";
    document.getElementById("main-field").innerHTML = "";

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

    setTimeout(coverUp, 2000);

}

function compare() {
    if (roundPlayed) {
        const userNr = document.getElementById("user-input").value;
        if (userNr != '' && 0 <= userNr && userNr <= 100) {
            const outputMsg = document.getElementById("result-msg");
            var resultText = 'You guessed: ' + userNr + ' , correct answer: ' + percentage + '<br>';
            outputMsg.innerHTML += resultText;
            roundPlayed = false;
            var x = document.getElementById("abdecker")
            x.style.display = "none";
        } else {
            alert ("enter a valid number betwenn 0 and 100.")
        }
    } else {
        alert ("you need to start a round first.")
    }
}







