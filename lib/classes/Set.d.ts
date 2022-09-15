import { Legalities, SetImages, SetProperties } from "../typings/types";
export default class Set implements SetProperties {
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
    token?: string;
    constructor(properties: SetProperties, token?: string);
    getCards(): Promise<any[]>;
}
