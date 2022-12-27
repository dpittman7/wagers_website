import Rule from '../rule';
export default class extends Rule {
    static id: "UserDrag";
    get(declaration: any): {
        [key: string]: any;
    };
}
