import Card from './Card';
import Set from './Set';
export default class Dictionary {
    token?: string | null;
    constructor(token?: string);
    get cards(): {
        get: (id: string) => Promise<Card>;
        find: (options?: any) => Promise<Map<unknown, unknown>>;
    };
    get sets(): {
        get: (id: string) => Promise<Set>;
        find: (options?: any) => Promise<Map<unknown, unknown>>;
    };
    types(force: boolean): Promise<any>;
    subtypes(force: boolean): Promise<any>;
    supertypes(force: boolean): Promise<any>;
    rarities(force: boolean): Promise<any>;
}
