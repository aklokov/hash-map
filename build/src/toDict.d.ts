import { StringMap, NumberMap } from '.';
import { selector, stringSelector, numberSelector } from './ref';
export declare function toStringDict<TI, TV>(items: TI[], key: stringSelector<TI>, val: selector<TV, TI>): StringMap<TV>;
export declare function toNumberDict<TI, TV>(items: TI[], key: numberSelector<TI>, val: selector<TV, TI>): NumberMap<TV>;
