import { Player } from './classes/Player.js';
function multiplyNumber(a, b) {
    return a * b;
}
console.log(multiplyNumber(4, 3));
let arrayType = ["azun", "asine", "sustain"];
arrayType.push("new");
let newMixArray = ["newAge", 43, false]; //must push the data within these type of array items
newMixArray.push(32);
const newObject = {
    name: "azim",
    age: 23,
    isCaptain: false
};
//Predefined object needs to be work with that
let az;
let bz;
az = 32;
bz = "news creed";
let a = [];
// a = ["newscreed"];
a.push(2, "azim");
let zsx;
let c;
c = {
    name: "azim",
    bro: "cousine"
};
let zsa;
zsa = {
    name: "azim",
    age: 23,
    item: "asa"
};
c = [];
c = ["azim", "bro"];
let myFunc;
myFunc = () => {
    console.log(`Here is our pride`);
};
const newFunc = (a, b, c = "true") => {
    console.log(`Here ${a} and our ${b}`);
};
newFunc("azim", "bro");
//initial in the JS usual it return Undefined if there is no return of value
// where in typescript returns means "VOID" where there is nothing in return of the value, but undefined means a value
const newFunction = (a, b, c = "true") => {
    return (`Here ${a} and our ${b}`);
};
newFunction("bro", "awesome");
const userDetails = (id, user) => {
    console.log(`User id ${id} and his name is ${user.name} and his age is ${user.age}`);
};
const sayHello = (user) => {
    console.log(`Hello if users age ${user.age > 50 ? "Sir" : "Mr"} ${user.name}`);
};
let add;
add = (a, b) => {
    return a * b;
};
let calculation;
//must have reach all requirements
calculation = (a, b, c) => {
    if (c === "add") {
        return a + b;
    }
    else {
        return a - b;
    }
};
calculation(4, 3, "add");
// lecture -09
const Mashrafi = new Player("Man", 23, "New Zealand");
const Brocode = new Player("Brocode", 23, "New Zealand");
const players = [];
players.push(Brocode);
players.push(Mashrafi);
console.log(players);
// lecture -10
class CricPlayer {
    constructor(n, a, c) {
        this.name = n;
        this.age = a;
        this.country = c;
    }
    play() {
        console.log(`I am the only ${this.name} and ${this.age} ${this.country}`);
    }
}
const XMashrafi = new CricPlayer("New Mash", 23, "New Zealand");
XMashrafi.name = "bro"; // we can change this if we don't use access modifier;
console.log(XMashrafi.name);
class CricXPlayer {
    //    private name: string;
    //    public age: number;
    //    readonly country: string;
    //     constructor(n: string, a: number, c: string) {
    //         this.name = n;
    //         this.age = a;
    //         this.country = c;
    //     }
    constructor(name, age, country //must use access modifier to check and use the all variables on the class not the outside
    ) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    play() {
        console.log(`I am the only ${this.name} and ${this.age} ${this.country}`);
    }
}
const XMTashrafi = new CricXPlayer("New Mash", 23, "New Zealand");
// XMTashrafi.name = "bro" // we can change this if we don't use access modifier;
console.log(XMashrafi.name);
