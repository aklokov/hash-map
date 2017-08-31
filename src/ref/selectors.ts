export type selector<TK, TI> = ((item: TI) => TK);
export type stringSelector<TI> = selector<string, TI>;
export type numberSelector<TI> = selector<number, TI>;
