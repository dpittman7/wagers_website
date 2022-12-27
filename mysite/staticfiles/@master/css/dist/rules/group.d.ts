import Rule from '../rule';
import MasterCSS from '../css';
import type { Declaration } from '../rule';
export default class extends Rule {
    static id: "Group";
    static matches: string;
    static unit: string;
    static get prop(): string;
    analyzeToken(token: string, values: Record<string, string | number>, globalValues: Record<string, string | number>): [string, Array<string | {
        value: string;
    }>, string];
    getThemeProps(declaration: Declaration, css: MasterCSS): Record<string, Record<string, string>>;
}
