export class Notebook {
    name: string;
    k: number;
    N: number;

    constructor(name: string, k: number, N: number) {
        if (name !== "" && k > 0 && N>0) {
            this.name = name;
            this.k = k;
            this.N = N;
        } else {
            this.name = "line";
            this.k = 18;
            this.N = 10;
        }
    }

    cost() {
        let n;
        if (this.name === "line") {
            n = 0.2;
        } else if (this.name === "cell") {
            n = 0.3;
        } else if (this.name === "oblique") {
            n = 0.23;
        } else {
            n = 0.15;
        }

        return this.k * n * this.N;
    }
}