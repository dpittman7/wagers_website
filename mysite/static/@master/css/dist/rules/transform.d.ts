import type { Config } from '../config';
import Rule from '../rule';
export default class extends Rule {
    static id: "Transform";
    static matches: string;
    static unit: string;
    parseValue(value: string, { rootSize }: Config): string;
}
