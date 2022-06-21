"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
class Player {
    constructor(n, age, country) {
        this.name = n;
        this.age = age;
        this.country = country;
    }
    play() {
        console.log(`${this.name} is ${this.age} years old and playing for  ${this.country}`);
    }
}
exports.Player = Player;
