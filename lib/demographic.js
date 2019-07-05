const utils = require('../utils');

const demographic = {
  race: (function() {
    return utils.draw( ["American Indian or Alaska Native", "Asian", "Black or African American", "Native Hawaiian or Other Pacific Islander", "White"]);
  }),
  sex: (function() {
    return utils.draw( ["Male", "Female"]);
  }),
  demonym: (function() {
    return utils.draw( ["Afghan","Albanian","Algerian","American","Andorran","Angolan","Argentine","Armenian","Aromanian","Aruban","Australian","Austrian","Azerbaijani","Bahamian","Bahraini","Bangladeshi","Barbadian","Basotho","Basque","Belarusian","Belgian","Belizean","Bermudian","Bissau-Guinean","Boer","Bosniak","Brazilian","Breton","Briton","British Virgin Islander","Bruneian","Bulgarian","Burkinabè","Burundian","Cambodian","Cameroonian","Canadian","Catalan","Cape Verdean","Chadian","Chilean","Chinese","Colombian","Comorian","Congolese","Croatian","Cuban","Cypriot","Czech","Dane","Dominican","Dutch","East Timorese","Ecuadorian","Egyptian","Emirati","English","Eritrean","Estonian","Ethiopian","Falkland Islander","Faroese","Finn","Fijian","Filipino","French","Georgian","German","Ghanaian","Gibraltar","Greek","Grenadian","Guatemalan","French Guianan","Guinean","Guyanese","Haitian","Honduran","Hong Konger","Hungarian","Icelander","I-Kiribati","Indian","Indonesian","Iranian","Iraqi","Irish","Israeli","Italian","Ivoirian","Jamaican","Japanese","Jordanian","Kazakh","Kenyan","Korean","Kosovar","Kurd","Kuwaiti","Kyrgyz","Lao","Latvian","Lebanese","Liberian","Libyan","Liechtensteiner","Lithuanian","Luxembourger","Macanese","Macedonian","Malagasy","Malaysian","Malawian","Maldivian","Malian","Maltese","Manx","Mauritian","Mexican","Moldovan","Moroccan","Mongolian","Montenegrin","Namibian","Nepalese","New Zealander","Nicaraguan","Nigerien","Nigerian","Norwegian","Pakistani","Palauan","Palestinian","Panamanian","Papua New Guinean","Paraguayan","Peruvian","Pole","Portuguese","Puerto Rican","Quebecer","Romanian","Russian","Rwandan","Salvadoran","São Toméan","Saudi","Scottish","Senegalese","Serb","Sierra Leonean","Singaporean","Sindhian","Slovak","Slovene","Somali","Somalilander","South African","Spaniard","Sri Lankan","St Lucian","Sudanese","Surinamese","Swede","Swiss","Syriac","Syrian","Tajik","Taiwanese","Tanzanian","Thai","Tibetan","Tobagonian","Trinidadian","Tunisian","Turk","Tuvaluan","Ugandan","Ukrainian","Uruguayan","Uzbek","Vanuatuan","Venezuelan","Vietnamese","Welsh","Yemeni","Zambian","Zimbabwean"]);
  }),
  educational_attainment: (function() {
    return utils.draw( ["No schooling completed", "Nursery school", "Kindergarten", "Grade 1 though 11", "12th grade - No Diploma", "Regular high school diploma", "GED or alternative credential", "Some college", "Associate's degree", "Bachelor's degree", "Master's degree", "Professional degree", "Doctorate degree"]);
  }),
  marital_status: (function() {
    return utils.draw( ["Married", "Widowed", "Divorced", "Separated", "Never married"]);
  }),
};

module.exports = demographic