import { selector } from '../selectors';
export function map<TKey, TVal>(array: TVal[], key: selector<TVal, TKey>): Map<TKey, TVal>;
export function map<TSrc, TKey, TVal>(array: TSrc[], key: selector<TSrc, TKey>, val: selector<TSrc, TVal>): Map<TKey, TVal>;
export function map<TSrc, TKey, TVal>(array: TSrc[], key: selector<TSrc, TKey>, val?: selector<TSrc, TVal>): Map<TKey, TVal> {
  const result = new Map<TKey, TVal>();
  if (!array) {
    return result;
  }

  if (val) {
    for (let item of array) {
      result.set(key(item), val(item));
    }
  } else {
    for (let item of array) {
      result.set(key(item), <any>item);
    }
  }

  return result;
}
