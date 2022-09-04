export class Player {
    name: string;
    age: number;
    country: string;
    constructor(n: string, a: number, c: string) {
        this.name = n;
        this.age = a;
        this.country = c;
}
    play() {
    console.log(`I am the only ${this.name} and ${this.age} ${this.country}`)
}
}