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


function fightFunction(fighter1,fighter2) {

  while (fighter1.health > 0 && fighter2.health > 0)  {
      fighter1.health = fighter1.health - fighter2.attack / fighter1.defence * 10; // fighter 2 attacking fighter 1 
      var sentence = fighter1.name + " has " + fighter1.health + " points of health left.";
      console.log(sentence);

      fighter2.health = fighter2.health - fighter1.attack / fighter2.defence * 10; // fighter 2 attacking fighter 1 
      var sentence = fighter2.name + " has " + fighter2.health + " points of health left\n"; 
      console.log(sentence);
  } 

  // Winner evaluation and resetting health..
  if (fighter1.health < 0 && fighter2.health < 0) {
      return("Fight is over. Draw!");
  } else if (fighter1.health > fighter2.health) {
      return("Fight is over. " + fighter1.name + " won.")
  } else {
      return("Fight is over. " + fighter2.name + " won.")
  }
}


console.log(fightFunction(pokemon1,pokemon2));



