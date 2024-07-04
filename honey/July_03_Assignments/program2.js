// Description: Given an array of people objects, group them by age.
 
// const people = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 25 },
//   { name: "Charlie", age: 30 },
//   { name: "David", age: 35 },
//   { name: "Eve", age: 30 }
// ];
 
// OP :  [["25", ["Alice", "Bob"]], ["30", ["Charlie", "Eve"]], ["35", ["David"]]]

const peoples = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 30 },
  { name: "David", age: 35 },
  { name: "Eve", age: 30 }
];

const grouped = peoples.reduce(groupPeople, {});
const result = Object.entries(grouped);
console.log(result)

function groupPeople(acc,people)
{
    if (!acc[people.age]) {
        acc[people.age] = [];
    }
    acc[people.age].push(people.name);
    return acc
}