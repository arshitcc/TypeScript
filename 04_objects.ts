const user = {
    name : 'arshit',
    email : 'one@arshit.com',
    age : 21,
    isLoggedIn : true
}

function createUser({ name:string, age:number, isPaid : boolean }):void {}

// Odd-Behaviour of TypeScript : 

// createUser({name : 'swarit', age : 15, isPaid : true, email : 'one@arshit.com' }); // error for passing extra field directly
let newUser = {name : 'swarit', age : 15, isPaid : true, email : 'one@arshit.com' }
createUser(newUser); // no-error for passing like this. Which comes under odd behaviour of TypeScript
createUser({
    name : 'swarit',
    age : 15,
    isPaid : false
})

// function createVideo() : {} {}
// function-name declaration
// set return-type
// then body

// even function's return can be set to object with their specific key's.
// SYNTAX : 
// function createSomething( parameters ) : {} {}

function createSomething() : {} {
    return {
        name : 'hello', 
        price : 399,
    }
}

let x = createSomething();
console.log(x);


export {}