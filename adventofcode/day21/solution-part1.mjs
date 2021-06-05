import {puzzleInput} from "./puzzle-input.mjs";
import {testInput} from "./test-puzzle-input.mjs";

let theInput = testInput; // CHANGE INPUT HERE

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

function giveFullAllergenList(input) {

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


// exec


let foodArr = createFoodArr(theInput);
let fullIngredientsList = giveFullIngredientOrAllergenList(foodArr, 0);
let fullAllergensList = giveFullIngredientOrAllergenList(foodArr, 1);

function giveFoodsContainingAllergen(allergen, foods) {
    let foodsContainingThisAllergen = []; 
    for (let i=0; i<foods.length; i++) {
        let currentFoodAllergens = foods[i][1];
        if (currentFoodAllergens.includes(allergen)) {
            foodsContainingThisAllergen.push(foods[i][0]);
        }
    }
    
    

}


giveFoodsContainingAllergen('dairy', foodArr);



// take allergen and return all foods that contain it
// find the ingredient(s) that all those foods contain
// this ingredient is the one that contains the allergen!
// make a list with harmless ingredients