"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// class and constructor Decleration 
const class_js_1 = require("./class/class.js");
const tushar = new class_js_1.Player("root", 25, "canada");
console.log(tushar.country);
const players = [];
players.push(tushar);
console.log(players);
