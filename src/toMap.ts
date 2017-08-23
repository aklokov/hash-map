import { isFunction } from './isFunction';
import { StringMap, NumberMap, Map } from './interfaces';


export type s<TK, TI> = ((item: TI) => TK);
export type ss<TI> = string | s<string, TI>;
export type ns<TI> = string | s<number, TI>;

function getSelector<TK, TI>(selector: string | s<TK, TI>): s<TK, TI> {
  return isFunction(selector) ? <s<TK, TI>>selector : item => item[<string>selector];
}

const mapObj = createMap();

function createMap(): any {
  const result = {};
  for (var prop of Object.getOwnPropertyNames(Object.prototype)) {
    result[prop] = undefined;
  }

  return result;
}

function populateMap(map: any, key: any, items: any[]): any {
  items.forEach(item => map[key(item)] = item);
  return map;
}

function populateDict(map: any, key: any, val: any, items: any[]): any {
  items.forEach(item => map[key(item)] = val(item));
  return map;
}

function populateLookup(map: any, key: any, items: any[]): any {
  items.forEach(item => {
    const k = key(item);
    const list = map[k] || (map[k] = []);
    list.push(item);
  });
  return map;
}

export function toStringDict<TI, TV>(items: TI[], key: ss<TI>, val: string | s<TV, TI>): StringMap<TV> {
  return populateDict(stringMap<TV>(), getSelector(key), getSelector(val), items);
}

export function toNumberDict<TI, TV>(items: TI[], key: ns<TI>, val: string | s<TV, TI>): NumberMap<TV> {
  return populateDict(numberMap<TV>(), getSelector(key), getSelector(val), items);
}

export function toStringMap<TI>(items: TI[], key: ss<TI>): StringMap<TI> {
  return populateMap(stringMap<TI>(), getSelector(key), items);
}

export function toNumberMap<TI>(items: TI[], key: ns<TI>): NumberMap<TI> {
  return populateMap(numberMap<TI>(), getSelector(key), items);
}

export function toMap(items: string[], key: ss<string>): Map {
  return populateMap(map(), getSelector(key), items);
}

export function toStringLookup<TI>(items: TI[], key: ss<TI>): StringMap<TI[]> {
  return populateLookup(stringMap<TI[]>(), getSelector(key), items);
}

export function toNumberLookup<TI>(items: TI[], key: ns<TI>): NumberMap<TI[]> {
  return populateLookup(numberMap<TI[]>(), getSelector(key), items);
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
