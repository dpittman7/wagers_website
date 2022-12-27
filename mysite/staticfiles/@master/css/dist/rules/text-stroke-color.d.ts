import Rule from '../rule';
export default class extends Rule {
    static id: "TextStrokeColor";
    static matches: string;
    static colorStarts: string;
    static colorful: boolean;
    static get prop(): string;
    get(declaration: any): {
        [key: string]: any;
    };
}
