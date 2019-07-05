const utils = require('../utils');

const cannabis = {
  strains: (function() {
    return utils.draw( ["24k", "Alien Diesel", "Banana OG", "Bio-Diesel", "Black Diamond OG", "Black Jack", "Blackberry Cookies", "Blackberry Soda", "Blackwater OG", "Blue Dream", "Blueberry Tangie", "Boss Hog", "Cali Mist", "Candy Skunk", "Candyland", "Canna Sutra", "Cheese", "Chem Berry", "Cherry Cheese", "Cherry Lime", "Chocolate Hashberry", "Chronic", "Church OG", "Clementine", "Colfax Cookies", "Colfax Jack", "Colfax Platinum", "Critical Kush", "Diablo OG", "Double Dutch Bus", "Dutch Treat", "Forbidden Fruit", "Gelato", "Ghost OG", "Girl Scout Cookies", "Godzilla Glue", "Golden Strawberries", "Gorilla Glue", "Gorilla Princess", "Granddaddy Purple Kush", "Grapefruit Kush", "Green Cobra", "Green Queen", "Hardcore Grapes", "Heavy OG", "Jack Frost", "Key Lime Pie", "King Kong OG", "King Louis OG", "Kings Reserve OG", "Koffee Cake", "Lemon Jack", "Lemon Meringue", "Lemon Skunk", "Lemonade", "Lime #5", "Lucky Charms", "Master OG", "Maui Jack", "Mendo Breath", "Mojito", "Moon Glue", "Mr. Nice Guy", "NY Sour Diesel", "Nectarine", "Novicane Kush", "Nug Salad", "OG Chem", "OG Salad", "ONAC OG", "Panama Punch", "Pineapple Sage", "Pinesol OG", "Pink Lotus", "Pitbull", "Platinum OG", "Presidential OG", "Private Reserve", "Purple Punch", "Queen Dream", "Rainbow Sherbet", "Raskal OG", "Redwood Bubba Kush", "Rude Boi OG", "Satellite OG", "Saturn OG", "Sherbert", "Skywalker OG", "Snozzberry OG", "Sonoma Glue", "Soul Assasin OG", "Soul Assassin", "Sour Cheese", "Strawberry Banana", "Strawberry Cough", "Strawberry Moonrocks", "Strawberry Shortcake", "Sugar Momma", "Sunset Sherbert", "Super Glue", "Super Jack", "Super Silver Haze", "Tangie", "Watermelon", "White Tahoe Cookies", "Whitewalker OG", "XJ-13"]);
  }),
  cannabinoid_abbreviations: (function() {
    return utils.draw( ["THC", "THCa", "∆9THC", "∆8THC", "THCv", "THCv", "CBD", "CBDa", "CBDv", "CBN", "CBNa", "CBG", "CBGa", "CBC", "CBCa", "CBL", "CBLa"]);
  }),
  cannabinoids: (function() {
    return utils.draw( ["Tetrahydrocannabinol", "Tetrahydrocannabinolic Acid", "Tetrahydrocannabivarin", "Cannabidiol", "Cannabidiolic Acid", "Cannabidivarin", "Cannabinol", "Cannabinolic Acid", "Cannabigerol", "Cannabigerolic Acid", "Cannabichromene", "Cannabichromic Acid", "Cannabicyclol", "Cannabicyclic Acid"]);
  }),
  terpenes: (function() {
    return utils.draw( ["α Pinene", "Myrcene", "α Phellandrene", "∆ 3 Carene", "Terpinene", "Limonene", "α Terpinolene", "Linalool", "Fenchol", "Borneol", "Terpineol", "Geraniol", "α Humulene", "β Caryophyllene", "Caryophyllene Oxide", "α Bisabolol", "Camphene", "β Pinene", "Ocimene", "Sabinene", "Camphor", "Isoborneol", "Menthol", "α Cedrene", "Nerolidol", "R-(+)-Pulegone", "Eucalyptol", "p-Cymene", "(-)-Isopulegol", "Geranyl", "Acetate", "Guaiol", "Valencene", "Phytol", "Citronellol"]);
  }),
  medical_uses: (function() {
    return utils.draw( ["analgesic", "anti-bacterial", "anti-diabetic", "anti-emetic", "anti-epileptic", "anti-fungal", "anti-depressant", "anti-inflammatory", "anti-insomnia", "anti-ischemic", "anti-cancer", "anti-psoriatic", "anti-psychotic", "anti-spasmodic", "anti-anxiety", "appetite stimulant", "anorectic", "bone stimulant", "immunoregulation", "immunostimulant", "intestinal anti-prokinetic", "neuroprotective", "bronchodilator", "anti-stress", "anti-septic", "psychoactive", "non-psychoactive", "decongestant", "anti-histamine", "anti-oxidant", "anti-viral"]);
  }),
  health_benefits: (function() {
    return utils.draw( ["relieves pain", "kills or slows bacteria growth", "reduces blood sugar levels", "reduces vomiting and nausea", "reduces seizures and convulsion", "treats fungal infection", "treats depression", "reduces inflammation", "aids sleep", "reduces risk of artery blockage", "inhibits cell growth in tumors/cancer cells", "treats psoriasis", "tranquilizing", "suppresses muscle spasms", "relieves anxiety", "stimulates appetite", "suppresses appetite", "promotes bone growth", "regulates function in the immune system", "stimulates function in the immune system", "reduces contractions in the small intestines", "protects against nervous system degeneration", "improves airflow to lungs", "prevents stress", "prevents infection", "affects mental activity", "does not affect mental activity", "relieves congestion", "treats allergy symptoms", "cell protectant", "treats viral infections"]);
  }),
  categories: (function() {
    return utils.draw( ["capsules", "concentrates", "crumble", "crystalline", "distillate", "edibles", "flower", "ice hash", "live resin", "medical", "rosin", "seeds & clones", "shatter", "tinctures", "topicals", "vape pens"]);
  }),
  types: (function() {
    return utils.draw( ["hybrid", "indica", "sativa"]);
  }),
  buzzwords: (function() {
    return utils.draw( ["blunt wrap", "bong", "bottom shelf", "bubbler", "cashed", "cbd", "dank", "eighth", "gram", "high", "hydroponic", "keef", "marijuana", "mary jane", "munchies", "ounce", "papers", "pipe", "pound", "private reserve", "ripped", "spliff", "stoned", "terpene", "thc", "toke", "top shelf", "wake and bake", "weed"]);
  }),
};

module.exports = cannabis