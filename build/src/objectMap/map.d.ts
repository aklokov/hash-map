import { INumberMap, IMap } from './interfaces';
import { selector, stringSelector, numberSelector } from '../selectors';
export declare function map<TVal>(array: TVal[], key: stringSelector<TVal>): IMap<TVal>;
export declare function map<TVal>(array: TVal[], key: numberSelector<TVal>): INumberMap<TVal>;
export declare function map<TSrc, TVal>(array: TSrc[], key: stringSelector<TSrc>, val: selector<TSrc, TVal>): IMap<TVal>;
export declare function map<TSrc, TVal>(array: TSrc[], key: numberSelector<TSrc>, val: selector<TSrc, TVal>): INumberMap<TVal>;
