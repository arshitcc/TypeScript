// Add two numbers : 

function addNums(num1 : number, num2 : number){ // parameter are considered as any
    // num1.toUpperCase();
    return num1 + num2;
}
const x = addNums(2,4);
console.log(x);
// const y = addNums(2,"1"); // error on this
// const z = addNums("2",4); // error on this


// Make the string provided to uppercase

function makeUpper(myName : string){
    return myName.toUpperCase();
}
const a = makeUpper("12");
const b = makeUpper("arshit");
// const a = makeUpper(12); // error on this.
// console.log(a);

function signupUser(userEmail : string, userName : string, isPaid : boolean) {}
// signupUser(1,2,3); // error on this
signupUser('one@arshit.com', 'arshitcc', true);

let loginUser1 = (userEmail, userName, isPaid) => {}
// loginUser1('a@a.com',true, 1); // acceptable code with 'any'

let loginUser2 = (userEmail : string, userName : string, isPaid : boolean = false) => {}
// loginUser2('a@a.com',true, 1); // error on this
loginUser2('a@a.com','a', true); // no error
 
/*
    On compiling the file gives self checks after passing the parameters
*/

function addMe(num : number){
    return "hello"
}
let value = addMe(5); 
// no Problem but this kind of thing can give unexpected error as we don't know what function is return
// Yes, you thought right => we can type-check functions also : 

function student( name : string, cgpa :number, contact : string ): object {
    return {name, cgpa, contact}
}
let stud = student('arshit', 8.71, '9098765431')
let myUser = (name : string): number  => {
    return 2;
}

// let getReport = (marks : number) => {
//     if(marks < 60) {
//         return -1;
//     }
//     return "200, OK";
// }

// let avengers = ['ironman','thor', 'captain'];
let avengers = [1,2,3];

avengers.map((hero) => {})

// It implicitly finds what type is of 'avengers' and 'hero' so you don't have to explicitly write 
// (hero:string or number)
// but you should define for returing in loops by default it will as any or the data-type passed in array

avengers.map((hero) : string => {
    return `My hero is ${hero}`;
})

function myError(err_msg : string) : void {
    console.log(err_msg);
    // return 1; // error on this
    return;
}

// Important : never [handling Error]

function handleError(err_msg : string) : never {
    throw new Error(err_msg);
    // In 'never' return type, the function throws an exception or terminates execution of the program.
}
 
export {}
