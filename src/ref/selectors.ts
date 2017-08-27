export type s<TK, TI> = ((item: TI) => TK);
export type ss<TI> = s<string, TI>;
export type ns<TI> = s<number, TI>;
