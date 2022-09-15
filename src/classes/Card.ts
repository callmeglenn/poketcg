import { Ability, AncientTrait, Attack, CardImages, CardMarket, CardProperties, Legalities, Resistance, SetProperties, TCGPlayer, Weakness } from "../typings/types";
import Set from "./Set";
export default class Card implements CardProperties {
	public id: string;
	public name: string;
	public supertype?: string;
	public subtypes?: string[];
	public level?: string;
	public hp: string;
	public types: string[];
	public evolvesFrom?: string;
	public evolvesTo?: string[];
	public rules: string[];
	public ancientTrait?: AncientTrait;
	public abilities?: Ability[];
	public attacks: Attack[];
	public weaknesses: Weakness[];
	public resistances: Resistance[];
	public retreatCost: string[];
	public convertedRetreatCost: number;
	public set: SetProperties;
	public number: string;
	public artist: string;
	public rarity: string;
	public flavorText?: string;
	public nationalPokedexNumbers: number[];
	public legalities: Legalities;
	public regulationMark: string;
	public images: CardImages;
	public tcgplayer: TCGPlayer;
	public cardmarket: CardMarket;
	public token?: string;
	constructor(properties: CardProperties, token?: string) {
		this.token = token ?? null;
		for (const prop in properties) {
			if (prop == "set") this[prop] = new Set(properties[prop], this.token);
			else this[prop] = properties[prop];
		}
	}
}
