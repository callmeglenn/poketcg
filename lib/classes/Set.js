"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Query_1 = __importDefault(require("./Query"));
const Card_1 = __importDefault(require("./Card"));
class Set {
    id;
    name;
    series;
    printedTotal;
    total;
    legalities;
    ptcgoCode;
    releaseDate;
    updatedAt;
    images;
    token;
    constructor(properties, token) {
        for (const prop in properties)
            this[prop] = properties[prop];
        this.token = token ?? null;
    }
    async getCards() {
        const result = [];
        let page = 1;
        let currentPageSize = 250;
        const query = new Query_1.default('cards', this.token);
        while (currentPageSize == 250) {
            const { data } = await query.fetch({ q: `set.id:${this.id}`, page });
            result.push(...data.map(d => new Card_1.default(d)));
            currentPageSize = data.length;
            page++;
        }
        return result;
    }
}
exports.default = Set;
