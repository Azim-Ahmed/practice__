"use strict";
function multiplyNumber(a, b) {
    return a * b;
}
console.log(multiplyNumber(4, 3));
var arrayType = ["azun", "asine", "sustain"];
arrayType.push("new");
var newMixArray = ["newAge", 43, false];
newMixArray.push(32);
var newObject = {
    name: "azim",
    age: 23,
    isCaptain: false
};
//Predefined object needs to be work with that
var az;
var bz;
az = 32;
bz = "news creed";
var a = [];
// a = ["newscreed"];
a.push(2, "azim");
var zsx;
var c;
c = {
    name: "azim",
    bro: "cousine"
};
var zsa;
zsa = {
    name: "azim",
    age: 23,
    item: "asa"
};
c = [];
c = ["azim", "bro"];
var myFunc;
myFunc = function () {
    console.log("Here is our pride");
};
var newFunc = function (a, b, c) {
    if (c === void 0) { c = "true"; }
    console.log("Here ".concat(a, " and our ").concat(b));
};
newFunc("azim", "bro");
//initial in the JS usual it return Undefined if there is no return of value
// where in typescript returns means "VOID" where there is nothing in return of the value, but undefined means a value
var newFunction = function (a, b, c) {
    if (c === void 0) { c = "true"; }
    return ("Here ".concat(a, " and our ").concat(b));
};
newFunction("bro", "awesome");
var userDetails = function (id, user) {
    console.log("User id ".concat(id, " and his name is ").concat(user.name, " and his age is ").concat(user.age));
};
var sayHello = function (user) {
    console.log("Hello if users age ".concat(user.age > 50 ? "Sir" : "Mr", " ").concat(user.name));
};
var add;
add = function (a, b) {
    return a * b;
};
var calculation;
//must have reach all requirements
calculation = function (a, b, c) {
    if (c === "add") {
        return a + b;
    }
    else {
        return a - b;
    }
};
calculation(4, 3, "add");
// lecture -09
var Player = /** @class */ (function () {
    function Player(n, a, c) {
        this.name = n;
        this.age = a;
        this.country = c;
    }
    Player.prototype.play = function () {
        console.log("I am the only ".concat(this.name, " and ").concat(this.age, " ").concat(this.country));
    };
    return Player;
}());
var Mashrafi = new Player("Man", 23, "New Zealand");
var Brocode = new Player("Brocode", 23, "New Zealand");
var players = [];
players.push(Brocode);
players.push(Mashrafi);
console.log(players);
// lecture -10
var CricPlayer = /** @class */ (function () {
    function CricPlayer(n, a, c) {
        this.name = n;
        this.age = a;
        this.country = c;
    }
    CricPlayer.prototype.play = function () {
        console.log("I am the only ".concat(this.name, " and ").concat(this.age, " ").concat(this.country));
    };
    return CricPlayer;
}());
var XMashrafi = new CricPlayer("New Mash", 23, "New Zealand");
XMashrafi.name = "bro"; // we can change this if we don't use access modifier;
console.log(XMashrafi.name);
var CricXPlayer = /** @class */ (function () {
    //    private name: string;
    //    public age: number;
    //    readonly country: string;
    //     constructor(n: string, a: number, c: string) {
    //         this.name = n;
    //         this.age = a;
    //         this.country = c;
    //     }
    function CricXPlayer(name, age, country //must use access modifier to check and use the all variables on the class not the outside
    ) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    CricXPlayer.prototype.play = function () {
        console.log("I am the only ".concat(this.name, " and ").concat(this.age, " ").concat(this.country));
    };
    return CricXPlayer;
}());
var XMTashrafi = new CricXPlayer("New Mash", 23, "New Zealand");
// XMTashrafi.name = "bro" // we can change this if we don't use access modifier;
console.log(XMashrafi.name);
