export declare type selector<TK, TI> = ((item: TI) => TK);
export declare type stringSelector<TI> = selector<string, TI>;
export declare type numberSelector<TI> = selector<number, TI>;
