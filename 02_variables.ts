// String

let greetings:string = "Hello Arshit";
greetings.toLowerCase();
console.log(greetings);

// Number

let num1 : number = 12123.432423
// you can access only number methods for num1 not string or boolean methods

console.log(num1);

// Boolean 

let isLoggedIn = false;
console.log(isLoggedIn);

// It's not always necessary to define types, as TypeScript already detectes the type when you are assigning some value to it.

let myName = "ARSHIT";
myName.toLowerCase();
console.log(myName);
// myName z= 2;
 

// any : most vulnerable thing for TS 

let powerfulAvenger;
function getAvenger(){
    return "IRON-man"
}
powerfulAvenger = getAvenger(); 
// hover over above powerfulAvenger, it says the type 'any' which means it doesn't know that function gonna return to it

let myAvenger : string;
function getAvengers(){
    return true
}
// myAvenger = getAvengers(); 
// remove-comment, hover over above myAvenger, it says you cannot assign boolean to a string, which means it has already detected to 


export {}