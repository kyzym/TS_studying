export function keys<O extends {}>(obj: O): Array<keyof O> {
  const currentKeys = [];

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) currentKeys.push(key);
  }

  return currentKeys;
}

const honda = { a: "accord", doors: 4 };

keys(honda);

export function values<O extends {}>(obj: O): Array<O[keyof O]> {
  const currentValues = [];

  for (let key in obj) {
    currentValues.push(obj[key]);
  }

  return currentValues;
}

values(honda);
