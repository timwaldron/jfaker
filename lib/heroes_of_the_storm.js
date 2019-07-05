const utils = require('../utils');

const heroes_of_the_storm = {
  battlegrounds: (function() {
    return utils.draw( ["Alterac Pass", "Battlefield of Eternity", "Blackheart's Bay", "Braxis Holdout", "Cursed Hollow", "Dragon Shire", "Garden of Terror", "Hanamura Temple", "Haunted Mines", "Infernal Shrines", "Sky Temple", "Tomb of the Spider Queen", "Towers of Doom", "Volskaya Foundry", "Warhead Junction"]);
  }),
  classes: (function() {
    return utils.draw( ["Bruiser", "Healer", "Melee Assassin", "Ranged Assassin", "Support", "Tank"]);
  }),
  heroes: (function() {
    return utils.draw( ["Abathur", "Alarak", "Alexstrasza", "Ana", "Anduin", "Anub'arak", "Artanis", "Arthas", "Auriel", "Azmodan", "Blaze", "Brightwing", "Cassia", "Chen", "Cho", "Chromie", "D.Va", "Deckard", "Dehaka", "Diablo", "E.T.C.", "Falstad", "Fenix", "Gall", "Garrosh", "Gazlowe", "Genji", "Greymane", "Gul'dan", "Hanzo", "Illidan", "Imperius", "Jaina", "Johanna", "Junkrat", "Kael'thas", "Kel'Thuzad", "Kerrigan", "Kharazim", "Leoric", "Li Li", "Li-Ming", "Lt. Morales", "Lunara", "Lúcio", "Maiev", "Mal'Ganis", "Malfurion", "Malthael", "Medivh", "Mephisto", "Muradin", "Murky", "Nazeebo", "Nova", "Orphea", "Probius", "Ragnaros", "Raynor", "Rehgar", "Rexxar", "Samuro", "Sgt. Hammer", "Sonya", "Stitches", "Stukov", "Sylvanas", "Tassadar", "The Butcher", "The Lost Vikings", "Thrall", "Tracer", "Tychus", "Tyrael", "Tyrande", "Uther", "Valeera", "Valla", "Whitemane", "Xul", "Yrel", "Zagara", "Zarya", "Zeratul", "Zul'jin"]);
  }),
  quotes: (function() {
    return utils.draw( ["Beat them like they owe you money!", "Careful wizard, your kind has upset the balance beforeo I become re-dead? Deader? ... Alive?\"", "Don't forget to check the pocket!", "Have you ever considered aiming anywhere other than the face?", "Hey, you look like the cover of E.T.C.s new album!", "Human words are hard to make together talking for expressing... things!", "I like happy things! Like puppies, and rainbows, and dead enemies!", "I must leave and I blame this failure upon you.", "Mrgrgrlrgrlgr!!!", "Oh my God, I can't believe I just killed a panda.", "Taunting life form; you are weak! And physically unappealing!", "Teammates. Much to improve.\" is a pretty good contender.", "That was easy! You were easy to kill!", "This will only hurt until you die.", "Ugh, I've known much better healers.", "We drink first blood!", "You look like you could actually be of use here!", "You might be a king, or just a street sweeper... yet sooner or later you dance with the reaper.", "You see this hero yes? Then kill them!", "You think us fools?", "You waste both my time and your breath, and the former has value."]);
  }),
};

module.exports = heroes_of_the_storm