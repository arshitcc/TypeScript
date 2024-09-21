"use strict";
// Type Alias
Object.defineProperty(exports, "__esModule", { value: true });
function createOne(user) { }
// createOne(); 
// createOne({name : 'Arshit', age : 21, isActive : true, });
createOne({ name: 'Arshit', age: 21, isActive: true, email: 'one@one.com', });
var u = {
    _id: '123',
    name: 'arshit',
    email: 'string@one.com',
    isActive: false
};
u.email = 'string@two.com'; // fine its editable
var u1;
var u2;
