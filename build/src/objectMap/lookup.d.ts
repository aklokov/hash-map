import { INumberLookup, ILookup } from './interfaces';
import { selector, stringSelector, numberSelector } from '../selectors';
export declare function lookup<TVal>(array: TVal[], key: stringSelector<TVal>): ILookup<TVal>;
export declare function lookup<TVal>(array: TVal[], key: numberSelector<TVal>): INumberLookup<TVal>;
export declare function lookup<TSrc, TVal>(array: TSrc[], key: stringSelector<TSrc>, val: selector<TSrc, TVal>): ILookup<TVal>;
export declare function lookup<TSrc, TVal>(array: TSrc[], key: numberSelector<TSrc>, val: selector<TSrc, TVal>): INumberLookup<TVal>;
