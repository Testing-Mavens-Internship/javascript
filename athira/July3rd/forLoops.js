//for-in
const person = { name: 'Athira', age: 25 };
for (let key in person) 
{
  console.log(key + ": " + person[key]); //key value pair
}
console.log("\n")



//for-of
const a = ['a', 'b', 'c'];
for (let value of a) 
{
  console.log(value); //values from an array
}
console.log("\n")



//for-each
const arr = [1, 2, 3];
arr.forEach(function(element) 
{
  console.log(element); //values from an array and function also can be done
});
console.log("\n")
