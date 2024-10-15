/* 
    class TakePhoto{
        constructor(
            public cameraMode : string,
            public filter : string,
        ){}
    }

    const camera = new TakePhoto("Photo", "Hot");
*/

// In above you can make object of above class but,

abstract class TakePhoto{
    constructor(
        public cameraMode : string,
        public filter : string,
    ){}

    abstract getFilter() : void 
    // this means its an abstract function which only provides a blue-print not the implementation, 
    // this definitely has to be implemented into its inherited class

    getShorts() : void {
        return ;
    }
}

// const camera = new TakePhoto("Photo", "Pink");

// But, you cannot generate object of abstract class : 
// Abstract class only provides blueprint actuall implementation or definition will be defined outside



class Instagram extends TakePhoto{

    constructor(
        public cameraMode : string,
        public filter : string,
        public burstShots : number
    ){
        // Derived function must contain a super-class
        super(cameraMode, filter)
    }

    getFilter(): void {
        console.log(`${this.filter}`);
    }
}

const ac = new Instagram("Photo", "HDR", 12);
ac.getShorts(); // accessible to ac-object which is of its inherited class
// You can use Abstract class only through the object of class inherited by Instagram

// Generics : These helps to make components re-usable which is mostly used in prod.
/*
    A major part of software engineering is building components that not only have well-defined and consistent APIs, but are also reusable. Components that are capable of working on the data of today as well as the data of tomorrow will give you the most flexible capabilities for building up large software systems.
*/

export {}