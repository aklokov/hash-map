import { INumberLookup, ILookup } from './interfaces';
import { selector, stringSelector, numberSelector } from '../selectors';
import { create } from './create';

export function lookup<TVal>(array: TVal[], key: stringSelector<TVal>): ILookup<TVal>;
export function lookup<TVal>(array: TVal[], key: numberSelector<TVal>): INumberLookup<TVal>;
export function lookup<TSrc, TVal>(array: TSrc[], key: stringSelector<TSrc>, val: selector<TSrc, TVal>): ILookup<TVal>;
export function lookup<TSrc, TVal>(array: TSrc[], key: numberSelector<TSrc>, val: selector<TSrc, TVal>): INumberLookup<TVal>;
export function lookup<TSrc, TVal>(
  array: TSrc[], keySelector: stringSelector<TSrc> | numberSelector<TSrc>,
  valSelector?: selector<TSrc, TVal>): ILookup<TVal> | INumberLookup<TVal> {
  const result = create<ILookup<TVal>>();
  if (!array) {
    return result;
  }

  if (valSelector) {
    for (let item of array) {
      const key = keySelector(item);
      const list = result[key] || (result[key] = []);
      list.push(valSelector(item));
    }
  } else {
    for (let item of array) {
      const key = keySelector(item);
      const list = result[key] || (result[key] = []);
      list.push(<any>item);
    }
  }

  return result;
}
