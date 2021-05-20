let testArr = [
    ['a'],
    [
        ['ba', 'ba', 'ba', 'ba'],
        ['ba', 'ba', 'ba'],
        ['ba', 'ba'],
        ['ba']
    ],
    [
        ['c', 'c', 'c', ['d', 'd', 'd'], 'c','c','c']
    ]
]

function deepLoop(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            deepLoop(arr[i]);
        } else {
            console.log(arr[i]);
        }

    }
}

deepLoop(testArr);