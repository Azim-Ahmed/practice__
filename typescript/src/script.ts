import { Player } from './classes/Player.js';

function multiplyNumber(a:number, b:number) {
    return a * b;
}

console.log(multiplyNumber(4, 3))

let arrayType = ["azun", "asine", "sustain"];
arrayType.push("new")

let newMixArray = ["newAge", 43, false]; //must push the data within these type of array items
newMixArray.push(32)

const newObject = {
    name: "azim",
    age: 23,
    isCaptain:false
}
//Predefined object needs to be work with that


let az: number;
let bz: string;

az = 32;
bz = "news creed";

let a: (string| number)[] = []
// a = ["newscreed"];
a.push(2, "azim")

let zsx: number | string

let c: object;
c = {
    name: "azim",
    bro:"cousine"
}
let zsa: {
    name: string,
    age: number,
item:string
}
zsa = {
    name: "azim",
    age: 23,
    item:"asa"
}
c = [];
c = ["azim", "bro"]

let myFunc: Function;
myFunc = () => {
    console.log(`Here is our pride`)
}

const newFunc = (a :string, b:string , c:string ="true") => {
    console.log(`Here ${a} and our ${b}`)
}
newFunc("azim", "bro")

//initial in the JS usual it return Undefined if there is no return of value
// where in typescript returns means "VOID" where there is nothing in return of the value, but undefined means a value
const newFunction = (a :string, b:string , c:string ="true") => {
    return(`Here ${a} and our ${b}`)
}
newFunction("bro", "awesome")

// TYPE Aliases

// So we can create aliases for redundant type for whole project and others stuff
type stringOrNum = string | number;
type userType = {name:string , age:number};
const userDetails = (
    id: stringOrNum,
    user:userType
) => {
    console.log(`User id ${id} and his name is ${user.name} and his age is ${user.age}`)
}
const sayHello = (
    user:userType
) => {
    console.log(`Hello if users age ${user.age > 50 ? "Sir" : "Mr"} ${user.name}`)
}

let add: (x: number, y: number) => number;
add = (a: number, b: number) => {
    return a * b
}
let calculation: (x: number, y: number, z: string) => number;
//must have reach all requirements
calculation = (a: number, b: number,c:string) => {
    if (c === "add") {
       return a+b
    } else {
        return a - b;
   }
}
calculation(4, 3, "add")
// lecture -09

const Mashrafi = new Player("Man", 23, "New Zealand");
const Brocode = new Player("Brocode", 23, "New Zealand");
const players: Player[] = [];
players.push(Brocode)
players.push(Mashrafi)
console.log(players)

// lecture -10

class CricPlayer {
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
const XMashrafi = new CricPlayer("New Mash", 23, "New Zealand");
XMashrafi.name = "bro" // we can change this if we don't use access modifier;

console.log(XMashrafi.name)

class CricXPlayer {
//    private name: string;
//    public age: number;
//    readonly country: string;
//     constructor(n: string, a: number, c: string) {
//         this.name = n;
//         this.age = a;
//         this.country = c;
//     }

 constructor(private name: string,
    public age: number,
     readonly country: string //must use access modifier to check and use the all variables on the class not the outside
 ) { }
    play() {
        console.log(`I am the only ${this.name} and ${this.age} ${this.country}`)
    }
}
const XMTashrafi = new CricXPlayer("New Mash", 23, "New Zealand");
// XMTashrafi.name = "bro" // we can change this if we don't use access modifier;

console.log(XMashrafi.name)