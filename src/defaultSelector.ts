import { selector } from './ref';

export function ds<T>(item: T): T {
  return item;
}

export function defaultSelector<T>(item: T): T {
  return item;
}

export function item<T>(item: T): T {
  return item;
}
