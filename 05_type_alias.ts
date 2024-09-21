// Type Alias

type User = {
    name : string,
    age : number,
    email : string,
    isActive:  boolean,
}

type myString = string

function createOne (user : User) {}

// createOne(); 
// createOne({name : 'Arshit', age : 21, isActive : true, });
createOne({name : 'Arshit', age : 21, isActive : true,  email : 'one@one.com', }); 


type myUser = {
    readonly _id : string, // with readonly no-one can edit this
    name : string,
    email : string,
    isActive : boolean,
    creditCardDetails? : number, // optional data, not necessary to give while object creation
}

let u: myUser = {
    _id : '123',
    name : 'arshit',
    email : 'string@one.com',
    isActive : false
}

u.email = 'string@two.com'; // fine its editable
// u._id = '321'; // error : uneditable

type cardNumber = {
    cardNumber : string,
}
type cardDate = {
    cardDate : number,
    cardMonth : number,
    cardYear : number
}

type myCardDetails = cardNumber & cardDate ;
// type myCardDetails = cardNumber & cardDate & { cvv? : number};  // bad-practice to add fields extensively
/*
    myCardDetails is of  {
        cardNumber : '',
        cardDate : 1,
        cardMonth : 2,
        cardYear : 3, 
    }
*/

type cardDetails = { // this one is a complex-structue, ask for an example from chat-gpt
    cardNumber : cardNumber,
    validFrom : cardDate,
    expiryDate : cardDate,
}

let u1 : myCardDetails
let u2 : cardDetails

export {}