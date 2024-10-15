"use strict";
const scores = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    // anything can be returned   
    return val;
}
function identityThree(val) {
    return val;
}
// Hover IT : 
identityThree('2');
identityThree(2);
identityThree(true);
// Generics provides you Type-Locking mechanishm.
// Shortcut Syntax
function identityFour(val) {
    return val;
}
function identityFive(val) {
    return val;
}
identityFour({ brand: "Arshit", type: "gym" });
identityFour({ brand: "Arshit", type: "gym" }); // Syntax for your own data-type
function searchProduct(arg) {
    // console.log(arg.length) // can't be sure arg will be in array
}
function getSearchProducts(products) {
    // return 3; // it doesn't mean to return an index
    // return products[3]; // you should return the value from the products[],
    const productIndex = 3;
    return products[productIndex];
}
// Generics for Arrow Function : 
// const getProducts = (): => {} // classic arrow functioon
// const getProducts = <T>(): => {} // generic for arrow function
const getProducts = (products) => {
    const myIndex = 3;
    return products[myIndex];
};
const getMyProducts = (products) => {
    const myIndex = 3;
    return products[myIndex];
};
function f1(val1, val2) {
    return {
        val1,
        val2
    };
}
f1(3, "3");
function f2(val1, val2) {
    // Generic func. that handles Type-'T','U' which is nothing but an interface as an object' ,accepts 'T','U : {keys of DB}' and return object {}
    return {
        val1,
        val2
    };
}
// f2(3, { documents : 3}); // Since the 2nd parameter has to be Type-U which is a type of interface DB : means all keys to be passed 
f2(3, { connection: "", isConnected: true, userName: "", password: "", documents: 1 });
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
/*
    Sellable<T> is a generic class that can handle any type T.

    Generics allow the class to work with different types without specifying them upfront.
    public cart: T[] = []: This initializes an empty array cart that will store items of type T.
    addToCart(product: T): This method takes a parameter product of type T and adds it to the cart array.

*/ 
