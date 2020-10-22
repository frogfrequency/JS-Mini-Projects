const gridFactor = 50;
let gameInProgress = false;
let timeout = false;


function generateCordSystem() {                                 // generate coordinate-system
    
    for (i=0; i<11; i++){
        const horzNr = document.createElement('div');
            horzNr.style.position = "absolute";
            horzNr.style.left = (i*gridFactor) + "px";
            horzNr.style.top = '500px';
            horzNr.textContent = i;
        document.body.appendChild(horzNr);

        const vertNr = document.createElement('div');
            vertNr.style.position = "absolute";
            vertNr.style.left = '0px';
            vertNr.style.top = 500-(i*gridFactor) + "px";
            vertNr.textContent = i;
        document.body.appendChild(vertNr);

        const referenceLineX = document.createElement('div');
            referenceLineX.className = 'reference-line-x';
            referenceLineX.style.left = (i*gridFactor) + "px";
        document.body.appendChild(referenceLineX);

        const referenceLineY = document.createElement('div');
            referenceLineY.className = 'reference-line-y';
            referenceLineY.style.top = (i*gridFactor) + "px";
        document.body.appendChild(referenceLineY);

    }
}


function drawGraph() {                                          //draws user-graph into #area
    const area = document.getElementById('area');
    const m = document.getElementById('chooseM').value;
    const c = document.getElementById('chooseC').value;

    for (i=0; i<500; i++){
        const yOffset = (i*m) + c*gridFactor;
        const newPix = document.createElement('div');
            newPix.style.position = "absolute";
            newPix.style["background-color"] = 'black';
            newPix.style.width = '1px';
            newPix.style.height = '1px';
            newPix.className = 'graph-element';
            newPix.style.left = i + 'px';
            newPix.style.top = 500-yOffset + 'px';
        area.appendChild(newPix);
    }    
}




function drawTargets() {                                        // draws random targets into #area
    for (i=0; i<2; i++){
        const area = document.getElementById('area');
        const newTarget = document.createElement('div');
            newTarget.style.position = "absolute";
            newTarget.style["background-color"] = 'red';
            newTarget.style.width = '50px';
            newTarget.style.height = '50px';
            newTarget.className = 'target-element';
            newTarget.style.left = Math.floor(Math.random()*450) + 'px';
            newTarget.style.top = Math.floor(Math.random()*450) + 'px';
            newTarget.style.zIndex = 10;
        area.appendChild(newTarget);
    }    
}

function toggleTargetsDisplay() {                               // toggles display of all .target
    const targets = Array.from(document.getElementsByClassName('target-element'));
    targets.forEach(element => {
        if (window.getComputedStyle(element).getPropertyValue("display") === 'block') {
            element.style.display = "none";
        } else {
            element.style.display = 'block';
        }
    })
}

function evaluateSolution() {                                   // returns true if both targets contain a graph-element
    const targetElements = Array.from(document.getElementsByClassName('target-element'));
    const graphElements = Array.from(document.getElementsByClassName('graph-element'));
    const resultText = document.getElementById('result-text');

    if(checkForMatch(targetElements[0], graphElements) && checkForMatch(targetElements[1], graphElements)){
        resultText.innerHTML = 'well done! both match!';
    } else {
        resultText.innerHTML = 'unlucky, you must have missed at least one... try again';
    }
}

function checkForMatch(oneTarget, theGraph) {                   // checks if a match (is used in evaluateSolution twice)
    
    const oneTargetLeft = returnValue(oneTarget, "left");
    const oneTargetTop = returnValue(oneTarget, "top");
    let output = false;
    
    theGraph.forEach(element => {
        const graphElementLeft = returnValue(element, "left");
        const graphElementTop = returnValue(element, "top");
        if (oneTargetLeft <= graphElementLeft && graphElementLeft <= oneTargetLeft + 50 && oneTargetTop <= graphElementTop && graphElementTop <= oneTargetTop + 50) {
            console.log('match detected here');
            output = true;
        }
    });
    return output;
}

function returnValue(element, whichValue) {                     // returns desired value (used in checkForMatch)
    let value = window.getComputedStyle(element).getPropertyValue(whichValue)
    value = Number.parseInt(value.slice(0,-2));
    return value;
}




function startGame() {                                          // starts a new game
    document.getElementById('result-text').innerHTML = "";
    if(timeout === false) {
        gameInProgress = true; // prevents submiSolution from being executet prior to starGame() and prevetns double starGame()
        timeout = true;
        document.getElementById('area').innerHTML = "";
        drawTargets();
        setTimeout(() => {
            toggleTargetsDisplay();
            timeout = false; // prevents submitSolution from being executet while startGame() is exec.
        }, 2000);
    }
}

function submitSolution() {                                     // evaluates usersolution end "ends" the game
    if (gameInProgress === true && timeout === false) {
        drawGraph();
        toggleTargetsDisplay();
        evaluateSolution();
        gameInProgress = false;
    }
}
