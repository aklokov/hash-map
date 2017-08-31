import { StringMap, NumberMap } from '.';
import { selector, stringSelector, numberSelector, mapObj } from './ref';

function populateLookup(map: any, key: any, val: any, items: any[]): any {
  if (Array.isArray(items)) {
    items.forEach(item => {
      const k = key(item);
      const list = map[k] || (map[k] = []);
      list.push(val(item));
    });
  }
  return map;
}

export function toStringLookup<TI, TV>(items: TI[], key: stringSelector<TI>, val: selector<TV, TI>): StringMap<TV[]> {
  return populateLookup({ ...mapObj }, key, val, items);
}

export function toNumberLookup<TI, TV>(items: TI[], key: numberSelector<TI>, val: selector<TV, TI>): NumberMap<TV[]> {
  return populateLookup({ ...mapObj }, key, val, items);
}
