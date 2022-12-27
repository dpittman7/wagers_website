import type { Config } from './config';
import Rule, { RuleMatching } from './rule';
declare const MutationObserver: ObjectConstructor | {
    new (callback: MutationCallback): MutationObserver;
    prototype: MutationObserver;
};
export declare type Options = {
    config?: Config;
    override?: boolean;
    observe?: boolean;
};
export default class MasterCSS extends MutationObserver {
    #private;
    options?: Options;
    static instances: MasterCSS[];
    static root: MasterCSS;
    /**
     * 全部 sheet 根據目前蒐集到的所有 DOM class 重新 create
     */
    static refresh(config: Config): void;
    readonly style: HTMLStyleElement;
    readonly rules: Rule[];
    readonly ruleOfClass: Record<string, Rule>;
    readonly countOfClass: {};
    readonly host: Element;
    readonly root: Document | ShadowRoot;
    readonly ready: boolean;
    readonly config: Config;
    semantics: [RegExp, [string, string | Record<string, string>]][];
    classes: Record<string, string[]>;
    colorsThemesMap: Record<string, Record<string, Record<string, string>>>;
    colorNames: string[];
    themeNames: string[];
    relationThemesMap: Record<string, Record<string, string[]>>;
    relations: Record<string, string[]>;
    selectors: Record<string, [RegExp, string[]][]>;
    values: Record<string, Record<string, string | number>>;
    globalValues: Record<string, string | number>;
    breakpoints: Record<string, number>;
    mediaQueries: Record<string, string>;
    matches: Record<string, RegExp>;
    private schemeMQL;
    constructor(options?: Options);
    get storageScheme(): string;
    set scheme(scheme: string);
    get scheme(): string;
    set theme(theme: string);
    get theme(): string;
    private removeSchemeListener;
    private onThemeChange;
    private cache;
    observe(root: Document | ShadowRoot, options?: MutationObserverInit): this;
    disconnect(): void;
    /**
     * 比對是否為 Master CSS 的類名語法
     */
    match(className: string): RuleMatching;
    /**
     * 透過類名 ( 包含 .classes ) 生成 rules[]
     */
    create(className: string): Rule[];
    /**
     * 根據蒐集到的所有 DOM class 重新 create
     */
    refresh(config: Config): void;
    destroy(): void;
    /**
     * 透過類名來刪除對應的 Rules
     */
    delete(className: string): void;
    /**
    * 依類名生成規則、加工並插入
    * 1. where
    * 2. normal
    * 3. where selectors
    * 4. normal selectors
    * 5. media where
    * 6. media normal
    * 7. media selectors
    * 8. media width where
    * 9. media width
    * 10. media width selectors
     */
    insert(eachClassName: string): boolean;
    get text(): string;
}
declare global {
    interface Window {
        MasterCSS: typeof MasterCSS;
    }
}
export {};
