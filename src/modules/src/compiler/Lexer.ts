export class Lexer {
    static tokens: any[] = [];
    static errors: any[] = [];

    private static getToken = (currentChar: string, token: any): void => {
        if (currentChar === " ") {
            if (token.data.length > 0) {
                token.done = true;
                return;
            }
        }
        token.data += currentChar;
    }

    private static readRValue = () => {
        
    }

    static execute = (processedScripts: string[]) => {
        this.tokens = [];
        this.errors = [];
        for (const script of processedScripts) {
            if (script.length === 0) {
                continue;
            }
            let typename = { data: "", done: false };
            let identifier = { data: "", done: false };
            let operator = { data: "", done: false };
            let rvalue: string = "";
            for (const char of script) {
                if (!typename.done) {
                    this.getToken(char, typename);
                    continue;
                }
                if (!identifier.done) {
                    this.getToken(char, identifier);
                    continue;
                }
                if (!operator.done) {
                    this.getToken(char, operator);
                    continue;
                }
                rvalue += char;
            }
            this.tokens.push({
                typename: typename.data,
                identifier: identifier.data,
                operator: operator.data,
                rvalue: rvalue
            });
        }
        return this.tokens;
    }
}