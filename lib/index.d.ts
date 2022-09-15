import Card from "./classes/Card";
import Dictionary from "./classes/Dictionary";
import Query from "./classes/Query";
import Set from './classes/Set';
declare const Pokemon: {
    Card: typeof Card;
    Dictionary: typeof Dictionary;
    Query: typeof Query;
    Set: typeof Set;
};
export = Pokemon;
