const utils = require('../utils');

const world_of_warcraft = {
  hero() {
    return utils.draw(["Gul'dan", "Durotan", "Khadgar", "Orgrim Doomhammer", "Medivh", "Blackhand", "Anduin Lothar", "Garona Halforcen", "Antonidas", "King Llane Wrynn", "Moroes", "Lady Taria", "Jaina Proudmoore", "Illidan Stormrage", "Kael'thas Sunstrider", "Archimonde", "Kil'jaeden", "Mannoroth", "Ner'zhul", "Sargeras", "Balnazzar", "Magtheridon", "Mal'Ganis", "Brann Bronzebeard", "Muradin Bronzebeard", "Sylvanas Windrunner", "Malfurion Stormrage", "Millhouse Manastorm", "Anduin Lothar", "Arthas Menthil", "Bolvar Fordragon", "Uther the Lightbringer", "Varian Wrynn"])
  },
  quotes() {
    return utils.draw(["An'u belore delen'na.", "Anaria Shola.", "Bal'a dash, malanore.", "Glory to the Sin'dorei.", "Our enemies will fall!", "State your business.", "The dark times will pass.", "The Eternal Sun guides us.", "Victory lies ahead!", "We will persevere!", "What business have you?", "Yes?", "Death to all who oppose us!", "Farewell.", "Hold your head high.", "Keep your wits about you.", "Remember the Sunwell.", "Sela'ma ashal'anore!", "Shorel'aran.", "Stay the course", "The reckoning is at hand!", "Time is of the essence.", "We will have justice!", "Ah, you have a death wish.", "I do not suffer fools easily.", "I had little patience to begin with!", "Mind yourself.", "Not very intelligent, are you?", "Run away pest!", "These are dark times indeed.", "Why do you linger?", "You waste my time.", "Choose wisely.", "Do not loiter.", "Everything has a price.", "I have one of a kind items.", "What do you seek?", "Your gold is welcome here.", "Glory to the Sin'dorei.", "State your Business!", "Anu'belore Dela'na.", "The Eternal Sun guides us.", "What Business have you?", "Victory lies ahead.", "Our enemies will fall.", "Anaria'shoala.", "You waste my time.", "I had little patience to begin with.", "It is a wonder you have lived this long.", "Ah, you have a death wish.", "I sell only the finest goods.", "Your gold is welcome here.", "Everything has a price.", "Do not loiter."])
  },
};

module.exports = world_of_warcraft
