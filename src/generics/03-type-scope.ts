export function createMap<T>(list: T[]) {
  return function <U>(cb: (x: T) => U): U[] {
    const result = [];

    for (let el of list) {
      result.push(cb(el));
    }

    return result;
  };
}

const mapNams = createMap([1, 2, 3]);
const res = mapNams((num) => num + 2);

type T3 = { getDay(): number } extends Date ? true : false;

// export function tupleCreator<T>(first: T) {
//   return function <U>(second: U): [T, U] {
//     return [first, second];
//   };
// }

// const tuple1 = tupleCreator(1);
// const val1 = tuple1(2);
// const val2 = tuple1("2");
