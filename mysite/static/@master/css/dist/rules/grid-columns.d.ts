import Rule from '../rule';
export default class extends Rule {
    static id: "GridColumns";
    static matches: string;
    static unit: string;
    get(declaration: any): {
        [key: string]: any;
    };
}
