interface User {
    readonly _id : number,
    name : string,
    email : string,
    age : number,
    googleAuthStatus? : boolean,
    startSession ? () : string,
    getDiscount (couponCode : string, value : number) : number
}

interface User {
    githubAuthStatus : boolean
}

// You can extend an interface to create a new one by adding more properties or methods.
// A 'type' cannot be changed after being created but 'interfaces' can

interface Another {
    repoOwner : string
}

interface Admin extends User {
    role : 'CEO' | 'CTO' | 'Guard'
}
interface Admin extends User, Another {
    role : 'CEO' | 'CTO' | 'Guard'
}


const newUser : User = {
    _id : 111,
    name : "Arshit",
    email : "arshit@google.com",
    age : 21,
    githubAuthStatus : true,
    startSession :  () => {
        return "!! User session has been started !!"
    },
    getDiscount: (code = "XMFarshitCFS", offerValue = 10) => {
        return 10;
    }
}

const myUser : Admin = {
    _id : 111,
    name : "Arshit",
    email : "arshit@google.com",
    age : 21,
    githubAuthStatus : true,
    role : 'CEO',
    repoOwner : 'arshitcc',
    startSession :  () => {
        return "!! User session has been started !!"
    },
    getDiscount: (code = "XMFarshitCFS", offerValue = 10) => {
        return 10;
    }
}

export {}

