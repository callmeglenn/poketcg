import { Legalities, SetImages, SetProperties } from "../typings/types";
import Query from './Query';
import Card from './Card';

export default class Set implements SetProperties {
	public id: string;
	public name: string;
	public series: string;
	public printedTotal: number;
	public total: number;
	public legalities: Legalities;
	public ptcgoCode: string;
	public releaseDate: string;
	public updatedAt: string;
	public images: SetImages;
	public token?: string;
	constructor(properties: SetProperties, token?: string) {
		for (const prop in properties) this[prop] = properties[prop];
		this.token = token ?? null;
	}
	public async getCards() {
		const result = [];
		let page = 1;
		let currentPageSize = 250;
		const query = new Query('cards', this.token);
		while (currentPageSize == 250) {
			const { data } = await query.fetch({ q: `set.id:${this.id}`, page });
			result.push(...data.map(d => new Card(d)));
			currentPageSize = data.length;
			page++;
		}
		return result;
	}
}