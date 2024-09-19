"use strict";
// Add two numbers : 
Object.defineProperty(exports, "__esModule", { value: true });
function addNums(num1, num2) {
    return num1 + num2;
}
var x = addNums(2, 4);
console.log(x);
// const y = addNums(2,"1"); // error on this
// const z = addNums("2",4); // error on this
// Make the string provided to uppercase
function makeUpper(myName) {
    return myName.toUpperCase();
}
var a = makeUpper("12");
var b = makeUpper("arshit");
// const a = makeUpper(12); // error on this.
// console.log(a);
function signupUser(userEmail, userName, isPaid) { }
// signupUser(1,2,3); // error on this
signupUser('one@arshit.com', 'arshitcc', true);
var loginUser1 = function (userEmail, userName, isPaid) { };
// loginUser1('a@a.com',true, 1); // acceptable code with 'any'
var loginUser2 = function (userEmail, userName, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
// loginUser2('a@a.com',true, 1); // error on this
loginUser2('a@a.com', 'a', true); // no error
/*
    On compiling the file gives self checks after passing the parameters
*/
function addMe(num) {
    return "hello";
}
var value = addMe(5);
// no Problem but this kind of thing can give unexpected error as we don't know what function is return
// Yes, you thought right => we can type-check functions also : 
function student(name, cgpa, contact) {
    return { name: name, cgpa: cgpa, contact: contact };
}
var stud = student('arshit', 8.71, '9098765431');
var myUser = function (name) {
    return 2;
};
// let getReport = (marks : number) => {
//     if(marks < 60) {
//         return -1;
//     }
//     return "200, OK";
// }
// let avengers = ['ironman','thor', 'captain'];
var avengers = [1, 2, 3];
avengers.map(function (hero) { });
// It implicitly finds what type is of 'avengers' and 'hero' so you don't have to explicitly write 
// (hero:string or number)
// but you should define for returing in loops by default it will as any or the data-type passed in array
avengers.map(function (hero) {
    return "My hero is ".concat(hero);
});
function myError(err_msg) {
    console.log(err_msg);
    // return 1; // error on this
    return;
}
// Important : never [handling Error]
function handleError(err_msg) {
    throw new Error(err_msg);
    // In 'never' return type, the function throws an exception or terminates execution of the program.
}
