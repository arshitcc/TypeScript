"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var newUser = {
    _id: 111,
    name: "Arshit",
    email: "arshit@google.com",
    age: 21,
    githubAuthStatus: true,
    startSession: function () {
        return "!! User session has been started !!";
    },
    getDiscount: function (code, offerValue) {
        if (code === void 0) { code = "XMFarshitCFS"; }
        if (offerValue === void 0) { offerValue = 10; }
        return 10;
    }
};
var myUser = {
    _id: 111,
    name: "Arshit",
    email: "arshit@google.com",
    age: 21,
    githubAuthStatus: true,
    role: 'CEO',
    repoOwner: 'arshitcc',
    startSession: function () {
        return "!! User session has been started !!";
    },
    getDiscount: function (code, offerValue) {
        if (code === void 0) { code = "XMFarshitCFS"; }
        if (offerValue === void 0) { offerValue = 10; }
        return 10;
    }
};
