export interface CardProperties {
	id: string;
	name: string;
	supertype?: string;
	subtypes?: string[];
	level?: string;
	hp: string;
	types: string[];
	evolvesFrom?: string;
	evolvesTo?: string[];
	rules: string[];
	ancientTrait?: AncientTrait,
	abilities?: Ability[];
	attacks: Attack[];
	weaknesses: Weakness[];
	resistances: Resistance[];
	retreatCost: string[];
	convertedRetreatCost: number;
	set: SetProperties;
	number: string;
	artist: string;
	rarity: string;
	flavorText?: string;
	nationalPokedexNumbers: number[];
	legalities: Legalities;
	regulationMark: string;
	images: CardImages;
	tcgplayer: TCGPlayer;
	cardmarket: CardMarket;
}

export interface Ability {
	name: string;
	text: string;
	type: string;
}
export interface AncientTrait {
	name: string[];
	text: [];
}
export interface Attack {
	cost: string[];
	name: string;
	text: string;
	damage: string;
	convertedEnergyCost: number;
}
export interface CardImages {
	small: string;
	large: string;
}
export interface CardMarket {
	url: string;
	updatedAt: string;
	prices: CardMarketPrices;
}
export interface CardMarketPrices {
	averageSellPrice: number;
	lowPrice: number;
	trendPrice: number;
	germanProLow: number;
	suggestedPrice: number;
	reverseHoloSell: number;
	reverseHoloLow: number;
	reverseHoloTrend: number;
	lowPriceExPlus: number;
	avg1: number;
	avg7: number;
	avg30: number;
	reverseHoloAvg1: number;
	reverseHoloAvg7: number;
	reverseHoloAvg30: number;
}
export interface Weakness {
	type: string;
	value: string;
}
export interface Resistance {
	type: string;
	value: string;
}
export interface TCGPlayer {
	url: string;
	updatedAt: string;
	prices: TGPlayerPrices;
}
export interface TGPlayerPrices {
	low: number;
	mid: number;
	high: number;
	market: number;
	directLow: number;
}

export interface SetProperties {
	id: string;
	name: string;
	series: string;
	printedTotal: number;
	total: number;
	legalities: Legalities;
	ptcgoCode: string;
	releaseDate: string;
	updatedAt: string; 
	images: SetImages;
}

export interface Legalities {
	standard?: string;
	expanded?: string;
	unlimited?: string;
}
export interface SetImages {
	symbol: string;
	logo: string;
}