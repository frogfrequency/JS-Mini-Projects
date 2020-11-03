// 201120 16:23 the four "sensors" of the ball dont work properly
// maybe only the sensor 0 (North) works

// detection now works somewhat, might be off a few pixels cause of >= issues
// 18:47 the whole bounce-timeout thing has to be revised since it doestn work
// when to walls on top of each other the negate themself?
// the bounceTimeout doestn solve nothing :(

// 19:08 "double"-wall bug fixed, but there is still a heavy issue if the
// ball enters a wall element diagonal and enters it too far so it gets
// "trapped" --> can be somewhat countered with timeout?:(

// physics section
var tickCounter = 0;

var ballX = 0;
var ballVX = 1;
var ballY = 0;
var ballVY = 1;
var wW = 30; // short for wall-width --> if you change here also change in style.css!
var bounceTimeout = 0;

var walls = [[50,50]];

var interval = 0;
var intervalOn = 0;

function resetBall() {
    ballX = 0;
    ballVX = 1;
    ballY = 0;
    ballVY = 2;
    nextTick();
}

function resetWalls(){
    walls = [];
    generateWalls();
    nextTick();
}

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
    bounceTimeout = bounceTimeout % 2;
    if (bounceTimeout === 0){
    collisionCheck();
    } else {
        bounceTimeout++;
    }
    

    updateDisplay();
}

function collisionCheck() {
    for (j=0; j<walls.length; j++) {
        // console.log('___________ wall segement Nr. ' + j + '/' + walls.length + 'passed');
        var xCordW = walls[j][0];
        var yCordW = walls[j][1];
        // console.log('_____________ following wall passed in singleWallCheck' + xCordW + ', ' + yCordW);
        singleWallCheck(xCordW, yCordW);
    }
}

function singleWallCheck(xW, yW) {
    var correctors = [ [8,0], [16,8], [8,16], [0,8] ] // corrects the balls standard x and y values for its north,east,south,west borders
    // console.log('______TICK: ' + tickCounter + ' current ballX and and ballY :' + ballX + ', ' + ballY);
    for (i=0; i<4; i++) {
        var xBC = ballX + correctors[i][0]; // x, Ball, Corrected
        var yBC = ballY + correctors[i][1]; // y, Ball, Corrected
        // console.log('singleWallCheck #' + i + 'corrected ball-values: ' + xBC + ', ' + yBC);
        // console.log(walls);
        if (xW <= xBC && xBC <= xW + wW && yW <= yBC && yBC <= yW + wW) {
            invertTrajectoryAndTimeout(i);
            i = 4; // stops this for loop? does it?;
            bounceTimeout++;
            j = 10000000000; // if two walls on top of each other would negate the trajectory change, its stopped after the first bump
        }
    }
}

function invertTrajectoryAndTimeout(sensorIdx) {
    if (sensorIdx === 0 || sensorIdx === 2) {
        ballVY = ballVY * (-1);
    } else if (sensorIdx === 1 || sensorIdx === 3){
        ballVX = ballVX * (-1);
    }
}


// display section

    // making the walls


function pushWall(event) {
        var x = event.pageX - 8;
        var y = event.pageY - 8;
        var newArr = [];
        newArr.push(x);
        newArr.push(y);
        walls.push(newArr);
        var wallContainer = document.getElementById('wall-container');
        wallContainer.innerHTML = '';
        generateWalls();
    }
    

function generateWalls() {
    document.getElementById('wall-container').innerHTML = '';
    for (i=0; i<walls.length; i++){
        var newElement = document.createElement('div');
        newElement.className = 'wall-element';
        newElement.style.left = walls[i][0] + 'px';
        newElement.style.top = walls[i][1] + 'px';
        document.getElementById('wall-container').appendChild(newElement);
    }
    console.log('walls array: ' + walls);
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