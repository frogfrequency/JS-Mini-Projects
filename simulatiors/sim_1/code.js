// physics section

var tickCounter = 0;

var ballX = 0;
var ballVX = 1;
var ballY = 0;
var ballVY = 2;

var interval = 0;
var intervalOn = 0;

function runPause(){
    if(intervalOn === 0) {
        console.log(22222);
        interval = setInterval(nextTick, 20);
        intervalOn = 1;
    } else {
        clearInterval(interval);
        intervalOn = 0;
    }
}

function nextTick() {
    // make this between things into separate function called (bumpCheck?)
    tickCounter++;
    if (ballY >= 20) {ballVY = -ballVY}
    if (ballY < 0 ) {ballVY = -ballVY}
    //
    ballX = ballX + ballVX;
    ballX = Math.round(ballX*100000) / 100000;
    ballY = ballY + ballVY;
    ballY = Math.round(ballY*100000) / 100000;


    updateDisplay();
}



 // display section

function updateDisplay() {
    var ball = document.getElementById('ball');
    ball.style.left = ballX + 'px';
    ball.style.top = ballY + 'px';
    updateTerminal();
}

function updateTerminal() {
    termTick = document.getElementById('tick-counter');
    termBallX = document.getElementById('current-ballX');
    termBallVX = document.getElementById('current-ballVX');
    termBallY = document.getElementById('current-ballY');
    termBallVY = document.getElementById('current-ballVY');


    termTick.innerHTML = "= " + tickCounter;
    termBallX.innerHTML = "= " + ballX;
    termBallVX.innerHTML = "= " + ballVX;
    termBallY.innerHTML = " = " + ballY;
    termBallVY.innerHTML = "= " + ballVY;
}