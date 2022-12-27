import Rule from '../rule';
export default class extends Rule {
    static id: "OverscrollBehavior";
    static matches: string;
    static get prop(): string;
    get(declaration: any): {
        [key: string]: any;
    };
}
