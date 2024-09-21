let user : [string, number, boolean]

user = ["A", 1, true];
// user = [true,1,"A"]; // not-allowed

// A tuple type is another sort of Array type that knows exactly how many elements it contains, and exactly which types it contains at specific positions.

let marks : [number, number, number] = [1,2,3];
console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);
// console.log(marks[3]); // no-access


type User = [string, number];
let myUser :User = ['A',1];

myUser[1] = 69;
// myUser.push(true); // good-it gave warning
// myUser.push(1); // why no-error
// myUser.push('1'); // why no-error

// Don't rely much on Tuples

export {}