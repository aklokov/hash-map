import { StringMap, NumberMap, Map } from './interfaces';
import { selector, stringSelector, numberSelector, mapObj } from './ref';

function populateMap(map: any, key: any, items: any[]): any {
  items.forEach(item => map[key(item)] = item);
  return map;
}

export function toStringMap<TI>(items: TI[], key: stringSelector<TI>): StringMap<TI> {
  return populateMap({ ...mapObj }, key, items);
}

export function toNumberMap<TI>(items: TI[], key: numberSelector<TI>): NumberMap<TI> {
  return populateMap({ ...mapObj }, key, items);
}

export function toMap(items: string[], key: stringSelector<string>): Map {
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
