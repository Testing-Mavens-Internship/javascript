const obj ={a:1,b:2,c:3};
const object = Object.fromEntries(Object.entries(obj).map(([key, value]) => [value, key]));
console.log(typeof(object));
  console.log(object);
