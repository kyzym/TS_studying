"use strict";
const user1 = {
    login: "Den",
    email: "ve@ve.com",
    isOnline: true,
    lastVisited: new Date(2022, 12, 29),
    password: "bebebe",
};
const admin1 = {
    login: "Den",
    email: "ve@ve.com",
    isOnline: true,
    lastVisited: new Date(2022, 12, 29),
    password: "bebebe",
    role: "SupedAdmin",
};
function login(user) {
    if (user.login.length && user.password.length)
        console.log(`Hello ${user.login}`);
}
login(user1);
login(admin1);
