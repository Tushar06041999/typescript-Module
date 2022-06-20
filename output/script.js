"use strict";
console.log("Hello World");
const country = "Bangladesh";
console.log(country);
let playerName;
console.log(playerName);
playerName = 'Tushar';
playerName = 24;
console.log(playerName);
// function declare
function sum(a, b) {
    const result = a * b;
    return result;
}
console.log(sum(5, 6));
// Array Declearation with typescript
var mixed = ["Tushar", 80, true, {}];
mixed.push(56);
mixed.unshift({
    name: "Tushar",
});
console.log(mixed);
// object Decleare and Access
let person = {
    name: "Tushar",
    age: 23,
    university: "sdut",
};
console.log(person.university);
// type decleare
let a;
let b;
b = "tushar";
a = 50;
console.log(a + b);
// Multiple array Declearation
let D = [];
D.push("Tushar Chandra Mohanto");
console.log(D[0]);
// Array and object core Declearation
let P;
let t = {
    name: "Mohanto Tushar Chandra",
    age: 23,
    type: true
};
console.log(t.name);
// function Declearation 
let func;
func = () => {
    console.log("Hello Devlopers");
};
// more about Function
const myFunc = (a, b, c) => {
    console.log(`Hello ${a} ${b}`);
};
myFunc("Tushar", "Chandra");
