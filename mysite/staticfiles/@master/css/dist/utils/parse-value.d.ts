export declare function parseValue(token: string | number, defaultUnit?: string, colorsThemesMap?: Record<string, Record<string, Record<string, string>>>, rootSize?: number, themes?: string[]): {
    value: string;
    unit: string;
    colorMatched?: boolean;
};
