"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const Card_1 = __importDefault(require("./classes/Card"));
const Dictionary_1 = __importDefault(require("./classes/Dictionary"));
const Query_1 = __importDefault(require("./classes/Query"));
const Set_1 = __importDefault(require("./classes/Set"));
const Pokemon = { Card: Card_1.default, Dictionary: Dictionary_1.default, Query: Query_1.default, Set: Set_1.default };
module.exports = Pokemon;
