"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TempMailAPI_1 = require("./src/TempMailAPI");
var tempmail = new TempMailAPI_1.default();
tempmail.init().then(function () {
    console.log(tempmail.address);
    console.log(tempmail.md5address);
});
