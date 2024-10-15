"use strict";
class Instagram {
    constructor(cameraMode, filter, burstShots) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burstShots = burstShots;
    }
}
class Youtube {
    constructor(cameraMode, filter, burstShots, watchHistory) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burstShots = burstShots;
        this.watchHistory = watchHistory;
    }
    createStory() {
        console.log(`!! Your Story has been uploaded. !!`);
    }
}
