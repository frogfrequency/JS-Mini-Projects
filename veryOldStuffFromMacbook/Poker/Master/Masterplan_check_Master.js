

function checkMaster(input) {
    var handRatings = [];
    
    handRatings.push(straightAndSfCheck(input));
    console.log('input: ' + input);
    handRatings.push(pairEtcCheck(input));
    console.log('input: ' + input);
    handRatings.push(flushCheck(input));
    console.log('input: ' + input);
    console.log('handratings: ' + handRatings);

    handRatings.sort((a,b) => b-a);
    console.log('handratings: ' + handRatings);
    return handRatings[0];
    


}

console.log(checkMaster(0));