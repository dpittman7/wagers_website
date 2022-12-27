import Rule from '../rule';
export default class extends Rule {
    static id: "BackgroundClip";
    static matches: string;
    get(declaration: any): {
        [key: string]: any;
    };
}
