import MasterCSS from './css';
import type { Config } from './config';
export default class Rule {
    readonly className: string;
    readonly matching: RuleMatching;
    css: MasterCSS;
    readonly prefix: string;
    readonly symbol: string;
    readonly token: string;
    readonly prefixSelectors: string[];
    readonly vendorSuffixSelectors: Record<string, string[]>;
    readonly important: boolean;
    readonly media: MediaQuery;
    readonly at: Record<string, string>;
    readonly direction: string;
    readonly theme: string;
    readonly unitToken: string;
    readonly hasWhere: boolean;
    readonly priority: number;
    readonly natives: {
        unit: string;
        value: string | Record<string, string | number>;
        text: string;
        theme: string;
        cssRule?: CSSRule;
    }[];
    static id: string;
    static matches: string;
    static colorStarts: string;
    static symbol: string;
    static unit: string;
    static colorful: boolean;
    static get prop(): string;
    static match(name: string, matches: RegExp, colorsThemesMap: Record<string, Record<string, Record<string, string>>>, colorNames: string[]): RuleMatching;
    constructor(className: string, matching: RuleMatching, css: MasterCSS);
    get text(): string;
}
export default interface Rule {
    readonly order?: number;
    analyzeToken(token: string, values: Record<string, string | number>, globalValues: Record<string, string | number>): [string, Array<string | {
        value: string;
    }>, string];
    parseValue(value: string, config: Config): string;
    get(declaration: Declaration): Record<string, any>;
    getThemeProps(declaration: Declaration, css: MasterCSS): Record<string, Record<string, string>>;
}
export interface MediaFeatureRule {
    token: string;
    tokenType?: string;
    operator?: string;
    value?: number;
    unit?: string;
}
export interface MediaQuery {
    token: string;
    features?: {
        [key: string]: MediaFeatureRule;
    };
    type?: string;
}
export interface Declaration {
    value: any;
    unit: string;
    important: boolean;
}
export interface RuleMatching {
    origin: 'matches' | 'semantics' | 'symbol';
    value?: [string, string | Record<string, string>];
    Rule?: typeof Rule;
}
