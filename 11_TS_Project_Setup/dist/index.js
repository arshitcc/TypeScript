"use strict";
console.log('!! Welcome in TS !!');
class User {
    constructor(email, pincode) {
        this.city = ""; // You have to initialize variable if not initialized using constructor
        this.email = email;
        this.pincode = pincode;
    }
}
const x0 = new User("arshit@google.com", 222001);
// x0.city = "Mumbai"; // Type-safety is availabe outside the class also
class myUser {
    // You have to initialize variable if not initialized using constructor
    constructor(email, pincode) {
        this.city = ""; // adding private makes it non-accessible also after non-editable
        this.email = email;
        this.pincode = pincode;
    }
}
const x1 = new myUser("arshit@google.com", 222001);
// x1.city = "Mumbai"; // Type-safety is availabe outside the class also
// Modern Production Code : 
class newUser {
    constructor(email, pincode) {
        this.email = email;
        this.pincode = pincode;
        this._usersCount = 1;
        this.city = 'Jaunpur';
    }
    get getEmail() {
        return `${this.email}`;
    }
    get getUsersCount() {
        return this._usersCount;
    }
    set setUsersCount(users) {
        if (users <= 10) {
            throw new Error(`!! Not enough popular for premium Access !!`);
        }
        this._usersCount = users + 1;
    }
    deleteUsers() {
        console.log(`!! HACKED !!`);
        this._usersCount = 0;
    }
}
const x2 = new newUser("arshit@google.com", 222001);
// x1.city = "Mumbai"; // Type-safety is availabe outside the class also
class yourUser {
    constructor(email, pincode) {
        this.email = email;
        this.pincode = pincode;
        this._usersCount = 1;
        this.city = 'Jaunpur';
    }
    get getEmail() {
        return `${this.email}`;
    }
    get getUsersCount() {
        return this._usersCount;
    }
    set setUsersCount(users) {
        if (users <= 10) {
            throw new Error(`!! Not enough popular for premium Access !!`);
        }
        this._usersCount = users + 1;
    }
    deleteUsers() {
        console.log(`!! HACKED !!`);
        this._usersCount = 0;
    }
}
class subUser extends yourUser {
    increaseUsers() {
        this._usersCount += 100;
        return this._usersCount;
    }
}
