import type { Config } from '../config';
import Rule from '../rule';
export default class extends Rule {
    static id: "Filter";
    static matches: string;
    static colorful: boolean;
    parseValue(value: string, config: Config): string;
}
