const object1 = {
  a: 1,
  b: 2,
  c: 3
};

const mappedEntries = Object.fromEntries(Object.entries(object1).map(([key, value]) => [value,key]));
console.log(mappedEntries);
console.log(typeof(object1));

