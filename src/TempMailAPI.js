"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var crypto = require("crypto");
var TempMailAPI = /** @class */ (function () {
    function TempMailAPI(name) {
        if (name === void 0) { name = null; }
        this.name = name ? name : this.generateRandomString();
        this.domain = '';
    }
    TempMailAPI.prototype.generateMD5Hash = function (data) {
        var hash = crypto.createHash('md5');
        hash.update(data);
        return hash.digest('hex');
    };
    TempMailAPI.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var randomDomain;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getDomain()];
                    case 1:
                        randomDomain = _a.sent();
                        this.domain = randomDomain;
                        this.address = this.name + this.domain;
                        this.md5address = this.generateMD5Hash(this.address);
                        return [2 /*return*/, Promise.resolve()];
                }
            });
        });
    };
    TempMailAPI.prototype.generateRandomString = function (length) {
        if (length === void 0) { length = 10; }
        var characters = '0123456789abcdefghijklmnopqrstuvwxyz';
        var string = "";
        for (var i = 0; i < length; i++) {
            string = string + characters[Math.floor(Math.random() * characters.length)];
        }
        return string;
    };
    TempMailAPI.prototype.getDomain = function () {
        return __awaiter(this, void 0, void 0, function () {
            var options, response, domains, randomDomain, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = {
                            method: 'GET',
                            url: 'https://privatix-temp-mail-v1.p.rapidapi.com/request/domains/',
                            headers: {
                                'X-RapidAPI-Key': '5cdcb6428dmshc5fbda396a832c8p1a1e08jsnfc9bc7908b1e',
                                'X-RapidAPI-Host': 'privatix-temp-mail-v1.p.rapidapi.com'
                            }
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, axios_1.default.request(options)];
                    case 2:
                        response = _a.sent();
                        domains = Array.isArray(response.data) ? response.data : [];
                        if (domains.length > 0) {
                            randomDomain = domains[Math.floor(Math.random() * domains.length)];
                            return [2 /*return*/, randomDomain.trim()]; // Remova espaços em branco extras, se houver
                        }
                        else {
                            throw new Error('A resposta da API não contém domínios válidos.');
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        return [2 /*return*/, error_1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    TempMailAPI.prototype.getEmails = function () {
    };
    return TempMailAPI;
}());
exports.default = TempMailAPI;
