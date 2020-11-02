// 201120 16:23 the four "sensors" of the ball dont work properly
// maybe only the sensor 0 (North) works


// physics section
var tickCounter = 0;

var ballX = 0;
var ballVX = 1;
var ballY = 0;
var ballVY = 2;
var wW = 30; // short for wall-width --> if you change here also change in style.css!

var walls = [[40,100]];

var interval = 0;
var intervalOn = 0;

function runPause() {
    if(intervalOn === 0) {
        interval = setInterval(nextTick, 20);
        intervalOn = 1;
    } else {
        clearInterval(interval);
        intervalOn = 0;
    }
}

function nextTick() {
    ballX = ballX + ballVX;
    ballX = Math.round(ballX*100000) / 100000;
    ballY = ballY + ballVY;
    ballY = Math.round(ballY*100000) / 100000;

    collisionCheck();

    updateDisplay();
}

function collisionCheck() {
    for (i=0; i<walls.length; i++) {
        var xCord = walls[i][0];
        var yCord = walls[i][1];
        console.log(xCord + ' passed in singleWallCheck ' + yCord);
        singleWallCheck(xCord, yCord);
    }
}

function singleWallCheck(xValue, yValue) {
    var correctors = [ [8,0], [8,8], [8,16], [0,8] ] // corrects the balls standard x and y values for its north,east,south,west borders
    for (i=0; i<4; i++) {
        console.log('singleWallCheck #' + i + ':');
        var x = xValue + correctors[i][0];
        var y = yValue + correctors[i][1];
        console.log('corrected Values: ' + x + ', ' + y);

        if (x < ballX && ballX < x + wW && y < ballY && ballY < y + wW) {
            console.log('Bump!');
            console.log(i);
        }
    }
}


// display section

    // making the walls

function generateWalls() {
    for (i=0; i<walls.length; i++){

        var newElement = document.createElement('div');
        newElement.className = 'wall-element';
        newElement.style.left = walls[i][0] + 'px';
        newElement.style.top = walls[i][1] + 'px';
        document.getElementById('container').appendChild(newElement);
    }
}




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