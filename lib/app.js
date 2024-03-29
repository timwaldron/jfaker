const utils = require('../utils');
const name = require('./name');
const company = require('./company');

const app = {
  name() {
    return utils.draw(["Redhold", "Treeflex", "Trippledex", "Kanlam", "Bigtax", "Daltfresh", "Toughjoyfax", "Mat Lam Tam", "Otcom", "Tres-Zap", "Y-Solowarm", "Tresom", "Voltsillam", "Biodex", "Greenlam", "Viva", "Matsoft", "Temp", "Zoolab", "Subin", "Rank", "Job", "Stringtough", "Tin", "It", "Home Ing", "Zamit", "Sonsing", "Konklab", "Alpha", "Latlux", "Voyatouch", "Alphazap", "Holdlamis", "Zaam-Dox", "Sub-Ex", "Quo Lux", "Bamity", "Ventosanzap", "Lotstring", "Hatity", "Tempsoft", "Overhold", "Fixflex", "Konklux", "Zontrax", "Tampflex", "Span", "Namfix", "Transcof", "Stim", "Fix San", "Sonair", "Stronghold", "Fintone", "Y-find", "Opela", "Lotlux", "Ronstring", "Zathin", "Duobam", "Keylex", "Andalax", "Solarbreeze", "Cookley", "Vagram", "Aerified", "Pannier", "Asoka", "Regrant", "Wrapsafe", "Prodder", "Bytecard", "Bitchip", "Veribet", "Gembucket", "Cardguard", "Bitwolf", "Cardify", "Domainer", "Flowdesk", "Flexidy"])
  },
  version() {
    let dataSet = utils.draw(["0.#.#", "0.##", "#.##", "#.#", "#.#.#"])
    return utils.randomizer(dataSet)
  },
  author() {
    return utils.draw([`${name.name()}`, `${company.name()}`])
  },
};

module.exports = app

