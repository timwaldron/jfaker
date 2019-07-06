const utils = require('../utils');

const bank = {
  name() {
    return utils.draw(["UBS CLEARING AND EXECUTION SERVICES LIMITED", "ABN AMRO CORPORATE FINANCE LIMITED", "ABN AMRO FUND MANAGERS LIMITED", "ABN AMRO HOARE GOVETT SECURITIES", "ABN AMRO HOARE GOVETT CORPORATE FINANCE LTD.", "ALKEN ASSET MANAGEMENT", "ALKEN ASSET MANAGEMENT", "ABN AMRO HOARE GOVETT LIMITED", "AAC CAPITAL PARTNERS LIMITED", "ABBOTSTONE AGRICULTURAL PROPERTY UNIT TRUST", "ABN AMRO QUOTED INVESTMENTS (UK) LIMITED", "ABN AMRO MEZZANINE (UK) LIMITED", "ABBEY LIFE", "SANTANDER UK PLC", "OTKRITIE SECURITIES LIMITED", "ABC INTERNATIONAL BANK PLC", "ALLIED BANK PHILIPPINES (UK) PLC", "ABU DHABI ISLAMIC BANK", "ABG SUNDAL COLLIER LIMITED", "PGMS (GLASGOW) LIMITED", "ABINGWORTH MANAGEMENT LIMITED", "THE ROYAL BANK OF SCOTLAND PLC (FORMER RBS NV)"])
  },
  swift_bic() {
    return utils.draw(["AACCGB21", "AACNGB21", "AAFMGB21", "AAHOGB21", "AAHVGB21", "AANLGB21", "AANLGB2L", "AAOGGB21", "AAPEGB21", "AAPUGB21", "AAQIGB21", "ABAZGB21", "ABBEGB21", "ABBYGB2L", "ABCCGB22", "ABCEGB2L", "ABCMGB21", "ABDIGB21", "ABECGB21", "ABFIGB21", "ABMNGB21", "ABNAGB21VOC"])
  },
  iban_details(obj) {
    toFind = {
      // ad: "{"length"=>24, "bban_pattern"=>"\\d{8}[A-Z0-9]{12}"}",
      // ae: "{"length"=>23, "bban_pattern"=>"\\d{19}"}",
      // al: "{"length"=>28, "bban_pattern"=>"\\d{8}[A-Z0-9]{16}"}",
      // at: "{"length"=>20, "bban_pattern"=>"\\d{16}"}",
      // az: "{"length"=>28, "bban_pattern"=>"[A-Z]{4}[A-Z0-9]{20}"}",
      // ba: "{"length"=>20, "bban_pattern"=>"\\d{16}"}",
      // be: "{"length"=>16, "bban_pattern"=>"\\d{12}"}",
      // bg: "{"length"=>22, "bban_pattern"=>"[A-Z]{4}\\d{6}[A-Z0-9]{8}"}",
      // bh: "{"length"=>22, "bban_pattern"=>"[A-Z]{4}[A-Z0-9]{14}"}",
      // br: "{"length"=>29, "bban_pattern"=>"[0-9]{8}[0-9]{5}[0-9]{10}[A-Z]{1}[A-Z0-9]{1}"}",
      // ch: "{"length"=>21, "bban_pattern"=>"\\d{5}[A-Z0-9]{12}"}",
      // cr: "{"length"=>22, "bban_pattern"=>"0\\d{3}\\d{14}"}",
      // cy: "{"length"=>28, "bban_pattern"=>"\\d{8}[A-Z0-9]{16}"}",
      // cz: "{"length"=>24, "bban_pattern"=>"\\d{20}"}",
      // de: "{"length"=>22, "bban_pattern"=>"\\d{18}"}",
      // dk: "{"length"=>18, "bban_pattern"=>"\\d{14}"}",
      // do: "{"length"=>28, "bban_pattern"=>"[A-Z]{4}\\d{20}"}",
      // ee: "{"length"=>20, "bban_pattern"=>"\\d{16}"}",
      // es: "{"length"=>24, "bban_pattern"=>"\\d{20}"}",
      // fi: "{"length"=>18, "bban_pattern"=>"\\d{14}"}",
      // fo: "{"length"=>18, "bban_pattern"=>"\\d{14}"}",
      // fr: "{"length"=>27, "bban_pattern"=>"\\d{10}[A-Z0-9]{11}\\d{2}"}",
      // gb: "{"length"=>22, "bban_pattern"=>"[A-Z]{4}\\d{14}"}",
      // ge: "{"length"=>22, "bban_pattern"=>"[A-Z]{2}\\d{16}"}",
      // gi: "{"length"=>23, "bban_pattern"=>"[A-Z]{4}[A-Z0-9]{15}"}",
      // gl: "{"length"=>18, "bban_pattern"=>"\\d{14}"}",
      // gr: "{"length"=>27, "bban_pattern"=>"\\d{7}[A-Z0-9]{16}"}",
      // gt: "{"length"=>28, "bban_pattern"=>"[A-Z0-9]{4}\\d{2}\\d{2}[A-Z0-9]{16}"}",
      // hr: "{"length"=>21, "bban_pattern"=>"\\d{17}"}",
      // hu: "{"length"=>28, "bban_pattern"=>"\\d{24}"}",
      // ie: "{"length"=>22, "bban_pattern"=>"[A-Z]{4}\\d{14}"}",
      // il: "{"length"=>23, "bban_pattern"=>"\\d{19}"}",
      // is: "{"length"=>26, "bban_pattern"=>"\\d{22}"}",
      // it: "{"length"=>27, "bban_pattern"=>"[A-Z]\\d{10}[A-Z0-9]{12}"}",
      // kw: "{"length"=>30, "bban_pattern"=>"[A-Z]{4}\\d{22}"}",
      // kz: "{"length"=>20, "bban_pattern"=>"[0-9]{3}[A-Z0-9]{13}"}",
      // lb: "{"length"=>28, "bban_pattern"=>"\\d{4}[A-Z0-9]{20}"}",
      // li: "{"length"=>21, "bban_pattern"=>"\\d{5}[A-Z0-9]{12}"}",
      // lt: "{"length"=>20, "bban_pattern"=>"\\d{16}"}",
      // lu: "{"length"=>20, "bban_pattern"=>"\\d{3}[A-Z0-9]{13}"}",
      // lv: "{"length"=>21, "bban_pattern"=>"[A-Z]{4}[A-Z0-9]{13}"}",
      // mc: "{"length"=>27, "bban_pattern"=>"\\d{10}[A-Z0-9]{11}\\d{2}"}",
      // md: "{"length"=>24, "bban_pattern"=>"[A-Z]{2}[A-Z0-9]{18}"}",
      // me: "{"length"=>22, "bban_pattern"=>"\\d{18}"}",
      // mk: "{"length"=>19, "bban_pattern"=>"\\d{3}[A-Z0-9]{10}\\d{2}"}",
      // mr: "{"length"=>27, "bban_pattern"=>"\\d{23}"}",
      // mt: "{"length"=>31, "bban_pattern"=>"[A-Z]{4}\\d{5}[A-Z0-9]{18}"}",
      // mu: "{"length"=>30, "bban_pattern"=>"[A-Z]{4}\\d{19}[A-Z]{3}"}",
      // nl: "{"length"=>18, "bban_pattern"=>"[A-Z]{4}\\d{10}"}",
      // no: "{"length"=>15, "bban_pattern"=>"\\d{11}"}",
      // pk: "{"length"=>24, "bban_pattern"=>"[A-Z]{4}[A-Z0-9]{16}"}",
      // pl: "{"length"=>28, "bban_pattern"=>"\\d{8}[A-Z0-9]{16}"}",
      // ps: "{"length"=>29, "bban_pattern"=>"[A-Z]{4}[A-Z0-9]{21}"}",
      // pt: "{"length"=>25, "bban_pattern"=>"\\d{21}"}",
      // qa: "{"length"=>29, "bban_pattern"=>"[A-Z]{4}[A-Z0-9]{21}"}",
      // ro: "{"length"=>24, "bban_pattern"=>"[A-Z]{4}[A-Z0-9]{16}"}",
      // rs: "{"length"=>22, "bban_pattern"=>"\\d{18}"}",
      // sa: "{"length"=>24, "bban_pattern"=>"\\d{2}[A-Z0-9]{18}"}",
      // se: "{"length"=>24, "bban_pattern"=>"\\d{20}"}",
      // si: "{"length"=>19, "bban_pattern"=>"\\d{15}"}",
      // sk: "{"length"=>24, "bban_pattern"=>"\\d{20}"}",
      // sm: "{"length"=>27, "bban_pattern"=>"[A-Z]\\d{10}[A-Z0-9]{12}"}",
      // tl: "{"length"=>23, "bban_pattern"=>"\\d{19}"}",
      // tn: "{"length"=>24, "bban_pattern"=>"\\d{20}"}",
      // tr: "{"length"=>26, "bban_pattern"=>"\\d{5}[A-Z0-9]{17}"}",
      // ua: "{"length"=>29, "bban_pattern"=>"\\d{25}"}",
      // vg: "{"length"=>24, "bban_pattern"=>"[A-Z]{4}\\d{16}"}",
      // xk: "{"length"=>20, "bban_pattern"=>"\\d{16}"}",
    };

    let result = Object.entries(toFind).find((ele) => {
      return ele[0] === undefined
    });

    return undefined;
  },
};

module.exports = bank
