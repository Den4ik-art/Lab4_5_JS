import { randomInt } from "./randomInt";
export class arrayTwo {
    a: number[][] = [];
    negativeIndices: { row: number, col: number }[] = [];

    constructor() {
        this.a = [];
    }

    genArray(n: number, m: number) {
        this.a = [];
        let rnd = new randomInt();
        for (let i = 0; i < n; i++) {
            this.a[i] = [];
            for (let j = 0; j < m; j++) {
                this.a[i][j] = rnd.randomInteger(-10, 10);
            }
        }
    }

    find() {
        this.negativeIndices = [];
        this.a.forEach((row, rowIndex) => {
            row.forEach((value, colIndex) => {
                if (value < 0) {
                    this.negativeIndices.push({ row: rowIndex + 1, col: colIndex + 1 });
                }
            });
        });
    }
}