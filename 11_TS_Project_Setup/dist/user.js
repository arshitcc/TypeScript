"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
