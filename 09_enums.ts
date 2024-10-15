enum SeatChoice { // by-default it gives a numbering value
    aisle, // if given string-value to anyone, then give value to all after-that
    middle,
    window
}
enum SeatChoice1 { // by-default it gives a numbering value
    aisle = 10, // if given number-value to anyone, then by-default it gives number accordingly after
    middle,
    window
}

enum SeatChoice2 { // by-default it gives a numbering value
    aisle, 
    middle = '10', // if given string-value to anyone, then give value to all after-that
    // window
}

const userSeat = SeatChoice.aisle; 

// what this generats for js

enum PaymentMode {
    cash,
    upi,
    debit_card,
    credit_card,
    net_banking
}

// The above generates an IIFE 

const userPaymentMode = PaymentMode.cash;

// Lets see what this generates for js

const enum TransactionMode {
    cash,
    upi,
    debit_card,
    credit_card,
    net_banking
}

// just adding the const before enum, it transpiles everything into : 
// var myTransactionMode = 0

const myTransactionMode = TransactionMode.cash;


/*
    When to Use : 

    1. Use 'enum' when you need the enum to exist as an object, such as when accessing its properties at runtime or for reverse lookup.

    2. Use 'const enum' when you don't need any runtime behavior and want a performance boost by avoiding the generation of extra JavaScript code.
*/

export {}