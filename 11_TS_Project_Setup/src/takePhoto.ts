interface TakePhoto {
    cameraMode : string
    filter : string
    burstShots : number
}

interface TakeShorts {
    cameraMode : string,
    filter : string,
    createStory() : void
}

class Instagram implements TakePhoto {
    constructor(
        public cameraMode : string,
        public filter : string,
        public burstShots : number
    ){}
}

class Youtube implements TakePhoto, TakeShorts {
    constructor(
        public cameraMode : string,
        public filter : string,
        public burstShots : number,
        public watchHistory : string[],
    ){}

    createStory(): void {
        console.log(`!! Your Story has been uploaded. !!`);
    }
}

