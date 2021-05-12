export let externPuzzleInput = 
[
    [
        [false, true, false, true, false, true, false, false],
        [false, false, true, false, false, false, false, true],
        [true, true, true, true, true, false, false, true],
        [true, true, true, true, true, false, false, true],
        [true, true, true, true, true, false, false, true],
        [true, true, true, false, false, true, false, true],
        [true, false, false, true, true, false, true, true],
        [true, false, true, false, true, true, true, true]
    ]
]


export let externTestInput = 
[
    [
        [false, true, false],
        [false, false, true],
        [true, true, true]
    ]
]

console.log(externTestInput[0][0][1]);