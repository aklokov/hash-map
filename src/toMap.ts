import { StringMap, NumberMap, Map } from './interfaces';
import { selector, stringSelector, numberSelector, createMapObj } from './ref';

function populateMap(map: any, key: any, items: any[]): any {
  if (Array.isArray(items)) {
    items.forEach(item => map[key(item)] = item);
  }
  return map;
}

export function toStringMap<TI>(items: TI[], key: stringSelector<TI>): StringMap<TI> {
  return populateMap(createMapObj(), key, items);
}

export function toNumberMap<TI>(items: TI[], key: numberSelector<TI>): NumberMap<TI> {
  return populateMap(createMapObj(), key, items);
}

export function toMap(items: string[], key: stringSelector<string>): Map {
  return populateMap(createMapObj(), key, items);
}

export function map(): Map {
  return createMapObj();
}

export function stringMap<TI>(): StringMap<TI> {
  return createMapObj();
}

export function numberMap<TI>(): NumberMap<TI> {
  return createMapObj();
}

export function objectToMap(src: Map): Map {
  return { ...createMapObj(), ...src };
}

export function objectToStringMap<TI>(src: StringMap<TI>): StringMap<TI> {
  return { ...createMapObj(), ...src };
}

export function objectToNumberMap<TI>(src: NumberMap<TI>): NumberMap<TI> {
  return { ...createMapObj(), ...src };
}
