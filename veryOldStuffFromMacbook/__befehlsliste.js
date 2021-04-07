var y = JSON.parse(JSON.stringify(someArr)); // makes deep copy

terminal pfeil nach oben

// _____________Tastaturkürzel_____________________ systemsteuerung / tastatur / eingabequellen

    \ Backslash       alt + Shift + 7

    \" Escape Character(\)  Expl.: var myString = "It's very \"nice\"!"

    [] Brackets        alt + shift + 5 bzw. 6

    | logic operator   alt + 7

    # number sign      alt + 3

________________________________________________________________________________



// INCREMENT ETC: ++ or --

    myNumber++ 



// REMAINDER: %

    5 % 2    ==>     remainder 1



// COMPOUND ASSIGNMENT WITH AUGMENTED ADDITION: +=

    myNumber += 5   ==> addiert 5

    myNumber -= 5   ==> subtrahiert 5

    myNumber *= 5  ==>  *5

    myNumber /= 5  ==> /5



// .LENGTH

    "my String".length  or   myString.length


// BRCKET NOTATION TO FIND N-TH CHARACTER IN A STRING

    "YOLO"[1]



// MANIPULATE ARRAYS WITH .PUSH()

    var arr = [1,2,3];
    arr.push(4); // arr is now [1,2,3,4]


// MANIPULATE ARRAYS WITH .POP() or .SHIFT() 

    In other words, .pop() removes the last element from an array and returns that element.
    .shift removes the first
    
    var threeArr = [1, 4, 6];
    var oneDown = threeArr.pop();
    console.log(oneDown); // Returns 6
    console.log(threeArr); // Returns [1, 4]



    // some methods on arrs
forEach     for doing a thing with or to every entry in an array;
filter  for producing a new array containing only qualifying entries;
map     for making a one-to-one new array by transforming an existing array;
some    to check whether at least one element in an array fits some description;
every   to check whether all entries in an array match a description;
find    to look for a value in an array