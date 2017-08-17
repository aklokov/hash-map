import { StringMap, NumberMap } from './interfaces';
export declare type selector<TKey, TItem> = ((item: TItem) => TKey);
export declare function toStringMap<TItem>(items: TItem[], selector: string | selector<string, TItem>): StringMap<TItem>;
export declare function toNumberMap<TItem>(items: TItem[], selector: string | selector<number, TItem>): NumberMap<TItem>;
export declare function toStringLookup<TItem>(items: TItem[], selector: string | selector<string, TItem>): StringMap<TItem[]>;
export declare function toNumberLookup<TItem>(items: TItem[], selector: string | selector<number, TItem>): NumberMap<TItem[]>;
export declare function stringMap<TItem>(): StringMap<TItem>;
export declare function numberMap<TItem>(): NumberMap<TItem>;