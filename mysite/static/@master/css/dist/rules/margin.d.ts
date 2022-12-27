import Rule from '../rule';
export default class extends Rule {
    static id: "Margin";
    static matches: string;
    static get prop(): string;
    get(declaration: any): {
        [key: string]: any;
    };
    get order(): number;
}
