const utils = require('../utils');

const fallout = {
  characters() {
    return utils.draw(["Ada", "Angela Bishop", "Boone", "Cait", "Christine Royce", "Codsworth", "Curie", "Daecon", "DiMA", "Dogmeat", "Elder Maxon", "Harold", "John Hancock", "Joshua Graham", "Legate Lanius", "Leslie Ann Bishop", "Liberty Prime", "Lucas Simms", "Madison Lee", "Miria", "Myron", "Nick Valentine", "Old Longfellow", "Caesar", "Paladin Danse", "Piper Wright", "Porter Gage", "Preston Garvey", "Robert Joseph Mac Cready", "Rose of Sharon Cassidy", "Strong", "Sulik", "The Master", "Three Dog", "X6-88", "Yes Man"])
  },
  factions() {
    return utils.draw(["Boomers", "Brotherhood of Steel", "Caesar's Legion", "Chinese remnants", "Diamond City security", "Enclave", "Followers of the Apocalypse", "Gunners", "Kings", "Master's Army", "Mojave Express", "New California Republic", "Nuka World Triumvirate", "Powder Gangers", "Raiders", "State of Utobitha", "Talon Company", "Triggermen", "United States Armed Forces", "Van Graffs"])
  },
  locations() {
    return utils.draw(["Anchorage", "Big MT", "Big town", "Cambridge", "Capital Wasteland", "Concord", "Diamond City", "Dog City", "Goodsprings", "Hoover Dam", "Lexington", "Little Lamplight", "Megaton", "Nellis Air Force Base", "New Reno", "New Vegas", "Nipton", "Primm", "Raven Rock", "Red Rock Canyon", "Sloan", "The Commonwealth", "The Institute", "Vault 101", "Vault 11", "Vault 111", "Vault 13", "Vault 15", "Vault 19", "Vault 22", "Vault 3", "Vault 81", "Vault City"])
  },
  quotes() {
    return utils.draw(["Ad Victoriam!", "Calm is what you have to be when people look to you, and it's all you can be when things are out of your hands.", "Democracy is non-negotiable", "Hi, I'm Jean Baptiste. And you're about to stop being a pain in my ass.", "I'm a synth. Synthetic man. All the parts, minus a few red blood cells.", "I'm dying.... so that democracy... can live.", "I'm gonna run some diagnostics while you're tinkering. Take your time.", "I've seen soldiers come and go. Some were brave. Some were honest. Some were even heroic. But I've never called any of them a friend.", "If you want to see the fate of democracies, just look out the window", "Let's go, pal.", "Liberty Prime is online. All systems nominal. Weapons hot. Mission: the destruction of any and all Chinese communists.", "Ngh. Hi. I'm Mahsofabish ang I gob ko keep fiebs gaeg.", "Nobody has a Dick that long, not eve Long-Dick Johnson, and he had a fuckin long dick, thus the name.", "Nothing to impede progress. If you want to see the fate of democracies, look out the windows.", "Patrolling the Mojave almost makes you wish for a nuclear winter.", "Please step out of the fountain", "Revised stratagem: Initiate photonic resonance overcharge.", "Stimpaks are a marvelous invention, don't you think?", "Strange rumors from across the river indicate that a secret underground robot army has been destroyed before anyone had a chance to use it.", "Success depends on forethought, dispassionate calculation of probabilities, accounting for every stray variable.", "Sure. Be glad to take...I mean hold some stuff for you.", "That chip of yours, I wouldn't wager it on Blackjack...Unless the dealer has a five of six showing.", "That means you're, erm... two centuries late for dinner! Perhaps I could whip you up a snack? You must be famished!", "The past, the present, and the future walked into a bar. It was tense.", "The women of New Vegas ask me a lot if there's a Mrs. New Vegas. Well, of course there is. You're her. And you're still as perfect as the day we met.", "Though dangerous, combat is quite vigorous exercise.", "Today's forecast calls for a 99%chance of clear skies being ruined by artillery fire.", "Voice module online. Audio functionality test initialized. Designation: Liberty Prime. Mission: the liberation of Anchorage, Alaska.", "We must find the men of science and institutes of learning, surely they are out there still.", "We'd move faster if you'd keep your eyes on the road and off me arse.", "Well, ain't we all, right? That was a long time ago. I don't pay it much mind anymore.", "What did you... did you put a plug in his cocktube and make him explode?", "Who do you think actually won the war? No one, I guess.", "You stood up to Elder Maxson for me. I'll never forget that for as long as I live.", "You think I inject myself with all that shite and drink myself drunk because I’m a tough Irish gal?", "You'd be shocked how many people I've managed to convince I'm just a really sick ghoul."])
  },
};

module.exports = fallout
