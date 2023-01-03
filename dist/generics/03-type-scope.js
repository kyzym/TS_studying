"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMap = void 0;
function createMap(list) {
    return function (cb) {
        const result = [];
        for (let el of list) {
            result.push(cb(el));
        }
        return result;
    };
}
exports.createMap = createMap;
const mapNams = createMap([1, 2, 3]);
const res = mapNams((num) => num + 2);
// export function tupleCreator<T>(first: T) {
//   return function <U>(second: U): [T, U] {
//     return [first, second];
//   };
// }
// const tuple1 = tupleCreator(1);
// const val1 = tuple1(2);
// const val2 = tuple1("2");
