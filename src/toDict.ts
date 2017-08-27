import { StringMap, NumberMap } from '.';
import { s, ss, ns, mapObj } from './ref';

function populateDict(map: any, key: any, val: any, items: any[]): any {
  items.forEach(item => map[key(item)] = val(item));
  return map;
}

export function toStringDict<TI, TV>(items: TI[], key: ss<TI>, val: s<TV, TI>): StringMap<TV> {
  return populateDict({ ...mapObj }, key, val, items);
}

export function toNumberDict<TI, TV>(items: TI[], key: ns<TI>, val: s<TV, TI>): NumberMap<TV> {
  return populateDict({ ...mapObj }, key, val, items);
}
