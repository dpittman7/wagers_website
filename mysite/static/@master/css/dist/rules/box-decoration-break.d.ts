import Rule from '../rule';
export default class extends Rule {
    static id: "BoxDecorationBreak";
    static matches: string;
    get(declaration: any): {
        [key: string]: any;
    };
}
