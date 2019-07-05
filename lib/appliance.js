const utils = require('../utils');

const appliance = {
  brand: (function() {
    return utils.draw( ["Admiral","Amana","Blue Star","Bosch","Electrolux","Fagor","Franke","IKEA","KitchenAid","LG","Samsung","Sharp","Siemens","Whirlpool"]);
  }),
  equipment: (function() {
    return utils.draw( ["Air ioniser", "Air purifier", "Appliance plug", "Aroma lamp", "Attic fan", "Bachelor griller", "Back boiler", "Beverage opener", "Blender", "Box mangle", "Can opener", "Ceiling fan", "Central vacuum cleaner", "Clothes dryer", "Clothes iron", "Cold-pressed juicer", "Combo washer dryer", "Dish draining closet", "Dishwasher", "Domestic robot", "Drawer dishwasher", "Electric water boiler", "Evaporative cooler", "Exhaust hood", "Fan heater", "Flame supervision device", "Forced-air", "Futon dryer", "Garbage disposal unit", "Gas appliance", "Go-to-bed matchbox", "HVAC", "Hair dryer", "Hair iron", "Hob (hearth)", "Home server", "Humidifier", "Icebox", "Kimchi refrigerator", "Mangle (machine)", "Micathermic heater", "Microwave oven", "Mousetrap", "Oil heater", "Oven", "Paper shredder", "Patio heater", "Radiator (heating)", "Refrigerator", "Sewing machine", "Solar water heater", "Space heater", "Steam mop", "Stove", "Sump pump", "Television", "Tie press", "Toaster and toaster ovens", "Trouser press", "Vacuum cleaner", "Washing machine", "Water cooker", "Water heater", "Water purifier", "Window fan"]);
  }),
};

module.exports = appliance