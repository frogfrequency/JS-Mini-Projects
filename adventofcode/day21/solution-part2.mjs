// since the ingredient - allergen  pairs we're already found in part 1 we make it easy here..


let allergenIngredientPairs = [
    ['wheat', 'nckqzsg'],
    ['eggs', 'xxscc'],
    ['nuts', 'gzxnc'],
    ['fish', 'mjmqst'],
    ['shellfish', 'gbcjqbm'],
    ['soy', 'dllbjr'],
    ['sesame', 'trnnvn'],
    ['peanuts', 'vvqj'],
]

function giveSorted(pairs) {
    let output = [];
    
    let allergens = [];
    for (let i=0; i<pairs.length; i++) {
        allergens.push(pairs[i][0]);
        
    }
    let sortedAllergens = allergens.sort();
    
    for (let i=0; i<sortedAllergens.length; i++) {
        let currentAllergen = sortedAllergens[i];
        for (let j=0; j<pairs.length; j++) {
            let thisAllergen = pairs[j][0];
            if (currentAllergen === thisAllergen) {
                output.push(pairs[j][1])
            }
        }


    }
    return output
}

function giveStringFromArr(arr) {
    let string = '';
    for (let i=0; i<arr.length; i++) {
        string += arr[i];
        if (i !==arr.length-1) {
            string += ',';
        }
    }
    return string
}


console.log(giveStringFromArr(giveSorted(allergenIngredientPairs)));