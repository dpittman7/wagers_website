import Rule from '../rule';
export default class extends Rule {
    static id: "UserSelect";
    get(declaration: any): {
        [key: string]: any;
    };
}
