import Rules from './rules';
import Rule from '../rule';
declare const config: Config;
export default config;
type Classes = {
    [key: string]: string | Classes;
};
type Colors = {
    [key: string]: string | Colors;
};
type Breakpoints = {
    [key: string]: number | Breakpoints;
};
type MediaQueries = {
    [key: string]: string | MediaQueries;
};
type Selectors = {
    [key: string]: string | string[] | Selectors;
};
type Semantics = {
    [key: string]: string | number | Record<string, string | number | Semantics>;
};
type Values = {
    [key: string]: string | number | Values;
};
export interface Config {
    classes?: Classes;
    colors?: Colors;
    breakpoints?: Breakpoints;
    mediaQueries?: MediaQueries;
    selectors?: Selectors;
    semantics?: Semantics;
    values?: {
        [id in typeof Rules[number]['id']]?: Values;
    } & Values;
    Rules?: typeof Rule[];
    themes?: Record<string, {
        classes?: Classes;
        colors?: Colors;
    }> | string[];
    rootSize?: number;
    scheme?: {
        preference?: string;
        storage?: {
            sync?: boolean;
            key?: string;
        };
    };
}
