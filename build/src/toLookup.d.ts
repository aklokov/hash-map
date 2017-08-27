import { StringMap, NumberMap } from '.';
import { s, ss, ns } from './ref';
export declare function toStringLookup<TI, TV>(items: TI[], key: ss<TI>, val: s<TV, TI>): StringMap<TV[]>;
export declare function toNumberLookup<TI, TV>(items: TI[], key: ns<TI>, val: s<TV, TI>): NumberMap<TV[]>;
