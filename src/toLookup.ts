import { StringMap, NumberMap } from '.';
import { s, ss, ns, mapObj } from './ref';

function populateLookup(map: any, key: any, val: any, items: any[]): any {
  items.forEach(item => {
    const k = key(item);
    const list = map[k] || (map[k] = []);
    list.push(val(item));
  });
  return map;
}

export function toStringLookup<TI, TV>(items: TI[], key: ss<TI>, val: s<TV, TI>): StringMap<TV[]> {
  return populateLookup({ ...mapObj }, key, val, items);
}

export function toNumberLookup<TI, TV>(items: TI[], key: ns<TI>, val: s<TV, TI>): NumberMap<TV[]> {
  return populateLookup({ ...mapObj }, key, val, items);
}
