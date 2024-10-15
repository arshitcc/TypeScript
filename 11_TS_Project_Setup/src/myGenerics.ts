const scores : Array<number>  = []
const names :Array<string> = []

function identityOne( val : boolean|number): boolean | number{

    return val;
}

function identityTwo(val : any) : any {
    // anything can be returned   
    return val;
}

function identityThree<Type>(val : Type):Type  { // Generic Function that handles Type-'Type', accepts a 'Type' and returns a 'Type'
    return val;
}

// Hover IT : 

identityThree('2')
identityThree(2);
identityThree(true);

// Generics provides you Type-Locking mechanishm.

// Shortcut Syntax
function identityFour<T>(val : T): T {  // any-thing in place of T, 
    return val;
}


function identityFive<TMKC>(val : TMKC): TMKC {  
    return val;
}


interface Bottle { 
    brand : string,
    type : string
}


identityFour({brand : "Arshit", type : "gym"})
identityFour<Bottle>({brand : "Arshit", type : "gym"})  // Syntax for your own data-type

function searchProduct<T>(arg : T){
    // console.log(arg.length) // can't be sure arg will be in array
    
}


function getSearchProducts<T>(products : T[]) : T {
    // return 3; // it doesn't mean to return an index

    // return products[3]; // you should return the value from the products[],
    const productIndex = 3;
    return products[productIndex];
}

// Generics for Arrow Function : 

// const getProducts = (): => {} // classic arrow functioon
// const getProducts = <T>(): => {} // generic for arrow function

const getProducts = <T>(products : T[]): T =>{ // Generic Arrow func. that handles Type-'T', accepts an array of 'T' and returns 'T'
    const myIndex = 3;
    return products[myIndex];   
}

const getMyProducts = <T,>(products : T[]): T =>{  // no-error mostly used in React.jsx to mention that it is a generic-syntax
    const myIndex = 3;
    return products[myIndex];   
}


interface DB{
    connection : string,
    isConnected : boolean,
    userName : string,
    password : string,
    documents : number
}

function f1<T, U>(val1 : T,val2 : U) : object {  // Generic func. that handles Type-'T','U' ,accepts 'T','U' and return an object {}
    return {
        val1,
        val2
    }
}

f1(3, "3");

function f2<T, U extends DB>(val1 : T,val2 : U) : object {  
    // Generic func. that handles Type-'T','U' which is nothing but an interface as an object' ,accepts 'T','U : {keys of DB}' and return object {}
    return {
        val1,
        val2
    }
}

// f2(3, { documents : 3}); // Since the 2nd parameter has to be Type-U which is a type of interface DB : means all keys to be passed 

f2(3, {connection : "", isConnected : true, userName : "", password : "", documents : 1});

// f2(3, {});

interface Quiz{
    name: string,
    type: string
}

interface Course{
    name: string,
    author: string,
    subject: string
}

class Sellable<T>{   // Generic - Class that handles a type-T
    public cart: T[] = []

    addToCart(product: T){
        this.cart.push(product)
    }
}

/* 
    Sellable<T> is a generic class that can handle any type T.

    Generics allow the class to work with different types without specifying them upfront.
    public cart: T[] = []: This initializes an empty array cart that will store items of type T.
    addToCart(product: T): This method takes a parameter product of type T and adds it to the cart array.

*/