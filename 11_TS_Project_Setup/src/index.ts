console.log('!! Welcome in TS !!');

class User {
    
    email : string;
    pincode : number;
    readonly city : string = ""; // You have to initialize variable if not initialized using constructor
    constructor(email : string, pincode : number){
        this.email  = email;
        this.pincode = pincode;
    }
}

const x0 = new User("arshit@google.com", 222001);
// x0.city = "Mumbai"; // Type-safety is availabe outside the class also


class myUser {
    
    public email : string;
    pincode : number;
    private readonly city : string = ""; // adding private makes it non-accessible also after non-editable
    // You have to initialize variable if not initialized using constructor
    constructor(email : string, pincode : number){
        this.email  = email;
        this.pincode = pincode;
    }
}

const x1 = new myUser("arshit@google.com", 222001);
// x1.city = "Mumbai"; // Type-safety is availabe outside the class also

// Modern Production Code : 

class newUser {
    
    private _usersCount = 1;
    readonly city: string = 'Jaunpur';
    constructor(
        public email : string, 
        public pincode : number,
        // private userId : number
    ){
    }

    get getEmail(): string{
        return `${this.email}`
    }

    get getUsersCount(): number{
        return this._usersCount;
    }

    set setUsersCount(users : number ) { // setters never require a 
        if(users <= 10){
            throw new Error(`!! Not enough popular for premium Access !!`);
        }
        this._usersCount = users+1;
    }

    private deleteUsers(){
        console.log(`!! HACKED !!`);
        this._usersCount = 0;
    }
}

const x2 = new newUser("arshit@google.com", 222001);
// x1.city = "Mumbai"; // Type-safety is availabe outside the class also

class yourUser {
    
    protected _usersCount = 1;
    readonly city: string = 'Jaunpur';
    constructor(
        public email : string, 
        public pincode : number,
        // private userId : number
    ){
    }

    get getEmail(): string{
        return `${this.email}`
    }

    get getUsersCount(): number{
        return this._usersCount;
    }

    set setUsersCount(users : number ) { // setters never require a 
        if(users <= 10){
            throw new Error(`!! Not enough popular for premium Access !!`);
        }
        this._usersCount = users+1;
    }

    private deleteUsers(){
        console.log(`!! HACKED !!`);
        this._usersCount = 0;
    }
}

class subUser extends yourUser {

    increaseUsers() : number {
        this._usersCount += 100;
        return this._usersCount;
    }
}