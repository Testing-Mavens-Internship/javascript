const obj = { a: 1, b: 2, c: 3 };
let array=Object.fromEntries(Object.entries(obj).map(([key,value])=>[value,key]));
console.log(array);
console.log(typeof(array));