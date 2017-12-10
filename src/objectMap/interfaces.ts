export interface IMap<TValue> { [id: string]: TValue; }
export interface ILookup<TValue> extends IMap<TValue[]> { }

export interface INumberMap<TValue> { [id: number]: TValue; }
export interface INumberLookup<TValue> extends INumberMap<TValue[]> { }
