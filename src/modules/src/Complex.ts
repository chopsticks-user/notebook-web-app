
export class complex {
    real: number;
    imaginary: number;
    private readonly _type: string;
    private readonly _set: string;

    constructor(real: number = 0, imaginary: number = 0) {
        this.real = real;
        this.imaginary = imaginary;
        this._type = "Complex";
        this._set = "C";
    }

    get typename(): string { return this._type; }
    get set(): string { return this._set; }
    get modulus(): number { return Math.sqrt(this.real ** 2 + this.imaginary ** 2); }
    get reciprocal(): complex {
        // posible deviding by zero
        const mag = this.modulus;
        return new complex(this.real / mag, -this.imaginary / mag)
    }
    get opposite():complex {
        return new complex(-this.real, -this.imaginary);
    }
    get conjugate():complex {
        return new complex(this.real, -this.imaginary);
    }

    display(showGraph = false) {
        if (showGraph) {

        }
        return `${this.real} ${this.imaginary > 0 ? "+" : "-"} ${this.imaginary}i ∈ ${this._set}`;
    }

    static sum = (...args: any[]) => {
        const result = new complex();
        for (let i = 0; i < args.length; i++) {
            if (typeof args[i] === "number") {
                result.real += args[i];
                continue;
            }
            result.real += args[i].real;
            result.imaginary += args[i].imaginary;
        }
        return result;
    }

    static product = (...args: any[]) => {
        const result = this.sum(new complex(), args[0]);
        for (let i = 1; i < args.length; i++) {
            if (typeof args[i] === "number") {
                result.real *= args[i];
                result.imaginary *= args[i];
                continue;
            }
            result.real += result.real * args[i].real - result.imaginary * args[i].imaginary;
            result.imaginary += result.real * args[i].imaginary + result.imaginary * args[i].real;
        }
        return result;
    }
}

export class Vector {

}

// cast type

// matrix <m, n> M = [[], .., [], .., []];

// vector <n> V = [..];

// real r = 3.14159;

// complex c = 2.73 - 2i;

// radians = 3.14;

// degrees = 45;

// bin b = 10011010;

// oct o = 2410;

// hex h = 1a7b;

// /* this is a comment */