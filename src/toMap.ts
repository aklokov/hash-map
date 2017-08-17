import { isFunction } from './isFunction';
import { StringMap, NumberMap, Map } from './interfaces';
export type selector<TKey, TItem> = ((item: TItem) => TKey);

function getSelector<TKey, TItem>(selector: string | selector<TKey, TItem>): selector<TKey, TItem> {
  return isFunction(selector) ? <selector<TKey, TItem>>selector : item => item[<string>selector];
}

const mapObj = createMap();

function createMap(): any {
  const result = {};
  for (var prop of Object.getOwnPropertyNames(Object.prototype)) {
    result[prop] = undefined;
  }

  return result;
}

function populateMap<TMap, TItem>(map: TMap, selector: any, items: TItem[]): TMap {
  items.forEach(item => map[selector(item)] = item);
  return map;
}

export function toStringMap<TItem>(items: TItem[], selector: string | selector<string, TItem>): StringMap<TItem> {
  return populateMap(stringMap<TItem>(), getSelector(selector), items);
}

export function toNumberMap<TItem>(items: TItem[], selector: string | selector<number, TItem>): NumberMap<TItem> {
  return populateMap(numberMap<TItem>(), getSelector(selector), items);
}

export function toMap(items: string[], selector: string | selector<string, string>): Map {
  return populateMap(map(), getSelector(selector), items);
}

function populateLookup<TMap, TItem>(map: TMap, selector: any, items: TItem[]): TMap {
  items.forEach(item => {
    const key = selector(item);
    const list = map[key] || (map[key] = []);
    list.push(item);
  });
  return map;
}

export function toStringLookup<TItem>(items: TItem[], selector: string | selector<string, TItem>): StringMap<TItem[]> {
  return populateLookup(stringMap<TItem[]>(), getSelector(selector), items);
}

export function toNumberLookup<TItem>(items: TItem[], selector: string | selector<number, TItem>): NumberMap<TItem[]> {
  return populateLookup(numberMap<TItem[]>(), getSelector(selector), items);
}

export function map(): Map {
  return { ...mapObj };
}

export function stringMap<TItem>(): StringMap<TItem> {
  return { ...mapObj };
}

export function numberMap<TItem>(): NumberMap<TItem> {
  return { ...mapObj };
}

export function objectToMap(src: Map): Map {
  return { ...mapObj, ...src };
}

export function objectToStringMap<TItem>(src: StringMap<TItem>): StringMap<TItem> {
  return { ...mapObj, ...src };
}

export function objectToNumberMap<TItem>(src: NumberMap<TItem>): NumberMap<TItem> {
  return { ...mapObj, ...src };
}
