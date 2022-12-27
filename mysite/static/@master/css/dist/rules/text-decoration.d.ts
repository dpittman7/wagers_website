import Rule from '../rule';
export default class extends Rule {
    static id: "TextDecoration";
    static matches: string;
    static colorful: boolean;
    order: number;
}
