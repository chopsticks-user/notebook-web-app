export const createFunction = (variables: string, definition: string): Function => {
    return Function(`"use strict";return function${variables}{return ${definition}}`)();
}


// ASSUME ALL INPUTS ARE VALID
export class MathFunction {
    private _definition: string;
    private _symbol: string;
    private _domain: string;
    private _codomain: string;
    private _variables: string[];

    /**
     * 
     * @param symbol Example: "f"
     * @param domain Example: "(R, R)"
     * @param codomain Example: "R"
     */
    constructor(symbol: string, domain: string, codomain: string) {
        this._symbol = symbol.replaceAll(" ", "");
        this._domain = domain.replaceAll(" ", "");
        this._codomain = codomain.replaceAll(" ", "");
        this._definition = `${this._symbol}: ${this._domain} -> ${this._codomain}`;
    }

    public evaluate: any;

    /**
     * 
     * @param variables Example: "(x, y, z, ...)"
     * @param definition Example: "(x ** 2 + 2 * x * y + y ** 2 - z)"
     */
    public define = (variables: string, definition: string): void => {
        const vars: string = variables.replaceAll(" ", "");
        const def: string = definition.replaceAll(" ", "");
        this._definition += `, f${vars} = ${def}`;
        this.evaluate = createFunction(vars, def);
        this._variables = vars.substring(1, vars.length - 1).split(",");
    }

    public get definition(): string {
        return this._definition;
    }
}