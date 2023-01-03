function append<T>(el: T, list: T[]): T[] {
  return list.concat(el);
}

append(1, [2, 3, 4]);
// append("a", ["b", "c", "d"]);
// append("a", [2, 4, "d"]);
