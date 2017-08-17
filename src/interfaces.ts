export interface Map extends StringMap<string> {}

export interface StringMap<TValue> {
  [id: string]: TValue;
}

export interface NumberMap<TValue> {
  [id: number]: TValue;
}
