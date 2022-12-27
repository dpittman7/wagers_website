import Rule from '../rule';
export default class extends Rule {
    static id: "GridRow";
    static matches: string;
    static unit: string;
    parseValue(value: string): string;
    order: number;
}
