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

export {}