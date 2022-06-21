export class Player{
    name:string
    age:number
    country:string

    constructor(n:string,age:number,country:string){

        this.name=n;
        this.age=age;
        this.country=country;

    }
    play(){
        console.log(`${this.name} is ${this.age} years old and playing for  ${this.country}`)
    }
}