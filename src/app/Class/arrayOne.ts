export class arrayOne {
    a: string[] = []; 

    constructor() {
        this.a = [];
    }

    genArray() {
        this.a = ["Шевченко", "Франко", "Коцюбинський", "Леся Українка", "Сковорода"];
        this.a.reverse();
    }
}
