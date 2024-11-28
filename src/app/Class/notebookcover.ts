import { Notebook } from "./notebook";

export class NotebookCover extends Notebook {
    material: string;
    constructor(name1: string, k1: number, material: string, N1: number) {
        super(name1, k1, N1);
        if (material !== "") {
            this.material = material;
        } else {
            this.material = "cardboard";
        }
    }

    override cost() {
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

        let m;
        if (this.material === "cardboard") {
            m = 0.6;
        } else if (this.material === "leather") {
            m = 1.3;
        } else if (this.material === "fabric") {
            m = 0.8;
        } else {
            m = 0.5;
        }

        return ((this.k * n + m) * this.N);
    }
}