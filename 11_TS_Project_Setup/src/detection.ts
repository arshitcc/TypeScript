function detectType(val: number | string ){
    if (typeof val === "string") {
        return val.toLowerCase()
    }
    return val + 3
}

function provideId(id: string | null){
    if(!id){
        console.log("Please provide ID");
        return
    }
    id.toLowerCase()
}

function printAll(strs: string | string[] | null) {
    // !!!!!!!!!!!!!!!!
    //  DON'T DO THIS!
    //   KEEP READING
    // !!!!!!!!!!!!!!!!
    if (strs) {
        if (typeof strs === "object") {
        for (const s of strs) {
            console.log(s);
        }
        } else if (typeof strs === "string") {
        console.log(strs);
        }
    }
}

//  using 'in' operator narrowing

interface User {
    name: string,
    email: string
}

interface Admin{
    name: string,
    email: string,
    isAdmin: boolean
}

// The 'in' operator narrowing : JavaScript has an operator for determining if an object or its prototype chain has a property with a name: the in operator. TypeScript takes this into account as a way to narrow down potential types.
function findAdmin(account : Admin | User){
    // if(typeof account === "Admin"){
    //     return
    // }

    // We cant approach like this

    if( "isAdmin" in account){
        return account.isAdmin; // Here, it is fully sure thta account is of type 'Admin'
    }

}

// 'instanceof' narrowing : JavaScript has an operator for checking whether or not a value is an “instance” of another value.

// in JavaScript x instanceof Foo checks whether the prototype chain of x contains Foo.prototype.

// they can still be useful for most values that can be constructed with 'new' keyword.

// Its similar to check typeof 
// Its similar to classes where we check "if object is instance of which-class"

function logValue(x: Date | string) {
    if (x instanceof Date) {
        console.log(x.toUTCString());   
    } else {
        console.log(x.toUpperCase());     
    }
}

type Fish = { swim: () => void };
type Bird = { fly: () => void };
type Human = { swim?: () => void; fly?: () => void };


/*
    function isFish(animal : Fish | Bird){
        return (animal as Fish).swim !== undefined
    }

    function identifyWhooseFood(pet : Fish | Bird){
        if(isFish(pet)){
            pet // Hover Me
            // `Still Unsure whether pet is Fish or Bird`
            // As the answer we gott is a boolean that doesn't returned me a type of animal/pet
            return `This is Fish Food !!`
        }
        else {
            pet
            return `This is Bird Foor !!`
        }
    }
*/

// This below is called Type-predicates

function isFish(animal : Fish | Bird) : animal is Fish{ 
    // If written 'animal is Bird', it will return 'Bird'

    /*
        'animal is Fish' is a type predicate hai, 
        which means if function return true , TypeScript will understand animal's type is Fish rightnow, 
        And in further code mein animal as Fish will be treated.
    */

    // if 'true' returned animal will be returned as Fish, 
    // the above 'Fish' will be returned according to return true / false
    return (animal as Fish).swim !== undefined
}

/*
   'pet is Fish' is our type predicate in this example. A predicate takes the form parameterName is Type, where parameterName must be the name of a parameter from the current function signature.

    Any time isFish is called with some variable, TypeScript will narrow that variable to that specific type if the original type is compatible.    
*/

function identifyWhooseFood(pet : Fish | Bird){
    if(isFish(pet)){
        pet // Now Hover Me
        // Now its completely sure that 'pet' is Fish
        return `This is Fish Food !!`
    }
    else {
        pet
        return `This is Bird Food !!`
    }
}

// Discriminated Unions : 

/*
    interface Shape {
        kind: "circle" | "square";
        radius?: number;
        sideLength?: number;
    }

    function getArea(shape: Shape) {
        return Math.PI * shape.radius ** 2;
    }
    // error : TS doesn't know radius is defined or not

    function getArea(shape: Shape) {
        if (shape.kind === "circle") {
            return Math.PI * shape.radius ** 2;
        }
    }
    // error : TS doesn't know whether radius will always we available if its Circle
*/

// This is what Discriminated Unions : Define each shape differently

interface Circle {
    kind: "circle",
    radius: number
}

interface Square {
    kind: "square"
    side: number
}

interface Rectangle {
    kind: "rectangle",
    length: number,
    width: number
}

type Shape = Circle | Square | Rectangle;


function getTrueShape(shape: Shape){
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2
    }
    // return shape.side ** 2;
}

function getArea(shape: Shape){
    switch(shape.kind){
        case "circle":
            return Math.PI * shape.radius ** 2

        case "square":
            return shape.side * shape.side
        case "rectangle":
            return shape.length * shape.width

        default:
            const defaultShape: never = shape
            return defaultShape

        // The never will only be assigned if all the possibilites are tested otherwise it will throw error during run-time
    }

    /*
        Never type TypeScript :  Its a type which never exists, or a state which never should come.

        While narrowing union types down, and all the possibilites gets over then, TypeScript represents that state in 'never' 
        
        It basically tells this-state / this-case shouldn't happen.

        " TypeScript mein never type kisi bhi type mein assign ho sakta hai, lekin koi doosra type never mein assign nahi ho sakta, except never khud. "
        
        TS call it as exhaustiveness checking ke liye karte hain, jaise switch statements mein. Means, if all possibilities are handled and an unexpected value appears TS will throw error.
    */
}