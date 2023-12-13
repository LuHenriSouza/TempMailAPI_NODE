"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TempMailAPI_1 = require("./src/TempMailAPI");
var tempmail = new TempMailAPI_1.default('4t8w2gfvu6', '@mocvn.com');
tempmail.init().then(function () {
    console.log(tempmail.getEmails());
});
