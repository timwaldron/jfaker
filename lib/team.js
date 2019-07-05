const utils = require('../utils');

const team = {
  creature: (function() {
    return utils.draw( ["ants", "bats", "bears", "bees", "birds", "buffalo", "cats", "chickens", "cattle", "dogs", "dolphins", "ducks", "elephants", "fishes", "foxes", "frogs", "geese", "goats", "horses", "kangaroos", "lions", "monkeys", "owls", "oxen", "penguins", "people", "pigs", "rabbits", "sheep", "tigers", "whales", "wolves", "zebras", "banshees", "crows", "black cats", "chimeras", "ghosts", "conspirators", "dragons", "dwarves", "elves", "enchanters", "exorcists", "sons", "foes", "giants", "gnomes", "goblins", "gooses", "griffins", "lycanthropes", "nemesis", "ogres", "oracles", "prophets", "sorcerors", "spiders", "spirits", "vampires", "warlocks", "vixens", "werewolves", "witches", "worshipers", "zombies", "druids"]);
  }),
  sport: (function() {
    return utils.draw( ["baseball", "basketball", "football", "hockey", "rugby", "lacrosse", "soccer", "buzkashi", "cricket", "kabaddi", "archery", "field hockey", "wrestling", "association", "sumo", "dandi biyo", "league", "arnis", "bandy", "taekwondo", "volley ball", "oil wrestling", "handball", "pesäpallo", "rugby union", "golf", "bull fighting", "shooting", "gymnastics", "water polo"]);
  }),
  mascot: (function() {
    return utils.draw( ["Raymond", "Bailey", "Rocky", "Screech", "Steely McBeam", "Nordy", "Hugo", "Griz", "Iceburgh", "Mr. Redlegs", "Benny the Bull", "Big Red", "Suns Gorilla", "Pirate Parrot", "Ragar the Viking", "JazzBear", "Wally the Green Monster", "Burnie", "K.C. Wolf", "Sausages", "Mr. Met", "Youppi", "The Raptor", "Jaxson De Ville", "Phanatic"]);
  }),
};

module.exports = team