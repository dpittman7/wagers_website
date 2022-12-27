import type { Config } from '../config';
import Rule from '../rule';
export default class extends Rule {
    static id: "BackdropFilter";
    static matches: string;
    static colorful: boolean;
    get(declaration: any): {
        [key: string]: any;
    };
    parseValue(value: string, config: Config): string;
}
