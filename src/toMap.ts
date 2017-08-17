import { isFunction } from './isFunction';
import { StringMap, NumberMap } from './interfaces';
export type selector<TKey, TItem> = ((item: TItem) => TKey);

function getSelector<TKey, TItem>(selector: string | selector<TKey, TItem>): selector<TKey, TItem> {
  return isFunction(selector) ? <selector<TKey, TItem>>selector : item => item[<string>selector];
}

const map = createMap();

function createMap(): any {
  const result = {};
  for (var prop of Object.getOwnPropertyNames(Object.prototype)) {
    result[prop] = undefined;
  }

  return result;
}

export function toStringMap<TItem>(items: TItem[], selector: string | selector<string, TItem>): StringMap<TItem> {
  const s = getSelector(selector);
  const result = stringMap<TItem>();
  items.forEach(item => result[s(item)] = item);
  return result;
}

export function toNumberMap<TItem>(items: TItem[], selector: string | selector<number, TItem>): NumberMap<TItem> {
  const s = getSelector(selector);
  const result = numberMap<TItem>();
  items.forEach(item => result[s(item)] = item);
  return result;
}

export function toStringLookup<TItem>(items: TItem[], selector: string | selector<string, TItem>): StringMap<TItem[]> {
  const s = getSelector(selector);
  const result = stringMap<TItem[]>();
  items.forEach(item => {
    const key = s(item);
    const list = result[key] || (result[key] = []);
    list.push(item);
  });
  return result;
}

export function toNumberLookup<TItem>(items: TItem[], selector: string | selector<number, TItem>): NumberMap<TItem[]> {
  const s = getSelector(selector);
  const result = numberMap<TItem[]>();
  items.forEach(item => {
    const key = s(item);
    const list = result[key] || (result[key] = []);
    list.push(item);
  });
  return result;
}

export function stringMap<TItem>(): StringMap<TItem> {
  return { ...map };
}

export function numberMap<TItem>(): NumberMap<TItem> {
  return { ...map };
}

export function objectToStringMap<TItem>(src: StringMap<TItem>): StringMap<TItem> {
  return { ...map, ...src };
}

export function objectToNumberMap<TItem>(src: NumberMap<TItem>): NumberMap<TItem> {
  return { ...map, ...src };
}
