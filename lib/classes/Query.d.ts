export default class Query {
    type: string;
    token?: string | null;
    proxy: string | null;
    constructor(type: string, token?: string, proxy?: string);
    private get config();
    fetch(args?: string | any): Promise<any>;
}
