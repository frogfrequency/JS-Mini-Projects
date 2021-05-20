export const testRulesArr = [
    [[4,1,5]],              // 0
    [[2,3], [3,2]],         // 1
    [[4,4], [5,5]],         // 2
    [[4,5], [5,4]],         // 3
    "a",                  // 4
    "b"                   // 5
]

// take rule 0 and replace the elements again and again


// [4,1,5]

// ['a',[[2,3], [3,2]],'b']


// [['a'],[[[["a","a"], ["b","b"]],[["a","b"], ["b","a"]]], [[["a","b"], ["b","a"]],[["a","a"], ["b","b"]]]],['b']];

// then go through every element on layer one
//      if the element has two elements --> duplicate what you already have  
//      possibility to all the deep elements in the first copy and the second to all deep elements in the second copy.
//      add the two copys together


//      if the element has one element --> add this to every element before 






