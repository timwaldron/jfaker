const utils = require('../utils');

const grateful_dead = {
  players() {
    return utils.draw(["Jerry Garcia", "Bob Weir", "Bill Kreutzmann", "Phil Lesh", "Ron McKernan", "Robert Hunter", "Brent Mydland", "Donna Jean Godchaux", "Keith Godchaux", "Bruce Hornsby", "John Barlow"])
  },
  songs() {
    return utils.draw(["Touch of Grey", "Althea", "Ripple", "Truckin", "Eyes of the World", "Scarlet Begonias", "Friend of the Devil", "Uncle Johns Band", "China Cat Sunflower", "Fire on the Mountain", "Sugar Magnolia", "I Know You Rider", "Franklins Tower", "Me and My Uncle", "Box of Rain", "Sugaree", "St Stephen", "Jack Straw", "Morning Dew", "Wharf Rat", "The Other One", "Casey Jones", "Hurts Me Too", "Dark Star", "Brokedown Palace", "Playing in the Band", "Cumberland Blues", "New Speedway Boogie", "US Blues", "The Music Never Stopped", "Black Muddy River", "Looks Like Rain", "Bird Song", "Cassidy"])
  },
};

module.exports = grateful_dead
