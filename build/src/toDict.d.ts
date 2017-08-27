import { StringMap, NumberMap } from '.';
import { s, ss, ns } from './ref';
export declare function toStringDict<TI, TV>(items: TI[], key: ss<TI>, val: s<TV, TI>): StringMap<TV>;
export declare function toNumberDict<TI, TV>(items: TI[], key: ns<TI>, val: s<TV, TI>): NumberMap<TV>;
