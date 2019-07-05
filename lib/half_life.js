const utils = require('../utils');

const half_life = {
  character: (function() {
    return utils.draw( ["Adrian Shephard", "Alyx Vance", "Arne Magnusson", "Barney Calhoun", "Colette Green", "Dog", "Eli Vance", "Father Grigori", "G-Man", "Gina Cross", "Gordon Freeman", "Isaac Kleiner", "Judith Mossman", "Odessa Cubbage", "Richard Keller", "Simmons", "Wallace Breen", "Walter Bennet"]);
  }),
  enemy: (function() {
    return utils.draw( ["APC", "Alien Controller", "Alien Grunt", "Antlion", "Antlion Guard", "Assassin", "Baby Headcrab", "Barnacle", "Bullsquid", "City Scanner", "Civil Protection", "Combine Advisor", "Combine Gunship", "Crab Synth", "Fast Headcrab", "Fast Zombie", "Garg", "Gene Worm", "Gonarch", "Grunt", "Headcrab", "Hopper Mine", "Houndeye", "Hunter-Chopper", "Ichthyosaur", "Leech", "Manhack", "Mortar Synth", "Overwatch Elite", "Overwatch Sniper", "Overwatch Soldier", "Pit Drone", "Pit Worm", "Poison Headcrab", "Poison Zombie", "Rollermine", "Shield Scanner", "Shock Roach", "Shock Trooper", "Snark", "Strider", "Tentacle", "Voltigore", "Vortigaunt", "Zombie"]);
  }),
  location: (function() {
    return utils.draw( ["Black Mesa East", "Black Mesa Research Facility", "Citadel", "City 17", "Earth", "Nova Prospekt", "Ravenholm", "Section A-17 Prototype Labs", "Sector A Training Facility", "Sector B Coolant Reserve", "Sector C Test Labs", "Sector D Administration", "Sector E Biodome Complex", "Sector F Lambda Complex", "Sector G Hydro Electric", "St. Olga", "White Forest", "Xen"]);
  }),
};

module.exports = half_life