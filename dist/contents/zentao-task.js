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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
(function () {
    return __awaiter(this, void 0, void 0, function () {
        var main, url, isSameUrl, isTargeUrl, sleep, doIt;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    main = function () {
                        // YYYY/MM/DD
                        var timeFormat = function (date) {
                            var year = date.getFullYear();
                            var month = ("0" + (date.getMonth() + 1)).slice(-2);
                            var day = ("0" + date.getDate()).slice(-2);
                            return "".concat(year, "/").concat(month, "/").concat(day);
                        };
                        var toast = function (msg) {
                            var toast = document.createElement("div");
                            toast.style.cssText = "\n      position: fixed;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n      background-color: rgba(0, 0, 0, 0.7);\n      color: white;\n      padding: 10px 20px;\n      border-radius: 5px;\n      z-index: 999999;\n      transition: all 0.3s;\n    ";
                            toast.innerText = msg;
                            document.body.appendChild(toast);
                            setTimeout(function () {
                                toast.style.opacity = "0";
                                setTimeout(function () {
                                    document.body.removeChild(toast);
                                }, 300);
                            }, 2000);
                        };
                        var addButtonAfter = function (target, text, onClick) {
                            // 获取iframe的DOM
                            var dom = Array.from(document.querySelectorAll("iframe")).find(function (e) { return e.contentDocument.location.href === location.href; }).contentDocument;
                            // 获取工具栏
                            var toolbar = dom.querySelector(".main-actions .btn-toolbar");
                            // 获取target按钮
                            var cancelBtn = Array.from(toolbar.querySelectorAll("a")).find(function (e) { return e.innerText.includes(target); });
                            // 克隆target按钮作为发布按钮
                            var releaseBtn = cancelBtn.cloneNode(true);
                            // 将发布按钮插入到取target钮前面
                            cancelBtn.insertAdjacentElement("beforebegin", releaseBtn);
                            // 修改发布按钮的属性和事件
                            releaseBtn.removeAttribute("href");
                            releaseBtn.querySelector("span").innerText = text;
                            releaseBtn.removeChild(releaseBtn.querySelector("i"));
                            releaseBtn.addEventListener("click", onClick);
                        };
                        var copyBranchName = function () { return __awaiter(_this, void 0, void 0, function () {
                            var name, task, date, branch, maps;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        name = chrome.storage.sync.get("name").then(function (res) { return res.name || "name"; });
                                        task = "task-" + location.href.match(/task-view-(\d+)/)[1];
                                        date = timeFormat(new Date());
                                        branch = "".concat(name, "/").concat(date, "/").concat(task, "/");
                                        return [4 /*yield*/, navigator.clipboard.writeText(branch)];
                                    case 1:
                                        _a.sent();
                                        toast("分支名已复制到粘贴板: " + branch);
                                        return [4 /*yield*/, chrome.storage.sync.get("maps").then(function (res) { return res.maps || []; })];
                                    case 2:
                                        maps = _a.sent();
                                        maps = __spreadArray(__spreadArray([], maps, true), [[task, document.title]], false).filter(function (e, i, arr) { return arr.findIndex(function (a) { return a[0] === e[0]; }) === i; }).splice(10, maps.length - 10);
                                        chrome.storage.sync.set({ maps: maps });
                                        return [2 /*return*/];
                                }
                            });
                        }); };
                        addButtonAfter("完成", "分支名", copyBranchName);
                    };
                    url = "";
                    isSameUrl = function () { return url === location.href; };
                    isTargeUrl = function () { return location.href.includes("task-view-"); };
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
