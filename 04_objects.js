"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    name: 'arshit',
    email: 'one@arshit.com',
    age: 21,
    isLoggedIn: true
};
function createUser(_a) {
    var string = _a.name, number = _a.age, boolean = _a.isPaid;
}
// Odd-Behaviour of TypeScript : 
// createUser({name : 'swarit', age : 15, isPaid : true, email : 'one@arshit.com' }); // error for passing extra field directly
var newUser = { name: 'swarit', age: 15, isPaid: true, email: 'one@arshit.com' };
createUser(newUser); // no-error for passing like this. Which comes under odd behaviour of TypeScript
createUser({
    name: 'swarit',
    age: 15,
    isPaid: false
});
// function createVideo() : {} {}
// function-name declaration
// set return-type
// then body
// even function's return can be set to object with their specific key's.
// SYNTAX : 
// function createSomething( parameters ) : {} {}
function createSomething() {
    return {
        name: 'hello',
        price: 399,
    };
}
var x = createSomething();
console.log(x);
