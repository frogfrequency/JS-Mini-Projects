var fieldArr = [
    'bR','bK','bB','bQ','bKi','bB','bK','bR',
    ,,,,,,,,
    ,,,,,,,,
    ,,,,,,,,
    ,,,,,,,,
    ,,,,,,,,
    ,,,,,,,,
    'wR','wK','wB','wQ','wKi','wB','wK','wR',
]


function testFunction() {
    for (i=0; i<63; i++) {
        var currentContent = fieldArr[i];
        console.log(currentContent);
        if (currentContent === 'bR') {
            console.log('it works_____________');
        }


    }
}

testFunction();