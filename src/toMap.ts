import { StringMap, NumberMap, Map } from './interfaces';
import { s, ss, ns, mapObj } from './ref';

function populateMap(map: any, key: any, items: any[]): any {
  items.forEach(item => map[key(item)] = item);
  return map;
}

export function toStringMap<TI>(items: TI[], key: ss<TI>): StringMap<TI> {
  return populateMap({ ...mapObj }, key, items);
}

export function toNumberMap<TI>(items: TI[], key: ns<TI>): NumberMap<TI> {
  return populateMap({ ...mapObj }, key, items);
}

export function toMap(items: string[], key: ss<string>): Map {
  return populateMap({ ...mapObj }, key, items);
}

export function map(): Map {
  return { ...mapObj };
}

export function stringMap<TI>(): StringMap<TI> {
  return { ...mapObj };
}

export function numberMap<TI>(): NumberMap<TI> {
  return { ...mapObj };
}

export function objectToMap(src: Map): Map {
  return { ...mapObj, ...src };
}

export function objectToStringMap<TI>(src: StringMap<TI>): StringMap<TI> {
  return { ...mapObj, ...src };
}

export function objectToNumberMap<TI>(src: NumberMap<TI>): NumberMap<TI> {
  return { ...mapObj, ...src };
}
