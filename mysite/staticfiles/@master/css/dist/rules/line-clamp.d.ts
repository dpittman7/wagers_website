import Rule from '../rule';
export default class extends Rule {
    static id: "LineClamp";
    static unit: string;
    get(declaration: any): {
        [key: string]: any;
    };
}
