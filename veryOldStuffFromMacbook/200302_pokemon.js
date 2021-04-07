// Pokemonlist

var pokemon1 = {
    "level": 5,
    "name": "Rattfratz",
    "fullHealth": 100,
    "health": 100,
    "attack": 20,
    "defence": 8,
    "xp": 0,
  }
  
  var pokemon2 = {
    "level": 5,
    "name": "Nidoran",
    "fullHealth": 100,
    "health": 100,
    "attack": 11, // change between 14, 13 and 11
    "defence": 14,
    "xp": 0,
  }

// variables

var currentteamstats = {
    "averageattack": 0,
    "totalattack": 0,
    "averagedefence": 0,
    "totaldefence": 0,
}

// functions

function calctotal(summand1,summand2){
    total = summand1 + summand2
    return(total)
}

console.log(calctotal(pokemon1.attack,pokemon2.attack))
