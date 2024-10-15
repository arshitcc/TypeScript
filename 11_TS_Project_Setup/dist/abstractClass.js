"use strict";
/*
    class TakePhoto{
        constructor(
            public cameraMode : string,
            public filter : string,
        ){}
    }

    const camera = new TakePhoto("Photo", "Hot");
*/
Object.defineProperty(exports, "__esModule", { value: true });
// In above you can make object of above class but,
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    // this means its an abstract function which only provides a blue-print not the implementation, 
    // this definitely has to be implemented into its inherited class
    getShorts() {
        return;
    }
}
// const camera = new TakePhoto("Photo", "Pink");
// But, you cannot generate object of abstract class : 
// Abstract class only provides blueprint actuall implementation or definition will be defined outside
class Instagram extends TakePhoto {
    constructor(cameraMode, filter, burstShots) {
        // Derived function must contain a super-class
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burstShots = burstShots;
    }
    getFilter() {
        console.log(`${this.filter}`);
    }
}
const ac = new Instagram("Photo", "HDR", 12);
ac.getShorts(); // accessible to ac-object which is of its inherited class
