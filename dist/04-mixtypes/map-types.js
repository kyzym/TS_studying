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
    console.log(pcCatalog.microsoft?.country);
}
const p = {
    screen: window.screen,
};
