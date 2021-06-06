import {puzzleInput} from "./puzzle-input.mjs";
import {testInput} from "./test-puzzle-input.mjs";

let theInput = puzzleInput; // CHANGE INPUT HERE

function giveFullIngredientOrAllergenList(input, ingredientOrAllergen) { // ingredientOrAllergen --> 0 means return ingredients, 1 allergens
    let fullList = [];
    
    for (let i=0; i<input.length; i++) {
        let currentElements = input[i][ingredientOrAllergen];
        for (let elementIdx=0; elementIdx< currentElements.length; elementIdx++) {
            
            let element = currentElements[elementIdx];
            if (!fullList.includes(element)) {
                fullList.push(element);
            }

        }
    }
    return fullList
}

function createFoodArr(input) {
    let outputArr = [];
    for (let i=0; i<input.length; i++) {
        let element = input[i];
        let newFood = [[],[]]; // [[ingredients], [allergens]]
        let openIdx = element.indexOf('(');
        let closeIdx = element.indexOf(')');
        let currentIdx = 0;
        let spaceIdx = element.indexOf(' ');

        while (spaceIdx !== -1 && spaceIdx < openIdx) { // adding ingredients to newFood[0] here
            let ingredient = element.slice(currentIdx, spaceIdx);
            newFood[0].push(ingredient);
            currentIdx = spaceIdx+1;
            spaceIdx = element.indexOf(' ', currentIdx);
        }

        currentIdx = openIdx+10;
        spaceIdx = element.indexOf(' ', currentIdx+1);

        while (spaceIdx !== -1) { // adding allergens to newFood[1] here
            let allergen = element.slice(currentIdx, spaceIdx);
            newFood[1].push(allergen);
            currentIdx = spaceIdx+1;
            spaceIdx = element.indexOf(' ', currentIdx);
        }
        outputArr.push(newFood);
    }
    return outputArr
}


let foodArr = createFoodArr(theInput);
let fullIngredientsList = giveFullIngredientOrAllergenList(foodArr, 0);
let fullAllergensList = giveFullIngredientOrAllergenList(foodArr, 1);

function giveFoodsContainingAllergen(allergen, foods) {
    let foodsContainingThisAllergen = []; 
    for (let i=0; i<foods.length; i++) {
        let currentFoodAllergens = foods[i][1];
        if (currentFoodAllergens.includes(allergen)) {
            foodsContainingThisAllergen.push(foods[i]);
        }
    } 
    return foodsContainingThisAllergen
}


// let foodsContainingIt = giveFoodsContainingAllergen('sesame', foodArr);


function findIngredientIncludedInAll(foods) {
    let tempCounter = 0;
    let fullPotentialIngredientsList = giveFullIngredientOrAllergenList(foods, 0);

    let targetCount = foods.length;
    console.log(`targetCounter: ${targetCount}`);
    
    for (let i=0; i<fullPotentialIngredientsList.length; i++) {
        let currentIngredientCandidate = fullPotentialIngredientsList[i];
        let counter = 0;
        for (let j=0; j<foods.length; j++) {
            
            let currentFoodsIngredients = foods[j][0];

            if (currentFoodsIngredients.includes(currentIngredientCandidate)) {
                counter++
            }
        if (counter === targetCount) {
            tempCounter++
            console.log('asdffffffffffffffffffffffffffffffffdsasdfasdfasdfasdfasdfasdfasdfasdfd ' + currentIngredientCandidate);
        }    
        }
    }
    console.log(tempCounter);
}

// console.log(fullAllergensList);

// findIngredientIncludedInAll(foodsContainingIt);


// this is done be hand which is cheap... but now we have the ingredients containing allergens

let dangerousIngredients = ['nckqzsg', 'xxscc', 'gzxnc', 'mjmqst', 'gbcjqbm', 'dllbjr', 'trnnvn', 'vvqj']


////////////////////// achtung
////////////////////// achtung


// dangerousIngredients = ['mxmxvkd', 'sqjhc', 'fvjkl'];

////////////////////// achtung
////////////////////// achtung
////////////////////// achtung



function giveHarmlessIngredients(dangerousArr, allIngredients) {
    for (let i=0; i<dangerousArr.length; i++) {
        let currentDanger = dangerousArr[i];
        allIngredients = allIngredients.filter(element => element !== currentDanger);
    }
    if (allIngredients.length === 0)  {
        return 'noHarmless';
    }
    return allIngredients
}

// let harmlessIngredients = giveHarmlessIngredients(dangerousIngredients, fullIngredientsList);


  

// console.log(fullIngredientsList.length);
// console.log(dangerousIngredients.length);
// console.log(harmlessIngredients.length);

let allHarmlessCounter = 0;


function giveTotalHarmlessCount(dangerousIngredients, foodArr) {
    let allHarmlessCounter = 0;

    for (let foodArrIdx = 0; foodArrIdx< foodArr.length; foodArrIdx++) {
        let currentFoodIngredientArr = foodArr[foodArrIdx][0];
        let currentFoodHarmlessIngredientArr = giveHarmlessIngredients(dangerousIngredients, currentFoodIngredientArr);
        if (currentFoodHarmlessIngredientArr !== 'noHarmless') {
            allHarmlessCounter += currentFoodHarmlessIngredientArr.length;
        }      

    }
    return allHarmlessCounter
}

console.log(giveTotalHarmlessCount(dangerousIngredients, foodArr));


// for (let i=0; i<foodArr.length; i++) {
//     let currentHarmlessAmount;
//     let currentFoodIngredients = foodArr[i][0];
//     let currentFoodHarmlessIngredients = giveHarmlessIngredients(dangerousIngredients, currentFoodIngredients);
//     console.log('currentFoodHarmlessIngredients: ');
//     console.log(currentFoodHarmlessIngredients);
//     if (currentFoodHarmlessIngredients === 'noHarmless') {
//         currentHarmlessAmount = 0;
//     } else {
//         currentHarmlessAmount = currentFoodHarmlessIngredients[0].length;
//     }
//     console.log(currentFoodHarmlessIngredients);
//     console.log(`harmlessCounter = ${currentHarmlessAmount}`);
//     allHarmlessCounter += currentHarmlessAmount;
// }


// take allergen and return all foods that contain it
// find the ingredient(s) that all those foods contain
// this ingredient is the one that contains the allergen!
// make a list with harmless ingredients