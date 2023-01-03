"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const brandRecord = {
    acer: {
        country: "China",
        createdAt: new Date(),
        name: "acer",
    },
};
function printPcCatalog(pcCatalog) {
    var _a;
    console.log((_a = pcCatalog.microsoft) === null || _a === void 0 ? void 0 : _a.country);
}
const p = {
    screen: window.screen,
};
