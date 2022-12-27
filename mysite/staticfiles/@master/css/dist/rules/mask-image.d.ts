import Rule from '../rule';
export default class extends Rule {
    static id: "MaskImage";
    get(declaration: any): {
        [key: string]: any;
    };
}
