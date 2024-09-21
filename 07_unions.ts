let number : string | number | boolean = 2;

number = 2
number = "2"
number = true
// number = {}; // error : cannot assign

type User = {
    name : string,
    id : number
}

type Admin = {
    username : string,
    id : string
}

let user : User | Admin ;
user = {name : 'arshit', id : 1234}
user = {username : 'carl', id : '1234'}


function getData(id : number | string){
    console.log(`Your ID is ${id}`); // its fine

    // id.toLowerCase(); // cannot directly apply string method to a varible which could be a number

    // first strictly check for type then only apply their methods
    if(typeof id === 'string'){
        id.toLowerCase();
        // id.toFixed(); // can't
    }
    else id+=2;
    console.log(id);
    
}
getData(2);
getData('TWO');


const data1: number[] = [1,2,3];
const data2: string[] = ['1','2','3'];
const data3: number[]|string[] = [1,2,3]; // either complete string or complete number
const data4: (string | number) [] = [1,2,'3']; // now we can create a mix-type of number and string
const data5: (string | number | boolean) [] = [1,2,'3', true]; // now we can create a mix-type of number and string


let pi : 3.14 = 3.14
// let pi : 3.14 = 3.145; // error : pi can only be 3.14
// pi = 3.1424 // error


let seatAllotment : 'asile' | 'middle' | 'window';

seatAllotment = 'middle';// cool
// seatAllotment = 'crew'; // error : value can be only from above 3 values