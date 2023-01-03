"use strict";
const dev1 = { login: "Den", skills: ["hz"], level: "junior" };
function gradeDeveloper(dev, newLvl) {
    dev.level = newLvl;
    return dev;
}
gradeDeveloper(dev1, "middle");
