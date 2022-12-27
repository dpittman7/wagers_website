type ExpandDeep<T> = T extends Record<string | number | symbol, unknown> ? {
    [K in keyof T]: ExpandDeep<T[K]>;
} : T extends Array<infer E> ? Array<ExpandDeep<E>> : T;
export default function extend<T extends Record<string, any>>(object: T, ...otherObjects: any[]): ExpandDeep<any>;
export {};
