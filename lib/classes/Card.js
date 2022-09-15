"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Set_1 = __importDefault(require("./Set"));
class Card {
    id;
    name;
    supertype;
    subtypes;
    level;
    hp;
    types;
    evolvesFrom;
    evolvesTo;
    rules;
    ancientTrait;
    abilities;
    attacks;
    weaknesses;
    resistances;
    retreatCost;
    convertedRetreatCost;
    set;
    number;
    artist;
    rarity;
    flavorText;
    nationalPokedexNumbers;
    legalities;
    regulationMark;
    images;
    tcgplayer;
    cardmarket;
    token;
    constructor(properties, token) {
        this.token = token ?? null;
        for (const prop in properties) {
            if (prop == "set")
                this[prop] = new Set_1.default(properties[prop], this.token);
            else
                this[prop] = properties[prop];
        }
    }
}
exports.default = Card;
