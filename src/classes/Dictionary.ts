import Card from './Card';
import Set from './Set';
import Query from './Query';

let types = null, subtypes = null, supertypes = null, rarities = null;
export default class Dictionary {
	public token?: string | null;
	constructor(token?: string) {
		this.token = token ?? null;
	}
	public get cards() {
		const token = this.token;
		const query = new Query('cards', token);
		return {
			get: async function (id: string) {
				const { data } = await query.fetch(id);
				return new Card(data, token);
			},
			find: async function(options?: any) {
				const { data } = await query.fetch(options);
				return new Map(data.map(d => [d.id, new Card(d, token)]));
			}
		}
	}
	public get sets() {
		const token = this.token;
		const query = new Query('sets', token);
		return {
			get: async function (id: string) {
				const { data } = await query.fetch(id);
				return new Set(data, token);
			},
			find: async function(options?: any) {
				const { data } = await query.fetch(options);
				return new Map(data.map(d => [d.id, new Set(d, token)]));
			}
		}
	}
	public async types(force?: boolean) {
		if (!types || force) {
			const query = new Query('types', this.token);
			const { data } = await query.fetch();
			types = data;
		}
		return types;
	}
	public async subtypes(force?: boolean) {
		if (!subtypes || force) {
			const query = new Query('subtypes', this.token);
			const { data } = await query.fetch();
			subtypes = data;
		}
		return subtypes;
	}
	public async supertypes(force?: boolean) {
		if (!supertypes || force) {
			const query = new Query('supertypes', this.token);
			const { data } = await query.fetch();
			supertypes = data;
		}
		return supertypes;
	}
	public async rarities(force?: boolean) {
		if (!rarities || force) {
			const query = new Query('rarities', this.token);
			const { data } = await query.fetch();
			rarities = data;
		}
		return rarities;
	}
}