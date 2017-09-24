import { StringMap, NumberMap } from '.';
import { selector, stringSelector, numberSelector, createMapObj } from './ref';

function populateDict(map: any, key: any, val: any, items: any[]): any {
  if (Array.isArray(items)) {
    items.forEach(item => map[key(item)] = val(item));
  }
  return map;
}

export function toStringDict<TI, TV>(items: TI[], key: stringSelector<TI>, val: selector<TV, TI>): StringMap<TV> {
  return populateDict(createMapObj(), key, val, items);
}

export function toNumberDict<TI, TV>(items: TI[], key: numberSelector<TI>, val: selector<TV, TI>): NumberMap<TV> {
  return populateDict(createMapObj(), key, val, items);
}
