"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const qs_1 = __importDefault(require("qs"));
const axios_1 = __importDefault(require("axios"));
class Query {
    type;
    token;
    proxy = null;
    constructor(type, token, proxy) {
        this.type = type;
        this.token = token ?? null;
        this.proxy = proxy;
    }
    get config() {
        const result = { headers: {}, agent: null };
        if (this.token)
            result.headers["X-Api-Key"] = this.token;
        return result;
    }
    async fetch(args) {
        const { data } = await axios_1.default.get(`https://api.pokemontcg.io/v2/${this.type}${args ? typeof args == 'string' ? `/${args}` : `?${qs_1.default.stringify(args)}` : ''}`, this.config);
        return data;
    }
}
exports.default = Query;
