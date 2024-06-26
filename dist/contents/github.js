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
(function () {
    return __awaiter(this, void 0, void 0, function () {
        var main, url, isSameUrl, isTargeUrl, sleep, doIt;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("github.js script running...");
                    main = function () { return __awaiter(_this, void 0, void 0, function () {
                        var task, bug, key, maps, body, title;
                        var _a, _b, _c;
                        return __generator(this, function (_d) {
                            switch (_d.label) {
                                case 0:
                                    if (!true) return [3 /*break*/, 2];
                                    if (document.querySelector("#pull_request_body"))
                                        return [3 /*break*/, 2];
                                    return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 500); })];
                                case 1:
                                    _d.sent();
                                    return [3 /*break*/, 0];
                                case 2:
                                    task = (_a = location.href.match(/task-(\d+)/)) === null || _a === void 0 ? void 0 : _a[1];
                                    bug = (_b = location.href.match(/bug-(\d+)/)) === null || _b === void 0 ? void 0 : _b[1];
                                    if (!task && !bug)
                                        return [2 /*return*/];
                                    key = task ? "task-".concat(task) : "bug-".concat(bug);
                                    return [4 /*yield*/, chrome.storage.sync.get("maps").then(function (res) { return res.maps || []; })];
                                case 3:
                                    maps = _d.sent();
                                    body = document.querySelector("#pull_request_body");
                                    body.value = task ? "https://zentao.qbitnetwork.com/zentao/task-view-".concat(task, ".html") : "https://zentao.qbitnetwork.com/zentao/bug-view-".concat(bug, ".html");
                                    title = document.querySelector("#pull_request_title");
                                    title.value = ((_c = maps.find(function (e) { return e[0] === key; })) === null || _c === void 0 ? void 0 : _c[1]) || title.value;
                                    return [2 /*return*/];
                            }
                        });
                    }); };
                    url = "";
                    isSameUrl = function () { return url === location.href; };
                    isTargeUrl = function () { return location.href.includes("compare"); };
                    sleep = function (ms) { return new Promise(function (resolve) { return setTimeout(resolve, ms); }); };
                    _a.label = 1;
                case 1:
                    if (!true) return [3 /*break*/, 3];
                    doIt = !isSameUrl() && isTargeUrl();
                    url = location.href;
                    if (doIt)
                        main();
                    return [4 /*yield*/, sleep(500)];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 1];
                case 3: return [2 /*return*/];
            }
        });
    });
})();
