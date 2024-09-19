"use strict";
// String
Object.defineProperty(exports, "__esModule", { value: true });
var greetings = "Hello Arshit";
greetings.toLowerCase();
console.log(greetings);
// Number
var num1 = 12123.432423;
// you can access only number methods for num1 not string or boolean methods
console.log(num1);
// Boolean 
var isLoggedIn = false;
console.log(isLoggedIn);
// It's not always necessary to define types, as TypeScript already detectes the type when you are assigning some value to it.
var myName = "ARSHIT";
myName.toLowerCase();
console.log(myName);
// myName = 2;
// any : most vulnerable thing for TS 
var powerfulAvenger;
function getAvenger() {
    return "IRON-man";
}
powerfulAvenger = getAvenger();
// hover over above powerfulAvenger, it says the type 'any' which means it doesn't know that function gonna return to it
var myAvenger;
function getAvengers() {
    return true;
}
