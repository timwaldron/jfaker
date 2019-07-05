const utils = require('../utils');

const elder_scrolls = {
  race: (function() {
    return utils.draw( ["Altmer", "Argonian", "Bosmer", "Breton", "Dunmer", "Dwemer", "Imperial", "Khajiit", "Nord", "Orc", "Redguard","Riekling"]);
  }),
  creature: (function() {
    return utils.draw( ["Bear", "Cave Bear", "Chaurus", "Death Hound", "Snow Bear", "Wolf", "Ice Wolf", "Pit Wolf", "Sabre Cat", "Skeever", "Mudcrab", "Horker", "Ice Wraith", "Werewolf", "Troll", "Frost Troll", "Werebear", "Blue Dartwing", "Orange Dartwing", "Torchbugs", "Slaughterfish", "Chaurus Hunter", "Dremora Lord", "Flame Atronach", "Frost Atronach", "Storm Atronach", "Daedric Prince", "Dremora", "Lurker", "Seeker", "Draugr", "Restless Draugr", "Draugr Overlord", "Draugr Wight", "Draugr Deathlord", "Draugr Scourge", "Draugr Death Overlord", "Draugr Thrall", "Spider Worker", "Spider Soldier", "Spider Guardian", "Dwarven Shpere", "Dwarven Centurion", "Falmer", "Falmer Archer", "Falmer Gloomlurker", "Falmer Shaman", "Falmer Spellsword", "Falmer Shadowmaster", "Falmer Nightprowler", "Falmer Warmonger", "Feral Falmer", "Frostbite Spider", "Giant", "Frost Giant", "Hagraven", "Corrupted Shade", "Skeleton", "Spriggan", "Spriggan Matron", "Spriggan Earth Mother", "Wisp", "Shade", "Wispmother"]);
  }),
  region: (function() {
    return utils.draw( ["Black Marsh", "Cyrodiil", "Elsweyr", "Hammerfell", "High Rock", "Morrowind", "Skyrim", "Summerset Isles", "Valenwood"]);
  }),
  dragon: (function() {
    return utils.draw( ["Dragon", "Blood Dragon", "Frost Dragon", "Elder Dragon", "Ancient Dragon", "Revered Dragon", "Legendary Dragon", "Serpentine Dragon", "Paarthunax","Odahviing", "Alduin","Mirmulnir","Sahloknir"]);
  }),
  city: (function() {
    return utils.draw( ["Solitude", "Winterhold", "Markarth", "Daggerfall", "Silvenar", "Tignus", "Lainlyn", "Dwyynen", "Glenpoint", "Whiterun", "Falkreath","Ykalon","Kozanset", "Kambria","Menevia", "Betony", "Northmoor", "Tulune", "Alcaire", "Verkarth", "Davon's Watch",    "Abah's Landing", "Clockwork City", "Wayrest", "Stormhold", "Sentinel", "Dawnstar", "Morthal","Riften","Windhelm","Dragon Bridge","Helgen", "Ivarstead", "Karthwasten", "Riverwood", "Rorikstead", "Shor's Stone"]);
  }),
  first_name: (function() {
    return utils.draw( ["Balgruuf", "Ralof", "Hadvar", "Irileth", "Gormlaith", "Farengar", "Felldir", "Hakon", "Iddra", "Malborn", "Tsun","Ysgramor", "Tsun", "Gerdur", "Dirge", "Orgnar", "Septimus", "Urag", "Brynjolf", "Faralda", "Vignar", "Elenwen", "Rulindil",  "Gissur", "Drahff", "Hewnon", "Gian", "Sulla", "Umana", "J'darr", "Astrid", "Nazir", "Maliq", "Babette",  "Gabriella", "Festus", "Arnbjorn", "Veezara", "Kodlak", "Aela", "Farkas", "Vilkas", "Skjor", "Athis", "Njada", "Ria", "Torvar", "Brill", "Eorlund", "Tilma", "Hestla", "Askar","Mercer", "Delvin", "Vex", "Tonilia", "Sapphire",  "Cynric", "Niruin", "Rune", "Thrynn", "Vipir", "Garthar", "Ravyn", "Etienne", "Molgrom", "Karliah", "Syndus",  "Vanryth", "Gulum-Ei", "Enthir", "Niranye", "Endon", "Mallus", "Athel", "Glover", "Erikur", "Ri'saad", "Atahbah",  "Ma'randru-jo", "Khayla", "Ahkari", "Zaynabi", "Dro'marash", "Kharjo", "Ma'dran", "Ma'jhad", "Ra'zhinda", "Mjoll",  "Brand-shei", "Inigo"]);
  }),
  last_name: (function() {
    return utils.draw( ["The Old", "The Greater", "The Lesser", "One-Eye", "Golden-Hilt", "Secret-Fire", "Septim", "Signus", "gro-Shub","Gray-Mane", "Black-Skeever", "The Fist", "Krex", "Whitemane", "Hunter", "Stonearm","The Haggard", "The Unbroken",   "The Man", "Ember-Master", "Battle-Born", "Black-Briar", "Lothaire", "Frey", "Mallory", "Endell", "The Fleet",   "Imyan", "Rarnis", "Twice-Killed", "Gatharian", "Maccius", "Newberry", "Cruel-Sea", "The Lion"]);
  }),
};

module.exports = elder_scrolls