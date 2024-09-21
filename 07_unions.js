var number = 2;
number = 2;
number = "2";
number = true;
var user;
user = { name: 'arshit', id: 1234 };
user = { username: 'carl', id: '1234' };
function getData(id) {
    console.log("Your ID is ".concat(id)); // its fine
    // id.toLowerCase(); // cannot directly apply string method to a varible which could be a number
    // first strictly check for type then only apply their methods
    if (typeof id === 'string') {
        id.toLowerCase();
        // id.toFixed(); // can't
    }
}
getData(2);
getData('2');
var data1 = [1, 2, 3];
var data2 = ['1', '2', '3'];
var data3 = [1, 2, 3]; // either complete string or complete number
var data4 = [1, 2, '3']; // now we can create a mix-type of number and string
var data5 = [1, 2, '3', true]; // now we can create a mix-type of number and string
var pi = 3.14;
// let pi : 3.14 = 3.145; // error : pi can only be 3.14
// pi = 3.1424 // error
var seatAllotment;
seatAllotment = 'middle'; // cool
// seatAllotment = 'crew'; // error : value can be only from above 3 values
