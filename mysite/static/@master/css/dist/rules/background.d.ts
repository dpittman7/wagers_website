import Rule from '../rule';
export default class extends Rule {
    static id: "Background";
    static matches: string;
    static colorful: boolean;
    order: number;
}
