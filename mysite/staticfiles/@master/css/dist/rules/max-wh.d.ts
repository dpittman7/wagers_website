import Rule from '../rule';
export default class extends Rule {
    static id: "MaxWH";
    static matches: string;
    static get prop(): string;
    analyzeToken(token: string, values: Record<string, string | number>, globalValues: Record<string, string | number>): [string, Array<string | {
        value: string;
    }>, string];
    get(declaration: any): {
        [key: string]: any;
    };
}
