export class Player {
    constructor(n, a, c) {
        this.name = n;
        this.age = a;
        this.country = c;
    }
    play() {
        console.log(`I am the only ${this.name} and ${this.age} ${this.country}`);
    }
}
