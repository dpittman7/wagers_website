import Rule from '../rule';
export default class extends Rule {
    static id: "FontSmoothing";
    static matches: string;
    static unit: string;
    static get prop(): string;
    get(declaration: any): {
        [key: string]: any;
    };
}
