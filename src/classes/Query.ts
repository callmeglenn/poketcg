import qs from 'qs';
import axios from 'axios';
export default class Query {
	public type: string;
	public token?: string | null;
	public proxy: string | null = null;
	constructor(type: string, token?: string, proxy?: string) {
		this.type = type;
		this.token = token ?? null;
		this.proxy = proxy;
	}
	private get config() {
		const result = { headers: {}, agent: null }
		if (this.token) result.headers["X-Api-Key"] = this.token;
		return result;
	}
	public async fetch(args?: string | any) {
		const { data } = await axios.get(`https://api.pokemontcg.io/v2/${this.type}${args ? typeof args == 'string' ? `/${args}` : `?${qs.stringify(args)}` : ''}`, this.config);
		return data;
	}
}