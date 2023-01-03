"use strict";
function isAnInternetOrder(order) {
    return !!order && "email" in order;
    // return (order as InternetOrder).email !== undefined;
}
function isATelephoneOrder(order) {
    return !!order && "callerNumber" in order;
    // return (order as TelephoneOrder).callerNumber !== undefined;
}
function makeOrder(order) {
    if (isAnInternetOrder(order)) {
        console.log(order.email);
    }
    else if (isATelephoneOrder(order)) {
        console.log(order.callerNumber);
    }
}
