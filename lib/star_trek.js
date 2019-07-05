const utils = require('../utils');

const star_trek = {
  character: (function() {
    return utils.draw( ["James Tiberius Kirk", "Jean-Luc Picard", "Benjamin Sisko", "Kira Nerys", "Odo", "Jadzia Dax", "Julian Bashir", "Miles O'Brien", "Quark", "Jake Sisko", "Kathryn Janeway", "Chakotay", "Tuvok", "Tom Paris", "B'Elanna Torres", "Harry Kim", "Seven of Nine", "The Doctor", "Neelix", "Kes", "Jonathan Archer", "T'Pol", "Charles Tucker III", "Malcolm Reed", "Travis Mayweather", "Hoshi Sato", "Phlox", "Data", "William T. Riker", "Geordi La Forge", "Worf", "Beverly Crusher", "Deanna Troi", "Natasha Yar", "Wesley Crusher", "Spock", "Leonard McCoy", "Montgomery Scott", "Hikaru Sulu", "Pavel Chekov", "Nyota Uhuru"]);
  }),
  location: (function() {
    return utils.draw( ["Qo'noS", "Romulus", "Bajor", "Vulcan", "Neutral Zone", "Alpha Quadrant", "Beta Quadrant", "Delta Quadrant", "Gamma Quadrant", "Tau Ceti Prime", "Wolf 359", "Thalos VII", "Cardassia", "Trillius Prime", "Badlands", "Betazed", "Risa", "Deep Space Nine", "Ferenginar", "The Briar Patch", "Khitomer"]);
  }),
  specie: (function() {
    return utils.draw( ["Breen", "El-Aurian", "Jem'Hadar", "Kazon", "Ocampa", "Q", "Ferengi", "Klingon", "Talaxian", "Vidiian", "Cardassian", "Vulcan", "Borg", "Romulan", "Vorta", "Andorian", "Bajoran", "Betazoid"]);
  }),
  villain: (function() {
    return utils.draw( ["Q", "Gorn", "Khan Noonien Singh", "Ru'afo", "Maltz", "Kruge", "Ayel", "Admiral Marcus", "Martia", "Lt. Valeris", "V'ger", "God of Sha Ka Ree", "Admiral Dougherty", "Nero", "Krall", "Tolian Soran", "Shinzon", "General Chang", "Lursa", "B'Etor", "Borg Queen"]);
  }),
};

module.exports = star_trek