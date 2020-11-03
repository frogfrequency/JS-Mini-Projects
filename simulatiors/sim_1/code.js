// 201120 16:23 the four "sensors" of the ball dont work properly
// maybe only the sensor 0 (North) works

// detection now works somewhat, might be off a few pixels cause of >= issues


// physics section
var tickCounter = 0;

var ballX = 0;
var ballVX = 1;
var ballY = 0;
var ballVY = 2;
var wW = 30; // short for wall-width --> if you change here also change in style.css!

var walls = [ [40,100], [60, 0], [120, 90], [-35, 294],  ];

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
    for (j=0; j<walls.length; j++) {
        console.log('___________ wall segement Nr. ' + j + '/' + walls.length + 'passed');
        var xCordW = walls[j][0];
        var yCordW = walls[j][1];
        console.log('_____________ following wall passed in singleWallCheck' + xCordW + ', ' + yCordW);
        singleWallCheck(xCordW, yCordW);
    }
}

function singleWallCheck(xW, yW) {
    var correctors = [ [8,0], [16,8], [8,16], [0,8] ] // corrects the balls standard x and y values for its north,east,south,west borders
    console.log('______TICK: ' + tickCounter + ' current ballX and and ballY :' + ballX + ', ' + ballY);
    for (i=0; i<4; i++) {
        var xBC = ballX + correctors[i][0]; // x, Ball, Corrected
        var yBC = ballY + correctors[i][1]; // y, Ball, Corrected
        console.log('singleWallCheck #' + i + 'corrected ball-values: ' + xBC + ', ' + yBC);

        if (xW <= xBC && xBC <= xW + wW && yW <= yBC && yBC <= yW + wW) {
            invertTrajectory(i);
        }
    }
}

function invertTrajectory(sensorIdx) {
    if (sensorIdx === 0 || sensorIdx === 2) {
        ballVY = ballVY * (-1);
    } else if (sensorIdx === 1 || sensorIdx === 3){
        ballVX = ballVX * (-1);
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