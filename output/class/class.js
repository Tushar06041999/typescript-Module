export class Player {
    constructor(n, age, country) {
        this.name = n;
        this.age = age;
        this.country = country;
    }
    play() {
        console.log(`${this.name} is ${this.age} years old and playing for  ${this.country}`);
    }
}
