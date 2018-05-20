"use strict";

const PINYIN_DICT = require("../data/dict-zi");
const Pinyin = require("./pinyin");
const pinyin = new Pinyin(PINYIN_DICT);

module.exports = pinyin.convert.bind(pinyin);
module.exports.compare = pinyin.compare.bind(pinyin);
module.exports.STYLE_NORMAL = Pinyin.STYLE_NORMAL;
module.exports.STYLE_TONE = Pinyin.STYLE_TONE;
module.exports.STYLE_TONE2 = Pinyin.STYLE_TONE2;
module.exports.STYLE_TO3NE = Pinyin.STYLE_TO3NE;
module.exports.STYLE_INITIALS = Pinyin.STYLE_INITIALS;
module.exports.STYLE_FIRST_LETTER = Pinyin.STYLE_FIRST_LETTER;
