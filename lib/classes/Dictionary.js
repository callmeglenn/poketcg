"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Card_1 = __importDefault(require("./Card"));
const Set_1 = __importDefault(require("./Set"));
const Query_1 = __importDefault(require("./Query"));
let types = null, subtypes = null, supertypes = null, rarities = null;
class Dictionary {
    token;
    constructor(token) {
        this.token = token ?? null;
    }
    get cards() {
        const token = this.token;
        const query = new Query_1.default('cards', token);
        return {
            get: async function (id) {
                const { data } = await query.fetch(id);
                return new Card_1.default(data, token);
            },
            find: async function (options) {
                const { data } = await query.fetch(options);
                return new Map(data.map(d => [d.id, new Card_1.default(d, token)]));
            }
        };
    }
    get sets() {
        const token = this.token;
        const query = new Query_1.default('sets', token);
        return {
            get: async function (id) {
                const { data } = await query.fetch(id);
                return new Set_1.default(data, token);
            },
            find: async function (options) {
                const { data } = await query.fetch(options);
                return new Map(data.map(d => [d.id, new Set_1.default(d, token)]));
            }
        };
    }
    async types(force) {
        if (!types || force) {
            const query = new Query_1.default('types', this.token);
            const { data } = await query.fetch();
            types = data;
        }
        return types;
    }
    async subtypes(force) {
        if (!subtypes || force) {
            const query = new Query_1.default('subtypes', this.token);
            const { data } = await query.fetch();
            subtypes = data;
        }
        return subtypes;
    }
    async supertypes(force) {
        if (!supertypes || force) {
            const query = new Query_1.default('supertypes', this.token);
            const { data } = await query.fetch();
            supertypes = data;
        }
        return supertypes;
    }
    async rarities(force) {
        if (!rarities || force) {
            const query = new Query_1.default('rarities', this.token);
            const { data } = await query.fetch();
            rarities = data;
        }
        return rarities;
    }
}
exports.default = Dictionary;
//# sourceMappingURL=Dictionary.js.map